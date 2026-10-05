import { site } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

/** Botão de WhatsApp sempre visível, com a mensagem pré-escrita do config. */
export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl(site.contact.whatsapp, site.contact.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco no WhatsApp"
      className="group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none hidden translate-x-2 bg-surface-2 px-3 py-2 font-display text-xs font-semibold uppercase tracking-wider text-fg opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
        Fale connosco
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-[#1DA851] text-white shadow-[0_8px_24px_rgb(0_0_0/0.45)] transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#1DA851] opacity-40 motion-safe:animate-ping motion-safe:[animation-duration:2.5s] motion-safe:[animation-iteration-count:3]"
        />
        <WhatsAppIcon className="relative size-7" />
      </span>
    </a>
  );
}
