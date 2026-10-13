import React, { useState } from 'react';
import { LiturgicalBook, LiturgicalService, ReadingSettings, LiturgicalBlock } from '../types/liturgy';
import { Copy, Check, Printer, Share2, ArrowLeft, ArrowRight, ChevronRight, BookOpen } from 'lucide-react';

interface ServiceViewerProps {
  book: LiturgicalBook;
  service: LiturgicalService;
  settings: ReadingSettings;
  onNavigate: (path: string) => void;
}

export const ServiceViewer: React.FC<ServiceViewerProps> = ({
  book,
  service,
  settings,
  onNavigate
}) => {
  const [copiedBlockIdx, setCopiedBlockIdx] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyToClipboard = (text: string, idx?: number) => {
    navigator.clipboard.writeText(text);
    if (idx !== undefined) setCopiedBlockIdx(idx);
    showToast('Copied to clipboard');
    setTimeout(() => setCopiedBlockIdx(null), 2000);
  };

  const copyPageUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    showToast('Service link copied to clipboard');
  };

  const printService = () => {
    window.print();
  };

  // Determine prev and next services
  const currentIndex = book.services.findIndex(s => s.id === service.id);
  const prevService = currentIndex > 0 ? book.services[currentIndex - 1] : null;
  const nextService = currentIndex < book.services.length - 1 ? book.services[currentIndex + 1] : null;

  // Font size mapping
  const fontSizeClass = {
    small: 'text-[15px] leading-relaxed',
    medium: 'text-[17px] leading-relaxed',
    large: 'text-[19px] leading-loose',
    xlarge: 'text-[21px] leading-loose'
  }[settings.fontSize];

  // Rubric style
  const rubricColorClass = settings.rubricColor === 'crimson'
    ? 'text-[#8A211D] dark:text-[#E06A64]'
    : 'text-stone-600 dark:text-stone-400';

  // Measure constraint
  const measureClass = settings.measureWidth === 'standard' ? 'max-w-[70ch]' : 'max-w-4xl';

  return (
    <article className={`print-book-content mx-auto ${measureClass} pb-24 pt-6 px-4 sm:px-6`}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-stone-100 text-xs px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 border border-stone-700 animate-in fade-in duration-200">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumb Trail */}
      <nav className="no-print flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mb-6">
        <button
          onClick={() => onNavigate('/')}
          className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
        >
          Library
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button
          onClick={() => onNavigate(`/${book.slug}`)}
          className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
        >
          {book.shortTitle}
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-stone-800 dark:text-stone-200 font-medium truncate">
          {service.title}
        </span>
      </nav>

      {/* Service Header */}
      <header className="mb-10 pb-6 border-b border-stone-200 dark:border-stone-800 text-center">
        {service.traditionalTitle && (
          <p className="text-xs font-sans tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-2">
            {service.traditionalTitle}
          </p>
        )}
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
          {service.title}
        </h1>
        {service.subtitle && (
          <p className="font-heading text-lg sm:text-xl italic text-stone-700 dark:text-stone-300 mt-2">
            {service.subtitle}
          </p>
        )}

        {/* Toolbar: Print, Share, Copy */}
        <div className="no-print flex items-center justify-center gap-3 mt-6">
          <button
            onClick={copyPageUrl}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors border border-stone-200 dark:border-stone-700"
            title="Copy service link"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Link</span>
          </button>
          <button
            onClick={printService}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors border border-stone-200 dark:border-stone-700"
            title="Print liturgy"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
        </div>
      </header>

      {/* Liturgical Blocks */}
      <div className={`space-y-6 ${fontSizeClass}`}>
        {service.blocks.map((block, idx) => (
          <BlockRenderer
            key={idx}
            block={block}
            idx={idx}
            rubricColorClass={rubricColorClass}
            copiedIdx={copiedBlockIdx}
            onCopy={copyToClipboard}
          />
        ))}
      </div>

      {/* Footer Navigation */}
      <footer className="no-print mt-16 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevService ? (
          <button
            onClick={() => onNavigate(`/${book.slug}/${prevService.slug}`)}
            className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <div className="text-left">
              <span className="block text-[10px] uppercase text-stone-400">Previous Service</span>
              <span className="font-heading text-sm font-semibold">{prevService.title}</span>
            </div>
          </button>
        ) : <div />}

        {nextService && (
          <button
            onClick={() => onNavigate(`/${book.slug}/${nextService.slug}`)}
            className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium transition-colors self-end"
          >
            <div className="text-right">
              <span className="block text-[10px] uppercase text-stone-400">Next Service</span>
              <span className="font-heading text-sm font-semibold">{nextService.title}</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </footer>

    </article>
  );
};

