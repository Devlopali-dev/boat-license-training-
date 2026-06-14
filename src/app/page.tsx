import Link from "next/link";
import {
  Anchor,
  BarChart3,
  BookOpen,
  ClipboardList,
  Layers,
} from "lucide-react";
import { QUESTIONS_FLUVIAL } from "@/data/questions-fluvial";
import { CATEGORIES } from "@/data/categories";

const MODES = [
  {
    href: "/revision",
    icon: BookOpen,
    title: "Révision",
    description: "Parcourez les questions par catégorie, à votre rythme.",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    href: "/examen",
    icon: ClipboardList,
    title: "Examen blanc",
    description: `${Math.min(40, QUESTIONS_FLUVIAL.length)} questions, 45 minutes. Simulez le vrai examen.`,
    color: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    href: "/flashcards",
    icon: Layers,
    title: "Flashcards",
    description: "Question / réponse en mode cartes. Idéal pour mémoriser.",
    color: "bg-violet-600 hover:bg-violet-700",
  },
  {
    href: "/stats",
    icon: BarChart3,
    title: "Mes statistiques",
    description: "Suivez votre progression et identifiez les points faibles.",
    color: "bg-amber-600 hover:bg-amber-700",
  },
];

export default function HomePage() {
  const totalQuestions = QUESTIONS_FLUVIAL.length;
  const totalCategories = CATEGORIES.length;

  return (
    <div className="flex flex-col gap-8">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 px-8 py-10 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <Anchor className="size-8" />
          <h1 className="text-2xl font-bold">Permis Bateau Fluvial</h1>
        </div>
        <p className="text-blue-100 text-base leading-relaxed max-w-lg">
          Révisez et entraînez-vous pour l&apos;examen du permis bateau
          (eaux intérieures). Des questions couvrant toutes les catégories
          officielles.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Stat value={totalQuestions} label="questions" />
          <Stat value={totalCategories} label="catégories" />
          <Stat value="87,5%" label="seuil de réussite" />
        </div>
      </div>

      {/* Mode cards */}
      <div>
        <h2 className="text-base font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Choisissez un mode
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {MODES.map(({ href, icon: Icon, title, description, color }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col gap-2 rounded-2xl p-5 text-white shadow transition-transform hover:scale-[1.02] ${color}`}
            >
              <Icon className="size-6" />
              <span className="text-lg font-bold">{title}</span>
              <span className="text-sm opacity-90">{description}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories overview */}
      <div>
        <h2 className="text-base font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Catégories couvertes
        </h2>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const count = QUESTIONS_FLUVIAL.filter(
              (q) => q.category === cat.id
            ).length;
            return (
              <span
                key={cat.id}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${cat.bgColor} ${cat.color}`}
              >
                {cat.label}
                <span className="ml-1 rounded-full bg-white/60 px-1.5 py-0.5 text-xs font-bold">
                  {count}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-blue-200 text-sm">{label}</span>
    </div>
  );
}
