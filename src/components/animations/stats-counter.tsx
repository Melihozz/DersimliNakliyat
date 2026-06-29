"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Yıl deneyim" },
  { value: 5000, suffix: "+", label: "Başarılı taşıma" },
  { value: 81, suffix: "", label: "İl hizmet ağı" },
];

function CountUp({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const duration = 1300;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-shell grid gap-4 py-16 md:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
          transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-5xl font-black tracking-[-0.05em] text-white">
            <CountUp value={stat.value} suffix={stat.suffix} active={inView} />
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/42">{stat.label}</p>
        </motion.div>
      ))}
    </section>
  );
}
