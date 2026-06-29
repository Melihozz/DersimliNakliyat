import type { Metadata } from "next";
import { Briefcase, Home, MapPinned, Package } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Ev taşıma, ofis taşıma, şehirler arası nakliyat ve parça eşya taşıma hizmetleri.",
};

const services = [
  { title: "Ev taşıma", icon: Home, text: "Paketleme, demontaj, yükleme ve yerleştirme adımları tek ekipte toplanır." },
  { title: "Ofis taşıma", icon: Briefcase, text: "İş sürekliliğini koruyan planlı ve hızlı kurumsal taşımacılık." },
  { title: "Şehirler arası", icon: MapPinned, text: "Uzun yol rotalarında sigortalı, zamanlı ve takip edilebilir süreç." },
  { title: "Parça eşya", icon: Package, text: "Küçük hacimli eşyalar için esnek ve ekonomik taşıma çözümü." },
];

const galleryPhotos = [
  { image: "/img/110.jpeg", title: "Görsel 1" },
  { image: "/img/19.jpeg", title: "Görsel 2" },
  { image: "/img/12.jpeg", title: "Görsel 3" },
  { image: "/img/17.jpeg", title: "Görsel 4" },
  { image: "/img/16.jpeg", title: "Görsel 5" },
  { image: "/img/15.jpeg", title: "Görsel 6" },
];

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <section className="section-shell py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-accent">Hizmetler</p>
        <h1 className="max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
          Her ölçek için tasarlanmış nakliyat çözümleri.
        </h1>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:border-accent/45">
              <service.icon className="mb-12 h-10 w-10 text-accent" />
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/55">{service.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.image}
              className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-accent/[0.08]"
            >
              {photo.image ? (
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/30">Fotoğraf ekleyin</p>
                </div>
              )}
              <div className="absolute inset-0 premium-grid opacity-25" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/15 blur-3xl transition duration-300 group-hover:bg-accent/25" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
