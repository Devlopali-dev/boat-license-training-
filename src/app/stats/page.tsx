"use client";

import { AlertCircle, ArrowLeft, BarChart3, CheckCircle, RotateCcw, Trophy } from "lucide-react";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { QUESTIONS_FLUVIAL } from "@/data/questions-fluvial";
import { CategoryBadge } from "@/components/CategoryBadge";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/hooks/useProgress";
import { formatDate, formatDuration } from "@/lib/utils";

export default function StatsPage() {
  const { progress, examSessions, totalAttempted, totalMastered, overallAccuracy, reset } =
    useProgress();

  const totalQuestions = QUESTIONS_FLUVIAL.length;
  const lastExam = examSessions[0] ?? null;
  const bestScore = examSessions.length
    ? Math.max(...examSessions.map((s) => s.score))
    : null;

  function handleReset() {
    if (confirm("Réinitialiser toutes les statistiques ? Cette action est irréversible.")) {
      reset();
    }
  }

  if (totalAttempted === 0 && examSessions.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <Header />
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center flex flex-col items-center gap-4 text-slate-400">
          <BarChart3 className="size-12" />
          <p className="text-lg font-medium">Aucune statistique pour l&apos;instant</p>
          <p className="text-sm">Commencez par réviser ou faire un examen blanc.</p>
          <div className="flex gap-3 mt-2">
            <Link href="/revision" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Réviser
            </Link>
            <Link href="/examen" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
              Examen blanc
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <Header />

      {/* Global stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard
          value={`${totalAttempted}/${totalQuestions}`}
          label="Questions tentées"
          color="text-blue-600"
        />
        <StatCard
          value={`${Math.round(overallAccuracy * 100)}%`}
          label="Précision globale"
          color="text-emerald-600"
        />
        <StatCard
          value={totalMastered}
          label="Questions maîtrisées"
          color="text-violet-600"
        />
        <StatCard
          value={examSessions.length}
          label="Examens passés"
          color="text-amber-600"
        />
      </div>

      {/* Last exam */}
      {lastExam && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900 mb-4">Dernier examen</h2>
          <div className="flex items-center gap-4 mb-3">
            {lastExam.passed ? (
              <CheckCircle className="size-8 text-emerald-500 shrink-0" />
            ) : (
              <AlertCircle className="size-8 text-red-500 shrink-0" />
            )}
            <div className="flex-1">
              <p className="font-bold text-2xl text-slate-900">
                {lastExam.answers.filter((a) => a.correct).length}/{lastExam.total}
              </p>
              <p className="text-sm text-slate-500">
                {lastExam.passed ? "Admis" : "Ajourné"} · {lastExam.score}% ·{" "}
                {formatDuration(lastExam.durationSeconds)} · {formatDate(lastExam.date)}
              </p>
            </div>
          </div>
          <ProgressBar
            value={lastExam.answers.filter((a) => a.correct).length}
            max={lastExam.total}
            color={lastExam.passed ? "green" : "red"}
          />
        </div>
      )}

      {/* Best score */}
      {bestScore !== null && (
        <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <Trophy className="size-6 text-amber-500 shrink-0" />
          <p className="text-amber-800 font-medium">
            Meilleur score : <span className="font-bold">{bestScore}%</span> sur {examSessions.length} examen{examSessions.length > 1 ? "s" : ""}
          </p>
        </div>
      )}

      {/* Progress by category */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="font-semibold text-slate-900 mb-4">Progression par catégorie</h2>
        <div className="flex flex-col gap-4">
          {CATEGORIES.map((cat) => {
            const catQuestions = QUESTIONS_FLUVIAL.filter(
              (q) => q.category === cat.id
            );
            const attempted = catQuestions.filter((q) => progress[q.id]);
            const correct = catQuestions.filter(
              (q) => progress[q.id]?.correctAttempts > 0
            );

            return (
              <div key={cat.id}>
                <div className="flex items-center justify-between mb-1.5">
                  <CategoryBadge categoryId={cat.id} size="sm" />
                  <span className="text-xs text-slate-500">
                    {correct.length}/{catQuestions.length} réussies
                  </span>
                </div>
                <ProgressBar
                  value={correct.length}
                  max={catQuestions.length}
                  color={
                    correct.length / catQuestions.length >= 0.875
                      ? "green"
                      : correct.length / catQuestions.length >= 0.5
                      ? "amber"
                      : "red"
                  }
                />
                {attempted.length === 0 && (
                  <p className="text-xs text-slate-400 mt-1">Non commencé</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Exam history */}
      {examSessions.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900 mb-4">Historique des examens</h2>
          <div className="flex flex-col gap-2">
            {examSessions.map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  {s.passed ? (
                    <CheckCircle className="size-5 text-emerald-500" />
                  ) : (
                    <AlertCircle className="size-5 text-red-500" />
                  )}
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {s.score}% — {s.passed ? "Admis" : "Ajourné"}
                    </p>
                    <p className="text-xs text-slate-400">{formatDate(s.date)}</p>
                  </div>
                </div>
                <span className="text-sm text-slate-500">
                  {s.answers.filter((a) => a.correct).length}/{s.total}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reset */}
      <div className="flex justify-center">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-500 transition-colors hover:border-red-300 hover:text-red-600 cursor-pointer"
        >
          <RotateCcw className="size-4" />
          Réinitialiser les statistiques
        </button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex items-center gap-3">
      <Link href="/" className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900">
        <ArrowLeft className="size-4" />
        Retour
      </Link>
      <h1 className="text-xl font-bold text-slate-900">Mes Statistiques</h1>
    </div>
  );
}

function StatCard({ value, label, color }: { value: string | number; label: string; color: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-xs text-slate-500 mt-0.5">{label}</p>
    </div>
  );
}
