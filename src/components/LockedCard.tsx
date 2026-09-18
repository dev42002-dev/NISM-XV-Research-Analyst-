import React from 'react';
import { Lock, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

interface LockedCardProps {
  questionNumber: number;
  onOpenUnlockModal: () => void;
}

export const LockedCard: React.FC<LockedCardProps> = ({ questionNumber, onOpenUnlockModal }) => {
  return (
    <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 sm:p-10 text-center max-w-xl mx-auto my-6">
      <div className="h-16 w-16 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
        <Lock className="w-8 h-8" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
        <span>🔒 ADVANCED QUESTION #{questionNumber}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
        Part of the Advanced Practice Set
      </h2>

      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
        Questions 41 through 80 feature advanced multi-statement, numerical, valuation, and regulatory case scenarios designed for deep exam readiness.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6 text-left max-w-md mx-auto space-y-2 text-xs text-slate-700">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>40 Additional Rigorous MCQs with Full Explanations</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Full Option-by-Option Analysis on All 80 Questions</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Detailed Subject-Wise Mistake Grouping</span>
        </div>
      </div>

      <button
        onClick={onOpenUnlockModal}
        className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
      >
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span>Unlock Advanced 40</span>
        <ChevronRight className="w-4 h-4 text-slate-400" />
      </button>

      <p className="text-[11px] text-slate-400 mt-4">
        Already have a code? Click above to enter your authorization code.
      </p>
    </div>
  );
};
