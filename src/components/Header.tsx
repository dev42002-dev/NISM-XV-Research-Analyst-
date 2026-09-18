import React from 'react';
import { Lock, ShieldCheck, BookOpen, Home } from 'lucide-react';
import { QuizView } from '../types';

interface HeaderProps {
  isAdvancedUnlocked: boolean;
  onOpenUnlockModal: () => void;
  currentView: QuizView;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isAdvancedUnlocked,
  onOpenUnlockModal,
  currentView,
  onGoHome,
}) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-2">
        <div className="flex items-center justify-between gap-2.5 sm:gap-4">
          {/* Title Area (Clickable to go home/landing) */}
          <div 
            onClick={onGoHome}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onGoHome();
              }
            }}
            className="flex items-center gap-2.5 sm:gap-3 min-w-0 cursor-pointer group select-none"
            role="button"
            tabIndex={0}
            title="Return to Home"
          >
            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/25 transition-colors">
              <BookOpen className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[9px] sm:text-xs font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/90 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-800/70 shrink-0">
                  NISM SERIES XV
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 hidden sm:inline truncate">
                  • Feb 2026 Edition
                </span>
              </div>
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight leading-tight truncate group-hover:text-emerald-300 transition-colors">
                RESEARCH ANALYST PRACTICE TEST
              </h1>
            </div>
          </div>

          {/* Right Area: Home link & Status / Unlock button */}
          <div className="flex items-center gap-2 shrink-0">
            {currentView !== 'landing' && (
              <button
                type="button"
                onClick={onGoHome}
                className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                title="Home / Start Screen"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
            )}

            <div className="text-right hidden md:block">
              <div className="text-xs font-semibold text-slate-200">
                80 Questions <span className="text-emerald-400">(40 Free + 40 Advanced)</span>
              </div>
              <div className="text-[11px] text-slate-400">
                {isAdvancedUnlocked ? "Full 80-Question Bank Unlocked" : "40 Free Active • 40 Locked"}
              </div>
            </div>

            {isAdvancedUnlocked ? (
              <div className="flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 text-xs font-bold px-2.5 sm:px-3 py-2 rounded-lg border border-emerald-500/30 min-h-[40px] sm:min-h-[44px]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">✓ ADVANCED UNLOCKED</span>
                <span className="sm:hidden text-xs">✓ Unlocked</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={onOpenUnlockModal}
                className="flex items-center gap-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold px-3 sm:px-3.5 py-2 rounded-lg border border-amber-500/40 transition-colors cursor-pointer min-h-[40px] sm:min-h-[44px] shadow-2xs"
                title="Unlock Advanced 40 Questions"
              >
                <Lock className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">UNLOCK ADVANCED 40</span>
              </button>
            )}
          </div>
        </div>

        {/* Sub-bar for mobile: compact single-line information */}
        <div className="mt-2 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-xs text-slate-400 md:hidden">
          <span className="truncate">40 Free + 40 Advanced Questions</span>
          <span className="text-emerald-400 font-medium shrink-0 ml-2">
            {isAdvancedUnlocked ? "80 Available" : "Questions 1–40 Active"}
          </span>
        </div>
      </div>
    </header>
  );
};
