import Image from "next/image";
import { site } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { ButtonLink } from "@/components/ui/Button";
import { animationDelay } from "@/lib/theme";

export function Hero() {
  const { hero, contact } = site;

  return (
    <section id="inicio" aria-labelledby="inicio-title" className="relative isolate overflow-hidden">
      <div className="container-site relative grid items-center gap-4 pb-12 pt-10 sm:pt-14 lg:min-h-[min(calc(100svh-15rem),40rem)] lg:grid-cols-[1fr_1.2fr] lg:gap-0 lg:pb-8 lg:pt-6">
        <div className="relative z-10">
          <h1
            id="inicio-title"
            className="animate-fade-up font-display text-[2.5rem] font-bold uppercase leading-[1.02] tracking-tight text-balance text-fg sm:text-[3.25rem] lg:text-[3.5rem]"
          >
            {hero.title}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-md leading-relaxed text-muted sm:text-lg"
            style={animationDelay(100)}
          >
            {hero.text}
          </p>
          <div className="animate-fade-up mt-9" style={animationDelay(200)}>
            <ButtonLink
              href={buildWhatsAppUrl(contact.whatsapp, contact.whatsappMessage)}
              external
              size="lg"
              icon={<WhatsAppIcon />}
              className="w-full sm:w-auto"
            >
              {hero.cta}
            </ButtonLink>
          </div>
        </div>

        {/* ---------- Carro com a palavra gigante em contorno por trás ---------- */}
        <div className="relative -mx-5 sm:mx-0 lg:-mr-10">
          <p
            aria-hidden="true"
            className="text-outline animate-fade-in pointer-events-none absolute inset-x-0 top-0 select-none whitespace-nowrap text-center font-display text-[22vw] font-bold uppercase leading-none tracking-tight lg:-left-[18%] lg:right-0 lg:-top-[6%] lg:text-[9.5rem]"
          >
            {site.watermark}
          </p>
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fg/[0.04] blur-3xl"
          />
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={1600}
            height={896}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 680px, 100vw"
            className="mask-fade-edges animate-fade-in relative w-full brightness-[1.6] contrast-[1.1]"
          />
        </div>
      </div>

      {/* ---------- Números de confiança ---------- */}
      {site.stats.length > 0 ? (
        <div className="container-site relative pb-16 sm:pb-20">
          <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {site.stats.map((stat) => (
              <div key={stat.value + stat.label} className="reveal flex flex-col-reverse">
                <dt className="mt-5 max-w-[15rem] pr-6 text-sm leading-relaxed text-muted">{stat.label}</dt>
                <dd className="border-b border-line pb-6 font-display text-4xl font-bold leading-none text-fg sm:text-5xl lg:text-[3.25rem]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
    </section>
  );
}
