import { Building2, CheckCircle2, Map, PackageCheck, Shield, Truck } from "lucide-react";
import Image from "next/image";
import { PhotoSlider } from "@/components/animations/photo-slider";
import { ScrollStory } from "@/components/animations/scroll-story";
import { StatsCounter } from "@/components/animations/stats-counter";
import { ButtonLink } from "@/components/ui/button";
import { HeroSection } from "@/sections/home/hero";

const services = [
  { title: "Şehir içi nakliyat", icon: Truck, text: "Aynı gün planlama, kontrollü paketleme ve hasarsız teslim." },
  { title: "Şehirler arası", icon: Map, text: "81 ile rotalı, sigortalı ve takip edilebilir taşıma." },
  { title: "Parça eşya", icon: PackageCheck, text: "Az hacimli gönderiler için hızlı ve ekonomik çözüm." },
  { title: "Kurumsal taşımacılık", icon: Building2, text: "Ofis, arşiv ve ekipman taşımada operasyon disiplini." },
  { title: "Paketleme hizmeti", icon: PackageCheck, text: "Kırılacak ve hassas eşyalar özenle paketlenip etiketlenir." },
  { title: "Sigortalı taşıma", icon: Shield, text: "Eşyalarınız süreç boyunca güvence altında taşınır." },
];

const gallerySlots = [
  { title: "Paketleme", image: "/img/1.png" },
  { title: "Yükleme", image: "/img/2.png" },
  { title: "Teslimat", image: "/img/3.png" },
];

export function HomeContent() {
  return (
    <main>
      <HeroSection />

      <StatsCounter />

      <PhotoSlider />

      <section className="section-shell py-20">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-accent">Hizmetler</p>
            <h2 className="max-w-2xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Her taşıma için premium operasyon.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/52">
            Tüm süreç; keşif, paketleme, yükleme, rota ve teslim adımlarıyla tek ekip tarafından yönetilir.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-accent/[0.07]"
            >
              <service.icon className="mb-10 h-9 w-9 text-accent" />
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-accent">Galeri</p>
            <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">Taşıma anlarından kareler.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/50">
            Buraya operasyon, paketleme ve teslimat görsellerinizi ekleyebilirsiniz.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {gallerySlots.map((slot, index) => (
            <div
              key={slot.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-accent/[0.08]"
            >
              {slot.image ? (
                <Image
                  src={slot.image}
                  alt={slot.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
              <div className="absolute inset-0 premium-grid opacity-30" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition duration-300 group-hover:bg-accent/30" />
              <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Görsel 0{index + 1}</p>
                <p className="mt-2 text-lg font-bold text-white">{slot.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ScrollStory />

      <section className="section-shell grid gap-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-accent">Araç Filosu</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Temiz, güçlü, takip edilebilir.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {["Panelvan", "Orta kasa", "Uzun yol"].map((truck) => (
            <div key={truck} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-6">
              <Truck className="mb-12 h-14 w-14 text-white/72" strokeWidth={1.4} />
              <p className="font-bold">{truck}</p>
              <p className="mt-2 text-sm text-white/48">Bakımlı filo, uygun hacim.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 md:p-12">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-white/38">Referanslar</p>
          <div className="grid gap-3 md:grid-cols-4">
            {["Nova", "Arden", "Kent", "Atlas"].map((logo) => (
              <div key={logo} className="grid h-24 place-items-center rounded-3xl border border-white/10 text-lg font-black tracking-[0.2em] text-white/35">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-accent/25 bg-accent p-8 text-white shadow-[0_0_90px_rgba(255,107,0,0.24)] md:p-14">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/25 blur-3xl" />
          <div className="relative max-w-2xl">
            <CheckCircle2 className="mb-6 h-10 w-10" />
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Taşınma planını bugün netleştirelim.</h2>
            <p className="mt-5 text-white/78">Keşif, fiyat ve rota planlaması için hızlı teklif formunu doldurun.</p>
            <ButtonLink href="/iletisim" variant="secondary" className="mt-8 border-white/25 bg-black/18">
              Ücretsiz Teklif Al
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
