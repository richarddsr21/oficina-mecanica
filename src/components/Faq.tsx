import { Plus } from "lucide-react";
import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";

/** Accordion com <details>/<summary>: acessível por teclado e leitores de ecrã sem JavaScript. */
export function Faq() {
  if (site.faqs.length === 0) return null;

  return (
    <Section id="perguntas">
      <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="perguntas" copy={site.sections.faq} />
        </div>

        <div className="reveal border-t border-line">
          {site.faqs.map((faq) => (
            <details key={faq.question} name="faq" className="group border-b border-line">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-semibold text-fg transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="grid size-9 shrink-0 place-items-center border border-line text-accent transition-[transform,background-color] duration-300 group-open:rotate-45 group-open:bg-surface-2">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-prose pb-6 leading-relaxed text-muted sm:pr-12">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
