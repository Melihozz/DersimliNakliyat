import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactMap } from "@/components/layout/contact-map";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Dersimli Nakliyat telefon, WhatsApp, hızlı teklif formu ve iletişim bilgileri.",
};

export default function ContactPage() {
  return (
    <main className="pt-32">
      <section className="section-shell grid gap-8 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-accent">İletişim</p>
          <h1 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">Taşınma planınızı birlikte netleştirelim.</h1>
          <div className="mt-10 grid gap-4 text-sm text-white/62">
            <a href="tel:+905315230871" className="flex items-center gap-3 hover:text-white">
              <Phone className="text-accent" size={18} /> +90 531 523 08 71
            </a>
            <a href="https://wa.me/905315230871" className="flex items-center gap-3 hover:text-white">
              <MessageCircle className="text-accent" size={18} /> WhatsApp ile hızlı teklif
            </a>
            <a href="mailto:dersimlinakliyat@gmail.com" className="flex items-center gap-3 hover:text-white">
              <Mail className="text-accent" size={18} /> dersimlinakliyat@gmail.com
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="text-accent" size={18} /> Beylikdüzü, İstanbul
            </p>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="section-shell pb-24">
        <ContactMap />
      </section>
    </main>
  );
}
