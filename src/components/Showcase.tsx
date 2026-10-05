import { Play } from "lucide-react";
import Image from "next/image";
import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";

/** Faixa larga com uma foto da oficina (e botão de vídeo, se houver link). */
export function Showcase() {
  const { image, videoUrl } = site.showcase;

  return (
    <Section id="oficina" className="bg-surface/50 pt-0 sm:pt-4">
      <SectionHeading id="oficina" copy={site.sections.showcase} rule />

      <div className="reveal relative aspect-[4/3] overflow-hidden bg-surface sm:aspect-[16/8] lg:aspect-[23/10]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="object-cover brightness-[0.7] grayscale-[40%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-bg/30 via-transparent to-bg/40" />
        {videoUrl ? (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver o vídeo da oficina"
            className="chamfer absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center bg-accent-strong text-white transition-colors hover:bg-accent-strong-hover sm:size-20"
          >
            <Play className="size-7 fill-current sm:size-8" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </Section>
  );
}
