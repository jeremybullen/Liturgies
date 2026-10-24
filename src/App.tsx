import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { books, BookInfo, ServiceItem } from './services';
import { LiturgicalReader } from './components/LiturgicalReader';
import { HomePage } from './components/HomePage';
import { toTitleCase } from './utils/titleCase';
import { ChevronDown, Check, Sun, Moon, Info, Search } from 'lucide-react';
import { AboutModal } from './components/AboutModal';
import { PsalmJumpSelector } from './components/PsalmJumpSelector';
import { PropersJumpSelector } from './components/PropersJumpSelector';
type BookId = '1662' | '1928' | '1947';

interface RouteState {
  isHome: boolean;
  bookId: BookId;
  serviceSlug: string;
}

function parseRoute(): RouteState {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { isHome: true, bookId: '1662', serviceSlug: books['1662'].defaultSlug };
  }

  if (segments[0] === '1928') {
    const slug = segments[1] || books['1928'].defaultSlug;
    return { isHome: false, bookId: '1928', serviceSlug: slug };
  }

  if (segments[0] === '1947') {
    const slug = segments[1] || books['1947'].defaultSlug;
    return { isHome: false, bookId: '1947', serviceSlug: slug };
  }

  if (segments[0] === '1662') {
    const slug = segments[1] || books['1662'].defaultSlug;
    return { isHome: false, bookId: '1662', serviceSlug: slug };
  }

  // Fallback slug match
  const slug = segments[0];
  const service1662 = books['1662'].services.find(s => s.slug === slug);
  if (service1662) return { isHome: false, bookId: '1662', serviceSlug: slug };

  const service1928 = books['1928'].services.find(s => s.slug === slug);
  if (service1928) return { isHome: false, bookId: '1928', serviceSlug: slug };

  const service1947 = books['1947'].services.find(s => s.slug === slug);
  if (service1947) return { isHome: false, bookId: '1947', serviceSlug: slug };

  return { isHome: true, bookId: '1662', serviceSlug: books['1662'].defaultSlug };
}

