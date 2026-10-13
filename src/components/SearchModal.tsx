import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';
import { searchLiturgicalTexts, SearchResult } from '../data/books';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (bookSlug: string, serviceSlug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const res = searchLiturgicalTexts(query);
    setResults(res);
  }, [query]);

  // Handle ESC and Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-stone-200 dark:border-stone-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search prayers, canticles, rubrics, collects (e.g. 'Peace', 'Chrysostom', 'Communion')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-sans text-stone-500 hover:text-stone-900 px-2 py-1 rounded bg-stone-100 dark:bg-stone-800"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {query.trim().length >= 2 && results.length === 0 && (
            <div className="text-center py-12 text-stone-500 dark:text-stone-400 text-sm">
              <p>No matches found for &ldquo;{query}&rdquo;.</p>
              <p className="text-xs text-stone-400 mt-1">Try another liturgical term like &ldquo;Almighty&rdquo;, &ldquo;Mercy&rdquo;, or &ldquo;Creed&rdquo;.</p>
            </div>
          )}

          {query.trim().length < 2 && (
            <div className="py-8 px-2 text-xs text-stone-500 dark:text-stone-400">
              <p className="font-semibold uppercase tracking-wider text-[10px] text-stone-400 mb-2">Suggested Searches</p>
              <div className="flex flex-wrap gap-2">
                {['General Confession', 'Holy Communion', 'Te Deum', 'Ten Commandments', 'Collect for Peace', 'Burial of the Dead', 'Litany'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.map((res, idx) => (
            <button
              key={idx}
              onClick={() => {
                onSelectResult(res.book.slug, res.service.slug);
                onClose();
              }}
              className="w-full text-left p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-amber-700/40 hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-all group"
            >
              <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                <span className="font-semibold uppercase tracking-wider text-[10px] text-amber-900 dark:text-amber-400">
                  {res.book.shortTitle} · {res.service.category}
                </span>
                <span className="text-[11px] capitalize text-stone-400">
                  {res.matchType} match
                </span>
              </div>

              <h4 className="font-heading text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-900 dark:group-hover:text-amber-400 transition-colors">
                {res.service.title}
              </h4>

              <p className="font-serif text-xs text-stone-600 dark:text-stone-300 mt-1 line-clamp-2 leading-relaxed">
                {res.snippet}
              </p>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
