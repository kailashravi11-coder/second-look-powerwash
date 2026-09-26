import React, { useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck, Star, Instagram, ExternalLink, Lock, FileText } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";
import { LegalModal } from "./LegalModal";

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<"privacy" | "terms">("privacy");

  const openLegal = (tab: "privacy" | "terms") => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };
  return (
    <footer className="bg-[#050b14] text-slate-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <a href="#" className="inline-block group focus:outline-none" title="SECOND LOOK Powerwash LLC">
              <img
                src="/images/second-look-logo.png"
                alt="SECOND LOOK Powerwash LLC"
                className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
            <p className="text-sm text-cyan-300 font-semibold italic">
              &ldquo;{BUSINESS_INFO.slogan}&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Top-rated and owner-operated by William (Willy). High-end residential exterior softwashing, brick restoration, and driveway flatwork across the Greater Houston region.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="text-amber-400">★★★★★</span>
              <span>5.0 Rating · 63+ Houston Reviews</span>
            </div>

            {/* Instagram Social Follow Button */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-amber-900/40 border border-pink-500/30 hover:border-pink-500/60 text-white text-xs font-bold transition-all shadow-sm group"
              >
                <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                <span>Follow {BUSINESS_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Houston Service Areas */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
              Houston Service Areas
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-cyan-400" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Services Quick Links */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
              Specialized Capabilities
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>House Softwashing (Safe Pressure)</li>
              <li>Houston Red Brick & Limestone Cleaning</li>
              <li>Commercial Rotary Driveway Wash</li>
              <li>Patio & Travertine Pool Deck Restoration</li>
              <li>Wood Fence & Gutter Brightening</li>
              <li>HOA Notice Rapid Resolution</li>
            </ul>
          </div>

          {/* Col 4: Direct Contact & Address */}
          <div className="space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
              Direct Contact & Address
            </span>
            
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2.5 text-white hover:text-cyan-400 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Call / Text Willy:</span>
                <span className="text-sm font-bold font-mono text-cyan-300">{BUSINESS_INFO.phoneDisplay}</span>
              </div>
            </a>

            {/* Direct WhatsApp Chat */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white hover:text-emerald-400 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">WhatsApp Chat:</span>
                <span className="text-xs font-semibold text-emerald-400 group-hover:underline font-mono">Chat on WhatsApp</span>
              </div>
            </a>

            {/* Direct Email */}
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-center gap-2.5 text-white hover:text-cyan-400 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Direct Email:</span>
                <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 font-mono">{BUSINESS_INFO.email}</span>
              </div>
            </a>

            {/* Official Physical Address */}
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-xs text-slate-300 hover:text-white transition-colors group pt-1"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="leading-snug">
                <span className="text-xs text-slate-400 block font-semibold">Location / Headquarters:</span>
                <span className="text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {BUSINESS_INFO.address}
                </span>
              </div>
            </a>

            {/* Instagram Link */}
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform shrink-0">
                <Instagram className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-semibold">Instagram:</span>
                <span className="text-pink-300 font-bold group-hover:underline">
                  {BUSINESS_INFO.instagram}
                </span>
              </div>
            </a>

            <div className="flex items-start gap-2.5 text-xs text-slate-300 pt-1">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Licensed & Fully Insured ($1M Liability)</span>
            </div>

            <div className="text-[11px] text-slate-400 pt-1">
              Mon–Sat: 7:00 AM – 7:00 PM<br />
              Sunday: Emergency HOA Dispatch By Appt
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean quiet legal notices & full address */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Second LOOK Power Wash, LLC. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-slate-400 text-center">
            <button
              type="button"
              onClick={() => openLegal("privacy")}
              className="text-slate-300 hover:text-cyan-400 underline transition-colors cursor-pointer"
            >
              Privacy Policy (A2P 10DLC)
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => openLegal("terms")}
              className="text-slate-300 hover:text-cyan-400 underline transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <a 
              href={BUSINESS_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              10131 East Palm Lake Dr, Houston, TX 77034
            </a>
            <span>·</span>
            <a 
              href={BUSINESS_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors font-semibold"
            >
              {BUSINESS_INFO.instagram}
            </a>
            <span>·</span>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <span>·</span>
            <a 
              href={BUSINESS_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Creator Attribution: Ekdum center aur ekdum bottom */}
        <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-center text-center">
          <p className="text-xs sm:text-sm font-medium text-white tracking-wider">
            Created by &quot;<span className="text-amber-400 font-bold tracking-wide">SHYAM CREATIVE LABS</span>&quot; KAILASHH PRASAAD
          </p>
        </div>

      </div>

      {/* Interactive Comprehensive Legal Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={legalModalTab}
      />
    </footer>
  );
};
