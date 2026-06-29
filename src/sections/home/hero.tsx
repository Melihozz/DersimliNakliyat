"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { TruckScene } from "@/components/hero/truck-scene";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 premium-grid opacity-60" />
      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute left-[12%] top-44 h-[300px] w-[300px] rounded-full bg-accent/12 blur-[110px]" />
      <div className="absolute right-[10%] top-72 h-[360px] w-[360px] rounded-full bg-accent/14 blur-[130px]" />
      <div className="absolute left-[38%] bottom-8 h-[240px] w-[240px] rounded-full bg-accent/10 blur-[100px]" />
      <div className="noise-overlay absolute inset-0" />

      <div className="section-shell relative grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-20 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent backdrop-blur">
            Yeni nesil nakliyat deneyimi
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
            Modern nakliyatın yeni standardı.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/62 md:text-lg">
            Dersimli Nakliyat; ev, ofis ve kurumsal taşıma süreçlerini sigortalı,
            planlı ve premium bir deneyime dönüştürür.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/iletisim" className="gap-2">
              Ücretsiz Teklif Al <ArrowRight size={18} />
            </ButtonLink>
            <ButtonLink href="/hizmetler" variant="secondary" className="gap-2">
              Hizmetleri İncele <Play size={16} />
            </ButtonLink>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-sm">
            {["10+ yıl", "5000+ taşıma", "81 il"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <p className="font-bold text-white">{item}</p>
                <p className="mt-1 text-xs text-white/42">güven verisi</p>
              </div>
            ))}
          </div>
        </motion.div>

        <TruckScene />
      </div>
    </section>
  );
}
