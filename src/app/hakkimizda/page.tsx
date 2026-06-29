import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Dersimli Nakliyat'ın kurumsal hikayesi, vizyonu ve güven odaklı taşıma yaklaşımı.",
};

const timeline = [
  ["Planlama", "Adres, eşya yoğunluğu, kat bilgisi ve taşıma gününe göre en uygun operasyon planı hazırlanır."],
  ["Hazırlık", "Mobilya söküm, kurulum, ambalajlı veya ambalajsız taşıma seçenekleri ihtiyaca göre belirlenir."],
  ["Taşıma", "Asansörlü ya da asansörsüz taşıma, şehir içi ve şehir dışı nakliye ekip koordinasyonuyla tamamlanır."],
  ["Teslimat", "Odadan odaya yerleşim, mobilya değişimi ve deprem aparatı montajı gibi son işlemlerle süreç bitirilir."],
];

const cards = [
  {
    title: "Vizyon",
    text: "Evden eve nakliyatta güvenilir, planlı ve çözüm odaklı hizmet sunarak her müşterinin taşınma sürecini stressiz hale getirmek.",
  },
  {
    title: "Misyon",
    text: "Mobilya montajı, ambalajlı taşıma, asansörlü nakliye ve şehirler arası taşımacılığı aynı titizlikle yönetmek.",
  },
  {
    title: "Ekip",
    text: "Söküm, kurulum, paketleme, taşıma ve yerleştirme adımlarında deneyimli ekiple hızlı, dikkatli ve düzenli çalışmak.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-32">
      <section className="section-shell grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-accent">Hakkımızda</p>
          <h1 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">Güveni operasyon standardına dönüştürüyoruz.</h1>
        </div>
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 text-white/62 md:p-10">
          <p className="leading-8">
            Dersimli Nakliyat olarak evden eve nakliyat, mobilya montaj ve kurulum, deprem aparatı
            montajı, ambalajlı ve ambalajsız taşıma, asansörlü ve asansörsüz nakliye, odadan odaya
            mobilya değişimleri ile şehir içi ve şehir dışı taşımacılık hizmetleri sunuyoruz. Her
            taşımayı eşyanın durumuna, adresin yapısına ve müşterinin ihtiyacına göre planlayarak
            düzenli, dikkatli ve güven veren bir süreç yönetiyoruz.
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-4 py-10 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
            <h2 className="text-2xl font-bold">{card.title}</h2>
            <p className="mt-4 text-sm leading-6 text-white/55">
              {card.text}
            </p>
          </article>
        ))}
      </section>

      <section className="section-shell py-20">
        <div className="rounded-[2.5rem] border border-white/10 bg-[#111] p-8 md:p-12">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-accent">Hizmet Süreci</p>
          <div className="grid gap-6">
            {timeline.map(([step, text]) => (
              <div key={step} className="grid gap-4 border-l border-accent/35 pl-6 md:grid-cols-[120px_1fr]">
                <p className="text-2xl font-black text-accent">{step}</p>
                <p className="text-white/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
