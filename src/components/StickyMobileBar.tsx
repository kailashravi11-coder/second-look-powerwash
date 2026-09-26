import React from "react";
import { Phone, MessageSquare, Calculator } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="0" 
    fill="currentColor" 
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

interface StickyMobileBarProps {
  onOpenEstimate: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenEstimate }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050b14]/95 backdrop-blur-lg border-t border-white/10 px-2 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="inline-flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-[10px] tracking-tight border border-white/10 active:scale-95 transition-transform"
          title={`Call Willy at ${BUSINESS_INFO.phoneDisplay}`}
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400 mb-0.5" />
          <span>Call</span>
        </a>

        {/* Direct SMS Button (for Non-WhatsApp / US standard) */}
        <a
          href={`sms:${BUSINESS_INFO.phoneRaw}?&body=Hi%20Willy!%20I%20need%20a%20fast%20exterior%20power%20wash%20estimate%20in%20Houston.`}
          className="inline-flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[10px] tracking-tight shadow-md active:scale-95 transition-transform"
          title="Send SMS text message"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-slate-950 text-slate-950 mb-0.5" />
          <span>SMS Text</span>
        </a>

        {/* Direct WhatsApp Button (for WhatsApp users) */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Willy!%20I%20am%20requesting%20a%20fast%20quote%20for%20exterior%20power%20washing%20in%20Houston.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[10px] tracking-tight shadow-md active:scale-95 transition-transform"
          title="Chat on WhatsApp with Willy"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 fill-slate-950 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Free Quote Button */}
        <button
          onClick={onOpenEstimate}
          className="inline-flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-[10px] tracking-tight shadow-md active:scale-95 transition-transform cursor-pointer"
        >
          <Calculator className="w-3.5 h-3.5 text-slate-950 mb-0.5" />
          <span>Quote</span>
        </button>
      </div>
    </div>
  );
};
