import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";

export function HowItWorks() {
  return (
    <Section id="como-funciona">
      <div className="grid gap-4 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <SectionHeading id="como-funciona" copy={site.sections.steps} className="mb-6 self-start" />

        <ol className="grid gap-x-8 sm:grid-cols-2">
          {site.steps.map((step, index) => (
            <li key={step.title} className="reveal border-t border-line pb-10 pt-7">
              <h3 className="flex items-baseline gap-3 font-display text-lg font-bold uppercase tracking-wide text-fg">
                <span className="text-accent">
                  <span className="sr-only">Passo </span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
