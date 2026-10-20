import React, { useEffect, useState } from 'react';
import { X, Printer, ExternalLink, Copy, Check, BookOpen, Users, Columns, AlignLeft, Type, Palette } from 'lucide-react';
import { toTitleCase } from '../utils/titleCase';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookTitle: string;
  serviceTitle: string;
  bookId: string;
  serviceSlug: string;
  content: string;
}

export type PrintEditionMode = 'pulpit' | 'pew';

export function PrintModal({
  isOpen,
  onClose,
  bookTitle,
  serviceTitle,
  bookId,
  serviceSlug,
  content
}: PrintModalProps) {
  const [mode, setMode] = useState<PrintEditionMode>('pulpit');
  const [columns, setColumns] = useState<'1' | '2'>('1');
  const [size, setSize] = useState<'standard' | 'large' | 'compact'>('standard');
  const [ink, setInk] = useState<'color' | 'bw'>('color');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Generate bulletin-ready clean text based on mode
  const getBulletinText = () => {
    if (mode === 'pulpit') {
      return content;
    }

    // Pew mode: Filter out directional rubrics and presiding officiant instructions
    return content
      .split(/\n\n+/)
      .filter(p => {
        const trimmed = p.trim();
        // If paragraph begins with section headings (## or ###), keep them
        if (/^#+/.test(trimmed)) return true;

        // If paragraph begins with liturgical pilcrow ¶, it's a directional rubric
        if (/^[¶\u00b6]/.test(trimmed) || /^\*[¶\u00b6]/.test(trimmed)) {
          return false;
        }

        // If entirely in asterisks (italic rubric block)
        if (/^\*[^*]+\*$/.test(trimmed)) {
          const inner = trimmed.slice(1, -1).trim();
          // Keep spoken versicle responses like *Answer.* or *People.*
          if (/^(?:Answer|Response|People|The People|Congregation)\b/i.test(inner)) {
            return true;
          }
          // Filter out directions with rubric verbs (shall, kneel, stand, turn, etc.)
          if (/\b(?:shall\s+say|shall\s+read|shall\s+kneel|shall\s+stand|shall\s+minister|turning\s+to\s+the\s+people|turning\s+him|kneeling|standing|at\s+the\s+communion|note\s+that|note,\s+that)\b/i.test(inner)) {
            return false;
          }
        }

        return true;
      })
      .join('\n\n');
  };

  const handleCopyText = async () => {
    try {
      const textToCopy = getBulletinText();
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (e) {
      console.warn('Clipboard write failed:', e);
    }
  };

  const handlePrintNow = () => {
    // 1. Configure print classes on document.body
    document.body.classList.remove(
      'print-two-column',
      'print-size-compact',
      'print-size-large',
      'print-bw',
      'print-pulpit',
      'print-pew',
      'print-congregational'
    );

    if (columns === '2') {
      document.body.classList.add('print-two-column');
    }
    if (size === 'compact') {
      document.body.classList.add('print-size-compact');
    }
    if (size === 'large') {
      document.body.classList.add('print-size-large');
    }
    if (ink === 'bw') {
      document.body.classList.add('print-bw');
    }

    if (mode === 'pew') {
      document.body.classList.add('print-pew', 'print-congregational');
    } else {
      document.body.classList.add('print-pulpit');
    }

    // 2. Close modal first so neither dialog nor backdrop appear in print preview
    onClose();

    // 3. Trigger browser print after modal completely unmounts
    setTimeout(() => {
      try {
        window.print();
      } catch (e) {
        console.warn('Browser print failed:', e);
      }
    }, 150);
  };

  const printUrl = `/${bookId}/${serviceSlug}?print=true&cols=${columns}&size=${size}&edition=${mode}&ink=${ink}`;

  return (
    <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="print-modal-title"
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#FAF8F5] dark:bg-[#1E1D1A] border border-[#D5CCBA] dark:border-[#38352F] rounded-lg shadow-2xl p-5 sm:p-6 text-stone-900 dark:text-[#EDE7DD] z-10 animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#ECE5D8] dark:border-[#33302A]">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-[#8A211D] dark:text-[#E86558]" />
            <h2 id="print-modal-title" className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-[#FAF7F0] tracking-wide">
              Print &amp; Bulletin Options
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#F2ECE1] dark:hover:bg-[#2A2824] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
            aria-label="Close print dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Service Info */}
        <div className="mb-4 bg-[#F4EFE6] dark:bg-[#262420] p-3 rounded border border-[#E2DBCF] dark:border-[#35322B]">
          <p className="font-serif font-semibold text-stone-900 dark:text-[#FAF7F0] text-base leading-snug">
            {toTitleCase(serviceTitle)}
          </p>
          <p className="font-serif italic text-xs text-stone-600 dark:text-stone-400">
            {bookTitle}
          </p>
        </div>

        {/* Configuration Controls */}
        <div className="space-y-4 mb-6 font-serif text-sm">
          
          {/* Core Edition Mode: Pulpit vs Pew */}
          <div>
            <label className="text-xs uppercase tracking-wider text-stone-600 dark:text-stone-400 font-semibold mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Liturgical Edition</span>
              </span>
              <span className="text-[11px] text-[#8A211D] dark:text-[#E86558] font-medium lowercase">
                {mode === 'pulpit' ? 'minister edition' : 'congregational responses'}
              </span>
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setMode('pulpit')}
                className={`py-2.5 px-3 rounded border text-left transition-colors cursor-pointer flex flex-col justify-between ${
                  mode === 'pulpit'
                    ? 'border-[#8A211D] dark:border-[#E86558] bg-[#F2ECE1] dark:bg-[#2A2824] text-stone-900 dark:text-[#FAF7F0] ring-1 ring-[#8A211D] dark:ring-[#E86558]'
                    : 'border-[#D5CCBA] dark:border-[#38352F] text-stone-700 dark:text-stone-300 hover:bg-[#F5F0E7] dark:hover:bg-[#24221E]'
                }`}
              >
                <div className="flex items-center gap-1.5 font-semibold text-sm mb-1">
                  <BookOpen className="w-4 h-4 text-[#8A211D] dark:text-[#E86558]" />
                  <span>Pulpit Edition</span>
                </div>
                <p className="text-[11px] opacity-75 leading-tight">
                  Minister edition with complete ceremonial rubrics, directions &amp; all prayers.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setMode('pew')}
                className={`py-2.5 px-3 rounded border text-left transition-colors cursor-pointer flex flex-col justify-between ${
                  mode === 'pew'
                    ? 'border-[#8A211D] dark:border-[#E86558] bg-[#F2ECE1] dark:bg-[#2A2824] text-stone-900 dark:text-[#FAF7F0] ring-1 ring-[#8A211D] dark:ring-[#E86558]'
                    : 'border-[#D5CCBA] dark:border-[#38352F] text-stone-700 dark:text-stone-300 hover:bg-[#F5F0E7] dark:hover:bg-[#24221E]'
                }`}
              >
                <div className="flex items-center gap-1.5 font-semibold text-sm mb-1">
                  <Users className="w-4 h-4 text-[#8A211D] dark:text-[#E86558]" />
                  <span>Pew Edition</span>
                </div>
                <p className="text-[11px] opacity-75 leading-tight">
                  Congregational responses &amp; shared prayers; omits lengthy directional rubrics.
                </p>
              </button>
            </div>
          </div>

          {/* Columns Setting */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs uppercase tracking-wider text-stone-600 dark:text-stone-400 font-semibold flex items-center gap-1.5">
                <Columns className="w-3.5 h-3.5" />
                <span>Page Layout</span>
              </label>
              {columns === '2' && (
                <span className="text-[11px] text-[#8A211D] dark:text-[#E86558] font-medium">Saves ~50% paper</span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setColumns('1')}
                className={`py-2 px-3 rounded border transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                  columns === '1'
                    ? 'border-[#8A211D] dark:border-[#E86558] bg-[#F2ECE1] dark:bg-[#2A2824] font-semibold text-stone-900 dark:text-[#FAF7F0]'
                    : 'border-[#D5CCBA] dark:border-[#38352F] text-stone-700 dark:text-stone-300 hover:bg-[#F5F0E7] dark:hover:bg-[#24221E]'
                }`}
              >
                <AlignLeft className="w-3.5 h-3.5" />
                <span>Single Column (Altar)</span>
              </button>

              <button
                type="button"
                onClick={() => setColumns('2')}
                className={`py-2 px-3 rounded border transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                  columns === '2'
                    ? 'border-[#8A211D] dark:border-[#E86558] bg-[#F2ECE1] dark:bg-[#2A2824] font-semibold text-stone-900 dark:text-[#FAF7F0]'
                    : 'border-[#D5CCBA] dark:border-[#38352F] text-stone-700 dark:text-stone-300 hover:bg-[#F5F0E7] dark:hover:bg-[#24221E]'
                }`}
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Two-Column (Bulletin)</span>
              </button>
            </div>
          </div>

          {/* Type Size Setting */}
          <div>
            <label className="text-xs uppercase tracking-wider text-stone-600 dark:text-stone-400 font-semibold mb-1.5 flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5" />
              <span>Print Type Size</span>
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'compact' as const, label: 'Compact', sub: '9.5 pt' },
                { id: 'standard' as const, label: 'Standard', sub: '11 pt' },
                { id: 'large' as const, label: 'Large Print', sub: '13.5 pt' }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSize(opt.id)}
                  className={`py-1.5 px-2 rounded border text-center transition-colors cursor-pointer ${
                    size === opt.id
                      ? 'border-[#8A211D] dark:border-[#E86558] bg-[#F2ECE1] dark:bg-[#2A2824] font-semibold text-stone-900 dark:text-[#FAF7F0]'
                      : 'border-[#D5CCBA] dark:border-[#38352F] text-stone-700 dark:text-stone-300 hover:bg-[#F5F0E7] dark:hover:bg-[#24221E]'
                  }`}
                >
                  <p>{opt.label}</p>
                  <p className="text-[10px] opacity-70">{opt.sub}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Ink / Contrast Mode */}
          <div>
            <label className="text-xs uppercase tracking-wider text-stone-600 dark:text-stone-400 font-semibold mb-1.5 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" />
              <span>Ink &amp; Printer Contrast</span>
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setInk('color')}
                className={`py-2 px-3 rounded border text-center transition-colors cursor-pointer ${
                  ink === 'color'
                    ? 'border-[#8A211D] dark:border-[#E86558] bg-[#F2ECE1] dark:bg-[#2A2824] font-semibold text-stone-900 dark:text-[#FAF7F0]'
                    : 'border-[#D5CCBA] dark:border-[#38352F] text-stone-700 dark:text-stone-300 hover:bg-[#F5F0E7] dark:hover:bg-[#24221E]'
                }`}
              >
                <p className="text-[#8A211D] dark:text-[#E86558] font-semibold">Red &amp; Black</p>
                <p className="text-[10px] opacity-70">Traditional vermilion rubrics</p>
              </button>

              <button
                type="button"
                onClick={() => setInk('bw')}
                className={`py-2 px-3 rounded border text-center transition-colors cursor-pointer ${
                  ink === 'bw'
                    ? 'border-[#8A211D] dark:border-[#E86558] bg-[#F2ECE1] dark:bg-[#2A2824] font-semibold text-stone-900 dark:text-[#FAF7F0]'
                    : 'border-[#D5CCBA] dark:border-[#38352F] text-stone-700 dark:text-stone-300 hover:bg-[#F5F0E7] dark:hover:bg-[#24221E]'
                }`}
              >
                <p className="font-semibold">Photocopier B&amp;W</p>
                <p className="text-[10px] opacity-70">High-contrast dark ink for copiers</p>
              </button>
            </div>
          </div>

        </div>

        {/* Primary Action Buttons */}
        <div className="space-y-2.5 font-serif pt-3 border-t border-[#ECE5D8] dark:border-[#33302A]">
          {/* Primary Print Now Button (Direct, closes modal, opens browser print dialog) */}
          <button
            type="button"
            onClick={handlePrintNow}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#8A211D] dark:bg-[#A82A25] hover:bg-[#721A16] dark:hover:bg-[#8F231E] text-white font-medium transition-colors cursor-pointer shadow-xs text-sm sm:text-base"
          >
            <Printer className="w-4 h-4 shrink-0" />
            <span>Print {mode === 'pew' ? 'Pew Edition' : 'Pulpit Edition'} Now</span>
          </button>

          <div className="flex flex-col sm:flex-row gap-2">
            {/* Copy Bulletin Text Button */}
            <button
              type="button"
              onClick={handleCopyText}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded border border-[#D5CCBA] dark:border-[#38352F] hover:bg-[#F2ECE1] dark:hover:bg-[#2A2824] text-stone-700 dark:text-stone-300 text-xs sm:text-sm transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-emerald-700 dark:text-emerald-300 font-medium">Copied for Bulletin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 shrink-0" />
                  <span>Copy for Bulletin / Word</span>
                </>
              )}
            </button>

            {/* Open Clean Tab Link */}
            <a
              href={printUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded border border-[#D5CCBA] dark:border-[#38352F] hover:bg-[#F2ECE1] dark:hover:bg-[#2A2824] text-stone-700 dark:text-stone-300 text-xs sm:text-sm transition-colors cursor-pointer text-center"
              title="Open a clean standalone tab preformatted for printing"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
