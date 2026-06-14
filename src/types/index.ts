export type LicenseType = "fluvial" | "cotier";

export type CategoryId =
  | "navigation"
  | "signalisation"
  | "manoeuvre"
  | "securite"
  | "meteo"
  | "reglementation"
  | "mecanique";

export type Category = {
  id: CategoryId;
  label: string;
  description: string;
  color: string;
  bgColor: string;
};

export type Question = {
  id: string;
  licenseType: LicenseType;
  category: CategoryId;
  difficulty: 1 | 2 | 3;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  imageUrl?: string;
};

export type QuestionAttempt = {
  attempts: number;
  correctAttempts: number;
  lastAttemptAt: string;
  mastered: boolean;
};

export type UserProgress = {
  [questionId: string]: QuestionAttempt;
};

export type ExamAnswer = {
  questionId: string;
  selectedIndex: number | null;
  correct: boolean;
};

export type ExamSession = {
  id: string;
  date: string;
  score: number;
  total: number;
  answers: ExamAnswer[];
  passed: boolean;
  durationSeconds: number;
};

export type AppStorage = {
  progress: UserProgress;
  examSessions: ExamSession[];
};
