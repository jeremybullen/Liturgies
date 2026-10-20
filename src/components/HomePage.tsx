import React from 'react';
import { Info, Sun, Moon } from 'lucide-react';

interface HomePageProps {
  onNavigate: (bookId: '1662' | '1928' | '1947', slug: string) => void;
  onOpenAbout: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAbout,
  isDarkMode,
  onToggleDarkMode,
}) => {
  return (
    <div className="py-6 sm:py-10 px-4 max-w-4xl mx-auto">
      
      {/* Top Utility Controls */}
      <div className="flex justify-end items-center gap-1 mb-8 sm:mb-12 text-stone-600 dark:text-stone-400">
        <button
          onClick={onToggleDarkMode}
          className="p-1.5 rounded hover:bg-[#EFE9DC] dark:hover:bg-[#282622] hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
          title="Toggle dark mode (d)"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
        </button>

        <button
          onClick={onOpenAbout}
          className="p-1.5 rounded hover:bg-[#EFE9DC] dark:hover:bg-[#282622] hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
          title="About & Sources"
          aria-label="About & Sources"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>

      {/* Main Header */}
      <header className="text-center mb-10 sm:mb-14">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 dark:text-[#FAF7F0] tracking-tight mb-2.5">
          Liturgies
        </h1>
        <p className="text-sm sm:text-base font-serif italic text-stone-600 dark:text-stone-400">
          as approved for use in the E&amp;R Synod
        </p>
      </header>

      {/* The Three Books */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        
        {/* 1662 */}
        <div className="bg-[#FAF8F5] dark:bg-[#1C1B18] border border-[#D5CCBA] dark:border-[#38352F] rounded-lg p-6 flex flex-col justify-between hover:border-[#8A211D]/50 dark:hover:border-[#E86558]/50 transition-colors shadow-xs">
          <div>
            <button
              onClick={() => onNavigate('1662', 'morning-prayer')}
              className="w-full text-center group cursor-pointer pb-3 border-b border-[#E8E2D5] dark:border-[#2E2B25]"
            >
              <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-[#FAF7F0] group-hover:text-[#8A211D] dark:group-hover:text-[#E86558] transition-colors leading-snug">
                1662 Book of Common Prayer
              </h2>
            </button>

            <div className="pt-3 space-y-1 text-sm font-serif">
              {[
                { title: 'Morning Prayer', slug: 'morning-prayer' },
                { title: 'Evening Prayer', slug: 'evening-prayer' },
                { title: 'Holy Communion', slug: 'holy-communion' },
                { title: 'The Litany', slug: 'litany' },
                { title: 'The Psalter', slug: 'the-psalter' }
              ].map((s) => (
                <button
                  key={s.slug}
                  onClick={() => onNavigate('1662', s.slug)}
                  className="block w-full py-1 px-2 rounded hover:bg-[#F2ECE1] dark:hover:bg-[#282622] text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer text-center"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 1928 */}
        <div className="bg-[#FAF8F5] dark:bg-[#1C1B18] border border-[#D5CCBA] dark:border-[#38352F] rounded-lg p-6 flex flex-col justify-between hover:border-[#8A211D]/50 dark:hover:border-[#E86558]/50 transition-colors shadow-xs">
          <div>
            <button
              onClick={() => onNavigate('1928', 'morning-prayer')}
              className="w-full text-center group cursor-pointer pb-3 border-b border-[#E8E2D5] dark:border-[#2E2B25]"
            >
              <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-[#FAF7F0] group-hover:text-[#8A211D] dark:group-hover:text-[#E86558] transition-colors leading-snug">
                1928 Book of Common Prayer
              </h2>
            </button>

            <div className="pt-3 space-y-1 text-sm font-serif">
              {[
                { title: 'Morning Prayer', slug: 'morning-prayer' },
                { title: 'Evening Prayer', slug: 'evening-prayer' },
                { title: 'Holy Communion', slug: 'holy-communion' },
                { title: 'The Litany', slug: 'litany' },
                { title: 'The Psalter', slug: 'the-psalter' }
              ].map((s) => (
                <button
                  key={s.slug}
                  onClick={() => onNavigate('1928', s.slug)}
                  className="block w-full py-1 px-2 rounded hover:bg-[#F2ECE1] dark:hover:bg-[#282622] text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer text-center"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 1947 */}
        <div className="bg-[#FAF8F5] dark:bg-[#1C1B18] border border-[#D5CCBA] dark:border-[#38352F] rounded-lg p-6 flex flex-col justify-between hover:border-[#8A211D]/50 dark:hover:border-[#E86558]/50 transition-colors shadow-xs">
          <div>
            <button
              onClick={() => onNavigate('1947', 'order-of-worship')}
              className="w-full text-center group cursor-pointer pb-3 border-b border-[#E8E2D5] dark:border-[#2E2B25]"
            >
              <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-[#FAF7F0] group-hover:text-[#8A211D] dark:group-hover:text-[#E86558] transition-colors leading-snug">
                1947 Book of Worship
              </h2>
            </button>

            <div className="pt-3 space-y-1 text-sm font-serif">
              {[
                { title: 'Order of Worship', slug: 'order-of-worship' },
                { title: 'Holy Communion', slug: 'holy-communion' },
                { title: 'Morning Worship', slug: 'morning-worship' },
                { title: 'Evening Service', slug: 'evening-service' },
                { title: 'The Litany', slug: 'the-litany' }
              ].map((s) => (
                <button
                  key={s.slug}
                  onClick={() => onNavigate('1947', s.slug)}
                  className="block w-full py-1 px-2 rounded hover:bg-[#F2ECE1] dark:hover:bg-[#282622] text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer text-center"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* About & Sources */}
      <footer className="text-center pt-6 border-t border-[#E8E2D5] dark:border-[#2D2A24] text-xs font-serif text-stone-500 dark:text-stone-400">
        <button
          onClick={onOpenAbout}
          className="inline-flex items-center gap-1.5 text-[#8A211D] dark:text-[#E86558] hover:underline cursor-pointer font-medium"
        >
          <Info className="w-3.5 h-3.5" />
          <span>About &amp; Sources</span>
        </button>
      </footer>

    </div>
  );
};


