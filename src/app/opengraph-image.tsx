import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";

// Imagem de partilha (WhatsApp, Facebook…) gerada no build a partir do config
export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public", site.hero.image.src));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const { theme } = site;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: theme.bg,
          color: theme.fg,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={1125}
          height={630}
          style={{ position: "absolute", right: -260, top: 0 }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1200,
            height: 630,
            display: "flex",
            background: `linear-gradient(90deg, ${theme.bg} 40%, rgba(0,0,0,0) 72%)`,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 72px", width: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: theme.accent, letterSpacing: 4 }}>
            <div style={{ width: 48, height: 4, background: theme.accent }} />
            {site.address.city.toUpperCase()}
          </div>
          <div style={{ marginTop: 24, fontSize: 76, fontWeight: 700, lineHeight: 1, textTransform: "uppercase" }}>
            {site.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 32, lineHeight: 1.35, color: theme.muted }}>{site.slogan}</div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignSelf: "flex-start",
              padding: "16px 28px",
              background: theme.accentStrong,
              color: "#fff",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            {site.contact.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
