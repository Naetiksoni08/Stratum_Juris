"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import { toast } from "sonner";

const PRACTICE_TAGS = [
  "Civil & Commercial Litigation",
  "Criminal Defence",
  "White Collar Crimes & Economic Offences",
  "Property & Real Estate Disputes",
  "Family & Matrimonial Disputes",
  "Arbitration & ADR",
];

export default function TagEditor({ leadId, initialTags }: { leadId: string; initialTags: string[] }) {
  const [tags, setTags] = useState<string[]>(initialTags || []);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function save(newTags: string[]) {
    setTags(newTags);
    const res = await fetch(`/api/admin/leads/${leadId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tags: newTags }),
    });
    if (!res.ok) toast.error("Failed to update tags");
    else toast.success("Tags saved");
  }

  function toggleTag(tag: string) {
    save(tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]);
  }

  return (
    <div>
      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Practice Areas</p>

      {/* Selected chips */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 bg-gold/15 text-gold text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
              <button onClick={() => toggleTag(tag)} className="hover:text-red-400 transition-colors">
                <X size={11} />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Dropdown */}
      <div className="relative" ref={ref}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-300 focus:outline-none focus:border-gold transition-colors"
        >
          <span>{tags.length === 0 ? "Select practice areas" : `${tags.length} selected`}</span>
          <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg max-h-52 overflow-y-auto">
            {PRACTICE_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gold/10 transition-colors text-left"
              >
                <span className={`w-4 h-4 border flex items-center justify-center shrink-0 transition-colors ${tags.includes(tag) ? "bg-gold border-gold" : "border-gray-400 dark:border-gray-500"}`}>
                  {tags.includes(tag) && <span className="text-white text-[10px] font-bold">✓</span>}
                </span>
                <span className={tags.includes(tag) ? "text-gold font-semibold" : "text-gray-700 dark:text-gray-200"}>
                  {tag}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
