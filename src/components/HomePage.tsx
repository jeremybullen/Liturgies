import React from 'react';
import { allBooks } from '../data/books';
import { BookOpen, ArrowRight, CheckCircle, Clock, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      
      {/* Hero Curatorial Welcome */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-sans font-bold tracking-widest uppercase text-amber-900 dark:text-amber-400 mb-3">
          Historical Liturgical Library
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mb-6">
          Denominational Liturgical Books
        </h1>
        <p className="font-serif text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
          A dignified, accessible digital edition of historic denominational liturgies. Each volume is preserved in its classical form, formatted identically with traditional rubrics, choral settings, and prayers.
        </p>

        {/* Quick Jump Badges to 1662 offices */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-sans text-stone-500 mr-2">Featured 1662 Offices:</span>
          {[
            { name: 'Morning Prayer', path: '/1662/morning-prayer' },
            { name: 'Holy Communion', path: '/1662/holy-communion' },
            { name: 'Evening Prayer', path: '/1662/evening-prayer' },
            { name: 'The Litany', path: '/1662/litany' },
            { name: 'Catechism', path: '/1662/catechism' },
            { name: 'Matrimony', path: '/1662/matrimony' }
          ].map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className="px-3 py-1 text-xs font-serif rounded-full bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-amber-100 hover:text-amber-950 transition-colors border border-stone-300/50 dark:border-stone-700"
            >
              {item.name}
            </button>
          ))}
        </div>
      </section>

      {/* The Three Books - Formatted Identically */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200 dark:border-stone-800">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
              The Three Volumes
            </h2>
            <p className="text-xs font-sans text-stone-500 dark:text-stone-400 mt-1">
              Select any volume to view its table of contents and full liturgical services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allBooks.map((book) => {
            const isAvailable = book.status === 'available';
            return (
              <div
                key={book.id}
                className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-800/50 p-6 flex flex-col justify-between hover:border-amber-800/40 hover:shadow-md transition-all group"
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-4">
                    <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-amber-900 dark:text-amber-400">
                      Anno Domini {book.year}
                    </span>
                    <span className="text-[11px] text-stone-500 font-sans">
                      {book.tradition}
                    </span>
                  </div>

                  {/* Volume Spine Card Mockup */}
                  <div className="h-44 rounded-xl mb-5 p-5 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-stone-900 to-stone-800 text-stone-100 shadow-inner border border-stone-700">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-widest uppercase text-stone-400 font-sans">
                        {book.jurisdiction}
                      </span>
                      {isAvailable ? (
                        <span className="text-[10px] text-amber-400 flex items-center gap-1 font-sans">
                          <CheckCircle className="w-3 h-3" /> Full Text
                        </span>
                      ) : (
                        <span className="text-[10px] text-stone-400 flex items-center gap-1 font-sans">
                          <Clock className="w-3 h-3" /> Awaiting Text
                        </span>
                      )}
                    </div>

                    <div className="text-center my-auto">
                      <div className="w-6 h-6 mx-auto mb-2 opacity-60 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-amber-200" />
                      </div>
                      <h3 className="font-heading text-xl font-bold tracking-tight text-amber-100">
                        {book.title}
                      </h3>
                      <p className="text-[11px] font-serif italic text-stone-300 mt-1 line-clamp-1">
                        {book.shortTitle}
                      </p>
                    </div>

                    <div className="text-center text-[10px] tracking-widest text-amber-300/70 uppercase">
                      Statutory Text
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-serif text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4 line-clamp-3">
                    {book.historicalContext}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-stone-700">
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-3">
                    <span>Canon</span>
                    <span>{book.services.length} services listed</span>
                  </div>

                  <button
                    onClick={() => onNavigate(`/${book.slug}`)}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs font-semibold hover:bg-stone-800 dark:hover:bg-white transition-colors"
                  >
                    <span>Open {book.shortTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Historical Chronology & Canon Overview */}
      <section className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/30 p-8 sm:p-12">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-4 text-center">
          The Liturgical Tradition
        </h2>
        <p className="font-serif text-sm text-stone-600 dark:text-stone-300 max-w-2xl mx-auto text-center mb-10 leading-relaxed">
          These three volumes represent key milestones in the English-speaking and Reformed liturgical heritage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 rounded-xl bg-white dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
            <span className="font-sans font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-400 block mb-2">
              1662 Restoration
            </span>
            <h3 className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
              The Standard of English Liturgy
            </h3>
            <p className="font-serif text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Revised following the Savoy Conference under King Charles II, the 1662 Book of Common Prayer established the rhythm of daily prayer, canticles, and holy communion that shaped global English-speaking liturgy for centuries.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
            <span className="font-sans font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-400 block mb-2">
              1928 American Revision
            </span>
            <h3 className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
              Culmination of American BCP
            </h3>
            <p className="font-serif text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Approved by the Protestant Episcopal Church in the USA, this edition refined the classical language while restoring the Scottish Eucharistic epiclesis and enriching the pastoral offices and collects.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
            <span className="font-sans font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-400 block mb-2">
              1947 Evangelical & Reformed
            </span>
            <h3 className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
              Reformed-Evangelical Heritage
            </h3>
            <p className="font-serif text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Prepared for the merged Evangelical and Reformed Church, this volume unites the German Reformed heritage of the Palatinate and Mercersburg movements with the biblical devotion of the Evangelical Synod.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
