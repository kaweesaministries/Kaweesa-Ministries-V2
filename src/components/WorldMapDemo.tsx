import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function WorldMapDemo() {
  return (
    <div className="py-24 bg-white w-full border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="font-bold text-3xl md:text-5xl text-black font-display mb-4">
          Global{" "}
          <span className="text-primary">
            {"Support".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          {", Local Impact"}
        </p>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          We connect compassionate supporters from across the globe directly to our children's programs in Uganda. Every contribution creates ripples of change that transform entire communities.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-6">
        <WorldMap
          lineColor="#047857" // emerald/green tint matching the platform's primary color
          dots={[
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 0.3476, lng: 32.5825 }, // Kampala, Uganda
            },
            {
              start: { lat: 40.7128, lng: -74.0060 }, // New York
              end: { lat: 0.3476, lng: 32.5825 }, // Kampala, Uganda
            },
            {
              start: { lat: 59.3293, lng: 18.0686 }, // Stockholm
              end: { lat: 0.3476, lng: 32.5825 }, // Kampala, Uganda
            },
            {
              start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
              end: { lat: 0.3476, lng: 32.5825 }, // Kampala, Uganda
            },
            {
              start: { lat: 52.3676, lng: 4.9041 }, // Amsterdam
              end: { lat: 0.3476, lng: 32.5825 }, // Kampala, Uganda
            },
            {
              start: { lat: -33.8688, lng: 151.2093 }, // Sydney
              end: { lat: 0.3476, lng: 32.5825 }, // Kampala, Uganda
            },
          ]}
        />
      </div>
    </div>
  );
}
