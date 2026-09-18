import React from 'react';
import { Award, RotateCcw, FileText, Lock, CheckCircle2, XCircle, HelpCircle, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';
import { QuizResult } from '../types';

interface ResultsViewProps {
  result: QuizResult;
  isAdvancedUnlocked: boolean;
  onViewDetailedSolutions: () => void;
  onRetakeTest: () => void;
  onRetryIncorrect: () => void;
  onOpenUnlockModal: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  result,
  isAdvancedUnlocked,
  onViewDetailedSolutions,
  onRetakeTest,
  onRetryIncorrect,
  onOpenUnlockModal,
}) => {
  const hasIncorrect = result.incorrectCount > 0;

  return (
    <div className="max-w-6xl xl:max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      {/* Header Banner */}
      <div className="text-center">
        <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 mb-2">
          NISM SERIES XV • EXAMINATION REPORT
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Performance Summary
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-lg mx-auto">
          Diagnostic scorecard based on the February 2026 NISM Series XV workbook syllabus.
        </p>
      </div>

      {/* Main Grid: Left = Practice Score & Key Metrics & CTAs; Right = Performance Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Practice Score & Metric Chips */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 text-emerald-400 mb-3 border border-slate-800 shadow-xs">
              <Award className="w-6 h-6" />
            </div>

            {/* Main Result Prominently per Requirement 6 */}
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              PRACTICE SCORE
            </div>

            <div className="my-2">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight">
                {result.practiceScore.toFixed(2)}
                <span className="text-slate-400 font-light text-xl sm:text-2xl ml-1">
                  / {result.maxScore}
                </span>
              </div>
            </div>

            {/* Explanation & Disclaimer strictly per Requirement 6 */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 my-4 text-xs text-slate-600 space-y-1">
              <div className="font-semibold text-slate-800">
                +1 for correct • -0.25 for incorrect • 0 for unanswered
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed pt-0.5">
                Practice Score — this is an educational practice score and is not an official NISM examination score.
              </p>
            </div>

            {/* Primary Metrics: Correct, Wrong, Unanswered, Accuracy */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100 text-center">
              <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-2.5">
                <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Correct</span>
                </div>
                <div className="text-lg font-black text-emerald-950 font-mono mt-0.5">
                  {result.correctCount}
                </div>
              </div>

              <div className="bg-rose-50/80 border border-rose-200/80 rounded-xl p-2.5">
                <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-rose-800">
                  <XCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Wrong</span>
                </div>
                <div className="text-lg font-black text-rose-950 font-mono mt-0.5">
                  {result.incorrectCount}
                </div>
              </div>

              <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-2.5">
                <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-700">
                  <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Unanswered</span>
                </div>
                <div className="text-lg font-black text-slate-900 font-mono mt-0.5">
                  {result.unansweredCount}
                </div>
              </div>

              <div className="bg-blue-50/80 border border-blue-200/80 rounded-xl p-2.5">
                <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-blue-800">
                  <span>Accuracy</span>
                </div>
                <div className="text-lg font-black text-blue-950 font-mono mt-0.5">
                  {result.accuracy}%
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons: View Detailed Solutions, Retry Incorrect Questions, Retake Test */}
          <div className="space-y-2.5">
            <button
              type="button"
              onClick={onViewDetailedSolutions}
              className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>VIEW DETAILED SOLUTIONS</span>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
            </button>

            {/* Requirement 8: RETRY INCORRECT QUESTIONS */}
            {hasIncorrect && (
              <button
                type="button"
                onClick={onRetryIncorrect}
                className="w-full py-3.5 px-4 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
              >
                <RefreshCw className="w-4 h-4 shrink-0" />
                <span>RETRY INCORRECT QUESTIONS ({result.incorrectCount})</span>
              </button>
            )}

            <button
              type="button"
              onClick={onRetakeTest}
              className="w-full py-3.5 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
            >
              <RotateCcw className="w-4 h-4 shrink-0" />
              <span>RETAKE TEST</span>
            </button>
          </div>

          {/* Unlock Section Banner */}
          {!isAdvancedUnlocked ? (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/80 rounded-2xl border border-amber-200 p-4 sm:p-5 text-slate-800 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                  <Lock className="w-3 h-3" />
                  ADVANCED 40
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Questions 41–80
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Unlock 40 Additional Practice Questions
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Access advanced application questions, financial calculation models, and comprehensive solutions.
              </p>
              <button
                type="button"
                onClick={onOpenUnlockModal}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shadow-xs cursor-pointer min-h-[40px] flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>UNLOCK ADVANCED 40</span>
              </button>
            </div>
          ) : (
            <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-4 text-slate-800 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold uppercase text-emerald-900">
                  ✓ ADVANCED UNLOCKED
                </h3>
                <p className="text-xs text-slate-600">
                  All 80 practice questions are fully accessible for examination simulation.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Performance Analysis per Requirement 7 */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  PERFORMANCE ANALYSIS
                </h2>
                <p className="text-xs text-slate-500">
                  Topic performance based on your actual answers:
                </p>
              </div>
            </div>

            {/* Topic Performance Cards with strictly factual labels */}
            {result.topicPerformances && result.topicPerformances.length > 0 ? (
              <div className="space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
                {result.topicPerformances.map((perf, idx) => {
                  const hasMistakes = perf.incorrect > 0;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                        hasMistakes
                          ? 'bg-rose-50/40 border-rose-200/90 hover:border-rose-300'
                          : 'bg-slate-50 border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap sm:flex-nowrap">
                        <div className="font-bold text-slate-900 text-xs sm:text-sm">
                          {perf.topic}
                        </div>
                        {hasMistakes && (
                          <span className="text-[10px] font-bold text-rose-800 bg-rose-100 border border-rose-200 px-2 py-0.5 rounded">
                            {perf.incorrect} mistake{perf.incorrect > 1 ? 's' : ''} to review
                          </span>
                        )}
                      </div>

                      {/* Factual metrics: Questions attempted, Correct, Incorrect, Accuracy */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="bg-white border border-slate-200/80 rounded-lg p-2 text-center">
                          <div className="text-[10px] uppercase font-bold text-slate-500">
                            Questions attempted
                          </div>
                          <div className="font-bold text-slate-900 font-mono mt-0.5">
                            {perf.attempted} / {perf.total}
                          </div>
                        </div>

                        <div className="bg-white border border-slate-200/80 rounded-lg p-2 text-center">
                          <div className="text-[10px] uppercase font-bold text-emerald-700">
                            Correct
                          </div>
                          <div className="font-bold text-emerald-900 font-mono mt-0.5">
                            {perf.correct}
                          </div>
                        </div>

                        <div className="bg-white border border-slate-200/80 rounded-lg p-2 text-center">
                          <div className="text-[10px] uppercase font-bold text-rose-700">
                            Incorrect
                          </div>
                          <div className="font-bold text-rose-900 font-mono mt-0.5">
                            {perf.incorrect}
                          </div>
                        </div>

                        <div className="bg-white border border-slate-200/80 rounded-lg p-2 text-center">
                          <div className="text-[10px] uppercase font-bold text-blue-700">
                            Accuracy
                          </div>
                          <div className="font-bold text-blue-900 font-mono mt-0.5">
                            {perf.accuracy}%
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-600 text-sm bg-slate-50 rounded-xl border border-slate-200/80 p-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="font-bold text-slate-900">No test data recorded</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
