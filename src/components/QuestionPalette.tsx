import React, { useState } from 'react';
import { Lock, Bookmark, ChevronRight, ChevronDown, ChevronUp, LayoutGrid } from 'lucide-react';
import { OptionKey } from '../types';

interface QuestionPaletteProps {
  totalQuestions: number;
  freeCount: number;
  isAdvancedUnlocked: boolean;
  currentIndex: number;
  userAnswers: Record<string, OptionKey>;
  markedQuestions?: Record<string, boolean>;
  questionIds: string[];
  onSelectIndex: (index: number) => void;
  onOpenUnlockModal: () => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  totalQuestions,
  freeCount,
  isAdvancedUnlocked,
  currentIndex,
  userAnswers,
  markedQuestions = {},
  questionIds,
  onSelectIndex,
  onOpenUnlockModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'free' | 'advanced'>('all');
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const answeredCount = Object.keys(userAnswers).length;
  const markedCount = Object.values(markedQuestions).filter(Boolean).length;
  const unansweredCount = Math.max(0, totalQuestions - answeredCount);

  // Determine question indices to display based on tab
  const displayedIndices = Array.from({ length: totalQuestions })
    .map((_, i) => i)
    .filter((index) => {
      if (activeTab === 'free') return index < freeCount;
      if (activeTab === 'advanced') return index >= freeCount;
      return true;
    });

