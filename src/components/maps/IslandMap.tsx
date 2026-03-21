"use client";

import { useEffect, useRef, useState } from "react";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const LOCATIONS = {
  dharavandhoo: { lng: 72.9381, lat: 5.1568, label: "Dharavandhoo" },
  hanifaruBay: { lng: 72.9333, lat: 5.1917, label: "Hanifaru Bay" },
};

interface IslandMapProps {
  className?: string;
}

export function IslandMap({ className = "" }: IslandMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !MAPBOX_TOKEN) return;

    let map: mapboxgl.Map | null = null;

    (async () => {
      // @ts-expect-error -- dynamic CSS import handled by bundler
      await import("mapbox-gl/dist/mapbox-gl.css");
      const mapboxgl = (await import("mapbox-gl")).default;

      map = new mapboxgl.Map({
        container: mapContainer.current!,
        accessToken: MAPBOX_TOKEN,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [72.935, 5.17],
        zoom: 12.5,
        attributionControl: false,
        interactive: true,
      });

      map.on("load", () => {
        setLoaded(true);

        // Dharavandhoo pin
        const dhMarker = document.createElement("div");
        dhMarker.className = "flex flex-col items-center";
        dhMarker.innerHTML = `
          <div class="bg-cyan text-ocean-navy text-xs font-bold px-2 py-1 rounded shadow-lg mb-1 whitespace-nowrap">
            ${LOCATIONS.dharavandhoo.label}
          </div>
          <div class="w-3 h-3 rounded-full bg-cyan border-2 border-white shadow-lg"></div>
        `;
        new mapboxgl.Marker({ element: dhMarker })
          .setLngLat([LOCATIONS.dharavandhoo.lng, LOCATIONS.dharavandhoo.lat])
          .addTo(map!);

        // Hanifaru Bay pin
        const hbMarker = document.createElement("div");
        hbMarker.className = "flex flex-col items-center";
        hbMarker.innerHTML = `
          <div class="bg-coral-gold text-white text-xs font-bold px-2 py-1 rounded shadow-lg mb-1 whitespace-nowrap">
            ${LOCATIONS.hanifaruBay.label} — 8 min by boat
          </div>
          <div class="w-3 h-3 rounded-full bg-coral-gold border-2 border-white shadow-lg"></div>
        `;
        new mapboxgl.Marker({ element: hbMarker })
          .setLngLat([LOCATIONS.hanifaruBay.lng, LOCATIONS.hanifaruBay.lat])
          .addTo(map!);
      });
    })();

    return () => {
      map?.remove();
    };
  }, []);

  if (!MAPBOX_TOKEN) {
    return (
      <div className={`bg-ocean-navy/10 rounded-lg flex items-center justify-center ${className}`}>
        <p className="text-sm text-ocean-navy/50">Map requires Mapbox token</p>
      </div>
    );
  }

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <div ref={mapContainer} className="w-full h-full min-h-[400px]" />
      {!loaded && (
        <div className="absolute inset-0 bg-ocean-navy/10 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-cyan border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
