'use client';

import { useEffect, useState } from 'react';
import { Upload, Trash2 } from 'lucide-react';
import { toast, Toaster } from 'sonner';

export default function MediaAdmin() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/media');
    if (res.ok) {
      const j = await res.json();
      setImages(j.images || []);
    }
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
    if (res.ok) {
      toast.success('Incarcat cu succes');
      load();
    } else {
      toast.error('Eroare la upload');
    }
    e.target.value = '';
  }

  return (
    <div>
      <Toaster />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extralight">Librarie media</h1>
          <p className="text-sm text-[#666]">Imaginile incarcate aici apar automat in picker-ul de la editorul de pagini.</p>
        </div>
        <label className="btn btn-primary cursor-pointer flex items-center gap-2">
          <Upload size={16} /> Incarca imagine
          <input type="file" accept="image/*" className="hidden" onChange={upload} />
        </label>
      </div>

      {loading && <div>Se incarca...</div>}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {images.map((src) => (
          <div key={src} className="group relative aspect-[16/10] border border-[#222] bg-black overflow-hidden">
            <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 text-[10px] bg-black/80 p-2 truncate">{src}</div>
            <a href={src} target="_blank" className="absolute inset-0" />
          </div>
        ))}
      </div>

      {images.length === 0 && !loading && <div className="text-[#555]">Nu exista imagini incarcate inca.</div>}
    </div>
  );
}