  // Helper to jump to next unanswered
  const handleJumpNextUnanswered = () => {
    const nextUnanswered = Array.from({ length: totalQuestions }).findIndex((_, idx) => {
      const qId = questionIds[idx];
      const isLocked = !isAdvancedUnlocked && idx >= freeCount;
      return !isLocked && !userAnswers[qId] && idx > currentIndex;
    });

    if (nextUnanswered !== -1) {
      onSelectIndex(nextUnanswered);
      return;
    }

    // wrap around from 0
    const firstUnanswered = Array.from({ length: totalQuestions }).findIndex((_, idx) => {
      const qId = questionIds[idx];
      const isLocked = !isAdvancedUnlocked && idx >= freeCount;
      return !isLocked && !userAnswers[qId];
    });

    if (firstUnanswered !== -1) {
      onSelectIndex(firstUnanswered);
    }
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xs">
      {/* Header & Stats Strip with Mobile Collapse Toggle */}
      <div className="flex items-center justify-between pb-3 mb-2.5 border-b border-slate-100 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
            <LayoutGrid className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Question Palette
            </h3>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
              Jump to any question instantly
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 ml-auto">
          {/* Mobile Collapsible Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileCollapsed(prev => !prev)}
            className="lg:hidden text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg border border-slate-200/80 transition-colors flex items-center gap-1 cursor-pointer min-h-[36px]"
            title={isMobileCollapsed ? "Expand Question Palette" : "Collapse Question Palette"}
          >
            <span>{isMobileCollapsed ? "Show Palette" : "Collapse"}</span>
            {isMobileCollapsed ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Quick Jump Action */}
          {!isMobileCollapsed && unansweredCount > 0 && (
            <button
              type="button"
              onClick={handleJumpNextUnanswered}
              className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2 py-1.5 rounded-md border border-emerald-200 transition-colors flex items-center gap-1 cursor-pointer min-h-[36px]"
            >
              <span>Next Unanswered</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Mini Summary Counters (Always visible) */}
      <div className="grid grid-cols-3 gap-1.5 mb-3 text-center text-xs">
        <div className="bg-emerald-50/80 border border-emerald-200/70 rounded-lg py-1 px-1.5">
          <div className="text-[10px] uppercase font-bold text-emerald-800">Answered</div>
          <div className="font-bold text-emerald-950 font-mono text-sm">{answeredCount}</div>
        </div>
        <div className="bg-amber-50/80 border border-amber-200/70 rounded-lg py-1 px-1.5">
          <div className="text-[10px] uppercase font-bold text-amber-800">Marked</div>
          <div className="font-bold text-amber-950 font-mono text-sm">{markedCount}</div>
        </div>
        <div className="bg-slate-100/80 border border-slate-200/70 rounded-lg py-1 px-1.5">
          <div className="text-[10px] uppercase font-bold text-slate-600">Unanswered</div>
          <div className="font-bold text-slate-900 font-mono text-sm">{unansweredCount}</div>
        </div>
      </div>

      {/* Collapsible Content Section on Mobile (Always shown on Desktop) */}
      {!isMobileCollapsed && (
        <div className="space-y-3">
          {/* Section Tabs (Free / Advanced / All) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`flex-1 py-1 rounded-md transition-all text-center cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({totalQuestions})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('free')}
              className={`flex-1 py-1 rounded-md transition-all text-center cursor-pointer ${
                activeTab === 'free'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Free (1–40)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('advanced')}
              className={`flex-1 py-1 rounded-md transition-all text-center flex items-center justify-center gap-1 cursor-pointer ${
                activeTab === 'advanced'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Adv (41–80)</span>
              {!isAdvancedUnlocked && <Lock className="w-2.5 h-2.5 text-amber-600" />}
            </button>
          </div>

          {/* Responsive Grid of Question Buttons */}
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-5 xl:grid-cols-8 gap-1.5 max-h-56 sm:max-h-64 overflow-y-auto pr-1 py-1 scroll-smooth">
            {displayedIndices.map((index) => {
              const qId = questionIds[index];
              const isAnswered = !!userAnswers[qId];
              const isMarked = !!markedQuestions[qId];
              const isCurrent = index === currentIndex;
              const isLocked = !isAdvancedUnlocked && index >= freeCount;

              let btnClass = "relative h-9 w-full rounded-lg text-xs font-bold font-mono flex items-center justify-center transition-all cursor-pointer select-none ";

              if (isCurrent) {
                btnClass += "ring-2 ring-slate-900 ring-offset-1 bg-slate-900 text-white shadow-xs z-10 ";
              } else if (isLocked) {
                btnClass += "bg-slate-100 text-slate-400 border border-slate-200/90 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300 ";
              } else if (isMarked && isAnswered) {
                btnClass += "bg-amber-100 text-amber-900 border border-amber-400 hover:bg-amber-200 ";
              } else if (isMarked) {
                btnClass += "bg-amber-50 text-amber-800 border border-dashed border-amber-400 hover:bg-amber-100 ";
              } else if (isAnswered) {
                btnClass += "bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 ";
              } else {
                btnClass += "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 ";
              }

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    if (isLocked) {
                      onOpenUnlockModal();
                    } else {
                      onSelectIndex(index);
                    }
                  }}
                  title={
                    isLocked
                      ? `Question ${index + 1} (Locked - Click to unlock)`
                      : `Question ${index + 1}${isAnswered ? ' (Answered)' : ''}${isMarked ? ' (Marked for Review)' : ''}`
                  }
                  className={btnClass}
                >
                  <span>{index + 1}</span>

                  {/* Locked Icon */}
                  {isLocked && (
                    <Lock className="w-2.5 h-2.5 absolute top-0.5 right-0.5 text-slate-400" />
                  )}

                  {/* Marked Bookmark Flag Indicator */}
                  {isMarked && !isLocked && (
                    <Bookmark className="w-2.5 h-2.5 absolute top-0.5 left-0.5 text-amber-600 fill-amber-500" />
                  )}

                  {/* Answered Indicator Dot */}
                  {isAnswered && !isCurrent && (
                    <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Palette Legend: Clearly covers all 5 visual states per Requirement 3 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-2.5 border-t border-slate-100 text-[11px] text-slate-600">
            {/* 1. Current */}
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-[8px]">
                ●
              </span>
              <span className="truncate">Current</span>
            </div>

            {/* 2. Answered */}
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center text-[9px] font-bold">
                ✓
              </span>
              <span className="truncate">Answered</span>
            </div>

            {/* 3. Marked for Review */}
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-amber-100 border border-amber-400 text-amber-800 flex items-center justify-center text-[9px]">
                ★
              </span>
              <span className="truncate">Marked for Review</span>
            </div>

            {/* 4. Unanswered */}
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-slate-50 border border-slate-200 text-slate-400 flex items-center justify-center text-[8px]">
                ○
              </span>
              <span className="truncate">Unanswered</span>
            </div>

            {/* 5. Locked */}
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center">
                <Lock className="w-2.5 h-2.5" />
              </span>
              <span className="truncate">Locked</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
