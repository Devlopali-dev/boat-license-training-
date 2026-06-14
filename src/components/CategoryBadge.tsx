import { getCategoryById } from "@/data/categories";
import { cn } from "@/lib/utils";

type Props = {
  categoryId: string;
  size?: "sm" | "md";
  className?: string;
};

export function CategoryBadge({ categoryId, size = "md", className }: Props) {
  const cat = getCategoryById(categoryId);
  if (!cat) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        cat.bgColor,
        cat.color,
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
        className
      )}
    >
      {cat.label}
    </span>
  );
}
