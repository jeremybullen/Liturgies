import React from 'react';
import { LiturgicalBook } from '../types/liturgy';
import { BookOpen, Calendar, MapPin, Feather, ArrowRight, Clock, AlertCircle } from 'lucide-react';

interface BookOverviewProps {
  book: LiturgicalBook;
  onSelectService: (serviceSlug: string) => void;
  onNavigate: (path: string) => void;
}

export const BookOverview: React.FC<BookOverviewProps> = ({
  book,
  onSelectService,
  onNavigate
}) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Book Cover Banner Card */}
      <div className="relative rounded-2xl p-6 sm:p-10 bg-stone-100 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/80 mb-10 overflow-hidden">
        
        {/* Subtle decorative gold/amber watermark */}
        <div className="absolute right-0 top-0 -translate-y-6 translate-x-6 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-stone-500 dark:text-stone-400 mb-3">
            <span className="font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-400">
              {book.year} Edition
            </span>
            <span>·</span>
            <span>{book.tradition}</span>
            <span>·</span>
            <span>{book.jurisdiction}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight mb-3">
            {book.title}
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-stone-700 dark:text-stone-300 mb-6 max-w-2xl">
            {book.formalTitle}
          </p>

          <p className="font-serif text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
            {book.historicalContext}
          </p>

          <div className="text-xs text-stone-500 dark:text-stone-400 pt-4 border-t border-stone-200 dark:border-stone-700/70">
            <strong>Source & Authority:</strong> {book.sourceNote}
          </div>
        </div>

      </div>

      {/* Awaiting Text Notice (if not yet imported) */}
      {book.status === 'awaiting_text' && (
        <div className="mb-10 p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-950/30 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-950 dark:text-amber-200">
            <h3 className="font-semibold mb-1">Awaiting Text Submission</h3>
            <p className="leading-relaxed">
              The structure and service canon for this volume are configured and ready. Public domain liturgical text for this edition may be submitted to immediately populate the services below.
            </p>
          </div>
        </div>
      )}

      {/* Services Index List */}
      <div>
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200 dark:border-stone-800">
          <h2 className="font-heading text-2xl font-bold text-stone-900 dark:text-stone-100">
            Order of Services & Offices
          </h2>
          <span className="text-xs font-sans text-stone-500">
            {book.services.length} services
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {book.services.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => onSelectService(service.slug)}
              className="text-left p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-800/60 hover:border-amber-700/50 hover:shadow-sm transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
            >
              <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                <span className="font-sans font-semibold uppercase tracking-wider text-[11px] text-amber-900/80 dark:text-amber-400">
                  {service.category}
                </span>
                <span className="font-mono text-[11px]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-900 dark:group-hover:text-amber-400 transition-colors mb-1.5">
                {service.title}
              </h3>

              {service.subtitle && (
                <p className="font-serif italic text-xs text-stone-600 dark:text-stone-400 mb-2">
                  {service.subtitle}
                </p>
              )}

              <p className="font-serif text-xs text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-3 flex items-center text-xs font-medium text-amber-900 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>Read office</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
