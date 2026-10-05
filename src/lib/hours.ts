import type { TimeRange } from "@/config/site";

/** "09:00 – 13:00 · 14:00 – 19:00" ou "Fechado" */
export function formatPeriods(periods: TimeRange[]): string {
  if (periods.length === 0) return "Fechado";
  return periods.map((p) => `${p.open} – ${p.close}`).join(" · ");
}
