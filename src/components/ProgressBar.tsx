import { cn } from "@/lib/utils";

type Props = {
  value: number;
  max: number;
  label?: string;
  color?: "blue" | "green" | "amber" | "red";
  className?: string;
};

export function ProgressBar({
  value,
  max,
  label,
  color = "blue",
  className,
}: Props) {
  const pct = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100));

  const barColors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    amber: "bg-amber-400",
    red: "bg-red-500",
  };

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="mb-1 flex justify-between text-xs text-slate-500">
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500",
            barColors[color]
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
