import { MapPin } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { site, type SocialNetwork } from "@/config/site";
import { navLinks } from "@/lib/navigation";
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "@/components/ui/BrandIcons";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const socialMeta: Record<SocialNetwork, { label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }> = {
  facebook: { label: "Facebook", Icon: FacebookIcon },
  instagram: { label: "Instagram", Icon: InstagramIcon },
  tiktok: { label: "TikTok", Icon: TikTokIcon },
  youtube: { label: "YouTube", Icon: YouTubeIcon },
};

const columnTitle = "font-display text-sm font-semibold uppercase tracking-[0.1em] text-fg";
const listLink =
  "inline-flex min-h-9 items-center gap-2.5 font-display text-[0.8125rem] font-medium uppercase tracking-[0.06em] text-fg/85 transition-colors hover:text-accent before:size-1 before:shrink-0 before:bg-accent";
const bottomLink = "inline-block py-1 transition-colors hover:text-fg";

export function Footer() {
  const socials = (Object.entries(site.social) as [SocialNetwork, string | undefined][]).filter(
    (entry): entry is [SocialNetwork, string] => Boolean(entry[1]),
  );
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/60 text-sm text-muted">
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-[1.3fr_1fr_1.1fr_1.2fr] lg:gap-10">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs leading-relaxed">{site.slogan}</p>
          <p className="mt-6 text-xs">Fale connosco</p>
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="mt-1 inline-block font-display text-xl font-bold text-fg transition-colors hover:text-accent"
          >
            {site.contact.phoneDisplay}
          </a>
          <p className="text-xs">{site.contact.phoneNote}</p>
          {socials.length > 0 ? (
            <ul className="mt-6 flex gap-2">
              {socials.map(([network, url]) => {
                const { label, Icon } = socialMeta[network];
                return (
                  <li key={network}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid size-11 place-items-center border border-line text-fg transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>

        <nav aria-label="Rodapé">
          <h2 className={columnTitle}>Navegação</h2>
          <ul className="mt-5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`/#${link.id}`} className={listLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={columnTitle}>Serviços</h2>
          <ul className="mt-5">
            {site.services.map((service) => (
              <li key={service.title}>
                <Link href="/#servicos" className={listLink}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={columnTitle}>Visite-nos</h2>
          <address className="mt-5 not-italic leading-relaxed">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </address>
          <ButtonLink
            href={site.address.mapsUrl}
            external
            icon={<MapPin aria-hidden="true" />}
            className="mt-6 w-full"
          >
            Como chegar
          </ButtonLink>
        </div>
      </div>

      <div className="border-t border-line bg-bg/60 pb-24 pt-6 text-xs sm:pb-6">
        <div className="container-site flex flex-col gap-3 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:text-left">
          <p>
            © {year} {site.legal.companyName} · NIF {site.legal.nif}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            <li>
              <Link href="/privacidade" className={bottomLink}>
                Política de Privacidade
              </Link>
            </li>
            <li>
              <a href={site.legal.complaintsBookUrl} target="_blank" rel="noopener noreferrer" className={bottomLink}>
                Livro de Reclamações Eletrónico
              </a>
            </li>
            {site.credit ? (
              <li>
                <a href={site.credit.url} target="_blank" rel="noopener noreferrer" className={bottomLink}>
                  {site.credit.text}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </footer>
  );
}
