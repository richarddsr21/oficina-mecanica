import type { DayKey, SiteConfig } from "@/config/site";

const schemaDays: Record<DayKey, string> = {
  monday: "https://schema.org/Monday",
  tuesday: "https://schema.org/Tuesday",
  wednesday: "https://schema.org/Wednesday",
  thursday: "https://schema.org/Thursday",
  friday: "https://schema.org/Friday",
  saturday: "https://schema.org/Saturday",
  sunday: "https://schema.org/Sunday",
};

/** Dados estruturados AutoRepair (LocalBusiness) gerados a partir do config. */
export function buildLocalBusinessJsonLd(site: SiteConfig) {
  const sameAs = Object.values(site.social).filter((url): url is string => Boolean(url));

  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.name,
    description: site.description,
    url: site.seo.siteUrl,
    image: `${site.seo.siteUrl}${site.hero.image.src}`,
    telephone: site.contact.phoneHref,
    ...(site.contact.email ? { email: site.contact.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    hasMap: site.address.mapsUrl,
    areaServed: site.seo.region,
    openingHoursSpecification: site.openingHours.flatMap((day) =>
      day.periods.map((period) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: schemaDays[day.day],
        opens: period.open,
        closes: period.close,
      })),
    ),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

/** Serializa JSON-LD de forma segura para <script>. */
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\u003c");
}
