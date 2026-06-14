"use client";

import { useState } from "react";
import { ArrowLeft, Filter } from "lucide-react";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { QUESTIONS_FLUVIAL } from "@/data/questions-fluvial";
import { QuestionCard } from "@/components/QuestionCard";
import { CategoryBadge } from "@/components/CategoryBadge";
import { useProgress } from "@/hooks/useProgress";
import { shuffle } from "@/lib/utils";
import type { CategoryId } from "@/types";

export default function RevisionPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | "all">("all");
  const [questions, setQuestions] = useState(() => shuffle(QUESTIONS_FLUVIAL));
  const [currentIndex, setCurrentIndex] = useState(0);
  const { record } = useProgress();

  const filtered =
    selectedCategory === "all"
      ? questions
      : questions.filter((q) => q.category === selectedCategory);

  const current = filtered[currentIndex] ?? null;

  function handleCategoryChange(cat: CategoryId | "all") {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setQuestions(shuffle(QUESTIONS_FLUVIAL));
  }

  function handleAnswer(selectedIndex: number, correct: boolean) {
    if (current) record(current.id, correct);
    void selectedIndex;
  }

  function handleNext() {
    if (currentIndex < filtered.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setCurrentIndex(0);
      setQuestions(shuffle(QUESTIONS_FLUVIAL));
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft className="size-4" />
          Retour
        </Link>
        <h1 className="text-xl font-bold text-slate-900">Mode Révision</h1>
      </div>

      {/* Category filter */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center gap-2 mb-3 text-sm font-medium text-slate-600">
          <Filter className="size-4" />
          Filtrer par catégorie
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Toutes ({QUESTIONS_FLUVIAL.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = QUESTIONS_FLUVIAL.filter(
              (q) => q.category === cat.id
            ).length;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? `${cat.bgColor} ${cat.color} ring-2 ring-current`
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>
          Question {currentIndex + 1} / {filtered.length}
        </span>
        {selectedCategory !== "all" && (
          <CategoryBadge categoryId={selectedCategory} size="sm" />
        )}
      </div>

      {/* Question */}
      {current ? (
        <QuestionCard
          question={current}
          questionNumber={currentIndex + 1}
          totalQuestions={filtered.length}
          showExplanation
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-slate-400">
          Aucune question dans cette catégorie.
        </div>
      )}
    </div>
  );
}
