import type { Metadata, Viewport } from "next";
import { site } from "@/config/site";
import { bodyFont, displayFont } from "@/lib/fonts";
import { buildLocalBusinessJsonLd, serializeJsonLd } from "@/lib/jsonld";
import { themeToCssVars } from "@/lib/theme";
import { DemoBanner } from "@/components/DemoBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`,
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
  applicationName: site.name,
  alternates: { canonical: "/" },
  icons: { icon: site.favicon },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: site.theme.bg,
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-PT"
      className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      style={themeToCssVars(site.theme)}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#conteudo"
          className="sr-only z-[60] bg-accent-strong px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Saltar para o conteúdo
        </a>
        <DemoBanner />
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildLocalBusinessJsonLd(site)) }}
        />
      </body>
    </html>
  );
}
