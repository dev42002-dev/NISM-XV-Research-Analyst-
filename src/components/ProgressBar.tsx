import React from 'react';
import { CheckCircle2, HelpCircle, Bookmark } from 'lucide-react';

interface ProgressBarProps {
  currentIndex: number; // 0-based
  totalQuestions: number;
  answeredCount: number;
  markedCount: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentIndex,
  totalQuestions,
  answeredCount,
  markedCount,
}) => {
  const currentNumber = currentIndex + 1;
  const progressPercent = Math.min(100, Math.round((currentNumber / totalQuestions) * 100));
  const unansweredCount = Math.max(0, totalQuestions - answeredCount);

  return (
    <div className="w-full bg-white border-b border-slate-200 px-3.5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-2 shadow-2xs sticky top-[51px] sm:top-[55px] lg:top-[51px] z-20">
      <div className="max-w-6xl xl:max-w-7xl mx-auto space-y-1.5 sm:space-y-2 lg:space-y-1.5">
        {/* Top Row: Question Number / Total & Stats Counters */}
        <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
          {/* Question X / 40 or Question X / 80 */}
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono tracking-tight bg-slate-100 px-2.5 py-0.5 sm:py-1 rounded-md border border-slate-200/80">
              Question {currentNumber} / {totalQuestions}
            </span>
            <span className="text-xs text-slate-400 hidden md:inline">•</span>
            <span className="text-xs text-slate-500 font-medium hidden md:inline">
              Progress: {progressPercent}%
            </span>
          </div>

          {/* Counts: Answered, Unanswered, Marked for Review */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs font-semibold">
            {/* Answered count */}
            <div className="flex items-center gap-1 text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Answered: <strong className="font-mono">{answeredCount}</strong></span>
            </div>

            {/* Unanswered count */}
            <div className="flex items-center gap-1 text-slate-700 bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded-md">
              <HelpCircle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Unanswered: <strong className="font-mono">{unansweredCount}</strong></span>
            </div>

            {/* Marked for Review count */}
            <div className="flex items-center gap-1 text-amber-800 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-md">
              <Bookmark className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="hidden sm:inline">Marked for Review:</span>
              <span className="sm:hidden">Marked:</span>
              <strong className="font-mono ml-0.5">{markedCount}</strong>
            </div>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div 
          className="w-full h-1.5 sm:h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/70"
          role="progressbar"
          aria-valuenow={currentNumber}
          aria-valuemin={1}
          aria-valuemax={totalQuestions}
          aria-label={`Question ${currentNumber} of ${totalQuestions}`}
        >
          <div
            className="h-full bg-slate-900 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
