import React, { useState } from 'react';
import { CheckCircle2, XCircle, MinusCircle, ArrowLeft, RotateCcw, BookOpen } from 'lucide-react';
import { Question, OptionKey } from '../types';

interface ReviewViewProps {
  questions: Question[];
  userAnswers: Record<string, OptionKey>;
  onBackToResults: () => void;
  onRetakeTest: () => void;
}

export const ReviewView: React.FC<ReviewViewProps> = ({
  questions,
  userAnswers,
  onBackToResults,
  onRetakeTest,
}) => {
  const [filter, setFilter] = useState<'all' | 'incorrect' | 'correct' | 'unanswered'>('all');

  const filteredQuestions = questions.filter((q) => {
    const userAnswer = userAnswers[q.id];
    if (filter === 'all') return true;
    if (filter === 'correct') return userAnswer === q.correctAnswer;
    if (filter === 'incorrect') return userAnswer && userAnswer !== q.correctAnswer;
    if (filter === 'unanswered') return !userAnswer;
    return true;
  });

  return (
    <div className="max-w-4xl xl:max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-6">
      {/* Sticky Header with Controls */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 sm:p-4 shadow-sm sticky top-[57px] sm:top-[69px] z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 backdrop-blur-md bg-white/95">
        <div className="flex items-center gap-2.5 min-w-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={onBackToResults}
            className="px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5 text-xs sm:text-sm font-semibold cursor-pointer shrink-0 min-h-[40px] sm:min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Scorecard</span>
          </button>
          <div className="min-w-0">
            <h1 className="text-sm sm:text-base font-bold text-slate-900 leading-tight truncate">
              Detailed Solutions Review
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-500 truncate">
              Official workbook explanations & option rationale
            </p>
          </div>
        </div>

        {/* Filter Pills with Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl text-xs font-medium w-full sm:w-auto overflow-x-auto">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-xs min-h-[36px] flex items-center ${
              filter === 'all' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({questions.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('incorrect')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-xs min-h-[36px] flex items-center ${
              filter === 'incorrect' ? 'bg-rose-600 text-white font-bold' : 'text-slate-600 hover:text-rose-700'
            }`}
          >
            Incorrect
          </button>
          <button
            type="button"
            onClick={() => setFilter('correct')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-xs min-h-[36px] flex items-center ${
              filter === 'correct' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600 hover:text-emerald-700'
            }`}
          >
            Correct
          </button>
          <button
            type="button"
            onClick={() => setFilter('unanswered')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-xs min-h-[36px] flex items-center ${
              filter === 'unanswered' ? 'bg-slate-800 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Unanswered
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 shadow-sm">
            <p className="font-semibold text-slate-700">No questions match the selected filter.</p>
            <p className="text-xs text-slate-400 mt-1">Try selecting "All" to view all attempted questions.</p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const originalIndex = questions.findIndex(orig => orig.id === q.id);
            const questionNumber = originalIndex + 1;
            const userAnswer = userAnswers[q.id];
            const isAnswered = !!userAnswer;
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs"
              >
                {/* Header Bar with Question Number, Chapter and Status */}
                <div className="bg-slate-50/90 border-b border-slate-200/80 px-4 py-3 sm:px-6 sm:py-3.5 flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2 min-w-0 flex-wrap">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 bg-slate-200 px-2.5 py-0.5 rounded font-mono shrink-0">
                      QUESTION {questionNumber}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-semibold text-slate-700 truncate max-w-[220px] sm:max-w-md">
                      {q.chapter}
                    </span>
                    <span className="text-slate-300 hidden sm:inline">•</span>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60 hidden sm:inline">
                      {q.topic}
                    </span>
                  </div>

                  {/* STATUS BADGE */}
                  <div className="shrink-0 ml-auto sm:ml-0">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>✓ CORRECT</span>
                      </span>
                    ) : isAnswered ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 border border-rose-300">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>✗ INCORRECT</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-slate-200 text-slate-700">
                        <MinusCircle className="w-3.5 h-3.5" />
                        <span>— UNANSWERED</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-7 space-y-5">
                  {/* Question Text */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Question
                    </div>
                    <p className="text-base sm:text-lg text-slate-900 font-semibold leading-relaxed break-words">
                      {q.question}
                    </p>
                  </div>

                  {/* Answers Comparison Strip: YOUR ANSWER, CORRECT ANSWER, STATUS */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Your Answer
                      </span>
                      {userAnswer ? (
                        <div className="flex items-center gap-2 font-bold">
                          <span className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs text-white ${
                            isCorrect ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}>
                            {userAnswer}
                          </span>
                          <span className={isCorrect ? 'text-emerald-800' : 'text-rose-800'}>
                            Option {userAnswer}
                          </span>
                        </div>
                      ) : (
                        <span className="text-slate-400 italic">
                          Not Answered (Skipped)
                        </span>
                      )}
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Correct Answer
                      </span>
                      <div className="flex items-center gap-2 font-bold text-emerald-800">
                        <span className="w-6 h-6 rounded bg-emerald-600 text-white flex items-center justify-center font-mono text-xs">
                          {q.correctAnswer}
                        </span>
                        <span>Option {q.correctAnswer}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Status
                      </span>
                      {isCorrect ? (
                        <div className="flex items-center gap-1.5 font-bold text-emerald-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Correct</span>
                        </div>
                      ) : isAnswered ? (
                        <div className="flex items-center gap-1.5 font-bold text-rose-700">
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>Incorrect</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 font-bold text-slate-500">
                          <MinusCircle className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>Unanswered</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Options List */}
                  <div className="space-y-2">
                    {(['A', 'B', 'C', 'D'] as OptionKey[]).map((key) => {
                      const isOptionCorrect = key === q.correctAnswer;
                      const isUserChoice = key === userAnswer;

                      let optClass = "p-3 sm:p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-colors ";
                      if (isOptionCorrect) {
                        optClass += "bg-emerald-50/80 border-emerald-300 text-emerald-950 font-medium";
                      } else if (isUserChoice) {
                        optClass += "bg-rose-50/80 border-rose-300 text-rose-950";
                      } else {
                        optClass += "bg-white border-slate-200 text-slate-700";
                      }

                      return (
                        <div key={key} className={optClass}>
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 font-mono ${
                            isOptionCorrect
                              ? 'bg-emerald-600 text-white'
                              : isUserChoice
                              ? 'bg-rose-600 text-white'
                              : 'bg-slate-100 text-slate-700 border border-slate-200/80'
                          }`}>
                            {key}
                          </span>
                          <div className="flex-1 break-words pt-0.5">
                            <span>{q.options[key]}</span>
                            {isOptionCorrect && (
                              <span className="ml-2 inline-block text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-1.5 py-0.2 rounded border border-emerald-200">
                                ✓ Correct Option
                              </span>
                            )}
                            {isUserChoice && !isOptionCorrect && (
                              <span className="ml-2 inline-block text-[11px] font-bold text-rose-700 bg-rose-100/90 px-1.5 py-0.2 rounded border border-rose-200">
                                ✗ Your Option
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* OPTION ANALYSIS (A, B, C, D) */}
                  <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-4 sm:p-5 space-y-3">
                    <div className="text-xs font-black uppercase tracking-wider text-slate-800">
                      OPTION ANALYSIS
                    </div>
                    <div className="space-y-2.5 text-xs sm:text-sm">
                      {(['A', 'B', 'C', 'D'] as OptionKey[]).map((key) => {
                        const isOptionCorrect = key === q.correctAnswer;
                        const isUserChoice = key === userAnswer;

                        return (
                          <div key={key} className="flex items-start gap-2.5">
                            <span className={`font-mono shrink-0 font-extrabold px-2 py-0.5 rounded text-xs ${
                              isOptionCorrect 
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                                : isUserChoice 
                                ? 'bg-rose-100 text-rose-800 border border-rose-200' 
                                : 'bg-slate-200 text-slate-800'
                            }`}>
                              {key}
                            </span>
                            <div className={`break-words pt-0.5 leading-relaxed ${
                              isOptionCorrect 
                                ? "text-emerald-950 font-medium" 
                                : isUserChoice 
                                ? "text-rose-950 font-medium" 
                                : "text-slate-700"
                            }`}>
                              <span className="font-semibold text-slate-900 mr-1.5">{key} —</span>
                              {q.optionExplanations[key]}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Sticky Retake / Back Navigation */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 sm:p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBackToResults}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Scorecard</span>
        </button>

        <button
          type="button"
          onClick={onRetakeTest}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px]"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake Practice Test</span>
        </button>
      </div>
    </div>
  );
};
