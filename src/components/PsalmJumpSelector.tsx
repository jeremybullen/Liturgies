import React, { useState, useMemo, useEffect, useRef } from 'react';
import { PSALMS_INDEX } from '../services/psalterIndex';

interface PsalmJumpSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTarget: (targetId: string, label: string) => void;
}

export function PsalmJumpSelector({ isOpen, onClose, onSelectTarget }: PsalmJumpSelectorProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PSALMS_INDEX;
    const num = parseInt(q, 10);
    return PSALMS_INDEX.filter((p) => {
      if (!isNaN(num) && p.number.toString().includes(q)) return true;
      if (p.roman.toLowerCase().includes(q)) return true;
      if (p.latin.toLowerCase().includes(q)) return true;
      if (`day ${p.day}`.includes(q)) return true;
      return false;
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 sm:left-auto sm:right-0 mt-1 w-64 sm:w-72 bg-[#FAF8F5] dark:bg-[#1E1D1A] border border-[#D5CCBA] dark:border-[#38352F] rounded-md shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100 flex flex-col max-h-[65vh] font-serif"
      role="listbox"
    >
      {/* Minimal filter input */}
      <div className="p-1.5 border-b border-[#ECE5D8] dark:border-[#33302A] shrink-0">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && filtered.length > 0) {
              const p = filtered[0];
              onSelectTarget(`psalm-${p.number}`, `Ps. ${p.roman}`);
            }
          }}
          placeholder="Filter psalm (e.g. 23)..."
          className="w-full px-2 py-1 text-xs bg-white dark:bg-[#161513] border border-[#D5CCBA] dark:border-[#38352F] rounded text-stone-900 dark:text-[#EDE7DD] placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#8A211D] dark:focus:ring-[#E86558]"
        />
      </div>

      {/* Clean, simple scrollable list of Psalms */}
      <div className="overflow-y-auto divide-y divide-[#ECE5D8]/50 dark:divide-[#33302A]/50 py-0.5">
        {filtered.length === 0 ? (
          <div className="text-center py-4 text-xs text-stone-500 dark:text-stone-400">
            No Psalm found
          </div>
        ) : (
          filtered.map((p) => (
            <button
              key={p.number}
              onClick={() => onSelectTarget(`psalm-${p.number}`, `Ps. ${p.roman}`)}
              className="w-full text-left px-3 py-1.5 text-xs sm:text-sm hover:bg-[#EFE9DC] dark:hover:bg-[#282622] text-stone-800 dark:text-stone-200 flex items-baseline justify-between gap-2 cursor-pointer transition-colors"
            >
              <div className="truncate min-w-0">
                <span className="font-semibold text-stone-900 dark:text-[#FAF7F0] mr-1.5 font-sans text-xs">
                  {p.number}.
                </span>
                <span className="italic text-stone-700 dark:text-stone-300">
                  {p.latin}
                </span>
              </div>
              <span className="text-[10px] text-stone-400 dark:text-stone-500 font-sans shrink-0">
                Day {p.day}
              </span>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
