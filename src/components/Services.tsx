import { site } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Services() {
  return (
    <Section id="servicos" className="bg-surface/50">
      <SectionHeading
        id="servicos"
        copy={site.sections.services}
        action={
          <ButtonLink href="#orcamento" className="hidden sm:inline-flex">
            Marcar visita
          </ButtonLink>
        }
      />

      <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {site.services.map((service) => (
          <li key={service.title} className="reveal">
            <article className="group relative h-full border-t border-line pb-10 pt-8">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-quart group-hover:scale-x-100 group-focus-within:scale-x-100"
              />
              <Icon
                name={service.icon}
                className="size-9 text-fg transition-colors duration-300 group-hover:text-accent group-focus-within:text-accent"
              />
              <h3 className="mt-6 font-display text-lg font-bold uppercase leading-tight tracking-wide text-fg">
                {service.title}
              </h3>
              <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-muted">{service.description}</p>
              <ArrowLink
                href={buildWhatsAppUrl(site.contact.whatsapp, `Olá! Gostaria de saber mais sobre: ${service.title}.`)}
                external
                srLabel={`sobre ${service.title} no WhatsApp`}
                className="mt-4"
              >
                Saber mais
              </ArrowLink>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
