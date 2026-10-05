import Image from "next/image";
import { site } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Section";

/** Blocos imagem + texto a toda a largura; a imagem alterna entre a esquerda e a direita. */
export function Highlights() {
  return (
    <>
      {site.highlights.map((item, index) => {
        const imageFirst = index % 2 === 0;
        return (
          <section
            key={item.id}
            id={item.id}
            aria-labelledby={`${item.id}-title`}
            className="grid scroll-mt-16 bg-surface/50 lg:scroll-mt-20 lg:grid-cols-2"
          >
            <div
              className={`relative min-h-72 overflow-hidden sm:min-h-96 lg:min-h-[30rem] ${imageFirst ? "" : "lg:order-last"}`}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover brightness-[0.75]"
              />
            </div>

            <div className={`flex items-center py-16 sm:py-20 ${imageFirst ? "split-pad-end" : "split-pad-start"}`}>
              <div className="max-w-lg">
                <SectionHeading id={item.id} copy={{ ghost: item.ghost, title: item.title }} className="mb-0" />
                {item.text ? <p className="reveal mt-5 leading-relaxed text-muted">{item.text}</p> : null}
                {item.bullets && item.bullets.length > 0 ? (
                  <ul className="reveal mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-3 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-fg"
                      >
                        <span aria-hidden="true" className="chamfer-sm size-2 shrink-0 bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="reveal mt-9">
                  <ButtonLink
                    href={buildWhatsAppUrl(site.contact.whatsapp, `Olá! Vi no site: ${item.title}. Gostaria de saber mais.`)}
                    external
                  >
                    {item.cta}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
