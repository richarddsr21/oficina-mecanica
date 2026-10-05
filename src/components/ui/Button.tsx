import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

/** Link com aspeto de botão e canto cortado (chanfro), ao estilo da referência. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  external = false,
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-outline"} ${size === "lg" ? "btn-lg" : ""} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
