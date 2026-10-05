"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { navLinks } from "@/lib/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  // Fundo sólido depois de começar a fazer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a secção visível
  useEffect(() => {
    if (!isHome) return;
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  // Fecha o menu com Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        solid ? "border-b border-line bg-bg/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/#inicio" className="shrink-0" aria-label={`${site.name}, voltar ao início`}>
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = isHome && active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`/#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative whitespace-nowrap py-2 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-fg after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-300 ${
                      isActive ? "text-accent after:scale-x-100" : "text-fg/80 after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={`tel:${site.contact.phoneHref}`}
            variant="outline"
            className="hidden !min-h-11 !px-4 !text-[0.8125rem] sm:inline-flex"
            icon={<Phone aria-hidden="true" />}
          >
            {site.contact.phoneDisplay}
          </ButtonLink>
          <a
            href={`tel:${site.contact.phoneHref}`}
            aria-label={`Ligar para ${site.contact.phoneDisplay}`}
            className="grid size-11 place-items-center text-fg transition-colors hover:text-accent sm:hidden"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 cursor-pointer place-items-center text-fg transition-colors hover:text-accent xl:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-bg xl:hidden"
      >
        <nav aria-label="Menu móvel" className="container-site py-4">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id} className="border-b border-line last:border-b-0">
                <a
                  href={`/#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-13 items-center font-display text-base font-semibold uppercase tracking-[0.12em] text-fg transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-3 pb-2">
            <ButtonLink
              href={buildWhatsAppUrl(site.contact.whatsapp, site.contact.whatsappMessage)}
              external
              icon={<WhatsAppIcon />}
            >
              Pedir orçamento
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
