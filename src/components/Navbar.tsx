import React, { useState, useEffect } from "react";
import { Phone, ArrowRight, Menu, X, Instagram, ChevronRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

interface NavbarProps {
  onOpenEstimate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020617] border-b border-white/20 shadow-2xl py-2"
          : "bg-[#040812]/95 backdrop-blur-md py-3 border-b border-white/15 shadow-xl"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Brand Logo Image */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm select-none py-0.5 mr-2 lg:mr-4 shrink-0"
            title="SECOND LOOK Powerwash LLC - Houston, TX"
          >
            <img
              src="/images/second-look-logo.png"
              alt="SECOND LOOK Powerwash LLC"
              className="h-12 sm:h-14 lg:h-16 xl:h-20 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
            />
          </a>

          {/* Zone 2: Navigation Links - PURE WHITE (#FFFFFF), BOLD OUTFIT DISPLAY FONT, HIGH READABILITY */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 font-heading">
            <a
              href="#hoa-solution"
              className="text-white hover:text-cyan-300 font-extrabold text-[15px] 2xl:text-base tracking-wide transition-all py-1.5 px-2.5 rounded-lg hover:bg-white/10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap select-none"
            >
              HOA Notice Solution
            </a>

            <a
              href="#services"
              className="text-white hover:text-cyan-300 font-extrabold text-[15px] 2xl:text-base tracking-wide transition-all py-1.5 px-2.5 rounded-lg hover:bg-white/10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap select-none"
            >
              Core Services
            </a>

            <a
              href="#why-choose-us"
              className="text-white hover:text-cyan-300 font-extrabold text-[15px] 2xl:text-base tracking-wide transition-all py-1.5 px-2.5 rounded-lg hover:bg-white/10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap select-none"
            >
              Why Owner-Operated
            </a>

            <a
              href="#reviews"
              className="text-white hover:text-cyan-300 font-extrabold text-[15px] 2xl:text-base tracking-wide transition-all py-1.5 px-2.5 rounded-lg hover:bg-white/10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap select-none"
            >
              Reviews (5.0★)
            </a>

            <a
              href="#houston-service-areas"
              className="text-white hover:text-cyan-300 font-extrabold text-[15px] 2xl:text-base tracking-wide transition-all py-1.5 px-3 rounded-lg bg-cyan-950/70 border border-cyan-400/40 hover:bg-cyan-900/70 hover:border-cyan-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap select-none"
            >
              Houston Areas &amp; FAQ
            </a>
          </nav>

          {/* Zone 3: Direct Actions - Free Estimate button is ALWAYS fully visible and never cut off */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Phone Link - Visible on 2XL wide screens to prevent pushing the CTA */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden 2xl:inline-flex items-center gap-1.5 text-xs xl:text-sm font-extrabold font-heading text-white hover:text-cyan-300 px-3 py-2 rounded-xl bg-slate-900/90 border border-white/20 hover:border-cyan-400/60 hover:bg-slate-800 transition-all shadow-md whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] shrink-0"
              title={`Call Willy at ${BUSINESS_INFO.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            {/* Instagram Link - Visible on 2XL wide screens */}
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Second LOOK Powerwash on Instagram"
              className="hidden 2xl:inline-flex items-center gap-1.5 text-xs font-extrabold font-heading text-white hover:text-pink-200 px-2.5 py-2 rounded-xl bg-pink-950/80 border border-pink-500/40 hover:bg-pink-900/80 transition-all whitespace-nowrap shadow-md drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] shrink-0"
              title="Instagram @secondlookpwr"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>@secondlookpwr</span>
            </a>

            {/* High-Impact Gold CTA Button - Fully visible, never cut off, pehle jaisa */}
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-black font-heading text-slate-950 bg-[#e5a93c] hover:bg-[#d97706] rounded-xl shadow-lg ring-2 ring-amber-300/80 transition-all whitespace-nowrap cursor-pointer active:scale-95 shrink-0"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4 text-slate-950 stroke-[3]" />
            </button>

            {/* Mobile / Tablet menu toggle (visible on screens < 1280px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer border border-white/10 bg-slate-900/80 shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white stroke-[2.5]" /> : <Menu className="w-5 h-5 text-white stroke-[2.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown - Full Contrast Pure White & Bold Font */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#030712] border-b border-white/20 px-4 py-5 space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          <a
            href="#hoa-solution"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-extrabold font-heading text-white hover:text-cyan-300 py-3 px-4 rounded-xl bg-slate-900/90 border border-white/15 hover:border-cyan-400/50 transition-all drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
          >
            <span>HOA Notice Solution &amp; Organic Growth</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </a>

          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-extrabold font-heading text-white hover:text-cyan-300 py-3 px-4 rounded-xl bg-slate-900/90 border border-white/15 hover:border-cyan-400/50 transition-all drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
          >
            <span>Core Services</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </a>

          <a
            href="#why-choose-us"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-extrabold font-heading text-white hover:text-cyan-300 py-3 px-4 rounded-xl bg-slate-900/90 border border-white/15 hover:border-cyan-400/50 transition-all drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
          >
            <span>Why Choose William (Willy)</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </a>

          <a
            href="#get-quote"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-extrabold font-heading text-white hover:text-cyan-300 py-3 px-4 rounded-xl bg-slate-900/90 border border-white/15 hover:border-cyan-400/50 transition-all drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
          >
            <span>Get Fast Quote</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </a>

          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-extrabold font-heading text-white hover:text-cyan-300 py-3 px-4 rounded-xl bg-slate-900/90 border border-white/15 hover:border-cyan-400/50 transition-all drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
          >
            <span>Houston Reviews (5.0★)</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </a>

          <a
            href="#houston-service-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-extrabold font-heading text-white hover:text-cyan-200 py-3 px-4 rounded-xl bg-cyan-950/80 border border-cyan-400/50 transition-all drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
          >
            <span>Houston Service Areas &amp; FAQ</span>
            <ChevronRight className="w-4 h-4 text-cyan-300" />
          </a>

          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 text-base font-black font-heading text-white bg-slate-800 hover:bg-slate-700 border border-white/20 rounded-xl shadow-md"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call / Text: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 text-base font-black font-heading text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/40 rounded-xl shadow-md"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-white">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 text-base font-black font-heading text-white bg-pink-950/80 border border-pink-500/40 rounded-xl shadow-md"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Follow {BUSINESS_INFO.instagram}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
