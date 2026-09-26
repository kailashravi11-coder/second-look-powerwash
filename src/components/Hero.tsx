import React, { useRef, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";
import { CinematicSplitText } from "./CinematicSplitText";

interface HeroProps {
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure autoplay triggers reliably on all browsers (including Chrome & iOS)
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback handled gracefully
      });
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#050b14] text-white pt-32 sm:pt-36 pb-16">
      {/* Background Visual Asset: User's /hero-video.mp4 */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        
        {/* User's HTML5 Video Loop */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          src="/videos/hero-video.mp4"
          poster="/images/hero_pressure_washing_action.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-85 filter brightness-[0.88] contrast-[1.05] transition-all duration-700"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Ambient Electric Cyan Glow Accents */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-shimmer-subtle" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-shimmer-subtle" />

        {/* Cinematic Scrims: Dark top/bottom gradients for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-[#050b14]/75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b14]/70 via-transparent to-transparent z-10" />
      </div>

      {/* Top Area: Highlighted Text on Left Side with Font Size 24 & Cinematic Split-Text Reveal */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <h1 className="sr-only">HOA-Ready. Spotless Guaranteed.</h1>
        <CinematicSplitText
          prefixText="HOA-Ready."
          highlightText="Spotless Guaranteed."
          prefixColor="text-white"
          highlightColor="#38bdf8"
        />

        {/* User Requested Slogan: Exactly 1 line gap below, Font Size 18px, Light Blue, indented slightly to the right */}
        <p
          className="mt-2.5 sm:mt-3 ml-6 sm:ml-10 text-[18px] font-medium tracking-wide select-none text-[#7dd3fc] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
        >
          “We show up so you can show off!”
        </p>
      </div>

      {/* Bottom Area: CTA Buttons at the very bottom of the hero video */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center mt-auto pb-6 sm:pb-10">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          {/* Primary High-Contrast Get Free Estimate Button */}
          <button
            onClick={onOpenEstimate}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-black text-slate-950 bg-[#e5a93c] hover:bg-[#d97706] rounded-xl shadow-[0_0_35px_rgba(229,169,60,0.55)] ring-4 ring-amber-300/80 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Get Free Estimate</span>
            <ArrowRight className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </button>

          {/* Secondary Direct Call / Text Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 text-base sm:text-lg font-bold text-white bg-slate-950/95 hover:bg-slate-900 border-2 border-cyan-400 hover:border-cyan-300 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Phone className="w-5 h-5 text-cyan-400 fill-cyan-400" />
            <span className="tracking-tight">Call / Text: {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Subtle bottom edge gradient to ease into next light section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#050b14] pointer-events-none" />
    </section>
  );
};
