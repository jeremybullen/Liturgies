import React, { useState, useEffect, useCallback, useRef } from 'react';
import { books, BookInfo, ServiceItem } from './services';
import { LiturgicalReader } from './components/LiturgicalReader';
import { toTitleCase } from './utils/titleCase';
import { ChevronDown, Check, BookOpen, Sun, Moon, Info } from 'lucide-react';
import { AboutModal } from './components/AboutModal';

type BookId = '1662' | '1928' | '1947';

interface RouteState {
  bookId: BookId;
  serviceSlug: string;
}

function parseRoute(): RouteState {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { bookId: '1662', serviceSlug: books['1662'].defaultSlug };
  }

  // Check if first segment is a book identifier
  if (segments[0] === '1928') {
    const slug = segments[1] || books['1928'].defaultSlug;
    return { bookId: '1928', serviceSlug: slug };
  }

  if (segments[0] === '1947') {
    const slug = segments[1] || books['1947'].defaultSlug;
    return { bookId: '1947', serviceSlug: slug };
  }

  if (segments[0] === '1662') {
    const slug = segments[1] || books['1662'].defaultSlug;
    return { bookId: '1662', serviceSlug: slug };
  }

  // Fallback: check if the single slug belongs to 1662
  const slug = segments[0];
  const service1662 = books['1662'].services.find(s => s.slug === slug);
  if (service1662) {
    return { bookId: '1662', serviceSlug: slug };
  }

  // Check 1928
  const service1928 = books['1928'].services.find(s => s.slug === slug);
  if (service1928) {
    return { bookId: '1928', serviceSlug: slug };
  }

  // Check 1947
  const service1947 = books['1947'].services.find(s => s.slug === slug);
  if (service1947) {
    return { bookId: '1947', serviceSlug: slug };
  }

  return { bookId: '1662', serviceSlug: books['1662'].defaultSlug };
}

