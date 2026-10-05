import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  /** Texto extra só para leitores de ecrã (ex.: o nome do serviço) */
  srLabel?: string;
  className?: string;
};

/** Link pequeno em caixa alta com o quadradinho de seta laranja, ao estilo da referência. */
export function ArrowLink({ href, children, external = false, srLabel, className = "" }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`group/link inline-flex min-h-11 items-center gap-2.5 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-fg transition-colors hover:text-accent ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span
        aria-hidden="true"
        className="chamfer-sm grid size-[1.125rem] place-items-center bg-accent-strong text-white transition-transform duration-200 group-hover/link:translate-x-0.5"
      >
        <ChevronRight className="size-3" strokeWidth={3} />
      </span>
      <span>
        {children}
        {srLabel ? <span className="sr-only"> {srLabel}</span> : null}
      </span>
    </a>
  );
}
