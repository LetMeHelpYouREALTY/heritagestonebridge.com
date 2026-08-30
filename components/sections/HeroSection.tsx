"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import DevicePicture from "@/components/images/DevicePicture";
import RealScoutSimpleSearch from "@/components/realscout/RealScoutSimpleSearch";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  
  const images = [
    "/images/hero/hero-heritage-stonebridge.webp",
    "/images/hero/hero-lifestyle.webp",
    "/images/hero/hero-luxury.webp",
  ];

  useEffect(() => {
    // Don't animate if user prefers reduced motion
    if (prefersReducedMotion) return;
    
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${
              prefersReducedMotion 
                ? '' 
                : 'transition-opacity duration-1000'
            } ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <DevicePicture
              src={src}
              alt={
                index === 0
                  ? "Heritage at Stonebridge guard-gated 55+ community in Summerlin West"
                  : index === 1
                    ? "Resort-style pool at a Summerlin active adult clubhouse"
                    : "Luxury modern desert estate in Summerlin with mountain views"
              }
              priority={index === 0}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Find Your Dream Home in
          <br />
          <span className="text-blue-400">Las Vegas & Henderson</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Expert real estate services with personalized attention. Your trusted partner for buying,
          selling, and investing in Southern Nevada.
        </p>

        {/* RealScout Search Widget */}
        <RealScoutSimpleSearch className="realscout-wrapper mb-4" />

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">500+</span>
            <span>Properties Sold</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Since 2008</span>
            <span>Serving Las Vegas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">4.9★</span>
            <span>Average Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 ${
          prefersReducedMotion ? '' : 'animate-bounce'
        }`}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
