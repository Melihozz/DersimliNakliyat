"use client";

import { useEffect, useRef } from "react";

const BEYLIKDUZU = { lat: 41.002697, lng: 28.628211 };

export function ContactMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let map: import("leaflet").Map | null = null;

    const initMap = async () => {
      const L = (await import("leaflet")).default;

      if (!containerRef.current) return;

      map = L.map(containerRef.current, {
        center: [BEYLIKDUZU.lat, BEYLIKDUZU.lng],
        zoom: 13,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
      }).addTo(map);

      const markerIcon = L.divIcon({
        className: "contact-map-marker",
        html: '<span class="contact-map-marker-dot"></span>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });

      L.marker([BEYLIKDUZU.lat, BEYLIKDUZU.lng], { icon: markerIcon })
        .addTo(map)
        .bindPopup("Beylikdüzü, İstanbul");
    };

    initMap();

    return () => {
      map?.remove();
    };
  }, []);

  return (
    <div className="contact-map relative h-80 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0b0b0b]">
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}
