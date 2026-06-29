"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  "Boş kamyon hazırlanır",
  "Koliler güvenle yüklenir",
  "Rota başlar",
  "Teslimat tamamlanır",
];

const TRUCK_START_X = 290;
const TRUCK_START_Y = 198;
const TRUCK_DRIVE_X = 388;

const cargoSlots = [
  { x: 18, y: 14 },
  { x: 70, y: 14 },
  { x: 18, y: 54 },
  { x: 70, y: 54 },
];

const depotPositions = [
  { x: 56, y: 220 },
  { x: 116, y: 220 },
  { x: 56, y: 252 },
  { x: 116, y: 252 },
];

const wheelCenters = [
  { x: 40, y: 102 },
  { x: 178, y: 102 },
  { x: 304, y: 102 },
];

export function ScrollStory() {
  const rootRef = useRef<HTMLElement>(null);
  const truckRef = useRef<SVGGElement>(null);
  const cargoRef = useRef<(SVGGElement | null)[]>([]);
  const wheelsRef = useRef<(SVGGElement | null)[]>([]);
  const stepRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<SVGLineElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cargoSlots.forEach((slot, i) => {
        const el = cargoRef.current[i];
        if (!el) return;
        const naturalX = TRUCK_START_X + slot.x;
        const naturalY = TRUCK_START_Y + slot.y;
        const target = depotPositions[i];
        gsap.set(el, {
          x: target.x - 23 - naturalX,
          y: target.y - 16 - naturalY,
        });
      });

      wheelsRef.current.forEach((w) => {
        if (!w) return;
        gsap.set(w, { transformOrigin: "50% 50%" });
      });

      gsap.set(progressRef.current, { strokeDashoffset: 100 });
      gsap.set(badgeRef.current, { opacity: 0, y: 12 });
      gsap.set(stepRef.current, {
        backgroundColor: "rgba(0,0,0,0.45)",
        borderColor: "rgba(255,255,255,0.1)",
        boxShadow: "0 0 0 rgba(255,107,0,0)",
        color: "rgba(255,255,255,0.64)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power2.inOut" },
      });

      tl.to(stepRef.current[0], {
        backgroundColor: "rgba(255,107,0,0.16)",
        borderColor: "rgba(255,107,0,0.55)",
        boxShadow: "0 0 22px rgba(255,107,0,0.25)",
        color: "rgba(255,255,255,0.95)",
        duration: 0.25,
      })
        .to(
          stepRef.current[1],
          {
            backgroundColor: "rgba(255,107,0,0.16)",
            borderColor: "rgba(255,107,0,0.55)",
            boxShadow: "0 0 22px rgba(255,107,0,0.25)",
            color: "rgba(255,255,255,0.95)",
            duration: 0.25,
          },
          ">+0.05",
        )
        .to(cargoRef.current, {
          x: 0,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
        })
        .to(
          progressRef.current,
          { strokeDashoffset: 55, duration: 0.6 },
          "<+0.2",
        )
        .to(
          stepRef.current[2],
          {
            backgroundColor: "rgba(255,107,0,0.16)",
            borderColor: "rgba(255,107,0,0.55)",
            boxShadow: "0 0 22px rgba(255,107,0,0.25)",
            color: "rgba(255,255,255,0.95)",
            duration: 0.25,
          },
          ">-0.1",
        )
        .to(
          truckRef.current,
          { x: TRUCK_DRIVE_X, duration: 1.3 },
          ">-0.05",
        )
        .to(
          wheelsRef.current,
          { rotation: 720, duration: 1.3, ease: "none" },
          "<",
        )
        .to(
          progressRef.current,
          { strokeDashoffset: 0, duration: 0.6 },
          "<+0.4",
        )
        .to(
          stepRef.current[3],
          {
            backgroundColor: "rgba(255,107,0,0.16)",
            borderColor: "rgba(255,107,0,0.55)",
            boxShadow: "0 0 22px rgba(255,107,0,0.25)",
            color: "rgba(255,255,255,0.95)",
            duration: 0.25,
          },
          ">-0.05",
        )
        .to(
          badgeRef.current,
          { opacity: 1, y: 0, duration: 0.5 },
          ">-0.1",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-[260vh] bg-[#080808]">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-16">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-accent">Nakliye Süreci</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Taşıma süreci tek sahnede canlanır.</h2>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-6 premium-grid">
          <div className="absolute left-6 top-6 z-20 grid gap-3 md:left-10 md:top-10">
            {steps.map((step, index) => (
              <div
                key={step}
                ref={(node) => {
                  stepRef.current[index] = node;
                }}
                className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-sm text-white/64 backdrop-blur"
              >
                0{index + 1} / {step}
              </div>
            ))}
          </div>

          <div
            ref={badgeRef}
            className="absolute right-6 top-10 z-20 hidden rounded-3xl border border-accent/35 bg-accent/15 px-5 py-4 text-white opacity-0 backdrop-blur-xl md:block"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Teslimat Durumu</p>
            <p className="mt-1 text-xl font-black">Zamanında teslim</p>
          </div>

          <svg
            viewBox="0 0 1000 360"
            preserveAspectRatio="xMidYMax meet"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="ss-cargoGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2c2c2c" />
                <stop offset="100%" stopColor="#0d0d0d" />
              </linearGradient>
              <linearGradient id="ss-cabGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#333333" />
                <stop offset="100%" stopColor="#141414" />
              </linearGradient>
              <linearGradient id="ss-boxGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(255,107,0,0.55)" />
                <stop offset="100%" stopColor="rgba(255,107,0,0.12)" />
              </linearGradient>
              <linearGradient id="ss-windowGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(135,200,255,0.42)" />
                <stop offset="100%" stopColor="rgba(70,150,210,0.12)" />
              </linearGradient>
              <radialGradient id="ss-headlight" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="rgba(252,211,77,0)" />
              </radialGradient>
            </defs>

            <g>
              <rect x="33" y="278" width="130" height="6" rx="3" fill="rgba(255,255,255,0.18)" />
              {depotPositions.map((p, i) => (
                <rect
                  key={i}
                  x={p.x - 23}
                  y={p.y - 16}
                  width="46"
                  height="32"
                  rx="4"
                  fill="rgba(0,0,0,0.32)"
                  stroke="rgba(255,255,255,0.08)"
                />
              ))}
              <text
                x="104"
                y="304"
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                letterSpacing="2.5"
                fill="rgba(255,255,255,0.45)"
              >
                ÜRÜNLERİNİZ
              </text>
            </g>

            <g>
              <rect
                x="800"
                y="178"
                width="142"
                height="100"
                rx="14"
                stroke="rgba(255,107,0,0.45)"
                fill="rgba(255,107,0,0.07)"
              />
              <rect x="800" y="278" width="142" height="6" rx="3" fill="rgba(255,107,0,0.45)" />
              <text
                x="871"
                y="220"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                letterSpacing="3"
                fill="#ff6b00"
              >
                VARIŞ
              </text>
              <text x="871" y="244" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.55)">
                Müşteri adresi
              </text>
              <circle cx="871" cy="262" r="4" fill="#ff6b00" />
            </g>

            <line x1="20" y1="320" x2="980" y2="320" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <line
              ref={progressRef}
              x1="20"
              y1="320"
              x2="980"
              y2="320"
              stroke="#ff6b00"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray={100}
              filter="drop-shadow(0 0 6px rgba(255,107,0,0.6))"
            />

            <g ref={truckRef} transform={`translate(${TRUCK_START_X}, ${TRUCK_START_Y})`}>
              <ellipse cx="170" cy="126" rx="172" ry="6" fill="black" opacity="0.45" />

              <g>
                <rect
                  x="0"
                  y="0"
                  width="218"
                  height="100"
                  rx="10"
                  fill="url(#ss-cargoGrad)"
                  stroke="rgba(255,255,255,0.14)"
                />
                <rect x="0" y="49" width="218" height="3" fill="#ff6b00" opacity="0.75" />
                <rect x="6" y="6" width="206" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
                <rect x="6" y="92" width="206" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
                <line x1="55" y1="8" x2="55" y2="92" stroke="rgba(255,255,255,0.05)" />
                <line x1="109" y1="8" x2="109" y2="92" stroke="rgba(255,255,255,0.08)" />
                <line x1="163" y1="8" x2="163" y2="92" stroke="rgba(255,255,255,0.05)" />
                <text
                  x="109"
                  y="84"
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="700"
                  letterSpacing="2"
                  fill="rgba(255,255,255,0.18)"
                >
                  DERSİMLİ
                </text>
              </g>

              <g transform="translate(218, 28)">
                <path
                  d="M 0 72 L 0 0 L 72 0 L 112 26 L 112 72 Z"
                  fill="url(#ss-cabGrad)"
                  stroke="rgba(255,255,255,0.14)"
                />
                <path
                  d="M 50 5 L 67 5 L 102 25 L 50 25 Z"
                  fill="url(#ss-windowGrad)"
                  stroke="rgba(255,255,255,0.18)"
                />
                <rect
                  x="6"
                  y="8"
                  width="38"
                  height="22"
                  rx="2"
                  fill="url(#ss-windowGrad)"
                  stroke="rgba(255,255,255,0.15)"
                />
                <rect
                  x="6"
                  y="34"
                  width="38"
                  height="32"
                  rx="2"
                  fill="rgba(0,0,0,0.32)"
                  stroke="rgba(255,255,255,0.16)"
                />
                <line x1="34" y1="50" x2="40" y2="50" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
                <circle cx="106" cy="58" r="9" fill="url(#ss-headlight)" />
                <circle cx="106" cy="58" r="4" fill="#fcd34d" />
                <rect x="100" y="64" width="14" height="8" rx="2" fill="#0a0a0a" />
              </g>

              {wheelCenters.map((c, i) => (
                <g
                  key={i}
                  ref={(node) => {
                    wheelsRef.current[i] = node;
                  }}
                  transform={`translate(${c.x}, ${c.y})`}
                >
                  <circle r="20" fill="#0a0a0a" stroke="#222" strokeWidth="2" />
                  <circle r="13" fill="#1f1f1f" />
                  <line x1="-12" y1="0" x2="12" y2="0" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
                  <line x1="0" y1="-12" x2="0" y2="12" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
                  <line x1="-8" y1="-8" x2="8" y2="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                  <line x1="-8" y1="8" x2="8" y2="-8" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                  <circle r="3" fill="#ff6b00" />
                </g>
              ))}

              {cargoSlots.map((slot, i) => (
                <g
                  key={i}
                  ref={(node) => {
                    cargoRef.current[i] = node;
                  }}
                >
                  <rect
                    x={slot.x}
                    y={slot.y}
                    width="46"
                    height="32"
                    rx="4"
                    fill="url(#ss-boxGrad)"
                    stroke="rgba(255,107,0,0.55)"
                  />
                  <line
                    x1={slot.x + 2}
                    y1={slot.y + 16}
                    x2={slot.x + 44}
                    y2={slot.y + 16}
                    stroke="rgba(255,107,0,0.5)"
                  />
                  <line
                    x1={slot.x + 23}
                    y1={slot.y + 2}
                    x2={slot.x + 23}
                    y2={slot.y + 30}
                    stroke="rgba(255,107,0,0.5)"
                  />
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>
      </div>
    </section>
  );
}
