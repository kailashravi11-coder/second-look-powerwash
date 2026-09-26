import React, { useState } from "react";
import { KineticText } from "./KineticText";
import { CardContainer, CardBody, CardItem } from "./ThreeDCard";
import { 
  Check, 
  ArrowUpRight, 
  Shield, 
  AlertCircle, 
  ChevronRight, 
  Sparkles,
  Info
} from "lucide-react";
import { SERVICES, ServiceItem } from "../data/content";

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);

  return (
    <section
      id="services"
      className="bg-white text-slate-900 py-20 lg:py-28 border-t border-slate-200"
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase block mb-2">
              Engineered Precision Cleaning
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-heading">
              Core{" "}
              <KineticText 
                text="Exterior Services" 
                className="text-sky-600 font-bold" 
                minWeight={400} 
                maxWeight={900} 
              />
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Every exterior substrate requires tailored chemistry and pressure calibration. We protect your home while restoring maximum curb appeal.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-50 text-sky-800 text-xs font-bold border border-sky-200/90 shadow-xs">
              <Sparkles className="w-4 h-4 text-sky-600 animate-pulse" />
              <span>Hover over cards to unleash 3D CSS perspective · Elements float in air</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>100% Property Safe</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Bento-Inspired Grid with 3D CSS Perspective */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service, index) => {
            // Index 0 (House Softwashing) and Index 5 (HOA Notice Rush) span 2 cols on lg
            const isFeatured = index === 0 || index === 5;
            const isHoaRush = service.id === "hoa-notice-rush";
            const isCommercial = service.id === "commercial-services";

            return (
              <CardContainer
                key={service.id}
                containerClassName={`h-full ${isFeatured ? "lg:col-span-2" : ""}`}
                className="h-full"
              >
                <CardBody
                  className={`h-full group relative bg-slate-50 hover:bg-white rounded-2xl border ${
                    isHoaRush 
                      ? "border-amber-400/80 bg-amber-50/20 hover:border-amber-500 ring-1 ring-amber-400/30" 
                      : "border-slate-200/90 hover:border-sky-400/60"
                  } p-6 sm:p-7 flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl ${
                    isFeatured ? "lg:flex-row lg:gap-8 items-stretch" : ""
                  }`}
                >
                  {/* Service Image Container with 3D Float */}
                  <CardItem
                    translateZ={60}
                    className={`overflow-hidden rounded-xl bg-slate-200 relative mb-5 shrink-0 ${
                      isFeatured ? "lg:mb-0 lg:w-1/2 aspect-[4/3]" : "w-full aspect-[16/10]"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Editorial Index Badge Floating Higher */}
                    <CardItem
                      translateZ={95}
                      className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-white text-xs font-mono font-bold px-2.5 py-1 rounded-md shadow-lg"
                    >
                      0{index + 1}
                    </CardItem>

                    {/* Custom Estimate / Status Badge Floating in 3D Space */}
                    <CardItem
                      translateZ={95}
                      className={`absolute bottom-3 right-3 backdrop-blur-md text-xs font-bold px-2.5 py-1 rounded-md shadow-lg ${
                        isHoaRush 
                          ? "bg-amber-400 text-slate-950 font-black"
                          : isCommercial
                          ? "bg-slate-900 text-cyan-300"
                          : "bg-white/95 text-sky-800"
                      }`}
                    >
                      {isHoaRush ? "⚡ 24-48h Rush Dispatch" : isCommercial ? "🏢 Turnkey Commercial" : "Free Custom Quote"}
                    </CardItem>
                  </CardItem>

                  {/* Content Section with Multi-Depth 3D Perspective */}
                  <div className={`flex flex-col justify-between flex-1 ${isFeatured ? "lg:w-1/2" : ""}`}>
                    <div>
                      <CardItem translateZ={30} className="w-full block">
                        <span className={`text-xs font-semibold tracking-wide uppercase block mb-1 ${
                          isHoaRush ? "text-amber-700 font-bold" : "text-sky-600"
                        }`}>
                          {service.tagline}
                        </span>
                      </CardItem>

                      <CardItem translateZ={45} className="w-full block">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-heading mb-2 group-hover:text-sky-700 transition-colors">
                          {service.title}
                        </h3>
                      </CardItem>

                      <CardItem translateZ={30} className="w-full block">
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </CardItem>

                      {/* Risk Avoided Alert Box Floating */}
                      <CardItem translateZ={40} className="w-full block">
                        <div className={`p-3 rounded-lg border text-xs mb-4 flex items-start gap-2 shadow-xs ${
                          isHoaRush
                            ? "bg-amber-100/70 border-amber-300 text-amber-950 font-medium"
                            : "bg-amber-50/80 border-amber-200/80 text-amber-900"
                        }`}>
                          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>
                            <strong>Protection:</strong> {service.riskAvoided}
                          </span>
                        </div>
                      </CardItem>

                      {/* Feature Checkpoints */}
                      <CardItem translateZ={25} className="w-full block">
                        <ul className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feat, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-2 text-xs text-slate-700">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </CardItem>
                    </div>

                    {/* Actions Button Floating Forward in 3D Space */}
                    <CardItem translateZ={55} className="w-full pt-2 flex items-center gap-3 border-t border-slate-200">
                      <button
                        onClick={() => onSelectService(service.title)}
                        className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer active:scale-95 ${
                          isHoaRush
                            ? "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20"
                            : "bg-slate-900 hover:bg-sky-600 text-white shadow-slate-900/20"
                        }`}
                      >
                        <span>Request Quote</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      
                      <button
                        onClick={() => setActiveModal(service)}
                        className="p-2.5 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-950 transition-colors cursor-pointer"
                        title="View full process details"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                    </CardItem>

                  </div>

                </CardBody>
              </CardContainer>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            >
              ✕
            </button>

            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
              Service Deep-Dive
            </span>
            <h3 className="text-2xl font-black text-slate-900 font-heading mb-3">
              {activeModal.title}
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {activeModal.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-900 block mb-1">Ideal Surface Substrates:</span>
                <p className="text-xs text-slate-600">{activeModal.idealFor}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="text-xs font-bold text-emerald-900 block mb-1">What's Included in William's Service:</span>
                <ul className="space-y-1.5 mt-2">
                  {activeModal.features.map((item, idx) => (
                    <li key={idx} className="text-xs text-emerald-800 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  onSelectService(activeModal.title);
                  setActiveModal(null);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Select {activeModal.title}
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="py-3 px-5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-sm cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
