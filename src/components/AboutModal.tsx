import React, { useEffect } from 'react';
import { X, ExternalLink, BookOpen } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
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
        aria-labelledby="about-modal-title"
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-[#FAF8F5] dark:bg-[#1E1D1A] border border-[#D5CCBA] dark:border-[#38352F] rounded-lg shadow-2xl p-5 sm:p-7 text-stone-900 dark:text-[#EDE7DD] z-10 animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#ECE5D8] dark:border-[#33302A]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#8A211D] dark:text-[#E86558]" />
            <h2 id="about-modal-title" className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-[#FAF7F0] tracking-wide">
              About &amp; Sources
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#F2ECE1] dark:hover:bg-[#2A2824] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
            aria-label="Close about dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-5 text-stone-800 dark:text-[#E2DDD5] leading-relaxed text-base">
          <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300">
            These are the liturgies approved in the Evangelical &amp; Reformed Synod.
          </p>

          <div className="space-y-4">
            {/* 1662 */}
            <div className="p-3.5 rounded-md bg-[#F4EFE6]/60 dark:bg-[#262420] border border-[#E4DCCE] dark:border-[#38352F] space-y-1.5">
              <div className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-[#FAF7F0]">
                1662 Book of Common Prayer
              </div>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                The 1662 source is the statutory book, Americanized according to Sparks and Long, with the 1662 lectionary added back.
              </p>
              <div className="pt-0.5 flex flex-col gap-1.5 text-xs sm:text-sm">
                <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  Statutory Prayer Book source:
                </div>
                <a
                  href="https://justus.anglican.org/resources/bcp/1662/statutory.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#8A211D] dark:text-[#E86558] hover:underline font-medium break-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  https://justus.anglican.org/resources/bcp/1662/statutory.htm
                </a>
                <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 pt-1">
                  Americanized according to Sparks and Long:
                </div>
                <a
                  href="https://danielsparks.com/how-to-use-the-1662-book-of-common-prayer-in-the-united-states/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#8A211D] dark:text-[#E86558] hover:underline font-medium break-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  How to Use the 1662 Book of Common Prayer in the United States (Sparks &amp; Long)
                </a>
              </div>
            </div>

            {/* 1928 */}
            <div className="p-3.5 rounded-md bg-[#F4EFE6]/60 dark:bg-[#262420] border border-[#E4DCCE] dark:border-[#38352F] space-y-1.5">
              <div className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-[#FAF7F0]">
                1928 Book of Common Prayer
              </div>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                From the Society of Archbishop Justus:
              </p>
              <div className="pt-0.5 text-xs sm:text-sm">
                <a
                  href="https://justus.anglican.org/resources/bcp/1928/BCP_1928.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#8A211D] dark:text-[#E86558] hover:underline font-medium break-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  https://justus.anglican.org/resources/bcp/1928/BCP_1928.htm
                </a>
              </div>
            </div>

            {/* 1947 */}
            <div className="p-3.5 rounded-md bg-[#F4EFE6]/60 dark:bg-[#262420] border border-[#E4DCCE] dark:border-[#38352F] space-y-1.5">
              <div className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-[#FAF7F0]">
                1947 Book of Worship
              </div>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                *Book of Worship Approved for Use in the Evangelical and Reformed Church*, digitized on Internet Archive:
              </p>
              <div className="pt-0.5 text-xs sm:text-sm">
                <a
                  href="https://archive.org/details/bookofworshipapp0000evan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#8A211D] dark:text-[#E86558] hover:underline font-medium break-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  https://archive.org/details/bookofworshipapp0000evan/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
