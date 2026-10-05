import type { CSSProperties } from "react";
import type { SiteConfig } from "@/config/site";

/** Converte os tokens do config em variáveis CSS (--brand-*) usadas pelo Tailwind. */
export function themeToCssVars(theme: SiteConfig["theme"]): CSSProperties {
  const vars: Record<string, string> = {
    "--brand-bg": theme.bg,
    "--brand-surface": theme.surface,
    "--brand-surface-2": theme.surface2,
    "--brand-line": theme.line,
    "--brand-fg": theme.fg,
    "--brand-muted": theme.muted,
    "--brand-accent": theme.accent,
    "--brand-accent-strong": theme.accentStrong,
    "--brand-accent-strong-hover": theme.accentStrongHover,
    "--brand-chamfer": theme.chamfer,
    "--brand-radius": theme.radius,
  };
  return vars as CSSProperties;
}

/** Atraso da animação de entrada (usado com .animate-fade-up / .animate-fade-in). */
export function animationDelay(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}
