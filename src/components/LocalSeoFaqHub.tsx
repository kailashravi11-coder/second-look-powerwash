import React, { useState } from "react";
import { KineticText } from "./KineticText";
import { 
  ChevronDown, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Clock,
  Compass
} from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

interface LocalSeoFaqHubProps {
  onOpenEstimate: () => void;
}

interface FaqItem {
  question: string;
  answer: string;
  category: "HOA" | "Pricing" | "Process" | "Coverage";
}

const HOUSTON_LOCAL_FAQS: FaqItem[] = [
  {
    category: "HOA",
    question: "How fast can SECOND LOOK Powerwash clear an urgent HOA violation notice in Houston, TX?",
    answer: "We offer expedited 24 to 48-hour emergency dispatch across Greater Houston, including strict master-planned communities like Cinco Ranch, Bridgeland, and The Woodlands. Owner-operator William personally softwashes the cited algae, mildew, or oil stains and delivers timestamped before-and-after photographic proof ready for immediate submission to your HOA compliance board."
  },
  {
    category: "Process",
    question: "What is the difference between soft washing and pressure washing for Houston homes?",
    answer: "Traditional high-pressure washing (3,000+ PSI) is strictly reserved for hard flatwork like concrete driveways and sidewalks. For delicate residential siding, stucco, Austin stone, and Houston red brick, we use dedicated low-pressure softwashing (under 100 PSI) with eco-friendly sanitizing detergents that eradicate black mold and green algae at the root without chipping paint, stripping mortar, or forcing moisture behind walls."
  },
  {
    category: "Pricing",
    question: "How much does professional pressure washing and house softwashing cost in Houston, Texas?",
    answer: "Exterior house softwashing in Greater Houston generally ranges from $199 to $450 depending on square footage and stories, while two-car driveway surface cleaning ranges between $125 and $275. SECOND LOOK Powerwash provides guaranteed upfront, transparent pricing with zero surprise add-ons. Call or text (346) 235-5984 for a free, instant same-day quote."
  },
  {
    category: "Process",
    question: "Why does green algae and black mold return so fast on Houston siding and driveways?",
    answer: "Houston's extreme Gulf Coast humidity, heat, and seasonal storms accelerate the spread of Gloeocapsa magma (airborne cyanobacteria) and mildew spores. Standard high-pressure water blasting only shears the surface, leaving root spores behind. Our specialized softwash treatment sanitizes surfaces at the cellular spore level, keeping your siding and concrete clean 3x to 4x longer than standard water spraying."
  },
  {
    category: "Coverage",
    question: "Which areas in Greater Houston do you service, and is SECOND LOOK Powerwash licensed & insured?",
    answer: "SECOND LOOK Powerwash LLC serves all of Greater Houston, including Houston (The Heights, Memorial, River Oaks, Clear Lake), Katy, Cypress, The Woodlands, Spring, Tomball, Sugar Land, Pearland, and Richmond. Every single job is handled personally by owner-operator William (no subcontractors) and fully protected by a $1,000,000 commercial liability insurance policy."
  }
];

