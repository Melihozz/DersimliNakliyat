"use client";

import { motion } from "framer-motion";

const phone = "905315230871";
const message = encodeURIComponent("Merhaba, nakliyat hizmeti hakkında bilgi almak istiyorum.");
const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full border border-[#25D366]/40 bg-[#111]/88 px-4 py-3 text-sm font-bold text-white shadow-[0_0_40px_rgba(37,211,102,0.28)] backdrop-blur-xl transition hover:border-[#25D366]/70 hover:bg-[#25D366] hover:text-white md:bottom-7 md:right-7"
      initial={{ opacity: 0, y: 18, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/20 blur-md" />
      <motion.span
        className="absolute bottom-full right-0 mb-3 w-56 rounded-2xl border border-white/10 bg-[#111]/92 px-4 py-3 text-sm font-semibold leading-5 text-white shadow-2xl shadow-black/30 backdrop-blur-xl"
        initial={{ opacity: 0, y: 12, scale: 0.92 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [12, 0, 0, 8],
          scale: [0.92, 1, 1, 0.96],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
          times: [0, 0.18, 0.78, 1],
        }}
      >
        Hemen bize ulaşın, fiyat bilgisi alın
        <span className="absolute -bottom-1.5 right-7 h-3 w-3 rotate-45 border-b border-r border-white/10 bg-[#111]/92" />
      </motion.span>
      <motion.span
        className="relative grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_0_24px_rgba(37,211,102,0.45)]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.02 3.2A12.7 12.7 0 0 0 5.1 22.4L3.8 28.8l6.54-1.22A12.69 12.69 0 1 0 16.02 3.2Zm0 22.9c-1.92 0-3.78-.53-5.4-1.54l-.38-.23-3.88.73.77-3.8-.25-.4a10.24 10.24 0 1 1 9.14 5.24Zm5.86-7.68c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.25-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.59-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.15-.15.32-.38.48-.57.16-.19.21-.32.32-.53.1-.22.05-.4-.03-.57-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.68 0 1.58 1.16 3.11 1.32 3.32.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.48.21 2.04.13.62-.1 1.9-.78 2.17-1.53.27-.76.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z"
          />
        </svg>
      </motion.span>
      <span className="relative hidden leading-tight sm:block">
        WhatsApp
        <span className="block text-xs font-medium text-white/62 group-hover:text-white/80">Hemen yaz</span>
      </span>
    </motion.a>
  );
}
