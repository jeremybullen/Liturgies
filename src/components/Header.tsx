import React from 'react';
import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';
import { allBooks } from '../data/books';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  onToggleSettings: () => void;
  isSettingsOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  onToggleSettings,
  isSettingsOpen
}) => {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-stone-50/90 dark:bg-stone-900/90 border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2.5 text-left text-stone-900 dark:text-stone-100 hover:opacity-85 transition-opacity whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded"
        >
          <BookOpen className="w-5 h-5 text-amber-800 dark:text-amber-500 transition-transform group-hover:scale-105" />
          <span className="font-heading text-xl font-bold tracking-tight">
            Liturgical Library
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single-Line) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600 dark:text-stone-300">
          <button
            onClick={() => onNavigate('/')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-stone-900 dark:hover:text-white ${
              currentPath === '/' ? 'text-amber-900 dark:text-amber-400 font-semibold border-b-2 border-amber-800 dark:border-amber-400' : ''
            }`}
          >
            All Books
          </button>

          {allBooks.map((book) => {
            const isActive = currentPath.startsWith(`/${book.slug}`);
            return (
              <button
                key={book.id}
                onClick={() => onNavigate(`/${book.slug}`)}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-stone-900 dark:hover:text-white ${
                  isActive ? 'text-amber-900 dark:text-amber-400 font-semibold border-b-2 border-amber-800 dark:border-amber-400' : ''
                }`}
              >
                {book.shortTitle}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action / Utilities */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors border border-stone-200 dark:border-stone-700"
            title="Search liturgical texts (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-stone-500" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded font-mono">⌘K</kbd>
          </button>

          <button
            onClick={onToggleSettings}
            className={`p-2 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-lg transition-colors border ${
              isSettingsOpen 
                ? 'bg-amber-100 dark:bg-amber-950/50 border-amber-300 dark:border-amber-800 text-amber-900' 
                : 'bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
            title="Reading Preferences"
            aria-label="Reading Preferences"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
