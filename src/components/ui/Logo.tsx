import Image from "next/image";
import { site } from "@/config/site";

/** Logo em imagem ou, se não houver, o nome em texto: 1.ª palavra clara e o resto na cor de destaque. */
export function Logo({ className = "" }: { className?: string }) {
  if (site.logo) {
    return (
      <Image
        src={site.logo.src}
        alt={site.logo.alt}
        width={site.logo.width}
        height={site.logo.height}
        className={`h-9 w-auto ${className}`}
      />
    );
  }

  const [first, ...rest] = site.name.split(" ");
  return (
    <span className={`flex items-center gap-2.5 font-display text-lg font-bold uppercase tracking-wide ${className}`}>
      <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full border-2 border-accent">
        <span className="size-2.5 rounded-full bg-accent" />
      </span>
      <span className="leading-none">
        <span className="text-fg">{first}</span>{rest.length > 0 ? " " : null}
        {rest.length > 0 ? <span className="text-accent">{rest.join(" ")}</span> : null}
      </span>
    </span>
  );
}
