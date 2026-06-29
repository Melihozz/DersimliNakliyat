"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Home, MapPin, Package, ShieldCheck, Truck } from "lucide-react";

const DURATION = 8;

const T = {
  loadStart: 0.12,
  loadEnd: 0.32,
  driveEnd: 0.6,
  unloadEnd: 0.78,
  delivered: 0.95,
  end: 1,
};

const trackerSteps = [
  { label: "Yükleme", from: T.loadStart, to: T.loadEnd },
  { label: "Yolda", from: T.loadEnd, to: T.driveEnd },
  { label: "Teslim", from: T.driveEnd, to: T.unloadEnd },
];

const baseTransition = (times: number[]) => ({
  duration: DURATION,
  repeat: Infinity,
  times,
  ease: "easeInOut" as const,
});

export function TruckScene() {
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl md:min-h-[560px] md:p-6">
      <div className="premium-grid absolute inset-0 opacity-40" />
      <div className="noise-overlay absolute inset-0" />
      <motion.div
        className="absolute -right-12 -top-12 h-60 w-60 rounded-full bg-accent/30 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
            <ShieldCheck size={15} className="text-accent" />
            Sigortalı taşıma
          </div>
          <div className="flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            CANLI
          </div>
        </div>

        <div className="relative min-h-[290px] flex-1 md:min-h-[360px]">
          <div className="absolute left-0 top-0 w-[28%] rounded-2xl border border-white/10 bg-black/45 p-3 backdrop-blur">
            <div className="mb-2 flex items-center gap-2 text-xs text-white/55">
              <Home size={13} className="text-accent" /> Depo
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="grid aspect-square place-items-center rounded-md border border-accent/40 bg-accent/15 text-accent"
                  animate={{ opacity: [1, 1, 0, 0, 1], scale: [1, 1, 0.4, 0.4, 1] }}
                  transition={baseTransition([
                    0,
                    T.loadStart + i * 0.04,
                    T.loadStart + i * 0.04 + 0.05,
                    T.delivered,
                    T.end,
                  ])}
                >
                  <Package size={14} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 w-[28%] rounded-2xl border border-white/10 bg-black/45 p-3 backdrop-blur">
            <div className="mb-2 flex items-center gap-2 text-xs text-white/55">
              <MapPin size={13} className="text-accent" /> Teslim
            </div>
            <div className="flex h-[80px] flex-col items-center justify-center">
              <motion.div
                className="flex flex-col items-center gap-1"
                animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.05, 1, 0.5] }}
                transition={baseTransition([0, T.driveEnd, T.unloadEnd, T.delivered, T.end])}
              >
                <CheckCircle2 size={36} className="text-accent" strokeWidth={1.8} />
                <span className="text-[10px] font-bold tracking-wider text-accent">TESLİM</span>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-12 left-0 right-0 h-px bg-white/12" />
          <div className="absolute bottom-[47px] left-0 right-0 flex justify-around">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="h-[2px] w-3 bg-white/15" />
            ))}
          </div>
          <motion.div
            className="absolute bottom-12 left-0 h-[2px] w-full origin-left bg-accent shadow-[0_0_18px_rgba(255,107,0,0.65)]"
            animate={{ scaleX: [0, 0, 1, 1, 1], opacity: [1, 1, 1, 1, 0] }}
            transition={baseTransition([0, T.loadEnd, T.driveEnd, T.delivered, T.end])}
          />

          <motion.div
            className="absolute bottom-[42px] left-0 w-[30%]"
            animate={{ x: ["0%", "0%", "285%", "285%"], opacity: [0, 1, 1, 1, 0] }}
            transition={{
              x: {
                duration: DURATION,
                repeat: Infinity,
                times: [0, T.loadEnd, T.driveEnd, T.end],
                ease: [0.65, 0, 0.35, 1],
              },
              opacity: {
                duration: DURATION,
                repeat: Infinity,
                times: [0, 0.04, T.driveEnd, T.delivered, T.end],
                ease: "linear",
              },
            }}
          >
            <div className="grid grid-cols-4 gap-1 rounded-md border border-white/15 bg-[#1a1a1a] p-1.5">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-sm border border-accent/50 bg-accent/30"
                  animate={{ opacity: [0, 0, 1, 1, 0, 0], scale: [0.4, 0.4, 1, 1, 0.4, 0.4] }}
                  transition={baseTransition([
                    0,
                    T.loadStart + i * 0.04,
                    T.loadStart + i * 0.04 + 0.05,
                    T.driveEnd + i * 0.03,
                    T.driveEnd + i * 0.03 + 0.05,
                    T.end,
                  ])}
                />
              ))}
            </div>
            <Truck className="mt-1 h-12 w-full text-white" strokeWidth={1.4} />
          </motion.div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          {trackerSteps.map((step) => (
            <motion.div
              key={step.label}
              className="flex-1 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur"
              animate={{
                color: ["#ffffff60", "#ffffff60", "#ff6b00", "#ff6b00", "#ffffff60", "#ffffff60"],
                borderColor: ["#ffffff15", "#ffffff15", "#ff6b0066", "#ff6b0066", "#ffffff15", "#ffffff15"],
              }}
              transition={{
                duration: DURATION,
                repeat: Infinity,
                times: [0, step.from, step.from + 0.02, step.to, step.to + 0.02, 1],
                ease: "linear",
              }}
            >
              {step.label}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
