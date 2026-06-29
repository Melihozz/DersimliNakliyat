"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/logo";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-300",
        scrolled && "border-b border-white/10 bg-[#0b0b0b]/94 py-2 shadow-2xl shadow-black/40 backdrop-blur-2xl",
      )}
    >
      <div className="section-shell flex items-center gap-3 sm:gap-4">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo
            className={cn(
              "h-28 w-auto transition-all duration-300 sm:h-32 md:h-40",
              scrolled && "h-16 sm:h-20 md:h-24",
            )}
          />
        </Link>

        <nav
          className={cn(
            "flex min-w-0 flex-1 items-center justify-end gap-4 rounded-full border border-white/10 bg-[#0b0b0b]/62 px-4 py-3 backdrop-blur-2xl transition-all duration-300 md:justify-between md:px-6",
            scrolled && "border-white/15 bg-[#0b0b0b]/86 py-2 shadow-2xl shadow-black/30",
          )}
        >
          <div className="hidden items-center gap-8 md:flex md:flex-1 md:justify-center">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/68 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <ButtonLink href="/iletisim" className="hidden h-10 px-5 md:inline-flex">
            Teklif Al
          </ButtonLink>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden"
            type="button"
            aria-label="Menüyü aç"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {open ? (
        <div className="section-shell mt-3 rounded-3xl border border-white/10 bg-[#111]/94 p-4 shadow-2xl backdrop-blur-2xl md:hidden">
          <div className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm text-white/75 hover:bg-white/8 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/iletisim" className="mt-2" onClick={() => setOpen(false)}>
              Ücretsiz Teklif Al
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
