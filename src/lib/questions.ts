import type { CategoryId, LicenseType, Question } from "@/types";
import { QUESTIONS_FLUVIAL } from "@/data/questions-fluvial";
import { shuffle } from "@/lib/utils";

export const MAX_EXAM_QUESTIONS = 40;
export const EXAM_PASS_THRESHOLD = 0.875;
export const EXAM_DURATION_SECONDS = 45 * 60;

export function getAllQuestions(licenseType: LicenseType): Question[] {
  if (licenseType === "fluvial") return QUESTIONS_FLUVIAL;
  return [];
}

export function getQuestionsByCategory(
  licenseType: LicenseType,
  category: CategoryId
): Question[] {
  return getAllQuestions(licenseType).filter((q) => q.category === category);
}

export function buildExam(licenseType: LicenseType): Question[] {
  const all = getAllQuestions(licenseType);
  return shuffle(all).slice(0, Math.min(MAX_EXAM_QUESTIONS, all.length));
}

export function getWeakQuestions(
  licenseType: LicenseType,
  progress: Record<string, { attempts: number; correctAttempts: number }>
): Question[] {
  const all = getAllQuestions(licenseType);
  return all.filter((q) => {
    const p = progress[q.id];
    if (!p || p.attempts === 0) return false;
    return p.correctAttempts / p.attempts < 0.5;
  });
}

export function countByCategory(
  questions: Question[]
): Record<CategoryId, number> {
  const counts = {} as Record<CategoryId, number>;
  for (const q of questions) {
    counts[q.category] = (counts[q.category] ?? 0) + 1;
  }
  return counts;
}
