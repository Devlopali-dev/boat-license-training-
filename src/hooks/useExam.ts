"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { buildExam, EXAM_DURATION_SECONDS, EXAM_PASS_THRESHOLD } from "@/lib/questions";
import type { ExamAnswer, ExamSession, LicenseType, Question } from "@/types";
import { v4 as uuid } from "@/lib/uuid";

type ExamState = "idle" | "running" | "finished";

export function useExam(licenseType: LicenseType) {
  const [state, setState] = useState<ExamState>("idle");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<ExamAnswer[]>([]);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_SECONDS);
  const [session, setSession] = useState<ExamSession | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const finishExam = useCallback(
    (finalAnswers: ExamAnswer[], elapsedSeconds: number) => {
      clearTimer();
      const correct = finalAnswers.filter((a) => a.correct).length;
      const score = Math.round((correct / finalAnswers.length) * 100);
      const passed = correct / finalAnswers.length >= EXAM_PASS_THRESHOLD;

      const newSession: ExamSession = {
        id: uuid(),
        date: new Date().toISOString(),
        score,
        total: finalAnswers.length,
        answers: finalAnswers,
        passed,
        durationSeconds: elapsedSeconds,
      };

      setSession(newSession);
      setState("finished");
      return newSession;
    },
    []
  );

  useEffect(() => {
    if (state !== "running") return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          const elapsed = Math.round(
            (Date.now() - startTimeRef.current) / 1000
          );
          finishExam(answers, elapsed);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return clearTimer;
  }, [state, answers, finishExam]);

  const start = useCallback(() => {
    const qs = buildExam(licenseType);
    setQuestions(qs);
    setAnswers(qs.map((q) => ({ questionId: q.id, selectedIndex: null, correct: false })));
    setCurrentIndex(0);
    setTimeLeft(EXAM_DURATION_SECONDS);
    setSession(null);
    startTimeRef.current = Date.now();
    setState("running");
  }, [licenseType]);

  const answer = useCallback(
    (selectedIndex: number) => {
      if (state !== "running") return null;
      const question = questions[currentIndex];
      const correct = selectedIndex === question.correctIndex;

      const updated = answers.map((a, i) =>
        i === currentIndex ? { ...a, selectedIndex, correct } : a
      );
      setAnswers(updated);

      if (currentIndex >= questions.length - 1) {
        const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
        return finishExam(updated, elapsed);
      }

      setCurrentIndex((i) => i + 1);
      return null;
    },
    [state, questions, currentIndex, answers, finishExam]
  );

  const reset = useCallback(() => {
    clearTimer();
    setState("idle");
    setQuestions([]);
    setAnswers([]);
    setCurrentIndex(0);
    setTimeLeft(EXAM_DURATION_SECONDS);
    setSession(null);
  }, []);

  return {
    state,
    questions,
    currentIndex,
    currentQuestion: questions[currentIndex] ?? null,
    answers,
    timeLeft,
    session,
    start,
    answer,
    reset,
  };
}
