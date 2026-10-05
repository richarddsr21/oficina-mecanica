import { Check, X } from "lucide-react";
import { site } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";

/** Pacotes com preço. Só aparece se houver pacotes no config. */
export function Packages() {
  if (site.packages.length === 0) return null;

  return (
    <Section id="precos">
      <div className="grid gap-4 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <SectionHeading id="precos" copy={site.sections.packages} className="mb-6 self-start" />

        <ul className="grid gap-6 sm:grid-cols-2">
          {site.packages.map((pack) => (
            <li key={pack.name} className="reveal">
              <article
                className={`flex h-full flex-col border border-line px-6 pb-9 pt-9 text-center sm:px-9 ${
                  pack.featured ? "border-t-2 border-t-accent bg-surface/60" : ""
                }`}
              >
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-fg">{pack.name}</h3>
                <p className="mt-3 font-display text-[2.5rem] font-bold leading-none text-fg">{pack.price}</p>
                <p className="mt-2 text-xs text-muted">{pack.priceNote}</p>

                <hr className="mx-auto my-7 w-2/3 border-line" />

                <ul className="grid gap-3.5 text-left text-sm">
                  {pack.items.map((item) => (
                    <li
                      key={item.text}
                      className={`flex items-center justify-between gap-4 ${item.included ? "text-fg/85" : "text-muted/55"}`}
                    >
                      <span>
                        {item.text}
                        <span className="sr-only">{item.included ? " (incluído)" : " (não incluído)"}</span>
                      </span>
                      {item.included ? (
                        <Check className="size-4 shrink-0 text-fg" aria-hidden="true" />
                      ) : (
                        <X className="size-4 shrink-0" aria-hidden="true" />
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-9">
                  <ButtonLink
                    href={buildWhatsAppUrl(site.contact.whatsapp, `Olá! Gostaria de marcar a ${pack.name}.`)}
                    external
                    className="w-full sm:w-auto sm:min-w-48"
                  >
                    Marcar revisão
                  </ButtonLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