export function App() {
  const [route, setRoute] = useState<RouteState>(parseRoute);
  const fontSize = 18;
  const [isBookMenuOpen, setIsBookMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isPsalmJumpOpen, setIsPsalmJumpOpen] = useState(false);
  const [activeJumpLabel, setActiveJumpLabel] = useState<string | null>(null);
  const [isPropersJumpOpen, setIsPropersJumpOpen] = useState(false);
  const [activeProperLabel, setActiveProperLabel] = useState<string | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const lastScrollYRef = useRef(0);
  const bookMenuRef = useRef<HTMLDivElement>(null);
  const serviceMenuRef = useRef<HTMLDivElement>(null);
  const psalmJumpRef = useRef<HTMLDivElement>(null);
  const propersJumpRef = useRef<HTMLDivElement>(null);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('liturgical_theme');
    if (stored) return stored === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const currentBook: BookInfo = books[route.bookId];
  const currentService: ServiceItem = currentBook.getServiceBySlug(route.serviceSlug);
  const isService = currentService.isService !== undefined
    ? currentService.isService
    : (currentService.category !== 'Prefaces & Tables' && currentService.slug !== 'preface' && !currentService.slug.includes('preface'));

  // Scroll detection: hide header when scrolling down, reveal when scrolling up or at top
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollYRef.current;

          // Always show when near the very top of the page
          if (currentScrollY <= 30) {
            setIsHeaderVisible(true);
          } else if (isBookMenuOpen || isServiceMenuOpen || isPsalmJumpOpen || isAboutOpen) {
            setIsHeaderVisible(true);
          } else if (delta > 8 && currentScrollY > 60) {
            setIsHeaderVisible(false);
          } else if (delta < -6) {
            setIsHeaderVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBookMenuOpen, isServiceMenuOpen, isPsalmJumpOpen, isAboutOpen]);

  // Sync dark mode class
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

  // Sync state on popstate
  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title
  useEffect(() => {
    if (route.isHome) {
      document.title = 'Liturgies — as approved for use in the E&R Synod';
    } else {
      document.title = `${toTitleCase(currentService.shortTitle)} — ${toTitleCase(currentBook.title)}`;
    }
  }, [route.isHome, currentService.shortTitle, currentBook.title]);

  const navigateToHome = useCallback(() => {
    setRoute({ isHome: true, bookId: '1662', serviceSlug: books['1662'].defaultSlug });
    setIsBookMenuOpen(false);
    setIsServiceMenuOpen(false);
    setIsPsalmJumpOpen(false);
    setIsPropersJumpOpen(false);
    setActiveJumpLabel(null);
    setActiveProperLabel(null);
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateTo = useCallback((bookId: BookId, slug: string) => {
    setRoute({ isHome: false, bookId, serviceSlug: slug });
    setIsBookMenuOpen(false);
    setIsServiceMenuOpen(false);
    setIsPsalmJumpOpen(false);
    setIsPropersJumpOpen(false);
    setActiveJumpLabel(null);
    setActiveProperLabel(null);
    const newPath = `/${bookId}/${slug}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const switchBook = (bookId: BookId) => {
    if (bookId === route.bookId && !route.isHome) {
      setIsBookMenuOpen(false);
      return;
    }
    const defaultSlug = books[bookId].defaultSlug;
    navigateTo(bookId, defaultSlug);
  };

  const selectService = (slug: string) => {
    navigateTo(route.bookId, slug);
  };

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (bookMenuRef.current && !bookMenuRef.current.contains(e.target as Node)) {
        setIsBookMenuOpen(false);
      }
      if (serviceMenuRef.current && !serviceMenuRef.current.contains(e.target as Node)) {
        setIsServiceMenuOpen(false);
      }
      if (psalmJumpRef.current && !psalmJumpRef.current.contains(e.target as Node)) {
        setIsPsalmJumpOpen(false);
      }
      if (propersJumpRef.current && !propersJumpRef.current.contains(e.target as Node)) {
        setIsPropersJumpOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle URL hash jumping for Psalter or Propers on load or route change
  useEffect(() => {
    if ((currentService.slug === 'the-psalter' || currentService.slug === 'collects-epistles-gospels') && window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          el.classList.add('psalm-highlight');
          setTimeout(() => el.classList.remove('psalm-highlight'), 2200);
        }
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [currentService.slug]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'Escape') {
        setIsBookMenuOpen(false);
        setIsServiceMenuOpen(false);
        setIsPsalmJumpOpen(false);
        setIsPropersJumpOpen(false);
        setIsAboutOpen(false);
        return;
      }

      if (e.key === 'd' || e.key === 'D') {
        setIsDarkMode(prev => !prev);
        return;
      }

      if (route.isHome) return;

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
  }, [currentBook, currentService, route.bookId, route.isHome, isService]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#161513] text-stone-900 dark:text-[#EDE7DD] font-['EB_Garamond',Garamond,serif] selection:bg-[#E8DFC8] dark:selection:bg-[#3E382E] transition-colors duration-200">
      
      {/* Quiet, Typographic Running Header with Scroll-Aware Auto-Hide (Active during service reading) */}
      {!route.isHome && (
        <header
          className={`no-print sticky top-0 z-30 bg-[#FAF8F5]/95 dark:bg-[#181715]/95 border-b border-[#E8E2D5] dark:border-[#2D2A24] backdrop-blur-xs py-2 px-3 sm:px-6 transform transition-transform duration-300 ease-in-out ${
            isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="max-w-4xl lg:max-w-5xl mx-auto flex items-center justify-between gap-1.5 sm:gap-3 w-full">
            
            {/* Typographic Running Header: Home / Book · Service */}
            <div className="flex items-center gap-1 sm:gap-1.5 min-w-0 flex-1 font-serif text-sm sm:text-base">
              
              {/* Home Link (Cross symbol only) */}
              <button
                onClick={navigateToHome}
                className="inline-flex items-center justify-center p-1 sm:p-1.5 rounded transition-colors cursor-pointer select-none shrink-0 text-stone-600 dark:text-stone-300 hover:text-[#8A211D] dark:hover:text-[#E86558] hover:bg-[#EFE9DC] dark:hover:bg-[#282622]"
                title="Return to Library Home"
                aria-label="Return to Library Home"
              >
                <span className="text-base select-none leading-none">✠</span>
              </button>

              <span className="text-stone-400 dark:text-stone-600 select-none shrink-0">/</span>

              {/* Book Selector */}
              <div className="relative shrink-0" ref={bookMenuRef}>
                <button
                  onClick={() => {
                    setIsBookMenuOpen(prev => !prev);
                    setIsServiceMenuOpen(false);
                    setIsPsalmJumpOpen(false);
                    setIsPropersJumpOpen(false);
                  }}
                  className="inline-flex items-center gap-0.5 sm:gap-1 py-1 px-1 sm:px-1.5 rounded hover:bg-[#EFE9DC] dark:hover:bg-[#282622] transition-colors cursor-pointer select-none text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100"
                  aria-expanded={isBookMenuOpen}
                  aria-haspopup="listbox"
                  title="Select Book"
                >
                  <span className="hidden sm:inline font-medium">{currentBook.title}</span>
                  <span className="sm:hidden font-medium text-xs xs:text-sm">{route.bookId}</span>
                  <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-150 ${isBookMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {isBookMenuOpen && (
                  <div
                    className="absolute top-full left-0 mt-1.5 w-64 max-w-[calc(100vw-2rem)] bg-[#FAF8F5] dark:bg-[#1E1D1A] border border-[#D5CCBA] dark:border-[#38352F] rounded-md shadow-2xl py-1 z-50 font-serif"
                    role="listbox"
                  >
                    {(['1662', '1928', '1947'] as BookId[]).map((id) => {
                      const b = books[id];
                      const isSelected = route.bookId === id && !route.isHome;
                      return (
                        <button
                          key={id}
                          onClick={() => switchBook(id)}
                          className={`w-full text-left px-3 py-2 text-sm flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#EFE9DC] dark:bg-[#2B2925] font-semibold text-stone-900 dark:text-[#FAF7F0]'
                              : 'hover:bg-[#F5F0E7] dark:hover:bg-[#24221E] text-stone-700 dark:text-stone-300'
                          }`}
                          role="option"
                          aria-selected={isSelected}
                        >
                          <span>{b.title}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#8A211D] dark:text-[#E86558] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <span className="text-stone-400 dark:text-stone-600 select-none shrink-0">/</span>

              {/* Service Selector */}
              <div className="relative min-w-0 max-w-[140px] xs:max-w-[180px] sm:max-w-[220px]" ref={serviceMenuRef}>
                <button
                  onClick={() => {
                    setIsServiceMenuOpen(prev => !prev);
                    setIsBookMenuOpen(false);
                    setIsPsalmJumpOpen(false);
                    setIsPropersJumpOpen(false);
                  }}
                  className="inline-flex items-center gap-0.5 sm:gap-1 py-1 px-1 sm:px-1.5 rounded hover:bg-[#EFE9DC] dark:hover:bg-[#282622] text-stone-900 dark:text-[#FAF7F0] font-semibold transition-colors cursor-pointer min-w-0 select-none"
                  aria-expanded={isServiceMenuOpen}
                  aria-haspopup="listbox"
                  title="Select Service"
                >
                  <span className="truncate min-w-0 text-left text-xs xs:text-sm sm:text-base">
                    {currentService.shortTitle || currentService.title}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 opacity-60 shrink-0 transition-transform duration-150 ${isServiceMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServiceMenuOpen && (
                  <div
                    className="absolute top-full left-0 mt-1.5 w-60 sm:w-64 max-w-[calc(100vw-2rem)] max-h-[75vh] overflow-y-auto bg-[#FAF8F5] dark:bg-[#1E1D1A] border border-[#D5CCBA] dark:border-[#38352F] rounded-md shadow-2xl py-1 z-50 font-serif"
                    role="listbox"
                  >
                    {currentBook.services.map((s) => {
                      const isSelected = s.slug === currentService.slug;
                      return (
                        <button
                          key={s.slug}
                          onClick={() => selectService(s.slug)}
                          className={`w-full text-left px-3 py-1.5 text-sm flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#EFE9DC] dark:bg-[#2B2925] font-semibold text-stone-900 dark:text-[#FAF7F0]'
                              : 'hover:bg-[#F5F0E7] dark:hover:bg-[#24221E] text-stone-700 dark:text-stone-300'
                          }`}
                          role="option"
                          aria-selected={isSelected}
                        >
                          <span className="truncate flex-1">{s.shortTitle || s.title}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#8A211D] dark:text-[#E86558] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Jump to Psalm selector when reading The Psalter */}
              {currentService.slug === 'the-psalter' && (
                <div className="flex items-center ml-2.5 sm:ml-4 pl-2.5 sm:pl-3.5 border-l border-[#D5CCBA] dark:border-[#38352F] shrink-0" ref={psalmJumpRef}>
                  <div className="relative">
                    <button
                      onClick={() => {
                        setIsPsalmJumpOpen(prev => !prev);
                        setIsBookMenuOpen(false);
                        setIsServiceMenuOpen(false);
                      }}
                      className="inline-flex items-center gap-1.5 py-1 px-2 sm:px-2.5 rounded border border-[#D5CCBA] dark:border-[#38352F] bg-[#F4EFE6] dark:bg-[#22201C] hover:bg-[#EFE9DC] dark:hover:bg-[#2B2925] text-stone-800 dark:text-stone-200 transition-colors cursor-pointer select-none text-xs font-medium shrink-0 shadow-2xs"
                      title="Jump directly to any Psalm by number (1 to 150)"
                      aria-label="Jump to Psalm"
                      aria-expanded={isPsalmJumpOpen}
                      aria-haspopup="dialog"
                    >
                      <Search className="w-3 h-3 text-[#8A211D] dark:text-[#E86558]" />
                      <span className="truncate max-w-[85px] sm:max-w-none">
                        {activeJumpLabel || 'Psalm #'}
                      </span>
                      <ChevronDown className={`w-3 h-3 opacity-60 transition-transform duration-150 ${isPsalmJumpOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <PsalmJumpSelector
                      isOpen={isPsalmJumpOpen}
                      onClose={() => setIsPsalmJumpOpen(false)}
                      onSelectTarget={(targetId, label) => {
                        setActiveJumpLabel(label);
                        setIsPsalmJumpOpen(false);
                        const el = document.getElementById(targetId);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          el.classList.add('psalm-highlight');
                          setTimeout(() => el.classList.remove('psalm-highlight'), 2200);
                          if (window.history.pushState) {
                            window.history.pushState(null, '', `#${targetId}`);
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Jump to Day selector when reading Collects, Epistles, and Gospels */}
              {currentService.slug === 'collects-epistles-gospels' && (
                <div className="flex items-center ml-2.5 sm:ml-4 pl-2.5 sm:pl-3.5 border-l border-[#D5CCBA] dark:border-[#38352F] shrink-0" ref={propersJumpRef}>
                  <div className="relative">
                    <button
                      onClick={() => {
                        setIsPropersJumpOpen(prev => !prev);
                        setIsBookMenuOpen(false);
                        setIsServiceMenuOpen(false);
                        setIsPsalmJumpOpen(false);
                      }}
                      className="inline-flex items-center gap-1.5 py-1 px-2 sm:px-2.5 rounded border border-[#D5CCBA] dark:border-[#38352F] bg-[#F4EFE6] dark:bg-[#22201C] hover:bg-[#EFE9DC] dark:hover:bg-[#2B2925] text-stone-800 dark:text-stone-200 transition-colors cursor-pointer select-none text-xs font-medium shrink-0 shadow-2xs"
                      title="Jump directly to any Sunday or Holy Day"
                      aria-label="Jump to Sunday or Holy Day"
                      aria-expanded={isPropersJumpOpen}
                      aria-haspopup="dialog"
                    >
                      <Search className="w-3 h-3 text-[#8A211D] dark:text-[#E86558]" />
                      <span className="truncate max-w-[95px] sm:max-w-none">
                        {activeProperLabel || 'Day / Feast'}
                      </span>
                      <ChevronDown className={`w-3 h-3 opacity-60 transition-transform duration-150 ${isPropersJumpOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <PropersJumpSelector
                      isOpen={isPropersJumpOpen}
                      onClose={() => setIsPropersJumpOpen(false)}
                      bookId={route.bookId}
                      onSelectTarget={(targetId, label) => {
                        setActiveProperLabel(label);
                        setIsPropersJumpOpen(false);
                        const el = document.getElementById(targetId);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          el.classList.add('psalm-highlight');
                          setTimeout(() => el.classList.remove('psalm-highlight'), 2200);
                          if (window.history.pushState) {
                            window.history.pushState(null, '', `#${targetId}`);
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              )}

            </div>

            {/* Right-Hand Controls: Dark Mode, Info */}
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 pl-1 z-10 bg-[#FAF8F5]/95 dark:bg-[#181715]/95">

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(prev => !prev)}
                className="p-1 sm:p-1.5 rounded hover:bg-[#EFE9DC] dark:hover:bg-[#282622] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer shrink-0"
                title="Toggle dark mode (d)"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* About & Sources */}
              <button
                onClick={() => setIsAboutOpen(true)}
                className="p-1 sm:p-1.5 rounded hover:bg-[#EFE9DC] dark:hover:bg-[#282622] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer shrink-0"
                title="About & Sources"
                aria-label="About & Sources"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>

          </div>
        </header>
      )}

      {/* Main Content Area */}
      {route.isHome ? (
        <main className="pb-16 sm:pb-24">
          <HomePage
            onNavigate={navigateTo}
            onOpenAbout={() => setIsAboutOpen(true)}
            isDarkMode={isDarkMode}
            onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
          />
        </main>
      ) : (
        <main className="py-4 sm:py-8 pb-20">
          <div className="max-w-3xl mx-auto">
            <LiturgicalReader
              content={currentService.content}
              fontSize={fontSize}
              category={currentService.category}
              isService={isService}
            />
          </div>
        </main>
      )}

      {/* About & Sources Dialog */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

    </div>
  );
}

export default App;
