import { ArrowUpRight, Star } from "lucide-react";
import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";

/** Só aparece se houver avaliações (reais) no config. */
export function Reviews() {
  if (site.reviews.length === 0) return null;

  return (
    <Section id="avaliacoes">
      <SectionHeading id="avaliacoes" copy={site.sections.reviews} />

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {site.reviews.map((review) => (
          <li key={`${review.author}-${review.text.slice(0, 20)}`} className="reveal">
            <figure className="chamfer flex h-full flex-col bg-surface p-6 sm:p-7">
              <div className="flex gap-1" role="img" aria-label={`${review.rating} de 5 estrelas`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    aria-hidden="true"
                    className={`size-4 ${n <= review.rating ? "fill-accent text-accent" : "text-line"}`}
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 leading-relaxed text-fg/90">“{review.text}”</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4 font-display text-sm font-semibold uppercase tracking-wider text-muted">
                {review.author} · Google
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {site.reviewsUrl ? (
        <p className="mt-8">
          <a
            href={site.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
          >
            Ver todas as avaliações no Google
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </p>
      ) : null}
    </Section>
  );
}
