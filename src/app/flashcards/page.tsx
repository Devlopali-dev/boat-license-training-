"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Layers, RotateCcw, XCircle } from "lucide-react";
import Link from "next/link";
import { QUESTIONS_FLUVIAL } from "@/data/questions-fluvial";
import { CategoryBadge } from "@/components/CategoryBadge";
import { useProgress } from "@/hooks/useProgress";
import { shuffle } from "@/lib/utils";

export default function FlashcardsPage() {
  const [cards] = useState(() => shuffle(QUESTIONS_FLUVIAL));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const { record } = useProgress();

  const card = cards[index];
  const total = cards.length;
  const done = index >= total;

  function handleFlip() {
    setFlipped((f) => !f);
  }

  function handleResult(correct: boolean) {
    if (!card) return;
    record(card.id, correct);
    if (correct) setScore((s) => ({ ...s, correct: s.correct + 1 }));
    else setScore((s) => ({ ...s, incorrect: s.incorrect + 1 }));
    setFlipped(false);
    setIndex((i) => i + 1);
  }

  if (done) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900">
            <ArrowLeft className="size-4" />
            Retour
          </Link>
          <h1 className="text-xl font-bold text-slate-900">Flashcards</h1>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center flex flex-col items-center gap-6">
          <Layers className="size-12 text-violet-500" />
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">Série terminée !</h2>
            <p className="text-slate-500">{total} cartes parcourues</p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            <div className="rounded-xl bg-green-50 p-4 text-center">
              <CheckCircle className="mx-auto mb-1 size-6 text-green-500" />
              <p className="text-2xl font-bold text-green-700">{score.correct}</p>
              <p className="text-xs text-green-600">Connues</p>
            </div>
            <div className="rounded-xl bg-red-50 p-4 text-center">
              <XCircle className="mx-auto mb-1 size-6 text-red-500" />
              <p className="text-2xl font-bold text-red-700">{score.incorrect}</p>
              <p className="text-xs text-red-600">À retravailler</p>
            </div>
          </div>
          <button
            onClick={() => {
              setIndex(0);
              setFlipped(false);
              setScore({ correct: 0, incorrect: 0 });
            }}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-700 cursor-pointer"
          >
            <RotateCcw className="size-4" />
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900">
            <ArrowLeft className="size-4" />
            Retour
          </Link>
          <h1 className="text-xl font-bold text-slate-900">Flashcards</h1>
        </div>
        <span className="text-sm text-slate-500">
          {index + 1} / {total}
        </span>
      </div>

      {/* Progress */}
      <div className="flex gap-1">
        {Array.from({ length: Math.min(total, 40) }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < index ? "bg-violet-500" : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      {/* Card */}
      <button
        onClick={handleFlip}
        className="relative min-h-64 w-full cursor-pointer rounded-2xl border-2 border-violet-200 bg-white p-8 text-left shadow-md transition-all hover:shadow-lg active:scale-[0.99]"
      >
        <div className="flex flex-col gap-4 h-full">
          <div className="flex items-start justify-between gap-3">
            <CategoryBadge categoryId={card.category} size="sm" />
            <span className="text-xs text-slate-400 font-medium">
              {flipped ? "RÉPONSE" : "QUESTION — cliquez pour retourner"}
            </span>
          </div>

          <div className="flex-1 flex items-center">
            <p className={`leading-relaxed ${flipped ? "text-base text-slate-700" : "text-lg font-semibold text-slate-900"}`}>
              {flipped ? card.options[card.correctIndex] : card.question}
            </p>
          </div>

          {flipped && (
            <div className="rounded-lg bg-violet-50 p-3 text-sm text-violet-800 border border-violet-100">
              {card.explanation}
            </div>
          )}

          {!flipped && (
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <ArrowRight className="size-3" />
              Cliquez pour voir la réponse
            </div>
          )}
        </div>
      </button>

      {/* Actions */}
      {flipped ? (
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleResult(false)}
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-red-300 bg-red-50 px-4 py-4 font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
          >
            <XCircle className="size-5" />
            À retravailler
          </button>
          <button
            onClick={() => handleResult(true)}
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-green-400 bg-green-50 px-4 py-4 font-semibold text-green-700 transition-colors hover:bg-green-100 cursor-pointer"
          >
            <CheckCircle className="size-5" />
            Je savais !
          </button>
        </div>
      ) : (
        <p className="text-center text-sm text-slate-400">
          Réfléchissez à la réponse, puis retournez la carte
        </p>
      )}
    </div>
  );
}
