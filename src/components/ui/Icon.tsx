import {
  Award,
  CalendarCheck,
  CarBattery,
  CarFront,
  ClipboardCheck,
  Clock,
  Cog,
  Disc,
  Droplet,
  Gauge,
  Handshake,
  LifeBuoy,
  Receipt,
  ScanLine,
  ShieldCheck,
  Snowflake,
  Sparkles,
  ThumbsUp,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** Ícones disponíveis para usar no config (serviços e diferenciais). */
const icons = {
  wrench: Wrench,
  disc: Disc,
  droplet: Droplet,
  scan: ScanLine,
  tyre: LifeBuoy,
  snowflake: Snowflake,
  clipboard: ClipboardCheck,
  battery: CarBattery,
  receipt: Receipt,
  award: Award,
  shield: ShieldCheck,
  calendar: CalendarCheck,
  cog: Cog,
  gauge: Gauge,
  car: CarFront,
  clock: Clock,
  handshake: Handshake,
  thumbsUp: ThumbsUp,
  sparkles: Sparkles,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

type IconProps = { name: IconName; className?: string };

export function Icon({ name, className }: IconProps) {
  const Component = icons[name];
  return <Component className={className} strokeWidth={1.75} aria-hidden="true" />;
}
