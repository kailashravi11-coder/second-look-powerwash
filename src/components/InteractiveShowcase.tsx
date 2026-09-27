import React, { useState, useRef, useEffect } from "react";
import { KineticText } from "./KineticText";
import { CardContainer, CardBody, CardItem } from "./ThreeDCard";
import { 
  Sparkles, 
  Play, 
  Pause, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Volume2, 
  Check, 
  Video, 
  Sparkle
} from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

interface InteractiveShowcaseProps {
  onSelectService?: (serviceName: string) => void;
  onOpenEstimate?: () => void;
}

export const InteractiveShowcase: React.FC<InteractiveShowcaseProps> = ({
  onSelectService,
  onOpenEstimate
}) => {
  // 1. BEFORE/AFTER VIDEO STATE
  const beforeAfterVideoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying1, setIsVideoPlaying1] = useState<boolean>(true);
  const [isVideoMuted1, setIsVideoMuted1] = useState<boolean>(true);

  const toggleVideo1Play = () => {
    if (!beforeAfterVideoRef.current) return;
    if (beforeAfterVideoRef.current.paused) {
      beforeAfterVideoRef.current.play();
      setIsVideoPlaying1(true);
    } else {
      beforeAfterVideoRef.current.pause();
      setIsVideoPlaying1(false);
    }
  };

  const toggleVideo1Mute = () => {
    if (!beforeAfterVideoRef.current) return;
    beforeAfterVideoRef.current.muted = !beforeAfterVideoRef.current.muted;
    setIsVideoMuted1(beforeAfterVideoRef.current.muted);
  };

  // 2. LOOM AUDIT VIDEO PLAYER STATE
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(24);
  const [currentAuditStep, setCurrentAuditStep] = useState<number>(1);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVideoPlaying) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          const next = prev >= 100 ? 0 : prev + 1;
          if (next > 70) setCurrentAuditStep(3);
          else if (next > 35) setCurrentAuditStep(2);
          else setCurrentAuditStep(1);
          return next;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isVideoPlaying]);

  // 3. HOA NOTICE PROBLEM SOLVER STATE
  const [selectedProblemId, setSelectedProblemId] = useState<string>("algae-siding");

  const problemSolutions = [
    {
      id: "algae-siding",
      label: "Green Algae on Siding",
      icon: "🌿",
      painPoint: "Unsightly green film and black mildew eating into vinyl/HardiePlank siding and attracting HOA violation warnings.",
      solutionHeadline: "Safe Soft Washing Tech",
      solutionBody: "Safe, low-pressure treatment that eliminates organic growth at the root without damaging your exterior.",
      turnaround: "Same-Day / Next-Day Available",
      recommendedService: "House Wash (Softwash)",
      riskAvoided: "Prevents pressure-wand paint stripping & water forced behind siding panels",
      steps: [
        "Pre-hydrating perimeter flowers, mulch & sod",
        "Low-pressure application of proprietary algaecide formula",
        "15-minute bio-dwell to kill spores at cellular level",
        "Gentle garden-hose pressure rinse leaving spotless siding"
      ]
    },
    {
      id: "stained-brick",
      label: "Stained Brick / Rust",
      icon: "🧱",
      painPoint: "Red Texas clay, sprinkler rust stains, and black atmospheric dirt embedded in porous masonry and mortar joints.",
      solutionHeadline: "Low-Pressure Masonry Restoration",
      solutionBody: "Targeted surfactant solution breaks the bond between iron oxides and porous brick without eroding delicate mortar lines.",
      turnaround: "48-Hour Restoration",
      recommendedService: "Brick & Stone",
      riskAvoided: "Prevents blown mortar and chipped antique brick faces",
      steps: [
        "Mortar integrity inspection before cleaning",
        "Deep penetrating surfactant mist to lift iron & dirt",
        "Rotary low-impact brush agitation where needed",
        "Neutral pH conditioning rinse protecting brick color"
      ]
    },
    {
      id: "hoa-warning",
      label: "HOA Warning Letter Received",
      icon: "⚠️",
      painPoint: "Strict 14-day or 30-day compliance letter threatening daily fines or forced contractor liens for exterior mold or dirty flatwork.",
      solutionHeadline: "Guaranteed Board-Ready Resolution",
      solutionBody: "Rapid turnaround priority scheduling with high-resolution, time-stamped before & after photo portfolio ready for direct HOA portal upload.",
      turnaround: "Priority 24-48h Rush Dispatch",
      recommendedService: "HOA Notice Rush",
      riskAvoided: "Eliminates compounding daily HOA fines ($50-$100/day)",
      steps: [
        "Priority queue placement with William",
        "Full exterior perimeter compliance inspection",
        "Multi-surface cleaning (siding, brick & driveway)",
        "Time-stamped photo package and formal clearance invoice"
      ]
    },
    {
      id: "driveway-oil",
      label: "Black Stained Driveway & Oil",
      icon: "🚗",
      painPoint: "Years of dark tire tracks, engine oil drips, and slippery black organic biofilm making the front entrance look dirty and hazardous.",
      solutionHeadline: "Commercial Rotary Flatwork Degreasing",
      solutionBody: "Commercial 20-inch rotary surface cleaner provides uniform streak-free concrete cleaning with hot-water oil spot degreasing.",
      turnaround: "Fast 2-3 Hour Execution",
      recommendedService: "Driveway",
      riskAvoided: "Zero wand striping 'zebra lines' or scarred top-layer cream",
      steps: [
        "Heavy-duty hot bio-degreaser applied to engine oil spots",
        "Dual-nozzle rotary surface cleaner pass for uniform finish",
        "High-volume flood rinse pushing sediment to street drain",
        "Post-treatment algaecide mist for 12+ month bright concrete"
      ]
    }
  ];

  const activeProblem = problemSolutions.find((p) => p.id === selectedProblemId) || problemSolutions[0];

  const handleSolveClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else if (onOpenEstimate) {
      onOpenEstimate();
    } else {
      const formEl = document.getElementById("get-quote");
      if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 4. INFINITE 5-STAR MARQUEE REVIEWS
  const MARQUEE_REVIEWS = [
    {
      author: "David M.",
      location: "The Heights, Houston",
      text: "HOA violation letter cleared 24 hours later. William showed up right on time, explained the softwash process, and the siding looks brand new!",
      stars: 5,
      tag: "HOA Siding Cleared"
    },
    {
      author: "Sarah L.",
      location: "Memorial / Spring Branch",
      text: "Willy is top tier. He treated our delicate antique brick and pool deck with utmost care. The difference is night and day. 5 stars!",
      stars: 5,
      tag: "Brick & Pool Deck"
    },
    {
      author: "Marcus T.",
      location: "Katy, TX",
      text: "No subcontractors! William is personally on-site the entire time. Concrete driveway looks like it was poured yesterday. Highly recommend.",
      stars: 5,
      tag: "Driveway Flatwork"
    },
    {
      author: "Elena R.",
      location: "The Woodlands",
      text: "Best pressure washing company in Houston. William sent a video walkthrough before starting and protected all our landscaping. Incredible value.",
      stars: 5,
      tag: "Plant Protection"
    },
    {
      author: "Jason K.",
      location: "Sugar Land, TX",
      text: "Got a 14-day notice from our board. Willy came out the next morning, took before/after photos, and the board accepted immediately. True lifesaver.",
      stars: 5,
      tag: "Rush HOA Clearance"
    },
    {
      author: "Amanda B.",
      location: "Cypress, TX",
      text: "Fair price, high-end equipment, and spotless results. Siding is bright white again and smells fresh. 100% will use Second LOOK every spring!",
      stars: 5,
      tag: "Annual Maintenance"
    }
  ];

  return (
    <section 
      id="cro-showcase" 
      className="bg-[#050b14] text-white py-20 lg:py-28 relative overflow-hidden border-t border-white/10"
      style={{ backgroundColor: "#050b14" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Visual Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading">
            See the{" "}
            <KineticText 
              text="Second LOOK" 
              className="text-cyan-400 font-bold" 
              minWeight={400} 
              maxWeight={900} 
            />{" "}
            Transformation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Watch real Houston restorations in action, inspect our video audit workflow, and diagnose your HOA notice in seconds.
          </p>
        </div>

        {/* 1. REAL BEFORE / AFTER RESTORATION VIDEO WITH 3D CSS PERSPECTIVE */}
        <CardContainer containerClassName="mb-24">
          <CardBody className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative backdrop-blur-sm" style={{ backgroundColor: "#0f172a" }}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
              <div>
                <CardItem translateZ={30} className="w-full block">
                  <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block mb-1">
                    Feature #1 · Real Restoration in Action
                  </span>
                </CardItem>
                <CardItem translateZ={45} className="w-full block">
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                    Real Before & After Restoration Video
                  </h3>
                </CardItem>
                <CardItem translateZ={25} className="w-full block">
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Watch William&apos;s real Houston exterior transformation — see the dramatic difference from stained, algae-covered surfaces to clean curb appeal.
                  </p>
                </CardItem>
              </div>

              <CardItem translateZ={40} className="flex items-center gap-2.5 self-start md:self-auto">
                <button
                  type="button"
                  onClick={toggleVideo1Play}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-white/10 hover:border-cyan-400/50 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  {isVideoPlaying1 ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Pause Video</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Play Video</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={toggleVideo1Mute}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-white/10 hover:border-cyan-400/50 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isVideoMuted1 ? "text-slate-400" : "text-cyan-400"}`} />
                  <span>{isVideoMuted1 ? "Unmute" : "Muted"}</span>
                </button>
              </CardItem>
            </div>

            {/* Video Player Frame Floating in 3D Perspective */}
            <CardItem translateZ={60} className="w-full block">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border-2 border-white/15 shadow-2xl group">
                <video
                  ref={beforeAfterVideoRef}
                  src="/videos/before-after-video.mp4"
                  autoPlay
                  loop
                  muted={isVideoMuted1}
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                  onPlay={() => setIsVideoPlaying1(true)}
                  onPause={() => setIsVideoPlaying1(false)}
                >
                  <source src="/videos/before-after-video.mp4" type="video/mp4" />
                  <source src="/before-after-video.mp4" type="video/mp4" />
                </video>

                {/* Top Overlay Badges */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/90 border border-cyan-400/50 text-cyan-300 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    Live Jobsite Footage · Houston, TX
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/90 border border-emerald-400/60 text-emerald-300 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md">
                    <Sparkle className="w-3.5 h-3.5 text-emerald-400" />
                    100% Unedited Results
                  </span>
                </div>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* 2 & 3: TWO-COLUMN AUTHORITY GRID (LOOM AUDIT + HOA SOLVER WIDGET) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-stretch">
          
          {/* 2. PERSONALIZED LOOM VIDEO AUDIT SECTION (7 Cols) */}
          <CardContainer containerClassName="lg:col-span-7 h-full" className="h-full">
            <CardBody className="h-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: "#0f172a" }}>
              
              <div className="relative z-10">
                <CardItem translateZ={30} className="w-full block">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
                      <Video className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Feature #2 · Personal Video Walkthrough</span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">HD 1080p</span>
                  </div>
                </CardItem>

                <CardItem translateZ={45} className="w-full block">
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mb-2">
                    Custom 60-Second Property Audit by William
                  </h3>
                </CardItem>

                <CardItem translateZ={25} className="w-full block">
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    Watch how we analyze your specific HOA requirements, roof condition, and exterior drainage live on video.
                  </p>
                </CardItem>

                {/* Simulated Loom Player Frame Floating Forward */}
                <CardItem translateZ={60} className="w-full block">
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-700 shadow-2xl aspect-[16/9] group">
                    
                    {/* Background Poster: Video of William Inspecting Exterior */}
                    <img 
                      src="/images/hero_pressure_washing_action.jpg"
                      alt="William inspecting Houston property exterior"
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-all duration-700 ${isVideoPlaying ? "brightness-90 scale-102" : "brightness-75"}`}
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/60 pointer-events-none" />

                    {/* Top Video Header: Address & Timestamp */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-white z-10 pointer-events-none">
                      <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                        <span className="font-semibold text-slate-200">Houston Property Audit #742</span>
                      </div>

                      <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-lg font-mono text-slate-300">
                        {isVideoPlaying ? "0:42 / 1:04" : "1:04"}
                      </div>
                    </div>

                    {/* Center Play Button Overlay */}
                    <button
                      type="button"
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer z-20 group"
                      aria-label={isVideoPlaying ? "Pause Video Audit" : "Play Video Audit"}
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-8 h-8 fill-slate-950 text-slate-950" />
                      ) : (
                        <Play className="w-8 h-8 fill-slate-950 text-slate-950 ml-1" />
                      )}
                    </button>

                    {/* Simulated William Loom Webcam Bubble (Bottom-Left) */}
                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-3 bg-slate-950/90 backdrop-blur-md border border-cyan-400/40 p-1.5 pr-3 rounded-full shadow-lg">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-sky-400 flex items-center justify-center text-slate-950 font-black text-xs ring-2 ring-cyan-300">
                        WW
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] font-bold text-white flex items-center gap-1">
                          <span>William (Willy)</span>
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        </div>
                        <div className="text-[9px] text-cyan-300">
                          {isVideoPlaying ? "Analyzing Exterior Live..." : "Owner / Lead Inspector"}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar & Audio Waves */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800">
                      <div 
                        className="h-full bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_#22d3ee]"
                        style={{ width: `${videoProgress}%` }}
                      />
                    </div>
                  </div>
                </CardItem>

                {/* Dynamic Step Indicator */}
                <CardItem translateZ={30} className="w-full block">
                  <div className="mt-4 p-3.5 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-slate-300">
                        {currentAuditStep === 1 && "Step 1: Identifying North-Facing Siding Mildew Index"}
                        {currentAuditStep === 2 && "Step 2: Checking Driveway & Sidewalk HOA Staining"}
                        {currentAuditStep === 3 && "Step 3: Calculating Safe Low-Pressure Softwash Formula"}
                      </span>
                    </div>
                    <span className="text-cyan-400 font-bold text-[11px]">Active Inspection</span>
                  </div>
                </CardItem>
              </div>

              {/* Quick Action */}
              <CardItem translateZ={50} className="w-full block">
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    Want William to record a quick video audit of your address?
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSolveClick("House Wash (Softwash)")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#e5a93c] hover:bg-[#d97706] text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer active:scale-95"
                  >
                    <span>Request Free Video Audit</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </button>
                </div>
              </CardItem>

            </CardBody>
          </CardContainer>

          {/* 3. HOA NOTICE PROBLEM SOLVER WIDGET (5 Cols) */}
          <CardContainer containerClassName="lg:col-span-5 h-full" className="h-full">
            <CardBody className="h-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between relative" style={{ backgroundColor: "#0f172a" }}>
              
              <div>
                <CardItem translateZ={30} className="w-full block">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold mb-4">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Feature #3 · Instant Problem Solver</span>
                  </div>
                </CardItem>

                <CardItem translateZ={45} className="w-full block">
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mb-2">
                    HOA Notice Problem Solver
                  </h3>
                </CardItem>

                <CardItem translateZ={25} className="w-full block">
                  <p className="text-xs sm:text-sm text-slate-300 mb-6">
                    Click your property&apos;s specific pain point below to instantly preview William&apos;s exact softwash solution:
                  </p>
                </CardItem>

                {/* Problem Selection Chips */}
                <CardItem translateZ={35} className="w-full block">
                  <div className="grid grid-cols-2 gap-2.5 mb-6">
                    {problemSolutions.map((item) => {
                      const isActive = item.id === selectedProblemId;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedProblemId(item.id)}
                          className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                            isActive
                              ? "bg-cyan-950/80 border-cyan-400 shadow-md ring-1 ring-cyan-400/50"
                              : "bg-slate-950/60 border-white/10 hover:border-slate-600 text-slate-300"
                          }`}
                        >
                          <span className="text-xl mb-1">{item.icon}</span>
                          <span className={`text-xs font-bold leading-snug ${isActive ? "text-cyan-300" : "text-white"}`}>
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </CardItem>

                {/* Dynamic Solution Reveal Card */}
                <CardItem translateZ={50} className="w-full block">
                  <div className="bg-slate-950 rounded-2xl p-5 border border-cyan-400/30 shadow-lg space-y-3.5 animate-in fade-in duration-300">
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                        Custom Softwash Solution:
                      </span>
                      <span className="text-[11px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-500/30">
                        {activeProblem.turnaround}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-white font-heading leading-tight">
                      {activeProblem.solutionHeadline}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      &ldquo;{activeProblem.solutionBody}&rdquo;
                    </p>

                    {/* Steps Checklist */}
                    <div className="pt-2 border-t border-slate-800/80 space-y-2">
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">
                        William&apos;s Execution Protocol:
                      </span>
                      {activeProblem.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>

                    {/* Protection Note */}
                    <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-[11px] text-cyan-200 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span><strong>Safety Guarantee:</strong> {activeProblem.riskAvoided}</span>
                    </div>

                  </div>
                </CardItem>
              </div>

              {/* Direct 1-Click Solve CTA */}
              <CardItem translateZ={55} className="w-full block">
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => handleSolveClick(activeProblem.recommendedService)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm shadow-xl shadow-cyan-400/20 transition-all cursor-pointer active:scale-98"
                  >
                    <span>Solve This for My Home</span>
                    <ArrowRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                  </button>
                </div>
              </CardItem>

            </CardBody>
          </CardContainer>

        </div>

        {/* 4. INFINITE 5-STAR GOOGLE REVIEWS TICKER (MARQUEE) */}
        <div className="relative pt-6">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block mb-1">
              Feature #4 · Real Houston Homeowner Endorsements
            </span>
            <div className="inline-flex items-center gap-2 text-lg sm:text-xl font-black text-white font-heading">
              <span>Google 5.0 Star Verified Reviews</span>
              <div className="flex text-amber-400 text-sm">
                {"★★★★★"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Live feedback from your neighbors across Houston, Katy, The Woodlands & Memorial.
            </p>
          </div>

          {/* Marquee Wrapper with Smooth Edge Fade */}
          <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            
            {/* Horizontal Scrolling Track */}
            <div className="animate-marquee gap-6">
              
              {/* Duplicate array for seamless infinite marquee loop */}
              {[...MARQUEE_REVIEWS, ...MARQUEE_REVIEWS].map((rev, rIdx) => (
                <div
                  key={rIdx}
                  className="w-[320px] sm:w-[380px] shrink-0 bg-slate-900/90 rounded-2xl p-5 border border-white/10 shadow-lg hover:border-cyan-400/50 transition-all flex flex-col justify-between"
                  style={{ backgroundColor: "#0f172a" }}
                >
                  <div>
                    {/* Top Row: Google Stars & Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-amber-400 text-xs">
                        {"★★★★★"}
                      </div>
                      <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-md">
                        {rev.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-4">
                      &ldquo;{rev.text}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-white block">{rev.author}</span>
                      <span className="text-[11px] text-slate-400">{rev.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Client</span>
                    </div>
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Slogan Banner under Marquee */}
          <div className="mt-8 text-center">
            <span className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
              Houston&apos;s Owner-Operated Standard:{" "}
              <strong className="text-cyan-400 font-black">&ldquo;{BUSINESS_INFO.slogan}&rdquo;</strong>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
