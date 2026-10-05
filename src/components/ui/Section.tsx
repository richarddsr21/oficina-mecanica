import type { ReactNode } from "react";
import type { SectionCopy } from "@/config/site";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Camada de fundo que ocupa a secção inteira (fora do container) */
  background?: ReactNode;
};

export function Section({ id, children, className = "", background }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative scroll-mt-16 py-20 sm:py-24 lg:scroll-mt-20 ${className}`}>
      {background}
      <div className="container-site relative">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  id: string;
  copy: SectionCopy;
  /** Botão ou link alinhado à direita do título */
  action?: ReactNode;
  /** Linha fina por baixo do título, a toda a largura */
  rule?: boolean;
  className?: string;
};

/** Título de secção: caixa alta, palavra opcional em contorno por trás e linha opcional por baixo. */
export function SectionHeading({ id, copy, action, rule = false, className = "mb-10 sm:mb-12" }: SectionHeadingProps) {
  return (
    <div
      className={`reveal flex flex-wrap items-end justify-between gap-6 ${rule ? "border-b border-line pb-6 sm:pb-8" : ""} ${className}`}
    >
      <div className={`relative max-w-2xl ${copy.ghost ? "pt-8 sm:pt-11" : ""}`}>
        {copy.ghost ? (
          <p
            aria-hidden="true"
            className="text-outline pointer-events-none absolute left-0 top-0 select-none whitespace-nowrap font-display text-6xl font-bold uppercase leading-none sm:text-7xl"
          >
            {copy.ghost}
          </p>
        ) : null}
        <h2
          id={`${id}-title`}
          className="relative font-display text-3xl font-bold uppercase leading-[1.1] text-balance text-fg sm:text-4xl lg:text-[2.625rem]"
        >
          {copy.title}
        </h2>
        {copy.intro ? <p className="relative mt-5 max-w-xl leading-relaxed text-muted">{copy.intro}</p> : null}
      </div>
      {action}
    </div>
  );
}
