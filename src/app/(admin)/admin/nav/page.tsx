'use client';

import { useEffect, useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Plus, Trash2, GripVertical, Edit2, Save } from 'lucide-react';
import { Toaster, toast } from 'sonner';

type Child = { label: string; href: string; description?: string };
type NavItem = { label: string; href?: string; children?: Child[] };

function SortableItem({
  id,
  item,
  parentIdx,
  onEdit,
  onDelete,
  onAddChild,
  onEditChild,
  onDeleteChild,
  onReorderChildren,
}: {
  id: string;
  item: NavItem;
  parentIdx: number;
  onEdit: (item: NavItem) => void;
  onDelete: () => void;
  onAddChild: () => void;
  onEditChild: (idx: number) => void;
  onDeleteChild: (idx: number) => void;
  onReorderChildren: (parentIdx: number, newChildren: Child[]) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // Sensors for children drag (local to this item)
  const childSensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  function handleChildDragEnd(event: any) {
    const { active, over } = event;
    if (!over || active.id === over.id || !item.children) return;

    const oldIndex = item.children.findIndex((c) => c.href === active.id);
    const newIndex = item.children.findIndex((c) => c.href === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    const newChildren = arrayMove(item.children, oldIndex, newIndex);
    onReorderChildren(parentIdx, newChildren);
  }

  return (
    <div ref={setNodeRef} style={style} className="bg-[#111] border border-[#222] mb-3">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1a1a1a]">
        <button {...attributes} {...listeners} className="text-[#555] hover:text-[#c8a96e] cursor-grab active:cursor-grabbing">
          <GripVertical size={18} />
        </button>
        <div className="flex-1">
          <div className="font-medium">{item.label}</div>
          <div className="text-xs text-[#555]">{item.href || '—'}</div>
        </div>
        <button onClick={() => onEdit(item)} className="p-2 text-[#888] hover:text-white"><Edit2 size={16} /></button>
        <button onClick={onAddChild} className="p-2 text-[#888] hover:text-[#c8a96e]"><Plus size={16} /></button>
        <button onClick={onDelete} className="p-2 text-[#888] hover:text-red-400"><Trash2 size={16} /></button>
      </div>

      {item.children && item.children.length > 0 && (
        <div className="pl-10 py-2 bg-[#0c0c0c]">
          <DndContext sensors={childSensors} collisionDetection={closestCenter} onDragEnd={handleChildDragEnd}>
            <SortableContext
              items={item.children.map((c) => c.href)}
              strategy={verticalListSortingStrategy}
            >
              {item.children.map((child, idx) => (
                <SortableChild
                  key={child.href}
                  id={child.href}
                  child={child}
                  onEdit={() => onEditChild(idx)}
                  onDelete={() => onDeleteChild(idx)}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      )}
    </div>
  );
}

function SortableChild({
  id,
  child,
  onEdit,
  onDelete,
}: {
  id: string;
  child: Child;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-3 px-3 py-1.5 text-sm border-b border-[#181818] last:border-0 bg-[#0c0c0c] group"
    >
      <button
        {...attributes}
        {...listeners}
        className="text-[#555] hover:text-[#c8a96e] cursor-grab active:cursor-grabbing p-1"
      >
        <GripVertical size={14} />
      </button>
      <div className="flex-1">
        {child.label} <span className="text-[#444] text-xs">→ {child.href}</span>
      </div>
      {child.description && (
        <span className="text-[11px] text-[#555] max-w-[280px] truncate">{child.description}</span>
      )}
      <button onClick={onEdit} className="p-1 text-[#666] hover:text-white opacity-70 group-hover:opacity-100">
        <Edit2 size={14} />
      </button>
      <button onClick={onDelete} className="p-1 text-[#666] hover:text-red-400 opacity-70 group-hover:opacity-100">
        <Trash2 size={14} />
      </button>
    </div>
  );
}

export default function NavAdmin() {
  const [items, setItems] = useState<NavItem[]>([]);
  const [utility, setUtility] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/navigation');
    if (res.ok) {
      const data = await res.json();
      setItems(data.navItems || []);
      setUtility(data.utilityLinks || []);
    }
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = items.findIndex((i) => (i.href || i.label) === active.id);
    const newIndex = items.findIndex((i) => (i.href || i.label) === over.id);
    setItems(arrayMove(items, oldIndex, newIndex));
  }

  async function save() {
    setSaving(true);
    const res = await fetch('/api/admin/navigation', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ navItems: items, utilityLinks: utility }),
    });
    setSaving(false);
    if (res.ok) {
      toast.success('Meniu salvat cu succes. Schimbarile ar trebui sa apara imediat pe site (hard refresh pe paginile publice daca e nevoie).');
      // Re-load fresh data from disk to ensure editor and public site are in sync
      await load();
    } else {
      toast.error('Eroare la salvare');
    }
  }

  function addTopLevel() {
    const label = prompt('Nume categorie (ex: Tamplarie Noua)');
    if (!label) return;
    const href = prompt('URL (ex: /tamplarie-noua) — lasa gol daca va avea doar dropdown', '/nou');
    setItems([...items, { label, href: href || undefined, children: [] }]);
  }

  function editItem(idx: number) {
    const current = items[idx];
    const label = prompt('Label', current.label) || current.label;
    const href = prompt('Href (optional)', current.href || '') || undefined;
    const next = [...items];
    next[idx] = { ...current, label, href };
    setItems(next);
  }

  function deleteItem(idx: number) {
    if (!confirm('Stergi aceasta intrare din meniu?')) return;
    setItems(items.filter((_, i) => i !== idx));
  }

  function addChild(parentIdx: number) {
    const label = prompt('Nume sub-pagina');
    if (!label) return;
    const href = prompt('URL complet (ex: /categorie/sub)', '/');
    if (!href) return;
    const desc = prompt('Descriere scurta (optional)') || undefined;
    const next = [...items];
    const p = next[parentIdx];
    p.children = [...(p.children || []), { label, href, description: desc }];
    setItems(next);
  }

  function editChild(parentIdx: number, childIdx: number) {
    const current = items[parentIdx].children![childIdx];
    const label = prompt('Label', current.label) || current.label;
    const href = prompt('Href', current.href) || current.href;
    const desc = prompt('Description', current.description || '') || undefined;
    const next = [...items];
    next[parentIdx].children![childIdx] = { label, href, description: desc || undefined };
    setItems(next);
  }

  function deleteChild(parentIdx: number, childIdx: number) {
    const next = [...items];
    next[parentIdx].children = next[parentIdx].children!.filter((_, i) => i !== childIdx);
    setItems(next);
  }

  function reorderChildren(parentIdx: number, newChildren: Child[]) {
    const next = [...items];
    next[parentIdx] = { ...next[parentIdx], children: newChildren };
    setItems(next);
  }

  if (loading) return <div>Se incarca...</div>;

  return (
    <div>
      <Toaster position="top-center" richColors closeButton />
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-extralight">Meniu & Navigatie</h1>
          <p className="text-[#666] text-sm">Drag & drop pentru reordonarea categoriilor principale si a item-urilor din dropdown (submeniuri). Dropdown-urile apar la hover pe desktop si expandabil pe mobil.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={addTopLevel} className="btn btn-outline flex items-center gap-2 text-sm">
            <Plus size={16} /> Adauga categorie
          </button>
          <button onClick={save} disabled={saving} className="btn btn-primary flex items-center gap-2 text-sm">
            <Save size={16} /> {saving ? 'Se salveaza...' : 'Salveaza meniul'}
          </button>
        </div>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items.map((i) => i.href || i.label)} strategy={verticalListSortingStrategy}>
          {items.map((item, idx) => (
            <SortableItem
              key={item.href || item.label}
              id={item.href || item.label}
              item={item}
              parentIdx={idx}
              onEdit={() => editItem(idx)}
              onDelete={() => deleteItem(idx)}
              onAddChild={() => addChild(idx)}
              onEditChild={(cIdx) => editChild(idx, cIdx)}
              onDeleteChild={(cIdx) => deleteChild(idx, cIdx)}
              onReorderChildren={reorderChildren}
            />
          ))}
        </SortableContext>
      </DndContext>

      {items.length === 0 && (
        <div className="text-center py-12 text-[#555]">Niciun element. Adauga o categorie.</div>
      )}

      <div className="mt-10">
        <h3 className="text-sm tracking-[0.15em] text-[#888] mb-3">LINK-URI UTILE (dreapta sus + mobil)</h3>
        <div className="flex flex-wrap gap-2">
          {utility.map((u, i) => (
            <div key={i} className="bg-[#111] px-3 py-1 text-sm border border-[#222] flex items-center gap-2">
              {u.label} → {u.href}
              <button onClick={() => setUtility(utility.filter((_, j) => j !== i))} className="text-red-400/70 hover:text-red-400">×</button>
            </div>
          ))}
          <button
            onClick={() => {
              const label = prompt('Label');
              const href = prompt('Href');
              if (label && href) setUtility([...utility, { label, href }]);
            }}
            className="text-xs px-3 py-1 border border-dashed border-[#444] hover:border-[#c8a96e] text-[#888]"
          >
            + Adauga
          </button>
        </div>
      </div>
    </div>
  );
}
