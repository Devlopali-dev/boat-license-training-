"use client";

import { ArrowLeft, CheckCircle, ClipboardList, XCircle } from "lucide-react";
import Link from "next/link";
import { useExam } from "@/hooks/useExam";
import { useProgress } from "@/hooks/useProgress";
import { ExamTimer } from "@/components/ExamTimer";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import { formatDate, formatDuration } from "@/lib/utils";

export default function ExamenPage() {
  const { state, questions, currentIndex, currentQuestion, answers, timeLeft, session, start, answer, reset } =
    useExam("fluvial");
  const { saveSession } = useProgress();

  function handleAnswer(selectedIndex: number) {
    const newSession = answer(selectedIndex);
    if (newSession) saveSession(newSession);
  }

  if (state === "idle") {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900">
            <ArrowLeft className="size-4" />
            Retour
          </Link>
          <h1 className="text-xl font-bold text-slate-900">Examen Blanc</h1>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center flex flex-col items-center gap-6">
          <ClipboardList className="size-14 text-emerald-500" />
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Simulateur d&apos;examen
            </h2>
            <p className="text-slate-500 max-w-sm mx-auto">
              40 questions tirées au hasard. Vous avez 45 minutes. Le seuil de
              réussite est de 87,5% (35/40).
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center w-full max-w-sm">
            <InfoBox value="40" label="Questions" />
            <InfoBox value="45 min" label="Durée" />
            <InfoBox value="87,5%" label="Seuil" />
          </div>
          <button
            onClick={start}
            className="rounded-xl bg-emerald-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-emerald-700 cursor-pointer"
          >
            Commencer l&apos;examen
          </button>
        </div>
      </div>
    );
  }

  if (state === "finished" && session) {
    const correct = session.answers.filter((a) => a.correct).length;
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-slate-900">Résultats</h1>
        </div>

        {/* Score card */}
        <div
          className={`rounded-2xl p-8 text-center text-white ${
            session.passed
              ? "bg-gradient-to-br from-emerald-500 to-emerald-700"
              : "bg-gradient-to-br from-red-500 to-red-700"
          }`}
        >
          {session.passed ? (
            <CheckCircle className="mx-auto mb-3 size-12" />
          ) : (
            <XCircle className="mx-auto mb-3 size-12" />
          )}
          <p className="text-4xl font-bold">
            {correct} / {session.total}
          </p>
          <p className="mt-1 text-xl font-semibold opacity-90">
            {session.passed ? "ADMIS" : "AJOURNÉ"}
          </p>
          <p className="mt-2 text-sm opacity-80">
            Score : {session.score}% — Durée : {formatDuration(session.durationSeconds)}
          </p>
          <p className="text-xs opacity-70 mt-1">{formatDate(session.date)}</p>
        </div>

        {/* Answers review */}
        <div className="rounded-2xl border border-slate-200 bg-white">
          <div className="p-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900">Récapitulatif des réponses</h2>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {session.answers.map((a, i) => (
              <div
                key={a.questionId}
                className={`flex size-9 items-center justify-center rounded-lg text-sm font-bold ${
                  a.correct
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-red-100 text-red-700"
                }`}
                title={`Q${i + 1} — ${a.correct ? "Correcte" : "Incorrecte"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Wrong answers detail */}
        {questions.filter((_, i) => !session.answers[i]?.correct).length > 0 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-semibold text-slate-700">
              Questions incorrectes ({questions.filter((_, i) => !session.answers[i]?.correct).length})
            </h2>
            {questions.map((q, i) => {
              const ans = session.answers[i];
              if (!ans || ans.correct) return null;
              return (
                <div key={q.id} className="rounded-xl border border-red-200 bg-white p-4">
                  <p className="font-medium text-slate-900 mb-2">{q.question}</p>
                  <p className="text-sm text-red-600 mb-1">
                    Votre réponse : {ans.selectedIndex !== null ? q.options[ans.selectedIndex] : "Sans réponse"}
                  </p>
                  <p className="text-sm text-emerald-700 mb-2">
                    Bonne réponse : {q.options[q.correctIndex]}
                  </p>
                  <p className="text-xs text-slate-500">{q.explanation}</p>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={reset}
            className="flex-1 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 cursor-pointer"
          >
            Nouvel examen
          </button>
          <Link
            href="/revision"
            className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Réviser
          </Link>
        </div>
      </div>
    );
  }

  // Running
  return (
    <div className="flex flex-col gap-5">
      {/* Progress bar */}
      <div className="flex items-center justify-between gap-4">
        <ProgressBar
          value={currentIndex}
          max={questions.length}
          className="flex-1"
          color="green"
        />
        <ExamTimer timeLeft={timeLeft} />
      </div>

      {currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          showExplanation={false}
          onAnswer={(selectedIndex) => handleAnswer(selectedIndex)}
        />
      )}

      <div className="text-center text-xs text-slate-400">
        Les explications seront disponibles après l&apos;examen
      </div>
    </div>
  );
}

function InfoBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xl font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500 mt-0.5">{label}</p>
    </div>
  );
}
