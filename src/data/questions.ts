import { Question } from '../types';
import { FREE_QUESTIONS } from './questionsFree';
import { LOCKED_QUESTIONS } from './questionsLocked';

export const ALL_QUESTIONS: Question[] = [
  ...FREE_QUESTIONS,
  ...LOCKED_QUESTIONS
];

/**
 * Validates question database against all 17 anti-error requirements
 */
export function validateQuestionBank(questions: Question[] = ALL_QUESTIONS) {
  const errors: string[] = [];
  
  if (questions.length !== 80) {
    errors.push(`Expected 80 questions, found ${questions.length}`);
  }

  const free = questions.filter(q => q.access === 'free');
  const locked = questions.filter(q => q.access === 'locked');

  if (free.length !== 40) {
    errors.push(`Expected 40 free questions, found ${free.length}`);
  }
  if (locked.length !== 40) {
    errors.push(`Expected 40 locked questions, found ${locked.length}`);
  }

  const freeMedium = free.filter(q => q.difficulty === 3).length;
  const freeHard = free.filter(q => q.difficulty === 4).length;
  const freeVeryHard = free.filter(q => q.difficulty === 5).length;

  if (freeMedium !== 5 || freeHard !== 25 || freeVeryHard !== 10) {
    errors.push(`Free difficulty mismatch: M=${freeMedium}/5, H=${freeHard}/25, VH=${freeVeryHard}/10`);
  }

  const lockedMedium = locked.filter(q => q.difficulty === 3).length;
  const lockedHard = locked.filter(q => q.difficulty === 4).length;
  const lockedVeryHard = locked.filter(q => q.difficulty === 5).length;

  if (lockedMedium !== 10 || lockedHard !== 20 || lockedVeryHard !== 10) {
    errors.push(`Locked difficulty mismatch: M=${lockedMedium}/10, H=${lockedHard}/20, VH=${lockedVeryHard}/10`);
  }

  const idSet = new Set<string>();
  questions.forEach((q, idx) => {
    if (idSet.has(q.id)) {
      errors.push(`Duplicate question ID: ${q.id}`);
    }
    idSet.add(q.id);

    if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
      errors.push(`Invalid correctAnswer for ${q.id}: ${q.correctAnswer}`);
    }

    if (!q.options.A || !q.options.B || !q.options.C || !q.options.D) {
      errors.push(`Missing option in ${q.id}`);
    }

    if (!q.explanation || q.explanation.trim().length < 10) {
      errors.push(`Missing or brief explanation in ${q.id}`);
    }

    if (
      !q.optionExplanations?.A ||
      !q.optionExplanations?.B ||
      !q.optionExplanations?.C ||
      !q.optionExplanations?.D
    ) {
      errors.push(`Missing optionExplanations in ${q.id}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    summary: {
      total: questions.length,
      freeCount: free.length,
      lockedCount: locked.length,
      freeDistribution: { medium: freeMedium, hard: freeHard, veryHard: freeVeryHard },
      lockedDistribution: { medium: lockedMedium, hard: lockedHard, veryHard: lockedVeryHard },
    }
  };
}

// Auto-run validation check on import in dev
export const questionBankValidation = validateQuestionBank();
if (!questionBankValidation.isValid) {
  console.error("NISM XV Question Bank Integrity Warnings:", questionBankValidation.errors);
} else {
  console.log("NISM XV Question Bank successfully validated (80 questions, 100% compliant).");
}
