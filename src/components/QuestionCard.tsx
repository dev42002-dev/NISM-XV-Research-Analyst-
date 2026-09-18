import React from 'react';
import { ArrowLeft, ArrowRight, Check, Send, Bookmark, BookmarkCheck } from 'lucide-react';
import { Question, OptionKey } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedOption?: OptionKey;
  onSelectOption: (option: OptionKey) => void;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  isLastQuestion: boolean;
  isMarkedForReview?: boolean;
  onToggleMarkForReview?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onPrevious,
  onNext,
  onSubmit,
  hasPrevious,
  hasNext,
  isLastQuestion,
  isMarkedForReview = false,
  onToggleMarkForReview,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col transition-all">
      {/* Top Meta Bar (Chapter & Topic) */}
      <div className="bg-slate-50/90 border-b border-slate-200/80 px-3.5 py-2 sm:px-5 sm:py-2.5 lg:py-2 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2 text-xs min-w-0">
          <span className="font-extrabold text-slate-900 bg-slate-200/90 px-2 py-0.5 rounded font-mono text-xs shrink-0">
            Q{questionNumber}
          </span>
          <span className="text-slate-300">•</span>
          <span className="font-semibold text-slate-700 truncate text-xs sm:text-sm">
            {question.chapter}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 ml-auto sm:ml-0">
          <span className="text-[10px] sm:text-xs font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200/60 truncate max-w-[150px] sm:max-w-none">
            {question.topic}
          </span>
        </div>
      </div>

      {/* Question Content */}
      <div className="p-4 sm:p-5 lg:py-3.5 lg:px-5 xl:py-4 xl:px-6 flex-1">
        {/* Question Text */}
        <h2 className="text-base sm:text-[17px] lg:text-[16px] xl:text-[17px] font-semibold text-slate-900 leading-snug sm:leading-snug lg:leading-normal mb-3 sm:mb-3.5 lg:mb-3 break-words">
          {question.question}
        </h2>

        {/* Options List with Responsive Sizing */}
        <div className="space-y-2.5 sm:space-y-2.5 lg:space-y-2" role="radiogroup" aria-label="Question Options">
          {(['A', 'B', 'C', 'D'] as OptionKey[]).map((key) => {
            const isSelected = selectedOption === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => onSelectOption(key)}
                className={`w-full p-3.5 sm:py-3 sm:px-4 lg:py-2.5 lg:px-3.5 rounded-xl border text-left transition-all flex items-start gap-2.5 sm:gap-3 cursor-pointer select-none min-h-[50px] sm:min-h-[54px] lg:min-h-[56px] xl:min-h-[58px] ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm ring-2 ring-slate-900/10'
                    : 'bg-white hover:bg-slate-50/90 text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
                role="radio"
                aria-checked={isSelected}
              >
                {/* Option Badge A, B, C, D */}
                <span
                  className={`w-7 h-7 sm:w-7 sm:h-7 lg:w-7 lg:h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 font-mono transition-colors mt-0.5 ${
                    isSelected
                      ? 'bg-white text-slate-900 font-extrabold shadow-2xs'
                      : 'bg-slate-100 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  {key}
                </span>

                {/* Option Text */}
                <div className="flex-1 text-sm sm:text-[15px] lg:text-[15px] xl:text-base leading-snug sm:leading-normal break-words pt-0.5">
                  {question.options[key]}
                </div>

                {/* Selected Checkmark Indicator */}
                {isSelected && (
                  <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Footer: Fully Touch-Friendly for Mobile, Compact on Laptop */}
      <div className="bg-slate-50/90 border-t border-slate-200 px-3 py-2.5 sm:px-5 sm:py-2.5 lg:px-5 lg:py-2">
        <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:justify-between">
          {/* Previous Button */}
          <button
            type="button"
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="px-2.5 sm:px-4 py-2.5 sm:py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-35 disabled:cursor-not-allowed text-slate-700 font-bold text-xs sm:text-sm shadow-2xs transition-colors flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer min-h-[44px] sm:min-h-[42px] lg:min-h-[40px]"
            title="Previous Question"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </button>

          {/* Mark for Review Toggle Button */}
          {onToggleMarkForReview && (
            <button
              type="button"
              onClick={onToggleMarkForReview}
              className={`px-2.5 sm:px-4 py-2.5 sm:py-2 rounded-lg border text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer min-h-[44px] sm:min-h-[42px] lg:min-h-[40px] ${
                isMarkedForReview
                  ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold shadow-2xs'
                  : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-300'
              }`}
              title={isMarkedForReview ? "Unmark question" : "Mark question for review"}
            >
              {isMarkedForReview ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="hidden sm:inline">Marked</span>
                  <span className="sm:hidden">Marked</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="hidden sm:inline">Mark for Review</span>
                  <span className="sm:hidden">Review</span>
                </>
              )}
            </button>
          )}

          {/* Next / Submit Button */}
          <div className="flex items-center justify-end sm:ml-auto">
            {hasNext ? (
              <button
                type="button"
                onClick={onNext}
                className="w-full sm:w-auto px-3 sm:px-5 py-2.5 sm:py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer min-h-[44px] sm:min-h-[42px] lg:min-h-[40px]"
              >
                <span className="hidden sm:inline">Next Question</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onSubmit}
                className="w-full sm:w-auto px-3 sm:px-5 py-2.5 sm:py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer min-h-[44px] sm:min-h-[42px] lg:min-h-[40px]"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">SUBMIT</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
