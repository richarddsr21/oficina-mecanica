"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

type MapEmbedProps = {
  lat: number;
  lng: number;
  title: string;
};

/**
 * O mapa do Google só carrega depois de o visitante clicar.
 * Assim a página fica mais rápida e não envia dados à Google sem ação do utilizador (RGPD).
 */
export function MapEmbed({ lat, lng, title }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=16&hl=pt-PT&output=embed`;

  if (loaded) {
    return (
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0 grayscale-[60%] invert-[0.9] hue-rotate-180"
        allowFullScreen
      />
    );
  }

  return (
    <div className="absolute inset-0 grid place-items-center bg-surface p-6 text-center">
      {/* Grelha decorativa ao estilo de planta */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--brand-line)_1px,transparent_1px),linear-gradient(90deg,var(--brand-line)_1px,transparent_1px)] [background-size:40px_40px]"
      />
      <div className="relative">
        <span className="mx-auto grid size-14 place-items-center bg-accent-strong text-white">
          <MapPin className="size-7" aria-hidden="true" />
        </span>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="btn btn-outline mt-5"
        >
          <span>Mostrar mapa</span>
        </button>
        <p className="mx-auto mt-4 max-w-xs text-xs leading-relaxed text-muted">
          Ao mostrar o mapa, são carregados conteúdos do Google Maps.
        </p>
      </div>
    </div>
  );
}
