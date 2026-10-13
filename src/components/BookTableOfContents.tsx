import React, { useState } from 'react';
import { LiturgicalBook, LiturgicalService } from '../types/liturgy';
import { BookOpen, Search, CheckCircle2, Clock } from 'lucide-react';

interface BookTableOfContentsProps {
  book: LiturgicalBook;
  activeServiceSlug?: string;
  onSelectService: (serviceSlug: string) => void;
  onSelectBookOverview: () => void;
}

export const BookTableOfContents: React.FC<BookTableOfContentsProps> = ({
  book,
  activeServiceSlug,
  onSelectService,
  onSelectBookOverview
}) => {
  const [filterQuery, setFilterQuery] = useState('');

  // Group services by category
  const categories = Array.from(new Set(book.services.map(s => s.category)));

  const filteredServices = book.services.filter(s =>
    s.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    (s.traditionalTitle && s.traditionalTitle.toLowerCase().includes(filterQuery.toLowerCase())) ||
    (s.subtitle && s.subtitle.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <aside className="w-full lg:w-72 xl:w-80 shrink-0 border-b lg:border-b-0 lg:border-r border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/60 p-4 lg:p-6 lg:min-h-[calc(100vh-4rem)] lg:sticky lg:top-16 self-start overflow-y-auto max-h-[85vh] lg:max-h-[calc(100vh-4rem)]">
      
      {/* Book Title & Overview Link */}
      <div className="mb-4 pb-4 border-b border-stone-200 dark:border-stone-800">
        <button
          onClick={onSelectBookOverview}
          className="w-full text-left group focus-visible:outline-none"
        >
          <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-amber-900/80 dark:text-amber-400 block mb-1">
            Liturgical Book · {book.year}
          </span>
          <h2 className="font-heading text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-900 dark:group-hover:text-amber-400 transition-colors">
            {book.title}
          </h2>
          <span className="text-xs text-stone-500 dark:text-stone-400 block mt-1">
            Table of Contents & Overview →
          </span>
        </button>
      </div>

      {/* In-Book Quick Search Filter */}
      <div className="relative mb-5">
        <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Filter services..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          className="w-full text-xs pl-8 pr-3 py-1.5 rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-800"
        />
      </div>

      {/* Service Categories List */}
      <div className="space-y-6">
        {categories.map((cat) => {
          const catServices = filteredServices.filter(s => s.category === cat);
          if (catServices.length === 0) return null;

          return (
            <div key={cat}>
              <h3 className="text-[11px] font-sans font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-2 px-2">
                {cat}
              </h3>
              <ul className="space-y-1">
                {catServices.map((service) => {
                  const isActive = activeServiceSlug === service.slug;
                  return (
                    <li key={service.id}>
                      <button
                        onClick={() => onSelectService(service.slug)}
                        className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between group ${
                          isActive
                            ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-950 dark:text-amber-300 font-semibold border border-amber-200 dark:border-amber-800'
                            : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/60 hover:text-stone-900'
                        }`}
                      >
                        <span className="truncate pr-2 font-serif text-[13px]">
                          {service.title}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-800 dark:bg-amber-400 shrink-0" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Book Status Pill Note */}
      <div className="mt-8 pt-4 border-t border-stone-200 dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400">
        <p className="italic">
          {book.status === 'available' ? 'Complete statutory text available.' : 'Awaiting text submission.'}
        </p>
      </div>

    </aside>
  );
};
