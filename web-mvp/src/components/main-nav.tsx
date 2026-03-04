"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/resumen", label: "Resumen" },
  { href: "/faq", label: "FAQ" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/guia", label: "Guía" },
  { href: "/mapa", label: "Mapa" },
  { href: "/fases", label: "Fases" },
  { href: "/glosario", label: "Glosario" },
  { href: "/descargas", label: "Descargas" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="nav-scroll" aria-label="Navegación principal">
      {links.map((link) => {
        const active =
          pathname === link.href ||
          (link.href !== "/" && pathname?.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${active ? "nav-link-active" : ""}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
