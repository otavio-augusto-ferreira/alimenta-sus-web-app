import { ReactNode } from "react";

export function QuestionCard({ children }: { children: ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}
