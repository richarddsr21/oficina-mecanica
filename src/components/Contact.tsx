import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { formatPeriods } from "@/lib/hours";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Section, SectionHeading } from "@/components/ui/Section";
import { MapEmbed } from "@/components/MapEmbed";

type ContactItemProps = {
  icon: ReactNode;
  label: string;
  children: ReactNode;
};

function ContactItem({ icon, label, children }: ContactItemProps) {
  return (
    <li className="flex gap-4 border-b border-line py-5 first:pt-0">
      <span className="grid size-11 shrink-0 place-items-center border border-line text-accent">{icon}</span>
      <div className="min-w-0">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted">{label}</p>
        <div className="mt-1 text-fg">{children}</div>
      </div>
    </li>
  );
}

const linkClass = "font-semibold transition-colors hover:text-accent break-words";

export function Contact() {
  const { contact, address } = site;

  return (
    <Section id="contacto" className="border-t border-line">
      <SectionHeading id="contacto" copy={site.sections.contact} rule />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="reveal">
          <ul>
            <ContactItem icon={<MapPin className="size-5" aria-hidden="true" />} label="Morada">
              <address className="not-italic">
                {address.street}
                <br />
                {address.postalCode} {address.city}
              </address>
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-semibold text-accent underline-offset-4 hover:underline"
              >
                Abrir no Google Maps
              </a>
            </ContactItem>
            <ContactItem icon={<Phone className="size-5" aria-hidden="true" />} label="Telefone">
              <a href={`tel:${contact.phoneHref}`} className={linkClass}>
                {contact.phoneDisplay}
              </a>
              <p className="text-xs text-muted">{contact.phoneNote}</p>
            </ContactItem>
            <ContactItem icon={<WhatsAppIcon className="size-5" />} label="WhatsApp">
              <a
                href={buildWhatsAppUrl(contact.whatsapp, contact.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Enviar mensagem
              </a>
            </ContactItem>
            {contact.email ? (
              <ContactItem icon={<Mail className="size-5" aria-hidden="true" />} label="E-mail">
                <a href={`mailto:${contact.email}`} className={linkClass}>
                  {contact.email}
                </a>
              </ContactItem>
            ) : null}
          </ul>

          <div className="mt-8">
            <h3 className="flex items-center gap-3 font-display text-lg font-bold uppercase tracking-wide text-fg">
              <Clock className="size-5 text-accent" aria-hidden="true" />
              Horário
            </h3>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {site.openingHours.map((day) => (
                <div key={day.day} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3 text-[0.9375rem]">
                  <dt className="text-muted">{day.label}</dt>
                  <dd className={day.periods.length === 0 ? "text-muted" : "font-medium tabular-nums text-fg"}>
                    {formatPeriods(day.periods)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="reveal chamfer relative min-h-[360px] overflow-hidden border border-line lg:min-h-full">
          <MapEmbed lat={address.lat} lng={address.lng} title={`Mapa com a localização de ${site.name}`} />
        </div>
      </div>
    </Section>
  );
}
