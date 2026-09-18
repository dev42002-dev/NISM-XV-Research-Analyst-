import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingView } from './components/LandingView';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { LockedCard } from './components/LockedCard';
import { QuestionPalette } from './components/QuestionPalette';
import { UnlockModal } from './components/UnlockModal';
import { ConfirmSubmitModal } from './components/ConfirmSubmitModal';
import { ResultsView } from './components/ResultsView';
import { ReviewView } from './components/ReviewView';
import { ALL_QUESTIONS } from './data/questions';
import { Question, OptionKey, QuizView, QuizResult, TopicPerformance } from './types';
import { LOCAL_STORAGE_KEYS } from './config';
import { Send } from 'lucide-react';

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  // Advanced Unlocked state from LocalStorage
  const [isAdvancedUnlocked, setIsAdvancedUnlocked] = useState<boolean>(() => {
    try {
      return localStorage.getItem(LOCAL_STORAGE_KEYS.UNLOCKED_ADVANCED) === 'true';
    } catch {
      return false;
    }
  });

  // Current View state: starts on 'landing'
  const [currentView, setCurrentView] = useState<QuizView>('landing');

  // Active question set for current test session
  const [questions, setQuestions] = useState<Question[]>(() => {
    const free = ALL_QUESTIONS.filter(q => q.access === 'free');
    const locked = ALL_QUESTIONS.filter(q => q.access === 'locked');
    return [...free, ...locked];
  });

  // Flag indicating whether user is running a retry attempt of incorrect questions
  const [isRetrySession, setIsRetrySession] = useState<boolean>(false);

  // Current Question Index (0-based)
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // User answers mapped by Question ID
  const [userAnswers, setUserAnswers] = useState<Record<string, OptionKey>>({});

  // Marked for Review mapped by Question ID
  const [markedQuestions, setMarkedQuestions] = useState<Record<string, boolean>>({});

  // Modals state
  const [isUnlockModalOpen, setIsUnlockModalOpen] = useState<boolean>(false);
  const [isConfirmSubmitOpen, setIsConfirmSubmitOpen] = useState<boolean>(false);

  // Result summary state
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  // Total questions in the active test session
  const totalAvailable = useMemo(() => {
    if (isRetrySession) {
      return questions.length;
    }
    return isAdvancedUnlocked ? 80 : 40;
  }, [isRetrySession, questions.length, isAdvancedUnlocked]);

  // Questions active in this session
  const activeQuestions = useMemo(() => {
    return questions.slice(0, totalAvailable);
  }, [questions, totalAvailable]);

  // Current active question
  const currentQuestion = questions[currentIndex] || questions[0];
  const isCurrentLocked = !isRetrySession && !isAdvancedUnlocked && currentIndex >= 40;

  // Answered & Marked counts in current active pool
  const answeredCount = useMemo(() => {
    return activeQuestions.filter(q => !!userAnswers[q.id]).length;
  }, [activeQuestions, userAnswers]);

  const markedCount = useMemo(() => {
    return activeQuestions.filter(q => !!markedQuestions[q.id]).length;
  }, [activeQuestions, markedQuestions]);

  const unansweredCount = Math.max(0, totalAvailable - answeredCount);

  // Handle Option Selection
  const handleSelectOption = (option: OptionKey) => {
    if (isCurrentLocked) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: option
    }));
  };

  // Next / Previous Navigation
  const handleNext = () => {
    if (currentIndex < totalAvailable - 1) {
      setCurrentIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Toggle Mark for Review for a question
  const handleToggleMarkForReview = (questionId: string) => {
    setMarkedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Start Free Test (40 Questions)
  const handleStartFreeTest = () => {
    const free = ALL_QUESTIONS.filter(q => q.access === 'free');
    const locked = ALL_QUESTIONS.filter(q => q.access === 'locked');
    setQuestions([...free, ...locked]);
    setIsRetrySession(false);
    setUserAnswers({});
    setMarkedQuestions({});
    setQuizResult(null);
    setCurrentIndex(0);
    setCurrentView('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start Full Test (80 Questions)
  const handleStartFullTest = () => {
    const free = ALL_QUESTIONS.filter(q => q.access === 'free');
    const locked = ALL_QUESTIONS.filter(q => q.access === 'locked');
    setQuestions([...free, ...locked]);
    setIsRetrySession(false);
    setUserAnswers({});
    setMarkedQuestions({});
    setQuizResult(null);
    setCurrentIndex(0);
    setCurrentView('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Prompt Submit confirmation
  const handleInitiateSubmit = () => {
    setIsConfirmSubmitOpen(true);
  };

  // Execute Submission & Score Calculation
  const handleConfirmSubmit = () => {
    setIsConfirmSubmitOpen(false);

    let correctCount = 0;
    let incorrectCount = 0;
    const incorrectQuestionsList: Question[] = [];

    // Category aggregation
    const categoryStats: Record<string, { total: number; attempted: number; correct: number; incorrect: number; unanswered: number }> = {};

    activeQuestions.forEach(q => {
      const cat = q.category || 'General';
      if (!categoryStats[cat]) {
        categoryStats[cat] = { total: 0, attempted: 0, correct: 0, incorrect: 0, unanswered: 0 };
      }
      categoryStats[cat].total++;

      const answer = userAnswers[q.id];
      if (answer) {
        categoryStats[cat].attempted++;
        if (answer === q.correctAnswer) {
          correctCount++;
          categoryStats[cat].correct++;
        } else {
          incorrectCount++;
          categoryStats[cat].incorrect++;
          incorrectQuestionsList.push(q);
        }
      } else {
        categoryStats[cat].unanswered++;
      }
    });

    const unanswered = totalAvailable - (correctCount + incorrectCount);
    const accuracy = totalAvailable > 0 ? Math.min(100, Math.max(0, Math.round((correctCount / totalAvailable) * 1000) / 10)) : 0;
    
    // Practice Score: Correct = +1, Incorrect = -0.25, Unanswered = 0
    const rawPracticeScore = (correctCount * 1) + (incorrectCount * -0.25);
    const roundedScore = Math.round(rawPracticeScore * 100) / 100;
    const practiceScore = roundedScore === 0 ? 0 : roundedScore;

    // Topic Performance analysis per Requirement 7
    const topicPerformances: TopicPerformance[] = Object.entries(categoryStats).map(([topic, stats]) => ({
      topic,
      total: stats.total,
      attempted: stats.attempted,
      correct: stats.correct,
      incorrect: stats.incorrect,
      unanswered: stats.unanswered,
      accuracy: stats.attempted > 0 ? Math.min(100, Math.max(0, Math.round((stats.correct / stats.attempted) * 100))) : 0
    })).sort((a, b) => b.incorrect - a.incorrect || a.topic.localeCompare(b.topic));

    const topicMistakes = topicPerformances
      .filter(p => p.incorrect > 0)
      .map(p => ({ topic: p.topic, count: p.incorrect }));

    const result: QuizResult = {
      totalQuestions: totalAvailable,
      correctCount,
      incorrectCount,
      unansweredCount: unanswered,
      accuracy,
      practiceScore,
      maxScore: totalAvailable,
      topicMistakes,
      topicPerformances,
      incorrectQuestions: incorrectQuestionsList
    };

    setQuizResult(result);
    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Requirement 8: RETRY INCORRECT QUESTIONS
  const handleRetryIncorrect = () => {
    if (!quizResult || quizResult.incorrectQuestions.length === 0) return;

    // Use the existing question bank questions with original IDs and answers intact
    const incorrectSubset = [...quizResult.incorrectQuestions];
    setQuestions(incorrectSubset);
    setIsRetrySession(true);
    setUserAnswers({});
    setMarkedQuestions({});
    setQuizResult(null);
    setCurrentIndex(0);
    setCurrentView('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retake Test (Reset state, randomize order, preserve unlock state)
  const handleRetakeTest = () => {
    setUserAnswers({});
    setMarkedQuestions({});
    setQuizResult(null);
    setCurrentIndex(0);
    setIsRetrySession(false);

    // Randomize question order while strictly preserving Question IDs and answer keys
    setQuestions(() => {
      const free = ALL_QUESTIONS.filter(q => q.access === 'free');
      const locked = ALL_QUESTIONS.filter(q => q.access === 'locked');
      if (isAdvancedUnlocked) {
        return shuffle([...free, ...locked]);
      } else {
        return [...shuffle(free), ...locked];
      }
    });

    setCurrentView('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Unlock Advanced Set
  const handleUnlockSuccess = () => {
    setIsAdvancedUnlocked(true);
  };

  // Navigate Home/Landing
  const handleGoHome = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/70 text-slate-800 antialiased font-sans">
      {/* Top Header */}
      <Header
        isAdvancedUnlocked={isAdvancedUnlocked}
        onOpenUnlockModal={() => setIsUnlockModalOpen(true)}
        currentView={currentView}
        onGoHome={handleGoHome}
      />

      {/* Main Container */}
      <main className="flex-1 pb-12">
        {/* 1. LANDING PAGE VIEW */}
        {currentView === 'landing' && (
          <LandingView
            isAdvancedUnlocked={isAdvancedUnlocked}
            onStartFreeTest={handleStartFreeTest}
            onStartFullTest={handleStartFullTest}
            onOpenUnlockModal={() => setIsUnlockModalOpen(true)}
          />
        )}

        {/* 2. TEST VIEW */}
        {currentView === 'test' && (
          <div>
            {/* Progress Bar Header */}
            <ProgressBar
              currentIndex={currentIndex}
              totalQuestions={totalAvailable}
              answeredCount={answeredCount}
              markedCount={markedCount}
            />

            <div className="max-w-6xl xl:max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 lg:py-3">
              {/* Secondary Action Strip for Fast Submission and status */}
              <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3 lg:mb-2.5">
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    {isRetrySession ? "Incorrect Questions Review Session" : "Exam Session Active"}
                  </span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span className="text-slate-500 hidden sm:inline font-normal">
                    {unansweredCount === 0 ? 'All questions answered' : `${unansweredCount} remaining`}
                  </span>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={handleInitiateSubmit}
                    className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer shadow-2xs min-h-[36px] sm:min-h-[38px]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Test ({answeredCount}/{totalAvailable})</span>
                  </button>
                </div>
              </div>

              {/* Two Column Layout on Laptop/Desktop, Single Column Flow on Mobile/Tablet */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 xl:gap-6 items-start">
                {/* Left Area: Question Card and Mobile Palette */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                  {isCurrentLocked ? (
                    <LockedCard
                      questionNumber={currentIndex + 1}
                      onOpenUnlockModal={() => setIsUnlockModalOpen(true)}
                    />
                  ) : (
                    <QuestionCard
                      question={currentQuestion}
                      questionNumber={currentIndex + 1}
                      totalQuestions={totalAvailable}
                      selectedOption={userAnswers[currentQuestion.id]}
                      onSelectOption={handleSelectOption}
                      onPrevious={handlePrevious}
                      onNext={handleNext}
                      onSubmit={handleInitiateSubmit}
                      hasPrevious={currentIndex > 0}
                      hasNext={currentIndex < totalAvailable - 1}
                      isLastQuestion={currentIndex === totalAvailable - 1}
                      isMarkedForReview={!!markedQuestions[currentQuestion.id]}
                      onToggleMarkForReview={() => handleToggleMarkForReview(currentQuestion.id)}
                    />
                  )}

                  {/* Mobile & Tablet Flow: Collapsible Palette directly below question card */}
                  <div className="lg:hidden">
                    <QuestionPalette
                      totalQuestions={totalAvailable}
                      freeCount={isRetrySession ? totalAvailable : 40}
                      isAdvancedUnlocked={isAdvancedUnlocked || isRetrySession}
                      currentIndex={currentIndex}
                      userAnswers={userAnswers}
                      markedQuestions={markedQuestions}
                      questionIds={activeQuestions.map(q => q.id)}
                      onSelectIndex={(idx) => {
                        setCurrentIndex(idx);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      onOpenUnlockModal={() => setIsUnlockModalOpen(true)}
                    />
                  </div>
                </div>

                {/* Right Column on Laptop & Desktop: Sticky Question Palette */}
                <div className="hidden lg:block lg:col-span-4 sticky top-[106px]">
                  <QuestionPalette
                    totalQuestions={totalAvailable}
                    freeCount={isRetrySession ? totalAvailable : 40}
                    isAdvancedUnlocked={isAdvancedUnlocked || isRetrySession}
                    currentIndex={currentIndex}
                    userAnswers={userAnswers}
                    markedQuestions={markedQuestions}
                    questionIds={activeQuestions.map(q => q.id)}
                    onSelectIndex={(idx) => {
                      setCurrentIndex(idx);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    onOpenUnlockModal={() => setIsUnlockModalOpen(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. RESULTS VIEW */}
        {currentView === 'results' && quizResult && (
          <ResultsView
            result={quizResult}
            isAdvancedUnlocked={isAdvancedUnlocked}
            onViewDetailedSolutions={() => {
              setCurrentView('review');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRetakeTest={handleRetakeTest}
            onRetryIncorrect={handleRetryIncorrect}
            onOpenUnlockModal={() => setIsUnlockModalOpen(true)}
          />
        )}

        {/* 4. DETAILED SOLUTIONS REVIEW VIEW */}
        {currentView === 'review' && (
          <ReviewView
            questions={activeQuestions}
            userAnswers={userAnswers}
            onBackToResults={() => {
              setCurrentView('results');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRetakeTest={handleRetakeTest}
          />
        )}
      </main>

      {/* Footer with Mandatory Attribution & Disclaimer */}
      <Footer />

      {/* Unlock Advanced Modal */}
      <UnlockModal
        isOpen={isUnlockModalOpen}
        onClose={() => setIsUnlockModalOpen(false)}
        onSuccess={handleUnlockSuccess}
      />

      {/* Submit Confirmation Modal */}
      <ConfirmSubmitModal
        isOpen={isConfirmSubmitOpen}
        answeredCount={answeredCount}
        unansweredCount={unansweredCount}
        markedCount={markedCount}
        totalAvailable={totalAvailable}
        onClose={() => setIsConfirmSubmitOpen(false)}
        onConfirm={handleConfirmSubmit}
      />
    </div>
  );
}
