import Image from "next/image";
import { site, type Tip } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";

function Category({ children }: { children: string }) {
  return (
    <p className="w-fit border-t border-accent pt-2 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-fg">
      {children}
    </p>
  );
}

/** Dicas curtas da oficina (sem páginas próprias). A primeira aparece em destaque. */
export function Tips() {
  if (site.tips.length === 0) return null;
  const [featured, ...rest]: Tip[] = site.tips;

  return (
    <Section id="dicas">
      <SectionHeading id="dicas" copy={site.sections.tips} rule />

      <article className="reveal group relative isolate flex min-h-80 items-end overflow-hidden sm:min-h-[22rem] lg:min-h-[25rem]">
        <Image
          src={featured.image.src}
          alt={featured.image.alt}
          fill
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="-z-10 object-cover transition-transform duration-700 ease-out-quart group-hover:scale-[1.03]"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-bg/95 via-bg/45 to-bg/5 sm:bg-gradient-to-r sm:from-bg/90 sm:via-bg/40 sm:to-transparent" />
        <div className="max-w-md p-6 sm:p-8">
          <Category>{featured.category}</Category>
          <h3 className="mt-4 font-display text-xl font-bold uppercase leading-tight text-fg sm:text-2xl">{featured.title}</h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg/80">{featured.text}</p>
        </div>
      </article>

      {rest.length > 0 ? (
        <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((tip) => (
            <li key={tip.title} className="reveal border-t border-line pt-5">
              <article className="group">
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={tip.image.src}
                    alt={tip.image.alt}
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-[1.04]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <Category>{tip.category}</Category>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold uppercase leading-snug text-fg">{tip.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{tip.text}</p>
              </article>
            </li>
          ))}
        </ul>
      ) : null}
    </Section>
  );
}
