import type { Category } from "@/types";

export const CATEGORIES: Category[] = [
  {
    id: "navigation",
    label: "Navigation",
    description: "Règles de route, croisement, dépassement, priorité",
    color: "text-blue-700",
    bgColor: "bg-blue-100",
  },
  {
    id: "signalisation",
    label: "Signalisation",
    description: "Feux, marques de bouée, panneaux et signaux",
    color: "text-amber-700",
    bgColor: "bg-amber-100",
  },
  {
    id: "manoeuvre",
    label: "Manœuvre",
    description: "Amarrage, mouillage, manœuvres en port et écluse",
    color: "text-green-700",
    bgColor: "bg-green-100",
  },
  {
    id: "securite",
    label: "Sécurité",
    description: "Équipements obligatoires, gilets de sauvetage, secours",
    color: "text-red-700",
    bgColor: "bg-red-100",
  },
  {
    id: "meteo",
    label: "Météorologie",
    description: "Lecture des prévisions, vents, visibilité, prudence",
    color: "text-purple-700",
    bgColor: "bg-purple-100",
  },
  {
    id: "reglementation",
    label: "Réglementation",
    description: "Immatriculation, vitesses, zones, documents de bord",
    color: "text-slate-700",
    bgColor: "bg-slate-100",
  },
  {
    id: "mecanique",
    label: "Mécanique",
    description: "Moteur, carburant, entretien de base, pannes courantes",
    color: "text-orange-700",
    bgColor: "bg-orange-100",
  },
];

export const getCategoryById = (id: string): Category | undefined =>
  CATEGORIES.find((c) => c.id === id);
