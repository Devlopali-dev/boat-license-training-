"use client";

import { Clock } from "lucide-react";
import { cn, formatDuration } from "@/lib/utils";
import { EXAM_DURATION_SECONDS } from "@/lib/questions";

type Props = {
  timeLeft: number;
};

export function ExamTimer({ timeLeft }: Props) {
  const ratio = timeLeft / EXAM_DURATION_SECONDS;
  const isWarning = ratio < 0.2;
  const isDanger = ratio < 0.1;

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-lg font-bold",
        isDanger
          ? "bg-red-100 text-red-700 animate-pulse"
          : isWarning
          ? "bg-amber-100 text-amber-700"
          : "bg-slate-100 text-slate-700"
      )}
    >
      <Clock className="size-5" />
      {formatDuration(timeLeft)}
    </div>
  );
}
