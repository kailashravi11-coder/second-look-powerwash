import React, { useState, useRef } from "react";
import { KineticText } from "./KineticText";
import { CardContainer, CardBody, CardItem } from "./ThreeDCard";
import { 
  UserCheck, 
  Sparkles, 
  FileText, 
  AlertTriangle, 
  Check, 
  X, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Clock, 
  DollarSign, 
  CalendarCheck,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2
} from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

interface WhyChooseUsProps {
  onOpenEstimate?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEstimate }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      } else {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen().catch(() => {});
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          (videoRef.current as any).webkitRequestFullscreen();
        }
      }
    }
  };

  const handleEstimateClick = () => {
    if (onOpenEstimate) {
      onOpenEstimate();
    } else {
      const el = document.getElementById("get-quote");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section 
      id="why-choose-us" 
      className="bg-slate-50 text-slate-900 py-20 lg:py-28 relative overflow-hidden border-t border-slate-200"
      style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. PAGE HEADER / HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs sm:text-sm font-bold shadow-xs mb-5">
            <span className="flex text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
            </span>
            <span>★ 5.0 Rated</span>
            <span className="text-slate-300">|</span>
            <span>63+ Verified Houston Reviews</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-heading tracking-tight leading-tight mb-5">
            Why Houston Homeowners Trust{" "}
            <KineticText 
              text="Second LOOK" 
              className="text-sky-600 font-bold" 
              minWeight={400} 
              maxWeight={900} 
            />{" "}
            Power Wash
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            In times when every dollar matters, smart maintenance matters even more. Don&apos;t trust your home to the lowest bidder.
          </p>
        </div>

        {/* 2. SPOTLIGHT CINEMA VIDEO: Why Choose Us (why-choose-us.mp4) with 3D CSS Perspective */}
        <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto mb-16 sm:mb-24">
          <CardContainer>
            <CardBody className="bg-slate-950 rounded-2xl sm:rounded-3xl p-2 sm:p-4 md:p-6 border border-slate-800 shadow-2xl overflow-hidden relative group">
              {/* Top Video Header Bar with Status & Controls */}
              <CardItem translateZ={35} className="w-full block">
                <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2.5 mb-2 text-white bg-slate-900/90 rounded-xl border border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                    </span>
                    <span className="text-xs sm:text-base font-bold tracking-wide text-white">
                      Why Choose Second LOOK · Commercial Rig & In-Action Video
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-200 border border-slate-700 transition-all cursor-pointer"
                      title={isMuted ? "Unmute Sound" : "Mute Sound"}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-4 h-4 text-amber-400" />
                          <span>Unmute</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 text-cyan-400" />
                          <span>Mute</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-200 border border-slate-700 transition-all cursor-pointer"
                      title={isPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 text-cyan-400" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 text-cyan-400" />
                          <span>Play</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={toggleFullscreen}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-bold shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                      title="Expand to Full Screen"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Full Screen</span>
                    </button>
                  </div>
                </div>
              </CardItem>

              {/* Video Player Box Floating in 3D Perspective */}
              <CardItem translateZ={60} className="w-full block">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] sm:min-h-[480px] md:min-h-[580px] lg:min-h-[680px] bg-black flex items-center justify-center shadow-2xl border border-slate-800/60">
                  <video
                    ref={videoRef}
                    src="/videos/why-choose-us.mp4"
                    playsInline
                    autoPlay
                    muted={isMuted}
                    loop
                    controls
                    className="w-full h-full object-cover sm:object-contain bg-black"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src="/videos/why-choose-us.mp4" type="video/mp4" />
                    <source src="/why-choose-us.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </CardItem>

              {/* Bottom Proof Bar */}
              <CardItem translateZ={35} className="w-full block">
                <div className="mt-3.5 px-3 py-1 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-300 gap-2">
                  <span className="flex items-center gap-2 text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0" />
                    <span>Commercial rig & owner William personally on-site on every Houston job</span>
                  </span>
                  <span className="text-cyan-400 font-bold italic tracking-wide">
                    “We show up so you can show off!”
                  </span>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        {/* 3. CORE DIFFERENTIATORS GRID (3-Column Layout with 3D CSS Perspective) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          
          {/* Card 1: Owner-Operated Excellence */}
          <CardContainer containerClassName="h-full" className="h-full">
            <CardBody className="h-full bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <CardItem translateZ={65} className="w-fit block">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-md">
                    <UserCheck className="w-7 h-7" />
                  </div>
                </CardItem>

                <CardItem translateZ={30} className="w-full block">
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
                    Personal Craftsmanship
                  </div>
                </CardItem>

                <CardItem translateZ={45} className="w-full block">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-heading mb-3">
                    Owner-Operated Excellence
                  </h3>
                </CardItem>

                <CardItem translateZ={25} className="w-full block">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    William is personally on-site for your project. No inexperienced subcontractors, just top-tier craftsmanship.
                  </p>
                </CardItem>
              </div>

              <CardItem translateZ={35} className="w-full block">
                <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct accountability from the business owner</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Commercial-grade machinery calibrated for your home</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Zero revolving day laborers on your private property</span>
                  </li>
                </ul>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Card 2: Safe Soft Washing Tech */}
          <CardContainer containerClassName="h-full" className="h-full">
            <CardBody className="h-full bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <CardItem translateZ={65} className="w-fit block">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-md">
                    <Sparkles className="w-7 h-7" />
                  </div>
                </CardItem>

                <CardItem translateZ={30} className="w-full block">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-600 mb-2">
                    The Science of Care
                  </div>
                </CardItem>

                <CardItem translateZ={45} className="w-full block">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-heading mb-3">
                    Safe Soft Washing Tech
                  </h3>
                </CardItem>

                <CardItem translateZ={25} className="w-full block">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    We treat the organic growth causing the stains (algae, mildew, mold) rather than blasting your siding with high pressure that causes costly damage.
                  </p>
                </CardItem>
              </div>

              <CardItem translateZ={35} className="w-full block">
                <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Low garden-hose pressure protects siding & paint</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Eliminates bacteria spores at the molecular root</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Complete pre & post landscape hydration for shrubs</span>
                  </li>
                </ul>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Card 3: HOA Notice Solutions */}
          <CardContainer containerClassName="h-full" className="h-full">
            <CardBody className="h-full bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <CardItem translateZ={65} className="w-fit block">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-md">
                    <FileText className="w-7 h-7" />
                  </div>
                </CardItem>

                <CardItem translateZ={30} className="w-full block">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                    Guaranteed Resolution
                  </div>
                </CardItem>

                <CardItem translateZ={45} className="w-full block">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-heading mb-3">
                    HOA Notice Solutions
                  </h3>
                </CardItem>

                <CardItem translateZ={25} className="w-full block">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    Got a nasty letter about dirty siding, stained brick, or algae? We get your property HOA-ready with verified results and before/after records.
                  </p>
                </CardItem>
              </div>

              <CardItem translateZ={35} className="w-full block">
                <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Rapid turnaround before violation deadlines hit</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Time-stamped before & after photo package</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>100% board clearance rate across Houston HOAs</span>
                  </li>
                </ul>
              </CardItem>
            </CardBody>
          </CardContainer>

        </div>

        {/* 3. THE HIDDEN COST OF "LOW BIDS" (Attention Section with High-Contrast Alert Card) */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden mb-20 border border-slate-800">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            
            {/* Attention Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Consumer Protection Warning</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight mb-4">
              ⚠️ Don&apos;t Risk Costly Damage from Low Bids and Inexperience
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10">
              Experience, proper equipment, and the right cleaning process make all the difference. Investing once means it&apos;s done right the first time, keeping your property looking its best without stretching your finances.
            </p>

            {/* Direct Side-by-Side Comparison Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Left Column: Low-Bidder Risks */}
              <div className="bg-slate-950/60 rounded-2xl p-6 border border-rose-500/30">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider mb-4">
                  <X className="w-5 h-5 text-rose-500" />
                  <span>The Low-Bidder Reality</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>High-pressure wand etching concrete & permanent swirl marks</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>Blown out mortar joints and water forced behind vinyl siding</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>Burned landscape shrubs due to careless chemical runoff</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>No commercial insurance when accidental property damage strikes</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: The Second LOOK Standard */}
              <div className="bg-sky-950/30 rounded-2xl p-6 border border-sky-400/40">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider mb-4">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>The Second LOOK Guarantee</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Commercial rotary surface cleaners for uniform, streak-free flatwork</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Gentle chemical softwashing eliminates algae spores at the root</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Dedicated plant-protection protocols safeguard grass and flowers</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>$1,000,000 active liability coverage with William on-site every minute</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* 4. CUSTOM SERVICE PLANS & VALUE */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                <span>Value Focused Service</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading">
                Tailored Specifically for Your Home & Your Budget
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                We meet with you in person, assess your needs, and build a custom service plan that works for your property and your budget.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Whether you need a quick curb appeal boost for your front entryway, complete multi-story siding sanitization, or an urgent HOA turnaround, William provides transparent options without pushy upsells.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">In-Person Property Walkthrough</h4>
                  <p className="text-xs text-slate-600 mt-0.5">William examines your specific surface materials and identifies organic growth.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Custom Multi-Surface Options</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Pick exactly what you want cleaned with bundle savings for driveways + siding.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Done Right The First Time</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Long-lasting results that prevent premature siding repaint and concrete wear.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5. FOOTER CALL TO ACTION (Conversion Box - Exactly matching Consumer Protection Warning dark navy styling) */}
        <div 
          className="bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-14 text-white text-center shadow-2xl border border-slate-800 relative overflow-hidden"
          style={{ backgroundColor: "#0f172a" }}
        >
          {/* Subtle Ambient Glow matching Consumer Protection card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            {/* Tagline */}
            <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase block">
              SECOND LOOK Powerwash LLC · Houston, TX
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-tight">
              &ldquo;We show up so you can show off!&rdquo;
            </h3>

            {/* Secondary Note */}
            <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto leading-relaxed">
              Schedule your on-site visit and get a customized free estimate.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              {/* Primary Call / Text Button */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-base shadow-xl shadow-sky-500/30 transition-all hover:scale-102 active:scale-98"
              >
                <Phone className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>Call / Text Today: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              {/* Secondary Estimate Request Button: High-Contrast Amber/Gold */}
              <button
                type="button"
                onClick={handleEstimateClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#e5a93c] hover:bg-[#d97706] text-slate-950 font-black text-sm shadow-xl transition-all cursor-pointer hover:scale-102"
              >
                <span>Get Customized Free Estimate</span>
                <ArrowRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              </button>

            </div>

            {/* Micro Trust Proof */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>William (Willy) Owner-Operated</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>$1M Liability Insured</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero Obligation On-Site Quote</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
