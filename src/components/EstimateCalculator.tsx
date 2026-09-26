import React, { useState } from "react";
import { Calculator, Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface EstimateCalculatorProps {
  onApplyEstimate: (data: {
    homeSize: string;
    services: string[];
    estimatedRange: string;
  }) => void;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({ onApplyEstimate }) => {
  const [homeSize, setHomeSize] = useState<"small" | "medium" | "large">("medium");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "House Softwash",
    "Driveway Cleaning"
  ]);
  const [isHoaUrgent, setIsHoaUrgent] = useState(false);

  const homeSizes = [
    { id: "small", label: "Single-Story", subtext: "Up to 2,000 sq ft", base: 249 },
    { id: "medium", label: "2-Story Standard", subtext: "2,000 – 3,200 sq ft", base: 349 },
    { id: "large", label: "Estate / Custom", subtext: "3,200+ sq ft", base: 479 }
  ];

  const addonsList = [
    { id: "House Softwash", label: "Full House Softwash", price: 0, includedInBase: true },
    { id: "Driveway Cleaning", label: "2–4 Car Driveway & Walkway", price: 140 },
    { id: "Patio & Pool Deck", label: "Backyard Patio / Travertine", price: 160 },
    { id: "Brick & Stone Restoration", label: "Heavy Algae Brick Treatment", price: 120 },
    { id: "Fence Softwash", label: "Wood or Vinyl Perimeter Fence", price: 130 }
  ];

  const toggleAddon = (id: string) => {
    if (id === "House Softwash") return; // Primary service
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const currentSizeObj = homeSizes.find((h) => h.id === homeSize)!;
  let totalMin = currentSizeObj.base;
  let totalMax = currentSizeObj.base + 50;

  selectedAddons.forEach((item) => {
    const addon = addonsList.find((a) => a.id === item);
    if (addon && !addon.includedInBase) {
      totalMin += addon.price;
      totalMax += addon.price + 40;
    }
  });

  // 10% multi-service discount if 2+ addons
  const hasBundleDiscount = selectedAddons.length >= 3;
  if (hasBundleDiscount) {
    totalMin = Math.round(totalMin * 0.9);
    totalMax = Math.round(totalMax * 0.9);
  }

  const rangeString = `$${totalMin} – $${totalMax}`;

  const handleApply = () => {
    onApplyEstimate({
      homeSize: currentSizeObj.label,
      services: selectedAddons,
      estimatedRange: rangeString
    });

    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="calculator"
      className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200"
      style={{ backgroundColor: "#f1f5f9", color: "#0f172a" }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200">
        
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
            Transparent Pricing Guidance
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading mb-2">
          Interactive Houston Exterior Price Estimator
        </h3>
        
        <p className="text-sm text-slate-600 mb-8">
          No hidden fees or bait-and-switch surprises. Select your property specs below for an instant approximate price range. William verifies exact square footage on arrival.
        </p>

        {/* Step 1: Home Size */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            1. Select Home Size & Story Count:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {homeSizes.map((size) => (
              <button
                key={size.id}
                type="button"
                onClick={() => setHomeSize(size.id as any)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  homeSize === size.id
                    ? "border-sky-600 bg-sky-50/50 shadow-sm ring-1 ring-sky-600"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <span className="text-sm font-bold text-slate-900 block">{size.label}</span>
                <span className="text-xs text-slate-500 block mt-0.5">{size.subtext}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Add-on Services */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              2. Add Exterior Surfaces (Multi-Surface Discounts Apply):
            </label>
            {hasBundleDiscount && (
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                10% Bundle Savings Applied
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {addonsList.map((item) => {
              const isSelected = selectedAddons.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleAddon(item.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "border-sky-500 bg-sky-50/40 text-slate-900"
                      : "border-slate-200 hover:border-slate-300 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs ${
                        isSelected
                          ? "bg-sky-600 border-sky-600 text-white"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-500">
                    {item.includedInBase ? "Core Base" : `+$${item.price}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* HOA Urgent Notice Checkbox */}
        <div className="mb-8 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <input
              type="checkbox"
              id="hoaUrgentCheck"
              checked={isHoaUrgent}
              onChange={(e) => setIsHoaUrgent(e.target.checked)}
              className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
            />
            <label htmlFor="hoaUrgentCheck" className="text-xs sm:text-sm font-semibold text-amber-900 cursor-pointer">
              I have an active HOA Notice with a fast approaching deadline
            </label>
          </div>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
            Priority Slot
          </span>
        </div>

        {/* Estimated Total Card & Apply Button */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <span className="text-xs font-medium text-slate-400 block mb-0.5">
              Estimated Instant Price Range (Houston Metro):
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">
                {rangeString}
              </span>
              <span className="text-xs text-slate-400">Total All-Inclusive</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Includes safe softwash chemistry, plant hydration & digital HOA photo report.
            </p>
          </div>

          <button
            type="button"
            onClick={handleApply}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-md hover:shadow-cyan-400/40 transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            <span>Pre-Fill Estimate Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
