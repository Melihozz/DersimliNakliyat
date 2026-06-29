import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";

const footerLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/iletisim", label: "İletişim" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="mb-5">
            <Logo className="h-32 w-auto sm:h-40 md:h-44" />
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55">
            Türkiye genelinde planlı, sigortalı ve teknolojik taşımacılık deneyimi.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Hızlı Linkler</p>
          <div className="grid gap-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/55 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">İletişim</p>
          <div className="grid gap-3 text-sm text-white/58">
            <a className="flex items-center gap-3 hover:text-white" href="tel:+905315230871">
              <Phone size={16} className="text-accent" /> +90 531 523 08 71
            </a>
            <a className="flex items-center gap-3 hover:text-white" href="mailto:dersimlinakliyat@gmail.com">
              <Mail size={16} className="text-accent" /> dersimlinakliyat@gmail.com
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={16} className="text-accent" /> Türkiye geneli hizmet
            </p>
            <a className="flex items-center gap-3 hover:text-white" href="https://instagram.com" target="_blank">
              <Globe size={16} className="text-accent" /> Sosyal medya
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell border-t border-white/10 py-5 text-xs text-white/35">
        © 2026 Dersimli Nakliyat. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
