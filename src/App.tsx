import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HoaSolution } from "./components/HoaSolution";
import { ServicesGrid } from "./components/ServicesGrid";
import { InteractiveShowcase } from "./components/InteractiveShowcase";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { LocalSeoFaqHub } from "./components/LocalSeoFaqHub";
import { LeadCaptureForm } from "./components/LeadCaptureForm";
import { Footer } from "./components/Footer";
import { StickyMobileBar } from "./components/StickyMobileBar";

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("House Wash (Softwash)");

  const scrollToLeadForm = () => {
    const el = document.getElementById("get-quote");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToLeadForm();
  };

  return (
    <div className="min-h-screen bg-[#050b14] text-slate-900 flex flex-col antialiased selection:bg-cyan-400 selection:text-slate-950 pb-12 md:pb-0">
      {/* 3-Zone Clean Header */}
      <Navbar onOpenEstimate={scrollToLeadForm} />

      {/* 1. Cinematic Dark Hero Section */}
      <main>
        <Hero onOpenEstimate={scrollToLeadForm} />

        {/* 2. Value Proposition & HOA Organic Growth Solution (Clean Light Mode) */}
        <HoaSolution onOpenEstimate={scrollToLeadForm} />

        {/* 3. Core Services Grid (Modern Card Layout) */}
        <ServicesGrid onSelectService={handleSelectService} />

        {/* 4. Jaw-Dropping Interactive CRO Showcase (Before/After Slider, Loom Audit, HOA Solver Widget, Infinite Google Marquee) */}
        <InteractiveShowcase
          onSelectService={handleSelectService}
          onOpenEstimate={scrollToLeadForm}
        />

        {/* 5. Why Choose Us & Social Proof (Owner William & 5.0 Reviews) */}
        <WhyChooseUs onOpenEstimate={scrollToLeadForm} />

        {/* 6. World-Class Local Houston SEO, AEO & GEO FAQ Hub */}
        <LocalSeoFaqHub onOpenEstimate={scrollToLeadForm} />

        {/* 7. High-Conversion Lead Capture Form & Final Authority Note */}
        <LeadCaptureForm
          initialService={selectedService}
        />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Sticky Mobile CTA Bar (<15% viewport height) */}
      <StickyMobileBar onOpenEstimate={scrollToLeadForm} />
    </div>
  );
}
