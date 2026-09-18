export type QuestionAccess = 'free' | 'locked';
export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: string;
  chapter: string;
  topic: string;
  category: string;
  difficulty: number; // 3 = medium, 4 = hard, 5 = very hard
  access: QuestionAccess;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: OptionKey;
  explanation: string;
  optionExplanations: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export type QuizView = 'landing' | 'test' | 'confirm_submit' | 'results' | 'review';

export interface TopicMistake {
  topic: string;
  count: number;
}

export interface TopicPerformance {
  topic: string;
  total: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  accuracy: number; // percentage
}

export interface QuizResult {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  accuracy: number; // percentage
  practiceScore: number;
  maxScore: number;
  topicMistakes: TopicMistake[];
  topicPerformances: TopicPerformance[];
  incorrectQuestions: Question[];
}
