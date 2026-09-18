import React from 'react';
import { BookOpen, Lock, ShieldCheck, ArrowRight, CheckCircle2, Award, FileText } from 'lucide-react';

interface LandingViewProps {
  isAdvancedUnlocked: boolean;
  onStartFreeTest: () => void;
  onStartFullTest: () => void;
  onOpenUnlockModal: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({
  isAdvancedUnlocked,
  onStartFreeTest,
  onStartFullTest,
  onOpenUnlockModal,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Hero Header */}
      <div className="text-center space-y-3.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-slate-800 shadow-xs">
          <span>NISM SERIES XV</span>
          <span className="text-slate-500">•</span>
          <span>FEBRUARY 2026 WORKBOOK EDITION</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          RESEARCH ANALYST<br className="hidden sm:inline" /> PRACTICE TEST
        </h1>

        <div className="flex items-center justify-center gap-3 text-sm sm:text-base font-bold text-slate-700">
          <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-lg border border-slate-200">
            80 Questions
          </span>
          <span className="text-slate-400 font-normal">•</span>
          <span className="text-emerald-700">40 Free</span>
          <span className="text-slate-400 font-normal">+</span>
          <span className={isAdvancedUnlocked ? "text-emerald-700 font-bold" : "text-amber-700 font-bold"}>
            40 Advanced
          </span>
        </div>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed pt-1">
          Test your understanding of Research Analysis, Financial Analysis, Valuation, Technical Analysis, Regulation and other NISM Series XV concepts.
        </p>
      </div>

      {/* Two Clear Sections / Cards: Free Practice & Advanced Practice */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Card 1: FREE PRACTICE (40 Questions) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between relative hover:border-slate-300 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-200">
                FREE PRACTICE
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Questions 1–40
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                40 Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Core syllabus foundation test covering financial statement analysis, enterprise valuation, SEBI regulations, and macro analysis.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Standard examination negative marking simulation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Interactive question palette with jump navigation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Detailed question solutions & option-by-option rationale</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Comprehensive topic performance diagnostic report</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-4">
            <button
              type="button"
              onClick={onStartFreeTest}
              className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
            >
              <span>START FREE TEST</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Card 2: ADVANCED PRACTICE (40 Questions) */}
        <div className={`rounded-2xl border p-6 sm:p-7 shadow-sm flex flex-col justify-between relative transition-all ${
          isAdvancedUnlocked
            ? 'bg-white border-emerald-300 ring-1 ring-emerald-400/20'
            : 'bg-gradient-to-br from-white to-amber-50/40 border-amber-200'
        }`}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
                isAdvancedUnlocked
                  ? 'text-emerald-800 bg-emerald-100 border-emerald-300'
                  : 'text-amber-800 bg-amber-100 border-amber-300'
              }`}>
                {isAdvancedUnlocked ? (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>✓ ADVANCED UNLOCKED</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>ADVANCED 40</span>
                  </>
                )}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Questions 41–80
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                40 Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                40 additional NISM Series XV practice questions
              </p>
            </div>

            {/* Factual feature points per requirement 10 */}
            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                <span>Advanced-level questions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                <span>Application-based questions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                <span>Calculation-based questions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                <span>Detailed solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                <span>Topic-wise performance analysis</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-4">
            {isAdvancedUnlocked ? (
              <button
                type="button"
                onClick={onStartFullTest}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
              >
                <span>START FULL TEST (80 QUESTIONS)</span>
                <ArrowRight className="w-4 h-4 text-emerald-200" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onOpenUnlockModal}
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
              >
                <Lock className="w-4 h-4 text-amber-400" />
                <span>UNLOCK ADVANCED 40</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Examination Structure & Disclaimer Brief */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center text-xs text-slate-600 max-w-3xl mx-auto space-y-1">
        <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
          Exam Marking Scheme Simulation
        </div>
        <p>
          +1 for correct answer • -0.25 for incorrect answer • 0 for unanswered questions
        </p>
        <p className="text-[11px] text-slate-400 pt-1">
          Practice Score — this is an educational practice score and is not an official NISM examination score.
        </p>
      </div>
    </div>
  );
};