const HOUSTON_NEIGHBORHOOD_AREAS = [
  {
    name: "Katy & Cinco Ranch",
    highlights: "Strict HOA Compliance, Driveways & Siding",
    zipCodes: "77450, 77494, 77493",
    popular: "HOA Algae Wash & Driveway Cleaning"
  },
  {
    name: "Cypress & Bridgeland",
    highlights: "Towne Lake, Fairfield, Master-Planned Communities",
    zipCodes: "77429, 77433",
    popular: "House Softwashing & Stone Patios"
  },
  {
    name: "The Woodlands & Spring",
    highlights: "Forest Tree Mold, Pine Sap & Stucco Restoration",
    zipCodes: "77380, 77381, 77379",
    popular: "Stucco Softwash & Wood Decks"
  },
  {
    name: "Memorial & Spring Branch",
    highlights: "Luxury Estates, Red Brick & Travertine Flatwork",
    zipCodes: "77024, 77055, 77079",
    popular: "Houston Brick & Paver Restoration"
  },
  {
    name: "The Heights & River Oaks",
    highlights: "Historic Bungalows, Limestone & Walkways",
    zipCodes: "77007, 77008, 77019",
    popular: "Gentle Architectural Softwashing"
  },
  {
    name: "Sugar Land & Richmond",
    highlights: "First Colony, Riverstone, Pecan Grove",
    zipCodes: "77478, 77479, 77406",
    popular: "Full Exterior Package & Sidewalks"
  },
  {
    name: "Pearland & Clear Lake",
    highlights: "Silverlake, Shadow Creek, NASA Area",
    zipCodes: "77584, 77581, 77058",
    popular: "Driveway Surface Cleaning & Siding"
  },
  {
    name: "Tomball & Klein",
    highlights: "Acreage Homes, Long Driveways & Outbuildings",
    zipCodes: "77375, 77377",
    popular: "Large Concrete Flatwork & Fences"
  }
];

export const LocalSeoFaqHub: React.FC<LocalSeoFaqHubProps> = ({ onOpenEstimate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="houston-service-areas" 
      className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden border-t border-slate-800"
    >
      {/* Background Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Greater Houston Local Service & FAQ Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-tight">
            Top-Ranked Houston{" "}
            <KineticText 
              text="Pressure Washing" 
              className="text-cyan-400 font-bold" 
              minWeight={400} 
              maxWeight={900} 
            />{" "}
            &{" "}
            <KineticText 
              text="Softwash" 
              className="text-amber-400 font-bold" 
              minWeight={400} 
              maxWeight={900} 
            />
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From emergency HOA notice cures to complete driveway and roof restoration, William delivers spotless guaranteed results across Harris, Fort Bend, and Montgomery counties.
          </p>
        </div>

        {/* 2-Column Grid: Left is FAQ (AEO Optimized), Right is Houston GEO Coverage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: AEO (Answer Engine Optimization) FAQ ACCORDION */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-cyan-400" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Direct answers to common questions about Houston exterior cleaning & pricing.
                </p>
              </div>
            </div>

            <div className="space-y-3.5">
              {HOUSTON_LOCAL_FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen 
                        ? "bg-slate-800/90 border-cyan-400/50 shadow-lg shadow-cyan-950/40" 
                        : "bg-slate-800/40 border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/60"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-base sm:text-lg text-white font-heading leading-snug">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-cyan-400 text-slate-950 rotate-180" : "bg-slate-700 text-slate-300"
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-700/40 pt-4 animate-fade-in">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: GEO (Generative Engine Optimization) LOCAL HOUSTON COVERAGE */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Owner Direct Dispatch Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-850 border border-amber-400/40 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
                  ★
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Owner-Operated by William (Willy)</h4>
                  <span className="text-xs text-amber-400 font-medium">No Subcontractors · $1M Insured</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                William personally operates the equipment on every jobsite across Houston to guarantee zero damage to your siding, plants, and concrete.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenEstimate}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all cursor-pointer"
                >
                  <span>Get Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-cyan-300 bg-slate-900/90 border border-cyan-400/40 hover:border-cyan-400 rounded-lg transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call / Text: (346) 235-5984</span>
                </a>
              </div>
            </div>

            {/* Houston Service Area Neighborhood Matrix */}
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Primary Houston Service Areas</span>
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Fast dispatch available across Harris, Fort Bend, and Montgomery counties:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HOUSTON_NEIGHBORHOOD_AREAS.map((area) => (
                  <div 
                    key={area.name} 
                    className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 hover:border-cyan-400/40 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{area.name}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {area.popular}
                    </div>
                    <div className="text-[10px] text-cyan-400/80 font-mono mt-0.5">
                      Zip: {area.zipCodes}
                    </div>
                  </div>
                ))}
              </div>

              {/* Local Guarantee Pill */}
              <div className="mt-4 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Same-Day HOA Estimates</span>
                </span>
                <span className="font-bold text-cyan-300">
                  Houston, TX 77034
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
