"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, BarChart3, BookOpen, ClipboardList, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Accueil", icon: Anchor },
  { href: "/revision", label: "Révision", icon: BookOpen },
  { href: "/examen", label: "Examen", icon: ClipboardList },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/stats", label: "Stats", icon: BarChart3 },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-blue-700">
          <Anchor className="size-5" />
          <span className="hidden sm:inline">Permis Bateau</span>
        </Link>
        <div className="flex items-center gap-1">
          {NAV_ITEMS.slice(1).map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <Icon className="size-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
