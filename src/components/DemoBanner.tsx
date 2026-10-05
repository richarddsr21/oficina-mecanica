import { site } from "@/config/site";

/** Barra discreta que identifica o site como proposta (demo.active no config). */
export function DemoBanner() {
  if (!site.demo.active) return null;

  return (
    <div className="border-b border-line bg-surface px-4 py-2 text-center text-xs text-muted sm:text-sm">
      <span className="mr-2 inline-block size-1.5 -translate-y-px rounded-full bg-accent align-middle" aria-hidden="true" />
      {site.demo.text}
    </div>
  );
}
