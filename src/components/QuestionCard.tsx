"use client";

import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { CategoryBadge } from "@/components/CategoryBadge";
import type { Question } from "@/types";

type Props = {
  question: Question;
  questionNumber?: number;
  totalQuestions?: number;
  showExplanation?: boolean;
  onAnswer?: (selectedIndex: number, correct: boolean) => void;
  onNext?: () => void;
};

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  showExplanation = true,
  onAnswer,
  onNext,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  function handleSelect(index: number) {
    if (answered) return;
    setSelected(index);
    const correct = index === question.correctIndex;
    onAnswer?.(index, correct);
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <CategoryBadge categoryId={question.category} size="sm" />
        {questionNumber != null && totalQuestions != null && (
          <span className="text-sm text-slate-500">
            Question {questionNumber} / {totalQuestions}
          </span>
        )}
        <DifficultyDots level={question.difficulty} />
      </div>

      {/* Question text */}
      <p className="text-lg font-semibold leading-snug text-slate-900">
        {question.question}
      </p>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option, i) => {
          const isCorrect = i === question.correctIndex;
          const isSelected = i === selected;

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              className={cn(
                "flex items-start gap-3 rounded-xl border-2 p-4 text-left text-sm transition-all",
                !answered &&
                  "border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer",
                answered && isCorrect &&
                  "border-green-500 bg-green-50 text-green-800",
                answered && isSelected && !isCorrect &&
                  "border-red-400 bg-red-50 text-red-800",
                answered && !isSelected && !isCorrect &&
                  "border-slate-200 bg-slate-50 text-slate-500",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                  !answered && "border-slate-300 text-slate-500",
                  answered && isCorrect &&
                    "border-green-500 bg-green-500 text-white",
                  answered && isSelected && !isCorrect &&
                    "border-red-400 bg-red-400 text-white",
                  answered && !isSelected && !isCorrect &&
                    "border-slate-300 text-slate-400",
                )}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{option}</span>
              {answered && isCorrect && (
                <CheckCircle className="mt-0.5 size-5 shrink-0 text-green-500" />
              )}
              {answered && isSelected && !isCorrect && (
                <XCircle className="mt-0.5 size-5 shrink-0 text-red-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && showExplanation && (
        <div
          className={cn(
            "rounded-xl border-l-4 p-4 text-sm",
            selected === question.correctIndex
              ? "border-green-500 bg-green-50 text-green-800"
              : "border-red-400 bg-red-50 text-red-800"
          )}
        >
          <p className="font-semibold mb-1">
            {selected === question.correctIndex ? "Bonne réponse !" : "Mauvaise réponse"}
          </p>
          <p>{question.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {answered && onNext && (
        <button
          onClick={onNext}
          className="mt-1 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-700 cursor-pointer"
        >
          Question suivante →
        </button>
      )}
    </div>
  );
}

function DifficultyDots({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-1" title={`Difficulté ${level}/3`}>
      {[1, 2, 3].map((d) => (
        <span
          key={d}
          className={cn(
            "size-2 rounded-full",
            d <= level ? "bg-amber-400" : "bg-slate-200"
          )}
        />
      ))}
    </div>
  );
}