export function App() {
  const [route, setRoute] = useState<RouteState>(parseRoute);
  const [fontSize, setFontSize] = useState<number>(20); // 20px optimal lectern baseline
  const [isBookMenuOpen, setIsBookMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const FONT_SIZES = [18, 20, 22, 25] as const;
  const cycleFontSize = () => {
    setFontSize(prev => {
      const idx = FONT_SIZES.indexOf(prev as any);
      if (idx === -1 || idx >= FONT_SIZES.length - 1) {
        return FONT_SIZES[0];
      }
      return FONT_SIZES[idx + 1];
    });
  };

  // Dark mode state: persisted in localStorage with fallback to OS preference
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('liturgical_theme');
    if (stored) return stored === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const bookMenuRef = useRef<HTMLDivElement>(null);
  const serviceMenuRef = useRef<HTMLDivElement>(null);

  const currentBook: BookInfo = books[route.bookId];
  const currentService: ServiceItem = currentBook.getServiceBySlug(route.serviceSlug);

  // Sync dark mode class on <html> and <body>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('liturgical_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('liturgical_theme', 'light');
    }
  }, [isDarkMode]);

  // Sync state on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title in Title Case
  useEffect(() => {
    document.title = `${toTitleCase(currentService.shortTitle)} — ${toTitleCase(currentBook.title)}`;
  }, [currentService.shortTitle, currentBook.title]);

  const navigateTo = useCallback((bookId: BookId, slug: string) => {
    setRoute({ bookId, serviceSlug: slug });
    setIsBookMenuOpen(false);
    setIsServiceMenuOpen(false);
    const newPath = `/${bookId}/${slug}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const switchBook = (bookId: BookId) => {
    if (bookId === route.bookId) {
      setIsBookMenuOpen(false);
      return;
    }
    const defaultSlug = books[bookId].defaultSlug;
    navigateTo(bookId, defaultSlug);
  };

  const selectService = (slug: string) => {
    navigateTo(route.bookId, slug);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (bookMenuRef.current && !bookMenuRef.current.contains(e.target as Node)) {
        setIsBookMenuOpen(false);
      }
      if (serviceMenuRef.current && !serviceMenuRef.current.contains(e.target as Node)) {
        setIsServiceMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation & escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBookMenuOpen(false);
        setIsServiceMenuOpen(false);
        return;
      }

      // Don't intercept shortcuts if typing in an input
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      // 'd' key toggles dark mode
      if (e.key === 'd' || e.key === 'D') {
        setIsDarkMode(prev => !prev);
        return;
      }

      const services = currentBook.services;
      const currentIndex = services.findIndex(s => s.slug === currentService.slug);
      if (currentIndex === -1) return;

      if (e.key === 'ArrowRight' || e.key === 'j') {
        if (currentIndex < services.length - 1) {
          selectService(services[currentIndex + 1].slug);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'k') {
        if (currentIndex > 0) {
          selectService(services[currentIndex - 1].slug);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentBook, currentService, route.bookId]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#161513] text-stone-900 dark:text-[#EDE7DD] font-['EB_Garamond',Garamond,serif] selection:bg-[#E8DFC8] dark:selection:bg-[#3E382E] transition-colors duration-200">
      
      {/* Dignified, Tasteful Top Header */}
      <header className="no-print sticky top-0 z-30 bg-[#FAF8F5]/96 dark:bg-[#181715]/96 border-b border-[#DCD5C6] dark:border-[#33302A] backdrop-blur-xs py-2 px-3 sm:px-6 transition-colors duration-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          
          {/* Top Row on Mobile / Left Group on Desktop */}
          <div className="flex items-center justify-between w-full md:w-auto gap-2">
            
            {/* Simple, Tasteful Book Selector */}
            <div className="relative" ref={bookMenuRef}>
              <button
                onClick={() => {
                  setIsBookMenuOpen(prev => !prev);
                  setIsServiceMenuOpen(false);
                }}
                className="group flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-md border border-[#D5CCBA] dark:border-[#3A3730] hover:border-black/40 dark:hover:border-stone-500 bg-[#FAF8F5] dark:bg-[#201E1B] hover:bg-[#F4EFE6] dark:hover:bg-[#2A2824] transition-all text-stone-900 dark:text-[#EDE7DD] cursor-pointer shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20"
                aria-expanded={isBookMenuOpen}
                aria-haspopup="listbox"
                title="Switch liturgical book"
              >
                <BookOpen className="w-4 h-4 text-stone-600 dark:text-stone-400 group-hover:text-black dark:group-hover:text-[#FAF7F0] transition-colors shrink-0" />
                <span className="font-semibold text-sm sm:text-base tracking-wide text-stone-900 dark:text-[#FAF7F0]">
                  {currentBook.title}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-500 dark:text-stone-400 transition-transform duration-200 ml-0.5 shrink-0 ${isBookMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Book Menu Dropdown */}
              {isBookMenuOpen && (
                <>
                  {/* Backdrop for mobile */}
                  <div
                    className="fixed inset-0 bg-black/35 backdrop-blur-2xs z-40 md:hidden"
                    onClick={() => setIsBookMenuOpen(false)}
                  />
                  <div
                    className="fixed inset-x-3 top-14 md:absolute md:inset-x-auto md:top-full md:left-0 md:mt-1.5 md:w-80 bg-[#FAF8F5] dark:bg-[#1E1D1A] border border-[#D5CCBA] dark:border-[#38352F] rounded-lg shadow-2xl z-50 py-1 animate-in fade-in zoom-in-95 duration-100"
                    role="listbox"
                  >
                    {(['1662', '1928', '1947'] as BookId[]).map((id) => {
                      const b = books[id];
                      const isSelected = route.bookId === id;
                      return (
                        <button
                          key={id}
                          onClick={() => switchBook(id)}
                          className={`w-full text-left px-3.5 py-2.5 transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                            isSelected
                              ? 'bg-[#F0EAE0] dark:bg-[#2D2A24] text-black dark:text-[#FAF7F0] font-semibold'
                              : 'hover:bg-[#F5F0E7] dark:hover:bg-[#282622] text-stone-800 dark:text-[#EDE7DD]'
                          }`}
                          role="option"
                          aria-selected={isSelected}
                        >
                          <span className="font-medium text-sm sm:text-base">
                            {b.title}
                          </span>
                          {isSelected && (
                            <Check className="w-4 h-4 text-[#8A211D] dark:text-[#E86558] shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Controls: Single Font Button & Dark Mode (placed on top row for mobile) */}
            <div className="flex md:hidden items-center gap-1.5 shrink-0">
              {/* Single Font Size Cycle Button */}
              <button
                onClick={cycleFontSize}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#D5CCBA] dark:border-[#3A3730] bg-[#FAF8F5] dark:bg-[#201E1B] hover:bg-[#F4EFE6] dark:hover:bg-[#2A2824] hover:border-black/40 dark:hover:border-stone-500 text-stone-800 dark:text-[#EDE7DD] transition-all cursor-pointer shadow-2xs focus:outline-none"
                title={`Font size: ${fontSize}px (click to cycle)`}
                aria-label={`Cycle font size, current is ${fontSize}px`}
              >
                <span className="font-serif font-semibold text-xs tracking-tight select-none">
                  aA
                </span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 font-sans tabular-nums">
                  {fontSize}
                </span>
              </button>

              {/* Dark Mode Switcher */}
              <button
                onClick={() => setIsDarkMode(prev => !prev)}
                className="p-1.5 rounded-md border border-[#D5CCBA] dark:border-[#3A3730] bg-[#FAF8F5] dark:bg-[#201E1B] hover:bg-[#F4EFE6] dark:hover:bg-[#2A2824] text-stone-800 dark:text-[#EDE7DD] transition-all cursor-pointer shadow-2xs focus:outline-none shrink-0"
                title={isDarkMode ? "Switch to Daytime Paper Mode (d)" : "Switch to Night / Lectern Dark Mode (d)"}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                )}
              </button>

              {/* About & Sources Button */}
              <button
                onClick={() => setIsAboutOpen(true)}
                className="p-1.5 rounded-md border border-[#D5CCBA] dark:border-[#3A3730] bg-[#FAF8F5] dark:bg-[#201E1B] hover:bg-[#F4EFE6] dark:hover:bg-[#2A2824] text-stone-800 dark:text-[#EDE7DD] transition-all cursor-pointer shadow-2xs focus:outline-none shrink-0"
                title="About & Sources"
                aria-label="About & Sources"
              >
                <Info className="w-4 h-4 text-stone-700 dark:text-stone-300" />
              </button>
            </div>

          </div>

          {/* Service Selector & Desktop Controls */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            
            {/* Service Dropdown Button (full flexible width on mobile) */}
            <div className="relative flex-1 md:flex-initial" ref={serviceMenuRef}>
              <button
                onClick={() => {
                  setIsServiceMenuOpen(prev => !prev);
                  setIsBookMenuOpen(false);
                }}
                className="w-full md:w-auto group flex items-center justify-between md:justify-start gap-2 px-3 py-1.5 rounded-md border border-[#D5CCBA] dark:border-[#3A3730] hover:border-black/40 dark:hover:border-stone-500 bg-[#FAF8F5] dark:bg-[#201E1B] hover:bg-[#F4EFE6] dark:hover:bg-[#2A2824] transition-all text-stone-900 dark:text-[#EDE7DD] cursor-pointer shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20"
                aria-expanded={isServiceMenuOpen}
                aria-haspopup="listbox"
                title="Select service or office"
              >
                <span className="font-medium text-sm sm:text-base md:max-w-[280px] truncate text-left">
                  {toTitleCase(currentService.shortTitle)}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-500 dark:text-stone-400 transition-transform duration-200 ml-0.5 shrink-0 ${isServiceMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Service Menu Table of Contents Dropdown */}
              {isServiceMenuOpen && (
                <>
                  {/* Backdrop for mobile */}
                  <div
                    className="fixed inset-0 bg-black/35 backdrop-blur-2xs z-40 md:hidden"
                    onClick={() => setIsServiceMenuOpen(false)}
                  />
                  <div
                    className="fixed inset-x-3 top-24 md:absolute md:inset-x-auto md:top-full md:right-0 md:mt-1.5 md:w-80 max-h-[75vh] bg-[#FAF8F5] dark:bg-[#1E1D1A] border border-[#D5CCBA] dark:border-[#38352F] rounded-lg shadow-2xl z-50 flex flex-col animate-in fade-in zoom-in-95 duration-100"
                    role="listbox"
                  >
                    <div className="overflow-y-auto py-1 divide-y divide-[#ECE5D8]/50 dark:divide-[#33302A]/50">
                      {currentBook.services.map((s) => {
                        const isSelected = s.slug === currentService.slug;
                        return (
                          <button
                            key={s.slug}
                            onClick={() => selectService(s.slug)}
                            className={`w-full text-left px-3.5 py-2.5 transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                              isSelected
                                ? 'bg-[#F0EAE0] dark:bg-[#2D2A24] text-black dark:text-[#FAF7F0] font-semibold'
                                : 'hover:bg-[#F5F0E7] dark:hover:bg-[#282622] text-stone-800 dark:text-[#EDE7DD]'
                            }`}
                            role="option"
                            aria-selected={isSelected}
                          >
                            <span className="text-sm sm:text-base leading-snug truncate">
                              {toTitleCase(s.shortTitle)}
                            </span>
                            {isSelected && (
                              <Check className="w-4 h-4 text-[#8A211D] dark:text-[#E86558] shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Desktop Controls: Single Font Size Button & Dark Mode */}
            <div className="hidden md:flex items-center gap-1.5 shrink-0 ml-1">
              {/* Single Font Size Cycle Button */}
              <button
                onClick={cycleFontSize}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#D5CCBA] dark:border-[#3A3730] bg-[#FAF8F5] dark:bg-[#201E1B] hover:bg-[#F4EFE6] dark:hover:bg-[#2A2824] hover:border-black/40 dark:hover:border-stone-500 text-stone-800 dark:text-[#EDE7DD] transition-all cursor-pointer shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20 shrink-0"
                title={`Font size: ${fontSize}px (click to cycle)`}
                aria-label={`Cycle font size, current is ${fontSize}px`}
              >
                <span className="font-serif font-semibold text-xs sm:text-sm tracking-tight select-none">
                  aA
                </span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 font-sans tabular-nums ml-0.5">
                  {fontSize}
                </span>
              </button>

              {/* Dignified Dark Mode Switcher */}
              <button
                onClick={() => setIsDarkMode(prev => !prev)}
                className="p-1.5 rounded-md border border-[#D5CCBA] dark:border-[#3A3730] bg-[#FAF8F5] dark:bg-[#201E1B] hover:bg-[#F4EFE6] dark:hover:bg-[#2A2824] hover:border-black/40 dark:hover:border-stone-500 text-stone-800 dark:text-[#EDE7DD] transition-all cursor-pointer shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20 shrink-0"
                title={isDarkMode ? "Switch to Daytime Paper Mode (d)" : "Switch to Night / Lectern Dark Mode (d)"}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                )}
              </button>

              {/* About & Sources Button */}
              <button
                onClick={() => setIsAboutOpen(true)}
                className="p-1.5 rounded-md border border-[#D5CCBA] dark:border-[#3A3730] bg-[#FAF8F5] dark:bg-[#201E1B] hover:bg-[#F4EFE6] dark:hover:bg-[#2A2824] hover:border-black/40 dark:hover:border-stone-500 text-stone-800 dark:text-[#EDE7DD] transition-all cursor-pointer shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20 shrink-0"
                title="About & Sources"
                aria-label="About & Sources"
              >
                <Info className="w-4 h-4 text-stone-700 dark:text-stone-300" />
              </button>
            </div>

          </div>

        </div>
      </header>

      {/* Main Service Reading Page */}
      <main className="py-4 sm:py-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <LiturgicalReader
            content={currentService.content}
            fontSize={fontSize}
          />
        </div>
      </main>

      {/* About & Sources Dialog */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

    </div>
  );
}
export default App;
