"use client";

import { useCallback, useEffect, useState } from "react";
import {
  getExamSessions,
  getProgress,
  recordAnswer,
  resetProgress,
  saveExamSession,
} from "@/lib/storage";
import type { ExamSession, UserProgress } from "@/types";

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>({});
  const [examSessions, setExamSessions] = useState<ExamSession[]>([]);

  useEffect(() => {
    setProgress(getProgress());
    setExamSessions(getExamSessions());
  }, []);

  const record = useCallback((questionId: string, correct: boolean) => {
    recordAnswer(questionId, correct);
    setProgress(getProgress());
  }, []);

  const saveSession = useCallback((session: ExamSession) => {
    saveExamSession(session);
    setExamSessions(getExamSessions());
  }, []);

  const reset = useCallback(() => {
    resetProgress();
    setProgress({});
    setExamSessions([]);
  }, []);

  const totalAttempted = Object.keys(progress).length;
  const totalMastered = Object.values(progress).filter(
    (p) => p.mastered
  ).length;
  const overallAccuracy =
    totalAttempted === 0
      ? 0
      : Object.values(progress).reduce(
          (sum, p) => sum + (p.correctAttempts / Math.max(p.attempts, 1)),
          0
        ) / totalAttempted;

  return {
    progress,
    examSessions,
    record,
    saveSession,
    reset,
    totalAttempted,
    totalMastered,
    overallAccuracy,
  };
}
