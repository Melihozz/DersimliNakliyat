"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const slides = [
  { src: "/img/2.png", title: "Yükleme", caption: "Kontrollü ve güvenli yükleme süreci." },
  { src: "/img/3.png", title: "Teslimat", caption: "Zamanında ve hasarsız teslimat." },
  { src: "/img/12.jpeg", title: "Kurulum ve Yerleştirme", caption: "Eşyalar güvenle araca alınır." },
  { src: "/img/1.png", title: "Paketleme", caption: "Hassas eşyalar özenle hazırlanır." },
  { src: "/img/110.jpeg", title: "Kurulum ve Yerleştirme", caption: "Planlı ve kontrollü nakliyat." },
  { src: "/img/19.jpeg", title: "Titizlik", caption: "Deneyimli kadro ile hizmet." },
 
];

function SlideCard({ slide, isDuplicate = false }: { slide: (typeof slides)[number]; isDuplicate?: boolean }) {
  return (
    <article className={`group relative h-[220px] w-[min(78vw,340px)] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] sm:h-[260px] sm:w-[380px] md:h-[300px] md:w-[440px] ${isDuplicate ? "hidden md:block" : ""}`}>
      <Image
        src={slide.src}
        alt={slide.title}
        fill
        sizes="(min-width: 768px) 440px, 78vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute inset-0 premium-grid opacity-20" />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-3xl transition duration-500 group-hover:bg-accent/35" />
      <div className="absolute inset-x-5 bottom-5">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{slide.title}</p>
        <p className="mt-2 text-sm text-white/72">{slide.caption}</p>
      </div>
    </article>
  );
}

export function PhotoSlider() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const loop = [...slides, ...slides];

  return (
    <section ref={ref} className="relative overflow-hidden py-10 md:py-14">
      <div className="section-shell mb-8 md:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-accent">Sahadan</p>
            <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">Operasyonumuzdan kareler.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/50">
            Paketlemeden teslimata kadar tüm süreçleri sahada kaydettiğimiz anlar.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0b0b0b] to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0b0b0b] to-transparent md:w-28" />

        <div className="photo-marquee-track flex w-max gap-4 px-4 md:gap-5">
          {loop.map((slide, index) => (
            <SlideCard key={`${slide.title}-${index}`} slide={slide} isDuplicate={index >= slides.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
