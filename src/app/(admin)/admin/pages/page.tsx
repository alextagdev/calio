'use client';

import { useEffect, useState } from 'react';
import { Plus, Save, Upload, X, GripVertical, Image as ImageIcon } from 'lucide-react';
import { Toaster, toast } from 'sonner';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };
type GalleryImg = { src: string; alt: string };
type PageData = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroBadge?: string;
  intro: string;
  description: string;
  features: Feature[];
  specs: Spec[];
  gallery: GalleryImg[];
};
type CategoryData = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  description: string;
  products: any[];
};

type AllData = { pages: Record<string, PageData>; categories: Record<string, CategoryData> };

export default function PagesAdmin() {
  const [data, setData] = useState<AllData>({ pages: {}, categories: {} });
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [editingIsCategory, setEditingIsCategory] = useState(false);
  const [form, setForm] = useState<any>(null);
  const [media, setMedia] = useState<string[]>([]);
  const [showMediaPicker, setShowMediaPicker] = useState<null | { field: 'hero' | 'gallery' }>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/pages');
    if (res.ok) {
      const json = await res.json();
      setData(json);
    }
    setLoading(false);
  }

  async function loadMedia() {
    const res = await fetch('/api/admin/media');
    if (res.ok) {
      const j = await res.json();
      setMedia(j.images || []);
    }
  }

  useEffect(() => { load(); loadMedia(); }, []);

  function startEdit(slug: string, isCategory: boolean) {
    const source = isCategory ? data.categories[slug] : data.pages[slug];
    if (!source) return;
    setEditingSlug(slug);
    setEditingIsCategory(isCategory);
    // deep copy
    setForm(JSON.parse(JSON.stringify(source)));
    setShowMediaPicker(null);
  }

  function updateForm(patch: any) {
    setForm((f: any) => ({ ...f, ...patch }));
  }

  function addFeature() {
    updateForm({ features: [...(form.features || []), { title: '', description: '' }] });
  }
  function updateFeature(i: number, patch: Partial<Feature>) {
    const next = [...form.features];
    next[i] = { ...next[i], ...patch };
    updateForm({ features: next });
  }
  function removeFeature(i: number) {
    updateForm({ features: form.features.filter((_: any, idx: number) => idx !== i) });
  }

  function addSpec() {
    updateForm({ specs: [...(form.specs || []), { label: '', value: '' }] });
  }
  function updateSpec(i: number, patch: Partial<Spec>) {
    const next = [...(form.specs || [])];
    next[i] = { ...next[i], ...patch };
    updateForm({ specs: next });
  }
  function removeSpec(i: number) {
    updateForm({ specs: (form.specs || []).filter((_: any, idx: number) => idx !== i) });
  }

  function addGalleryImage(src: string, alt = '') {
    const next = [...(form.gallery || []), { src, alt: alt || src.split('/').pop() }];
    updateForm({ gallery: next });
  }
  function removeGalleryImage(i: number) {
    updateForm({ gallery: form.gallery.filter((_: any, idx: number) => idx !== i) });
  }
  function moveGallery(from: number, to: number) {
    const g = [...form.gallery];
    const [it] = g.splice(from, 1);
    g.splice(to, 0, it);
    updateForm({ gallery: g });
  }

  function pickHero(src: string) {
    updateForm({ heroImage: src });
    setShowMediaPicker(null);
  }

  function openMedia(forWhat: 'hero' | 'gallery') {
    setShowMediaPicker({ field: forWhat });
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
    if (res.ok) {
      const { url } = await res.json();
      toast.success('Imagine incarcata');
      // refresh media
      await loadMedia();
      // auto use it
      if (showMediaPicker?.field === 'hero') {
        updateForm({ heroImage: url });
        setShowMediaPicker(null);
      } else if (showMediaPicker?.field === 'gallery') {
        addGalleryImage(url);
      } else {
        // if not in picker, just add to gallery
        addGalleryImage(url);
      }
    } else {
      toast.error('Upload esuat');
    }
    e.target.value = '';
  }

  async function save() {
    if (!editingSlug || !form) return;
    setSaving(true);

    const nextData = { ...data };
    if (editingIsCategory) {
      nextData.categories = { ...nextData.categories, [editingSlug]: form };
    } else {
      nextData.pages = { ...nextData.pages, [editingSlug]: form };
    }

    const res = await fetch('/api/admin/pages', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nextData),
    });
    setSaving(false);

    if (res.ok) {
      setData(nextData);
      toast.success('Pagina salvata');
    } else {
      toast.error('Eroare salvare');
    }
  }

  function closeEditor() {
    setEditingSlug(null);
    setForm(null);
    setShowMediaPicker(null);
  }

  if (loading) return <div className="p-8">Se incarca continutul...</div>;

  return (
    <div>
      <Toaster position="top-center" richColors />
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-extralight">Pagini &amp; Servicii</h1>
          <p className="text-[#666]">Alege o pagina pentru a edita hero-ul, continutul, features, specs si galeria.</p>
        </div>
        <div className="text-xs text-[#555]">Total: {Object.keys(data.pages).length} pagini + {Object.keys(data.categories).length} categorii</div>
      </div>

      {!editingSlug && (
        <>
          {/* Categorii */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] uppercase text-[#888] mb-3">Categorii (pagina de prezentare + grid produse)</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.keys(data.categories || {}).map((slug) => {
                const item = data.categories[slug];
                return (
                  <button
                    key={`cat-${slug}`}
                    onClick={() => startEdit(slug, true)}
                    className="text-left p-5 bg-[#111] border border-[#1f1f1f] hover:border-[#c8a96e]/30 flex gap-4 group"
                  >
                    <div className="w-20 h-14 bg-black/40 flex-shrink-0 overflow-hidden border border-[#222]">
                      {item?.heroImage && (
                        <img src={item.heroImage} alt="" className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium group-hover:text-[#c8a96e]">{item?.title}</span>
                        <span className="text-[10px] px-1.5 py-px bg-[#222] text-[#888]">CATEGORIE</span>
                      </div>
                      <div className="text-xs text-[#555] truncate">{slug}</div>
                      <div className="text-[11px] text-[#666] mt-1 line-clamp-1">{item?.subtitle || item?.intro}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pagini individuale */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#888] mb-3">Pagini de serviciu (continut detaliat, features, galerie)</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.keys(data.pages || {}).map((slug) => {
                const item = data.pages[slug];
                const isCategoryLanding = !!data.categories?.[slug];
                const typeLabel = isCategoryLanding ? 'PAGINA DETALIATA' : 'PAGINA';
                return (
                  <button
                    key={`page-${slug}`}
                    onClick={() => startEdit(slug, false)}
                    className="text-left p-5 bg-[#111] border border-[#1f1f1f] hover:border-[#c8a96e]/30 flex gap-4 group"
                  >
                    <div className="w-20 h-14 bg-black/40 flex-shrink-0 overflow-hidden border border-[#222]">
                      {item?.heroImage && (
                        <img src={item.heroImage} alt="" className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium group-hover:text-[#c8a96e]">{item?.title}</span>
                        <span className="text-[10px] px-1.5 py-px bg-[#222] text-[#888]">{typeLabel}</span>
                      </div>
                      <div className="text-xs text-[#555] truncate">{slug}</div>
                      <div className="text-[11px] text-[#666] mt-1 line-clamp-1">{item?.subtitle || item?.intro}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* EDITOR */}
      {editingSlug && form && (
        <div className="fixed inset-0 z-[70] bg-[#0a0a0a] overflow-auto">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between sticky top-0 bg-[#0a0a0a] py-4 z-10 border-b border-[#1a1a1a] -mx-6 px-6 mb-6">
              <div>
                <div className="uppercase text-[10px] tracking-[0.2em] text-[#c8a96e]">{editingIsCategory ? 'CATEGORIE' : 'PAGINA'}</div>
                <div className="text-2xl font-light">{form.title}</div>
                <div className="text-xs text-[#555]">{editingSlug}</div>
              </div>
              <div className="flex gap-3">
                <button onClick={closeEditor} className="btn btn-outline">Inchide</button>
                <button onClick={save} disabled={saving} className="btn btn-primary flex items-center gap-2">
                  <Save size={16} /> {saving ? 'Se salveaza...' : 'Salveaza modificarile'}
                </button>
              </div>
            </div>

            {/* HERO */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <div className="uppercase text-xs tracking-[0.2em] text-[#888]">HERO / COPERTA</div>
                <button onClick={() => openMedia('hero')} className="flex items-center gap-2 text-sm text-[#c8a96e] hover:underline">
                  <ImageIcon size={16} /> Alege imagine cover
                </button>
              </div>

              <div className="relative h-64 bg-black border border-[#222] overflow-hidden">
                {form.heroImage && (
                  <img src={form.heroImage} alt="hero" className="absolute inset-0 w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70" />
                <div className="absolute bottom-4 left-4 text-sm">
                  <input
                    className="bg-black/70 border border-white/20 px-3 py-1 text-white w-[420px]"
                    value={form.title}
                    onChange={(e) => updateForm({ title: e.target.value })}
                  />
                  <input
                    className="block mt-1 bg-black/70 border border-white/20 px-3 py-1 text-sm text-[#ccc] w-[420px]"
                    value={form.subtitle || ''}
                    onChange={(e) => updateForm({ subtitle: e.target.value })}
                  />
                </div>
                <label className="absolute top-4 right-4 text-xs bg-black/70 px-3 py-1 cursor-pointer flex items-center gap-2">
                  <Upload size={14} /> Upload nou
                  <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
                </label>
              </div>

              <div className="flex gap-4 mt-3 text-xs">
                <input
                  placeholder="heroBadge (ex: Tamplarie Aluminiu)"
                  className="flex-1 bg-[#111] border border-[#222] px-3 py-2 text-sm"
                  value={form.heroBadge || ''}
                  onChange={(e) => updateForm({ heroBadge: e.target.value })}
                />
              </div>
            </section>

            {/* TEXT */}
            <section className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <div className="text-xs tracking-[0.2em] text-[#888] mb-1.5">INTRO (text mare)</div>
                <textarea
                  className="w-full h-28 bg-[#111] border border-[#222] p-4 text-lg"
                  value={form.intro || ''}
                  onChange={(e) => updateForm({ intro: e.target.value })}
                />
              </div>
              <div>
                <div className="text-xs tracking-[0.2em] text-[#888] mb-1.5">DESCRIERE (dedesubt)</div>
                <textarea
                  className="w-full h-28 bg-[#111] border border-[#222] p-4 text-sm"
                  value={form.description || ''}
                  onChange={(e) => updateForm({ description: e.target.value })}
                />
              </div>
            </section>

            {/* FEATURES */}
            {!editingIsCategory && (
              <section className="mb-10">
                <div className="flex justify-between mb-3">
                  <div className="uppercase text-xs tracking-[0.2em] text-[#888]">CARACTERISTICI</div>
                  <button onClick={addFeature} className="text-xs flex items-center gap-1 text-[#c8a96e]"><Plus size={14} /> Adauga</button>
                </div>
                <div className="space-y-3">
                  {(form.features || []).map((f: Feature, i: number) => (
                    <div key={i} className="flex gap-3 bg-[#111] p-3 border border-[#222]">
                      <input
                        className="flex-1 bg-black px-3 py-2 text-sm border border-[#222]"
                        placeholder="Titlu feature"
                        value={f.title}
                        onChange={(e) => updateFeature(i, { title: e.target.value })}
                      />
                      <input
                        className="flex-[2] bg-black px-3 py-2 text-sm border border-[#222]"
                        placeholder="Descriere"
                        value={f.description}
                        onChange={(e) => updateFeature(i, { description: e.target.value })}
                      />
                      <button onClick={() => removeFeature(i)} className="text-red-400/70 px-2">×</button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SPECS */}
            {!editingIsCategory && (
              <section className="mb-10">
                <div className="flex justify-between mb-3">
                  <div className="uppercase text-xs tracking-[0.2em] text-[#888]">SPECIFICATII TEHNICE</div>
                  <button onClick={addSpec} className="text-xs flex items-center gap-1 text-[#c8a96e]"><Plus size={14} /> Adauga rand</button>
                </div>
                <div className="divide-y divide-[#222] border border-[#222] bg-[#111]">
                  {(form.specs || []).map((s: Spec, i: number) => (
                    <div key={i} className="flex px-4 py-2.5 gap-4 items-center">
                      <input value={s.label} onChange={(e) => updateSpec(i, { label: e.target.value })} className="w-52 bg-transparent text-xs uppercase tracking-widest text-[#888]" />
                      <input value={s.value} onChange={(e) => updateSpec(i, { value: e.target.value })} className="flex-1 bg-transparent text-[#c8a96e]" />
                      <button onClick={() => removeSpec(i)} className="text-red-400/60 text-xl leading-none">×</button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* GALLERY */}
            {!editingIsCategory && (
              <section>
                <div className="flex items-center justify-between mb-3">
                  <div className="uppercase text-xs tracking-[0.2em] text-[#888]">GALERIE IMAGINI</div>
                  <div className="flex gap-3">
                    <button onClick={() => openMedia('gallery')} className="text-sm flex items-center gap-2 text-[#c8a96e]">
                      <ImageIcon size={15} /> Alege din librarie
                    </button>
                    <label className="text-sm flex items-center gap-2 text-[#c8a96e] cursor-pointer">
                      <Upload size={15} /> Upload
                      <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {(form.gallery || []).map((g: GalleryImg, i: number) => (
                    <div key={i} className="group relative aspect-[4/3] bg-black border border-[#222] overflow-hidden">
                      <img src={g.src} alt={g.alt} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-black/80 text-[10px] p-1.5 truncate">{g.alt}</div>
                      <button onClick={() => removeGalleryImage(i)} className="absolute top-1 right-1 bg-black/70 p-1 opacity-80 hover:opacity-100"><X size={14} /></button>
                      <div className="absolute top-1 left-1 flex flex-col gap-1 opacity-0 group-hover:opacity-100">
                        {i > 0 && <button onClick={() => moveGallery(i, i - 1)} className="bg-black/70 px-1 text-xs">↑</button>}
                        {i < (form.gallery.length - 1) && <button onClick={() => moveGallery(i, i + 1)} className="bg-black/70 px-1 text-xs">↓</button>}
                      </div>
                    </div>
                  ))}
                  {(form.gallery || []).length === 0 && <div className="col-span-full text-[#555] text-sm py-6">Nicio imagine in galerie. Adauga din librarie sau upload.</div>}
                </div>
              </section>
            )}
          </div>
        </div>
      )}

      {/* MEDIA PICKER MODAL */}
      {showMediaPicker && (
        <div className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-6" onClick={() => setShowMediaPicker(null)}>
          <div className="bg-[#0f0f0f] max-w-6xl w-full max-h-[85vh] overflow-auto p-6 border border-[#222]" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between mb-4">
              <div className="text-lg">Alege imagine din librarie</div>
              <button onClick={() => setShowMediaPicker(null)}><X /></button>
            </div>

            <label className="mb-4 inline-flex items-center gap-2 text-sm cursor-pointer border border-dashed border-[#444] px-4 py-2">
              <Upload size={15} /> Incarca imagine noua
              <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
            </label>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
              {media.map((src) => (
                <button
                  key={src}
                  onClick={() => {
                    if (showMediaPicker.field === 'hero') pickHero(src);
                    else addGalleryImage(src);
                  }}
                  className="relative group aspect-video bg-black overflow-hidden border border-[#222] hover:border-[#c8a96e]"
                >
                  <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs tracking-widest">ALEGE</div>
                </button>
              ))}
              {media.length === 0 && <div className="col-span-full text-sm text-[#555]">Libraria este goala. Incarca imagini mai intai.</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