interface BlockRendererProps {
  block: LiturgicalBlock;
  idx: number;
  rubricColorClass: string;
  copiedIdx: number | null;
  onCopy: (text: string, idx: number) => void;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({
  block,
  idx,
  rubricColorClass,
  copiedIdx,
  onCopy
}) => {
  switch (block.type) {
    case 'heading':
      return (
        <div className="pt-8 pb-3 border-b border-stone-200 dark:border-stone-800 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-wider text-stone-900 dark:text-stone-100">
            {block.title}
          </h2>
        </div>
      );

    case 'subheading':
      return (
        <div className="pt-6 pb-2 text-center">
          <h3 className="font-heading text-xl font-semibold text-stone-800 dark:text-stone-200">
            {block.title}
          </h3>
        </div>
      );

    case 'rubric':
      return (
        <div className={`rubric-text ${rubricColorClass} italic font-serif text-[0.92em] py-1 my-3 pl-2 sm:pl-3 border-l-2 border-red-700/30 dark:border-red-400/30`}>
          <p className="whitespace-pre-line leading-relaxed">
            {block.text}
          </p>
        </div>
      );

    case 'scripture_sentence':
      return (
        <div className="my-3 pl-2 sm:pl-4 border-l border-stone-200 dark:border-stone-700">
          {block.speaker && (
            <p className="text-xs font-sans uppercase tracking-wider text-stone-500 mb-0.5">
              {block.speaker}
            </p>
          )}
          <p className="font-serif text-stone-900 dark:text-stone-100">
            {block.text}
            {block.citation && (
              <span className="block sm:inline sm:ml-2 text-xs font-sans text-stone-500 dark:text-stone-400 italic">
                — {block.citation}
              </span>
            )}
          </p>
        </div>
      );

    case 'prayer':
      return (
        <div className="relative group my-5 p-4 rounded-lg bg-stone-100/40 dark:bg-stone-800/20 border border-stone-200/60 dark:border-stone-700/60">
          {/* Quick Copy Prayer Icon */}
          <button
            onClick={() => onCopy(block.text || '', idx)}
            className="no-print absolute top-3 right-3 opacity-0 group-hover:opacity-100 p-1.5 rounded bg-white dark:bg-stone-800 text-stone-500 hover:text-stone-900 shadow-xs border border-stone-200 dark:border-stone-700 transition-opacity"
            title="Copy prayer"
          >
            {copiedIdx === idx ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          {block.title && (
            <h4 className="font-heading text-lg font-medium italic text-center text-stone-900 dark:text-stone-100 mb-2">
              {block.title}
            </h4>
          )}
          {block.rubricNote && (
            <p className={`rubric-text text-xs italic ${rubricColorClass} mb-2`}>
              {block.rubricNote}
            </p>
          )}
          <p className="font-serif text-stone-900 dark:text-stone-100 whitespace-pre-line leading-relaxed">
            {block.text}
          </p>
          {block.citation && (
            <p className="text-xs text-stone-500 dark:text-stone-400 italic mt-2 text-right">
              {block.citation}
            </p>
          )}
        </div>
      );

    case 'dialogue':
      return (
        <div className="my-4 space-y-2 pl-2">
          {block.dialogue?.map((line, dIdx) => (
            <div key={dIdx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <span className="shrink-0 w-24 text-xs font-sans font-semibold uppercase tracking-wider text-amber-900/80 dark:text-amber-400">
                {line.speaker}
              </span>
              <span className="font-serif text-stone-900 dark:text-stone-100 whitespace-pre-line">
                {line.text}
              </span>
            </div>
          ))}
        </div>
      );

    case 'canticle':
      return (
        <div className="my-6">
          {block.title && (
            <div className="text-center mb-4">
              <h3 className="font-heading text-xl font-semibold tracking-wide text-stone-900 dark:text-stone-100">
                {block.title}
              </h3>
              {block.citation && (
                <p className="text-xs font-sans text-stone-500 italic mt-0.5">
                  {block.citation}
                </p>
              )}
            </div>
          )}

          {block.verses ? (
            <div className="space-y-2">
              {block.verses.map((verse, vIdx) => {
                const parts = verse.text.split(' : ');
                return (
                  <div key={vIdx} className="font-serif text-stone-900 dark:text-stone-100 flex flex-col sm:flex-row sm:items-baseline pl-4">
                    <span className="flex-1">{parts[0]}</span>
                    {parts[1] && (
                      <span className="sm:text-right text-stone-700 dark:text-stone-300 sm:w-1/2 italic pl-4 sm:pl-6">
                        : {parts[1]}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="font-serif text-stone-900 dark:text-stone-100 whitespace-pre-line leading-relaxed pl-4">
              {block.text}
            </p>
          )}
        </div>
      );

    case 'creed':
      return (
        <div className="my-6 p-5 rounded-lg bg-stone-100/60 dark:bg-stone-800/30 border border-stone-200 dark:border-stone-700">
          {block.title && (
            <h3 className="font-heading text-xl font-semibold text-stone-900 dark:text-stone-100 mb-3 text-center">
              {block.title}
            </h3>
          )}
          <p className="font-serif text-stone-900 dark:text-stone-100 whitespace-pre-line leading-relaxed">
            {block.text}
          </p>
        </div>
      );

    case 'exhortation':
      return (
        <div className="my-5 p-4 rounded-lg bg-stone-50 dark:bg-stone-800/20 border-l-4 border-amber-800/40 dark:border-amber-500/40">
          {block.title && (
            <h4 className="font-heading text-lg font-medium italic text-center text-stone-900 dark:text-stone-100 mb-2">
              {block.title}
            </h4>
          )}
          <p className="font-serif text-stone-900 dark:text-stone-100 whitespace-pre-line leading-relaxed">
            {block.text}
          </p>
        </div>
      );

    case 'catechism_qa':
      return (
        <div className="my-4 p-4 rounded-md bg-stone-100/50 dark:bg-stone-800/30 border border-stone-200/70 dark:border-stone-700/70">
          <div className="mb-2">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 mr-2">
              Question.
            </span>
            <span className="font-serif italic font-medium text-stone-900 dark:text-stone-100">
              {block.question}
            </span>
          </div>
          <div>
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mr-2">
              Answer.
            </span>
            <span className="font-serif text-stone-900 dark:text-stone-100 whitespace-pre-line">
              {block.answer}
            </span>
          </div>
        </div>
      );

    default:
      return (
        <p className="font-serif text-stone-900 dark:text-stone-100 whitespace-pre-line leading-relaxed">
          {block.text}
        </p>
      );
  }
};
