"use client";

const phone = "905315230871";

const fields = [
  { label: "Ad Soyad", name: "fullName" },
  { label: "Telefon", name: "phone" },
  { label: "Nereden", name: "from" },
  { label: "Nereye", name: "to" },
] as const;

function getValue(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function buildMessage(formData: FormData) {
  const fullName = getValue(formData, "fullName");
  const customerPhone = getValue(formData, "phone");
  const from = getValue(formData, "from");
  const to = getValue(formData, "to");
  const details = getValue(formData, "details");

  return [
    "Merhaba Dersimli Nakliyat, taşınma için teklif almak istiyorum.",
    "",
    "Teklif Bilgilerim:",
    `Ad Soyad: ${fullName || "-"}`,
    `Telefon: ${customerPhone || "-"}`,
    `Nereden: ${from || "-"}`,
    `Nereye: ${to || "-"}`,
    `Taşıma Detayı: ${details || "-"}`,
    "",
    "Fiyat bilgisi ve randevu için bilgi alabilir miyim lütfen",
  ].join("\n");
}

export function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = encodeURIComponent(buildMessage(formData));

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
      <div className="grid gap-4">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm text-white/60">
            {field.label}
            <input
              name={field.name}
              className="h-12 rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-accent"
            />
          </label>
        ))}
        <label className="grid gap-2 text-sm text-white/60">
          Taşıma detayı
          <textarea
            name="details"
            className="min-h-28 rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none transition focus:border-accent"
          />
        </label>
        <button
          type="submit"
          className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-white shadow-[0_0_35px_rgba(255,107,0,0.38)] transition duration-300 hover:bg-[#ff7d1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          WhatsApp&apos;tan Teklif Al
        </button>
      </div>
    </form>
  );
}
