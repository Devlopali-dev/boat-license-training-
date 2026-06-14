"use client";

import type { AppStorage, ExamSession, UserProgress } from "@/types";

const STORAGE_KEY = "boat-license-training";

function getStorage(): AppStorage {
  if (typeof window === "undefined") {
    return { progress: {}, examSessions: [] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { progress: {}, examSessions: [] };
    return JSON.parse(raw) as AppStorage;
  } catch {
    return { progress: {}, examSessions: [] };
  }
}

function setStorage(data: AppStorage): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getProgress(): UserProgress {
  return getStorage().progress;
}

export function recordAnswer(questionId: string, correct: boolean): void {
  const storage = getStorage();
  const existing = storage.progress[questionId] ?? {
    attempts: 0,
    correctAttempts: 0,
    lastAttemptAt: "",
    mastered: false,
  };

  const updated = {
    attempts: existing.attempts + 1,
    correctAttempts: existing.correctAttempts + (correct ? 1 : 0),
    lastAttemptAt: new Date().toISOString(),
    mastered: correct && existing.correctAttempts >= 2,
  };

  setStorage({
    ...storage,
    progress: { ...storage.progress, [questionId]: updated },
  });
}

export function saveExamSession(session: ExamSession): void {
  const storage = getStorage();
  setStorage({
    ...storage,
    examSessions: [session, ...storage.examSessions].slice(0, 20),
  });
}

export function getExamSessions(): ExamSession[] {
  return getStorage().examSessions;
}

export function resetProgress(): void {
  setStorage({ progress: {}, examSessions: [] });
}
