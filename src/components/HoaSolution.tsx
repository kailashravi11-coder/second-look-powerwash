import React, { useState } from "react";
import { KineticText } from "./KineticText";
import { CardContainer, CardBody, CardItem } from "./ThreeDCard";
import { 
  FileCheck2, 
  ShieldAlert, 
  Sparkles, 
  Clock, 
  DollarSign, 
  Camera, 
  SlidersHorizontal,
  ChevronRight,
  Droplets,
  AlertTriangle
} from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

interface HoaSolutionProps {
  onOpenEstimate: () => void;
}

export const HoaSolution: React.FC<HoaSolutionProps> = ({ onOpenEstimate }) => {
  // Interactive Before & After comparison slider position (percentage 0 - 100)
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"siding" | "driveway">("siding");

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, rect);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const comparisonData = {
    siding: {
      beforeLabel: "HOA Violation: Gloeocapsa Magma Algae & Black Streaks",
      afterLabel: "Treated & Eradicated: Safe Softwash Finish",
      imageBefore: "/images/before.jpeg",
      imageAfter: "/images/after.jpeg",
      substrate: "North-Facing Vinyl & HardiePlank",
      timeToTreat: "1.5 Hours",
      status: "HOA Compliance Passed"
    },
    driveway: {
      beforeLabel: "HOA Notice: Black Organic Grime & Motor Oil Shadows",
      afterLabel: "Restored Bright Concrete: Uniform Rotary Restoration",
      imageBefore: "/images/before.jpeg",
      imageAfter: "/images/after.jpeg",
      substrate: "Houston Concrete Flatwork",
      timeToTreat: "2 Hours",
      status: "HOA Compliance Passed"
    }
  };

  const current = comparisonData[activeTab];

  return (
    <section
      id="hoa-solution"
      className="relative bg-slate-50 text-slate-900 py-20 lg:py-28 overflow-hidden border-t border-slate-200"
      style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-semibold tracking-wide uppercase mb-4">
            <Droplets className="w-3.5 h-3.5 text-sky-600" />
            <span>The Science of Proper Exterior Care</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-heading text-balance leading-tight">
            Don&apos;t just clean the surface—{" "}
            <KineticText 
              text="treat the organic growth" 
              className="text-sky-600 font-bold" 
              minWeight={400} 
              maxWeight={900} 
            />{" "}
            causing the staining.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            In Houston’s brutal heat and humidity, surface blasting with raw high pressure only blows off top layers while driving spores deeper into porous brick and siding. Within weeks, the black mold returns—and costly siding damage occurs.
          </p>
        </div>

        {/* 3 Core Value Columns: Smart Maintenance, Inexperience Danger, Invest Once (with 3D CSS perspective) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          <CardContainer containerClassName="h-full" className="h-full">
            <CardBody className="h-full bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <CardItem translateZ={60} className="w-fit block">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-5 shadow-sm">
                    <DollarSign className="w-6 h-6" />
                  </div>
                </CardItem>
                <CardItem translateZ={45} className="w-full block">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Smart Maintenance in Budget Times</h3>
                </CardItem>
                <CardItem translateZ={25} className="w-full block">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Replacing siding, repainting brick, or replacing an etched driveway costs tens of thousands. Periodic professional softwash treatments extend exterior paint lifespan by up to 7 years.
                  </p>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer containerClassName="h-full" className="h-full">
            <CardBody className="h-full bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <CardItem translateZ={60} className="w-fit block">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 mb-5 shadow-sm">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                </CardItem>
                <CardItem translateZ={45} className="w-full block">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Avoid Low-Bid Inexperience Damage</h3>
                </CardItem>
                <CardItem translateZ={25} className="w-full block">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Unlicensed fly-by-night operators use dangerous 4000 PSI wands that blow out mortar, blast water into wall cavities, strip window seals, and kill beloved landscaping.
                  </p>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer containerClassName="h-full" className="h-full">
            <CardBody className="h-full bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <CardItem translateZ={60} className="w-fit block">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5 shadow-sm">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                </CardItem>
                <CardItem translateZ={45} className="w-full block">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Invest Once, Done Right</h3>
                </CardItem>
                <CardItem translateZ={25} className="w-full block">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    William (Willy) uses commercial-grade metering equipment that applies the exact chemical ratios required to eliminate algae spores, so your curb appeal stays pristine for 12–18 months.
                  </p>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>

        {/* Special Highlight: Before & After Photos for HOA Records with 3D CSS Perspective */}
        <CardContainer containerClassName="mb-16">
          <CardBody className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
            {/* Subtle glow background */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Context & HOA Relief */}
              <div className="lg:col-span-5 space-y-6">
                <CardItem translateZ={30} className="w-fit block">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                    <Camera className="w-4 h-4 text-cyan-400" />
                    <span>Special HOA Documentation Service</span>
                  </div>
                </CardItem>

                <CardItem translateZ={45} className="w-full block">
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight leading-snug">
                    &ldquo;Before & After Photos Available for Your HOA Records.&rdquo;
                  </h3>
                </CardItem>

                <CardItem translateZ={25} className="w-full block">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Houston HOA committees demand fast proof of resolution. When William completes your property, we furnish high-resolution, time-stamped Before & After photos you can immediately upload to your community management portal.
                  </p>
                </CardItem>

                <CardItem translateZ={35} className="w-full block">
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        1
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">Fast-Track HOA Booking:</strong> Mention your notice deadline for expedited same-week scheduling.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        2
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">100% Inspection Pass Guarantee:</strong> We ensure all flagged mold, algae, and driveway oil shadows are resolved.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        3
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">Direct Photo Dossier:</strong> Sent to your smartphone before Willy leaves your driveway.
                      </p>
                    </div>
                  </div>
                </CardItem>

                <CardItem translateZ={50} className="w-fit block">
                  <div className="pt-4">
                    <button
                      onClick={onOpenEstimate}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-lg hover:shadow-cyan-400/30 transition-all cursor-pointer active:scale-95"
                    >
                      <FileCheck2 className="w-4 h-4" />
                      <span>Clear Your HOA Notice Today</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardItem>
              </div>

              {/* Right Column: Interactive Before / After Slider Floating in 3D */}
              <div className="lg:col-span-7 flex flex-col items-center">
                
                {/* Segmented control tabs */}
                <CardItem translateZ={30} className="w-full flex justify-center">
                  <div className="flex items-center gap-2 p-1 bg-slate-800/80 rounded-xl border border-white/10 mb-4 w-full max-w-xs justify-center">
                    <button
                      onClick={() => setActiveTab("siding")}
                      className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        activeTab === "siding"
                          ? "bg-cyan-400 text-slate-950 shadow-sm"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      Exterior Siding
                    </button>
                    <button
                      onClick={() => setActiveTab("driveway")}
                      className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        activeTab === "driveway"
                          ? "bg-cyan-400 text-slate-950 shadow-sm"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      Concrete Flatwork
                    </button>
                  </div>
                </CardItem>

                {/* Slider interactive viewport with 3D elevation */}
                <CardItem translateZ={60} className="w-full block">
                  <div
                    className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-white/20 touch-none group"
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                  >
                    {/* AFTER image (Full background) */}
                    <img
                      src={current.imageAfter}
                      alt={current.afterLabel}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                    />

                    {/* Status Badges on After Side */}
                    <div className="absolute top-4 right-4 z-20 bg-emerald-500/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>AFTER (CLEANED)</span>
                    </div>

                    {/* BEFORE image (Clipped with percentage width) */}
                    <div
                      className="absolute inset-0 overflow-hidden select-none pointer-events-none"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <img
                        src={current.imageBefore}
                        alt={current.beforeLabel}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover max-w-none filter brightness-[0.85] contrast-[1.1] grayscale-[30%] select-none pointer-events-none"
                        style={{ width: "100%", height: "100%" }}
                      />
                      {/* Organic algae simulation overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-amber-950/30 to-black/40 pointer-events-none mix-blend-multiply" />
                      
                      {/* Status Badges on Before Side */}
                      <div className="absolute top-4 left-4 z-20 bg-rose-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span>BEFORE (HOA VIOLATION)</span>
                      </div>
                    </div>

                    {/* Vertical Divider Handle Line */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-cyan-400 cursor-ew-resize z-30 shadow-[0_0_15px_rgba(56,189,248,0.8)]"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl border-2 border-cyan-400 flex items-center justify-center transition-transform group-hover:scale-110">
                        <SlidersHorizontal className="w-4 h-4 text-cyan-600" />
                      </div>
                    </div>

                    {/* Helper hint */}
                    <div className="absolute bottom-3 inset-x-0 flex justify-center z-20 pointer-events-none">
                      <span className="bg-slate-950/80 backdrop-blur-sm text-slate-300 text-[11px] px-3 py-1 rounded-full border border-white/10">
                        ◀ Drag slider horizontally to compare ▶
                      </span>
                    </div>
                  </div>
                </CardItem>

                {/* Substrate detail bar */}
                <CardItem translateZ={25} className="w-full block">
                  <div className="mt-3 w-full flex items-center justify-between text-xs text-slate-400 px-2">
                    <span>Surface: <strong className="text-slate-200">{current.substrate}</strong></span>
                    <span>Avg Treatment: <strong className="text-slate-200">{current.timeToTreat}</strong></span>
                  </div>
                </CardItem>

              </div>

            </div>
          </CardBody>
        </CardContainer>

      </div>
    </section>
  );
};
