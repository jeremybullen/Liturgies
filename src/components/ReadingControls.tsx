import React from 'react';
import { ReadingSettings } from '../types/liturgy';
import { X, Check } from 'lucide-react';

interface ReadingControlsProps {
  settings: ReadingSettings;
  onUpdateSettings: (newSettings: Partial<ReadingSettings>) => void;
  onClose: () => void;
}

export const ReadingControls: React.FC<ReadingControlsProps> = ({
  settings,
  onUpdateSettings,
  onClose
}) => {
  return (
    <div className="border-b border-stone-200 dark:border-stone-800 bg-stone-100/95 dark:bg-stone-900/95 backdrop-blur-md px-4 py-4 sm:px-6 transition-colors animate-in fade-in slide-in-from-top-2 duration-150">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Left: Settings grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
          
          {/* Theme Option */}
          <div>
            <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
              Paper / Theme
            </label>
            <div className="flex rounded-md shadow-xs border border-stone-200 dark:border-stone-700 p-0.5 bg-white dark:bg-stone-800">
              <button
                onClick={() => onUpdateSettings({ theme: 'parchment' })}
                className={`flex-1 px-2.5 py-1 text-xs rounded transition-colors ${
                  settings.theme === 'parchment' 
                    ? 'bg-[#F4ECE1] text-amber-950 font-medium shadow-xs' 
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
                }`}
              >
                Parchment
              </button>
              <button
                onClick={() => onUpdateSettings({ theme: 'alabaster' })}
                className={`flex-1 px-2.5 py-1 text-xs rounded transition-colors ${
                  settings.theme === 'alabaster' 
                    ? 'bg-white text-stone-950 font-medium shadow-xs border border-stone-200' 
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
                }`}
              >
                White
              </button>
              <button
                onClick={() => onUpdateSettings({ theme: 'night' })}
                className={`flex-1 px-2.5 py-1 text-xs rounded transition-colors ${
                  settings.theme === 'night' 
                    ? 'bg-stone-950 text-stone-100 font-medium shadow-xs' 
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
                }`}
              >
                Night
              </button>
            </div>
          </div>

          {/* Type Size */}
          <div>
            <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
              Type Size
            </label>
            <div className="flex rounded-md shadow-xs border border-stone-200 dark:border-stone-700 p-0.5 bg-white dark:bg-stone-800">
              {(['small', 'medium', 'large', 'xlarge'] as const).map((sz) => (
                <button
                  key={sz}
                  onClick={() => onUpdateSettings({ fontSize: sz })}
                  className={`flex-1 py-1 text-xs capitalize rounded transition-colors ${
                    settings.fontSize === sz 
                      ? 'bg-stone-200 dark:bg-stone-700 text-stone-900 dark:text-white font-medium' 
                      : 'text-stone-500 dark:text-stone-400 hover:text-stone-900'
                  }`}
                  title={`${sz} text`}
                >
                  {sz === 'small' ? 'S' : sz === 'medium' ? 'M' : sz === 'large' ? 'L' : 'XL'}
                </button>
              ))}
            </div>
          </div>

          {/* Rubric Styling */}
          <div>
            <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
              Rubric Color
            </label>
            <div className="flex rounded-md shadow-xs border border-stone-200 dark:border-stone-700 p-0.5 bg-white dark:bg-stone-800">
              <button
                onClick={() => onUpdateSettings({ rubricColor: 'crimson' })}
                className={`flex-1 px-2 py-1 text-xs rounded flex items-center justify-center gap-1.5 transition-colors ${
                  settings.rubricColor === 'crimson' 
                    ? 'bg-red-50 text-red-800 dark:bg-red-950/60 dark:text-red-300 font-medium' 
                    : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-700 inline-block" />
                Crimson
              </button>
              <button
                onClick={() => onUpdateSettings({ rubricColor: 'charcoal' })}
                className={`flex-1 px-2 py-1 text-xs rounded flex items-center justify-center gap-1.5 transition-colors ${
                  settings.rubricColor === 'charcoal' 
                    ? 'bg-stone-200 dark:bg-stone-700 text-stone-900 dark:text-white font-medium' 
                    : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-stone-500 inline-block" />
                Charcoal
              </button>
            </div>
          </div>

          {/* Column Measure */}
          <div>
            <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
              Page Width
            </label>
            <div className="flex rounded-md shadow-xs border border-stone-200 dark:border-stone-700 p-0.5 bg-white dark:bg-stone-800">
              <button
                onClick={() => onUpdateSettings({ measureWidth: 'standard' })}
                className={`flex-1 px-2.5 py-1 text-xs rounded transition-colors ${
                  settings.measureWidth === 'standard' 
                    ? 'bg-stone-200 dark:bg-stone-700 text-stone-900 dark:text-white font-medium' 
                    : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => onUpdateSettings({ measureWidth: 'wide' })}
                className={`flex-1 px-2.5 py-1 text-xs rounded transition-colors ${
                  settings.measureWidth === 'wide' 
                    ? 'bg-stone-200 dark:bg-stone-700 text-stone-900 dark:text-white font-medium' 
                    : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                Wide
              </button>
            </div>
          </div>

        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="self-end md:self-center p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded-md transition-colors"
          title="Close Settings"
        >
          <X className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
