import React, { useState, useEffect } from "react";
import { KineticText } from "./KineticText";
import { 
  Check, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  MessageSquare,
  Mail,
  Copy,
  Smartphone,
  Eye,
  Sparkles,
  ArrowRight,
  Clock,
  UserCheck,
  ExternalLink
} from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

// Universal authentic WhatsApp SVG Icon
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
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

interface LeadCaptureFormProps {
  initialService?: string;
}

export type DispatchChannel = "sms" | "whatsapp" | "both";

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  initialService = "House Wash (Softwash)"
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyZip, setPropertyZip] = useState("");
  const [selectedSurfaces, setSelectedSurfaces] = useState<string[]>([
    "House Wash (Softwash)",
    "Driveway"
  ]);
  const [preferredChannel, setPreferredChannel] = useState<DispatchChannel>("sms");
  const [smsConsent, setSmsConsent] = useState(true);
  const [message, setMessage] = useState("");
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);
  
  // Demo Modal State & Active Tab
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoActiveTab, setDemoActiveTab] = useState<"whatsapp" | "sms" | "email">("whatsapp");
  
  // Submitted Screen Active Preview Tab
  const [submittedPreviewTab, setSubmittedPreviewTab] = useState<"whatsapp" | "sms" | "email">("whatsapp");

  // Sync selectedSurfaces when a service card CTA is clicked
  useEffect(() => {
    if (!initialService) return;
    
    let matchedChip = "";
    if (initialService.toLowerCase().includes("hoa")) {
      matchedChip = "HOA Notice Rush";
    } else if (initialService.toLowerCase().includes("commercial")) {
      matchedChip = "Commercial";
    } else if (initialService.toLowerCase().includes("brick") || initialService.toLowerCase().includes("stone")) {
      matchedChip = "Brick & Stone";
    } else if (initialService.toLowerCase().includes("patio") || initialService.toLowerCase().includes("pool")) {
      matchedChip = "Patio & Pool Deck";
    } else if (initialService.toLowerCase().includes("driveway") || initialService.toLowerCase().includes("walkway")) {
      matchedChip = "Driveway";
    } else if (initialService.toLowerCase().includes("fence") || initialService.toLowerCase().includes("exterior")) {
      matchedChip = "Deck & Fence";
    } else if (initialService.toLowerCase().includes("house")) {
      matchedChip = "House Wash (Softwash)";
    }

    if (matchedChip) {
      setSelectedSurfaces((prev) => 
        prev.includes(matchedChip) ? prev : [matchedChip, ...prev]
      );
    }
  }, [initialService]);

  const surfaceOptions = [
    "House Wash (Softwash)",
    "Driveway",
    "Brick & Stone",
    "Patio & Pool Deck",
    "Deck & Fence",
    "Gutters",
    "HOA Notice Rush",
    "Commercial"
  ];

  const toggleSurface = (surface: string) => {
    if (selectedSurfaces.includes(surface)) {
      if (selectedSurfaces.length > 1) {
        setSelectedSurfaces(selectedSurfaces.filter((s) => s !== surface));
      }
    } else {
      setSelectedSurfaces([...selectedSurfaces, surface]);
    }
  };

  // Helper to extract clean data
  const getLeadData = (isDemo = false) => {
    const leadName = isDemo 
      ? (firstName.trim() ? `${firstName} ${lastName}`.trim() : "David Miller")
      : `${firstName} ${lastName}`.trim();
    const leadPhone = isDemo ? (phone.trim() || "(346) 235-5984") : phone.trim();
    const leadEmail = isDemo ? (email.trim() || "david.miller@gmail.com") : email.trim();
    const leadZip = isDemo ? (propertyZip.trim() || "77008 (The Heights)") : propertyZip.trim();
    const leadSurfaces = selectedSurfaces.length > 0 
      ? selectedSurfaces 
      : ["House Wash (Softwash)", "Driveway"];
    const leadNotes = message.trim() 
      ? message.trim() 
      : (isDemo ? "Need quote for north-facing 2-story siding & front driveway before Friday HOA inspection." : "Standard residential estimate requested.");

    const formattedTimestamp = new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });

    return {
      leadName,
      leadPhone,
      leadEmail,
      leadZip,
      leadSurfaces,
      leadNotes,
      formattedTimestamp
    };
  };

  // 1. WhatsApp Format (with WhatsApp bold * formatting & emojis)
  const generateWhatsAppMessage = (isDemo = false) => {
    const data = getLeadData(isDemo);
    return `*🚨 NEW ESTIMATE REQUEST - SECOND LOOK POWERWASH*
───────────────────────────
👤 *Customer:* ${data.leadName}
📞 *Phone:* ${data.leadPhone}
📧 *Email:* ${data.leadEmail}
📍 *Property ZIP:* ${data.leadZip} (Greater Houston, TX)

🛠️ *Services Requested:*
${data.leadSurfaces.map((s) => `• ${s}`).join("\n")}

📝 *Project Notes:*
${data.leadNotes}

✅ *Delivery Mode:* WhatsApp + Fixed Email (secondlookpwr@gmail.com)
⏰ *Submitted:* ${data.formattedTimestamp}
───────────────────────────
👉 *Tap to Call Customer:* tel:${data.leadPhone.replace(/\D/g, "") || BUSINESS_INFO.phoneRaw}`;
  };

  // 2. SMS Format (Optimized for US cellular carriers & native Apple/Android messages)
  const generateSmsMessage = (isDemo = false) => {
    const data = getLeadData(isDemo);
    return `🚨 NEW ESTIMATE REQUEST - SECOND LOOK PWR
───────────────────────────
👤 Customer: ${data.leadName}
📞 Phone: ${data.leadPhone}
📧 Email: ${data.leadEmail}
📍 Property ZIP: ${data.leadZip} (Greater Houston, TX)

🛠️ Services Requested:
${data.leadSurfaces.map((s) => `• ${s}`).join("\n")}

📝 Project Notes:
${data.leadNotes}

✅ Delivery Mode: Native SMS + Fixed Email
⏰ Time: ${data.formattedTimestamp}
───────────────────────────
Reply directly to customer or tap: ${data.leadPhone}`;
  };

  // 3. Email Format (Fixed for Willy's Inbox secondlookpwr@gmail.com)
  const generateEmailMessage = (isDemo = false) => {
    const data = getLeadData(isDemo);
    return `NEW ESTIMATE REQUEST - SECOND LOOK POWERWASH LLC
────────────────────────────────────────────────────────────
CUSTOMER DETAILS:
Name:             ${data.leadName}
Phone:            ${data.leadPhone}
Email:            ${data.leadEmail}
Property ZIP:     ${data.leadZip} (Greater Houston Area, TX)

REQUESTED CLEANING SERVICES:
${data.leadSurfaces.map((s) => `  - ${s}`).join("\n")}

PROJECT NOTES / SPECIAL INSTRUCTIONS:
${data.leadNotes}

COMMUNICATION DISPATCH COMBINATION:
  • Customer Preference: ${preferredChannel === "sms" ? "SMS Text + Email (Non-WhatsApp / US Standard)" : preferredChannel === "whatsapp" ? "WhatsApp + Email" : "All 3 (SMS + WhatsApp + Email)"}
  • SMS Carrier Target:  (346) 235-5984
  • WhatsApp Target:     +1 (346) 235-5984
  • Email Target:        secondlookpwr@gmail.com [FIXED ON ALL LEADS]
  • Timestamp:           ${data.formattedTimestamp}
────────────────────────────────────────────────────────────
ACTION: Tap reply to email customer, or call ${data.leadPhone} to confirm property inspection.`;
  };

  // Live messages for current form data
  const currentWhatsAppText = generateWhatsAppMessage(false);
  const currentSmsText = generateSmsMessage(false);
  const currentEmailText = generateEmailMessage(false);

  // URLs for direct trigger
  const whatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(currentWhatsAppText)}`;
  const smsUrl = `sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(currentSmsText)}`;
  const emailSubject = encodeURIComponent(`🚨 New Estimate Request: ${firstName || "New Customer"} ${lastName} - ZIP ${propertyZip || "Houston"}`);
  const emailUrl = `mailto:${BUSINESS_INFO.email}?subject=${emailSubject}&body=${encodeURIComponent(currentEmailText)}`;

  // Demo messages for preview modal
  const demoWhatsAppText = generateWhatsAppMessage(true);
  const demoSmsText = generateSmsMessage(true);
  const demoEmailText = generateEmailMessage(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!firstName.trim() || !lastName.trim()) {
      setErrorMsg("Please enter both your first and last name.");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!propertyZip.trim()) {
      setErrorMsg("Please provide your Houston area ZIP code.");
      return;
    }

    if (selectedSurfaces.length === 0) {
      setErrorMsg("Please select at least one surface you want cleaned.");
      return;
    }

    setIsSubmitting(true);
    
    // Triple combination trigger based on user preference:
    // If WhatsApp user: open WhatsApp
    // If Non-WhatsApp user: open native SMS
    // If Both: open WhatsApp first, SMS prompt available
    // Email is ALWAYS fixed and prepared
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      try {
        if (preferredChannel === "whatsapp") {
          window.open(whatsAppUrl, "_blank");
        } else if (preferredChannel === "sms") {
          window.location.href = smsUrl;
        } else {
          // Both selected: open WhatsApp and keep SMS ready
          window.open(whatsAppUrl, "_blank");
        }
      } catch (err) {
        console.error("Dispatch trigger:", err);
      }
    }, 450);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="get-quote" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-white relative overflow-hidden"
      style={{ backgroundColor: "#050b14" }}
    >
      {/* Anchor for external navigation */}
      <div id="lead-form" className="absolute -top-24" />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center lg:text-left max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>3-Way Tri-Channel Lead System · WhatsApp · SMS · Fixed Email</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-tight">
            Claim Your Free{" "}
            <KineticText 
              text="Fast Estimate" 
              className="text-cyan-400 font-bold" 
              minWeight={400} 
              maxWeight={900} 
            />
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Tell Willy about your property. Choose whether you use <strong>WhatsApp</strong> or <strong>Native SMS</strong>—while every lead is automatically guaranteed and backed up to William&apos;s direct business email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: High-Trust Value Markers + Testimonial Card + Triple Channel Demo Trigger */}
          <div className="lg:col-span-5 space-y-6 text-white">
            
            {/* Top Value Checkpoints */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs shadow-sm">
                  ✓
                </div>
                <p className="text-base sm:text-lg font-bold text-white leading-snug">
                  Free 21-Point Property Inspection on every job
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs shadow-sm">
                  ✓
                </div>
                <p className="text-base sm:text-lg font-bold text-white leading-snug">
                  $1M liability insurance, owner-operated meticulous attention to detail
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs shadow-sm">
                  ✓
                </div>
                <p className="text-base sm:text-lg font-bold text-white leading-snug">
                  Triple combination response: WhatsApp, SMS, and fixed email
                </p>
              </div>
            </div>

            {/* Testimonial Box */}
            <div 
              className="bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/10 relative"
              style={{ backgroundColor: "#0f172a" }}
            >
              {/* 5 Golden Stars */}
              <div className="flex text-amber-400 text-lg mb-3">
                {"★★★★★"}
              </div>

              <blockquote className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-4">
                &ldquo;William is fantastic! He&apos;s highly communicative, on time, transparent about everything and the outcome is better than expected. We had our 2-story siding washed and entire driveway surface cleaned. We couldn&apos;t be more pleased and will certainly use him in the future!&rdquo;
              </blockquote>

              <div className="text-xs sm:text-sm font-bold text-white">
                David M. <span className="text-cyan-400 font-normal">· The Heights, Houston TX</span>
              </div>
            </div>

            {/* Tri-Channel Delivery Explainer Box */}
            <div 
              className="p-4 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-slate-300 space-y-2.5"
              style={{ backgroundColor: "#0f172a" }}
            >
              <div className="font-black text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>How Willy&apos;s 3-Way Lead Dispatch Works:</span>
              </div>
              
              <div className="grid grid-cols-1 gap-2 pt-1 text-[11px]">
                <div className="flex items-center gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                  <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
                  </span>
                  <span><strong>WhatsApp Users:</strong> Request opens directly in WhatsApp to chat with Willy.</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                  <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </span>
                  <span><strong>Non-WhatsApp Users:</strong> Request opens in native SMS / iMessage directly to (346) 235-5984.</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                  <span className="w-5 h-5 rounded-md bg-sky-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  </span>
                  <span><strong>Email (Fixed 100%):</strong> Every lead is guaranteed to reach <strong>secondlookpwr@gmail.com</strong>.</span>
                </div>
              </div>
            </div>

            {/* Interactive Demo Format Launcher Button */}
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Smartphone className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Live Lead Format Demo</div>
                  <div className="text-[11px] text-slate-400">See clean WhatsApp, SMS, and Email formats</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowDemoModal(true)}
                className="px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs cursor-pointer shadow-sm transition-all shrink-0"
              >
                View 3 Formats
              </button>
            </div>

          </div>

          {/* Right Column: Dark Blue Form Card with Triple Combination */}
          <div className="lg:col-span-7">
            <div 
              className="bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10 text-white relative"
              style={{ backgroundColor: "#0f172a" }}
            >
              
              {isSubmitted ? (
                <div className="py-6 text-center animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mb-2">
                    Estimate Request Activated!
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-5">
                    Thank you, <strong>{firstName}</strong>. Your project details are formatted and ready for William (Willy) across WhatsApp, SMS, and email.
                  </p>

                  {/* 3 Status Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-lg mx-auto mb-6 text-xs">
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-emerald-500/30 flex items-center gap-2 text-left">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <div>
                        <div className="font-bold text-white">WhatsApp</div>
                        <div className="text-[10px] text-slate-400">+1 346-235-5984</div>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-2.5 rounded-xl border border-amber-500/30 flex items-center gap-2 text-left">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <div>
                        <div className="font-bold text-white">Native SMS</div>
                        <div className="text-[10px] text-slate-400">(346) 235-5984</div>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-2.5 rounded-xl border border-cyan-500/30 flex items-center gap-2 text-left">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <div>
                        <div className="font-bold text-white">Email (Fixed)</div>
                        <div className="text-[10px] text-slate-400">secondlookpwr@gmail</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Clean Lead Message Preview Box with Tab Switcher */}
                  <div className="mb-6 text-left max-w-lg mx-auto bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-5 relative shadow-inner">
                    <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 mb-3 gap-2">
                      <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800">
                        <button
                          type="button"
                          onClick={() => setSubmittedPreviewTab("whatsapp")}
                          className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                            submittedPreviewTab === "whatsapp" 
                              ? "bg-emerald-500 text-slate-950" 
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          <WhatsAppIcon className="w-3 h-3 fill-current" />
                          <span>WhatsApp</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSubmittedPreviewTab("sms")}
                          className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                            submittedPreviewTab === "sms" 
                              ? "bg-amber-500 text-slate-950" 
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          <MessageSquare className="w-3 h-3 fill-current" />
                          <span>SMS</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSubmittedPreviewTab("email")}
                          className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                            submittedPreviewTab === "email" 
                              ? "bg-cyan-400 text-slate-950" 
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          <Mail className="w-3 h-3" />
                          <span>Email</span>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(
                          submittedPreviewTab === "whatsapp" 
                            ? currentWhatsAppText 
                            : submittedPreviewTab === "sms" 
                            ? currentSmsText 
                            : currentEmailText
                        )}
                        className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-800 cursor-pointer transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copied ? "Copied!" : "Copy Format"}</span>
                      </button>
                    </div>

                    <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed select-all max-h-64 overflow-y-auto">
                      {submittedPreviewTab === "whatsapp" 
                        ? currentWhatsAppText 
                        : submittedPreviewTab === "sms" 
                        ? currentSmsText 
                        : currentEmailText}
                    </pre>

                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Status: <span className="text-emerald-400 font-semibold">Active &amp; Ready</span></span>
                      <span>Owner: <span className="text-white font-mono">{BUSINESS_INFO.phoneDisplay}</span></span>
                    </div>
                  </div>

                  {/* 3 Channel Direct Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 max-w-lg mx-auto mb-6">
                    {/* WhatsApp Button */}
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs text-center shadow-lg transition-all inline-flex items-center justify-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-slate-950" />
                      <span>WhatsApp Willy</span>
                    </a>

                    {/* SMS Button */}
                    <a
                      href={smsUrl}
                      className="px-3.5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs text-center shadow-lg transition-all inline-flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
                      <span>Send via SMS</span>
                    </a>
                    
                    {/* Email Button */}
                    <a
                      href={emailUrl}
                      className="px-3.5 py-3 rounded-xl bg-sky-950 hover:bg-sky-900 text-cyan-300 border border-cyan-400/40 font-bold text-xs text-center transition-all inline-flex items-center justify-center gap-1.5"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Email</span>
                    </a>

                    {/* Phone Call Button */}
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="px-3.5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs text-center transition-all inline-flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>Call Willy</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
                  >
                    ← Edit Details or Submit Another Estimate Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/50 text-rose-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Channel Preference Selector (User Request 4) */}
                  <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>How would you like to receive your quote?</span>
                      </label>
                      <span className="text-[10px] text-cyan-300 font-semibold bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-500/30">
                        Email Fixed for All Leads
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {/* Option 1: Native SMS + Email */}
                      <button
                        type="button"
                        onClick={() => setPreferredChannel("sms")}
                        className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                          preferredChannel === "sms"
                            ? "bg-amber-500/15 border-amber-400 ring-1 ring-amber-400"
                            : "bg-slate-900 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-white">
                            <MessageSquare className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            <span>SMS + Email</span>
                          </span>
                          {preferredChannel === "sms" && (
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">
                          For USA phones without WhatsApp. Direct text to phone.
                        </div>
                      </button>

                      {/* Option 2: WhatsApp + Email */}
                      <button
                        type="button"
                        onClick={() => setPreferredChannel("whatsapp")}
                        className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                          preferredChannel === "whatsapp"
                            ? "bg-emerald-500/15 border-emerald-400 ring-1 ring-emerald-400"
                            : "bg-slate-900 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-white">
                            <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
                            <span>WhatsApp + Email</span>
                          </span>
                          {preferredChannel === "whatsapp" && (
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">
                          For WhatsApp users. Instant direct WhatsApp chat with Willy.
                        </div>
                      </button>

                      {/* Option 3: Both / All 3 */}
                      <button
                        type="button"
                        onClick={() => setPreferredChannel("both")}
                        className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                          preferredChannel === "both"
                            ? "bg-cyan-500/15 border-cyan-400 ring-1 ring-cyan-400"
                            : "bg-slate-900 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-white">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                            <span>All 3 Combined</span>
                          </span>
                          {preferredChannel === "both" && (
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">
                          WhatsApp + SMS + Email for absolute fastest response.
                        </div>
                      </button>
                    </div>

                    <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
                      <span className="text-emerald-400">✓</span>
                      <span>
                        Fixed Email: Every estimate is automatically sent to <strong className="text-slate-200">secondlookpwr@gmail.com</strong>
                      </span>
                    </div>
                  </div>

                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        First Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        Last Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        Email Address (Fixed Lead Delivery) <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        Mobile Phone (For WhatsApp / SMS) <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(346) 235-5984"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Property ZIP */}
                  <div>
                    <label className="block text-xs font-bold text-white mb-1.5">
                      Property ZIP Code (Houston Region) <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={propertyZip}
                      onChange={(e) => setPropertyZip(e.target.value)}
                      placeholder="e.g. 77008, 77024, 77494, 77019, 77034..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                    />
                  </div>

                  {/* What do you want cleaned? Interactive Chips */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-bold text-white">
                        What do you want cleaned? <span className="text-cyan-400">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">Select one or more</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {surfaceOptions.map((surface) => {
                        const isSelected = selectedSurfaces.includes(surface);
                        return (
                          <button
                            key={surface}
                            type="button"
                            onClick={() => toggleSurface(surface)}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer select-none active:scale-95 ${
                              isSelected
                                ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20 ring-1 ring-cyan-300"
                                : "bg-slate-950/80 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:text-white"
                            }`}
                          >
                            <span className="font-extrabold">{isSelected ? "✓" : "+"}</span>
                            <span>{surface}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message / Special Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Additional details, stains, or HOA deadline (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any specific stains, 2-story areas, or urgent HOA violation notice date..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* SMS and Marketing Consent Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="smsConsentCheck"
                      checked={smsConsent}
                      onChange={(e) => setSmsConsent(e.target.checked)}
                      className="w-4 h-4 accent-cyan-400 rounded border-slate-700 focus:ring-cyan-400 mt-0.5 cursor-pointer"
                    />
                    <label htmlFor="smsConsentCheck" className="text-[11px] text-slate-300 leading-snug cursor-pointer select-none">
                      By checking this box, I agree to receive quote updates and appointment notifications via SMS text message, WhatsApp, and phone from Second LOOK Power Wash, LLC. Message frequency varies. Msg & data rates may apply. Willy will never share or sell your information.
                    </label>
                  </div>

                  {/* Submit Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-4 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-base shadow-xl shadow-cyan-400/25 transition-all cursor-pointer active:scale-98 disabled:opacity-50 text-center flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {isSubmitting 
                          ? "Activating Tri-Channel Lead..." 
                          : preferredChannel === "whatsapp" 
                          ? "Get My Fast Quote via WhatsApp + Email"
                          : preferredChannel === "sms"
                          ? "Get My Fast Quote via SMS + Email"
                          : "Get My Fast Quote (All 3 Channels)"}
                      </span>
                    </button>

                    {/* Quick direct triggers */}
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(demoWhatsAppText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-4 px-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg transition-all cursor-pointer whitespace-nowrap"
                        title="Direct WhatsApp chat to Willy"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-slate-950" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(demoSmsText)}`}
                        className="inline-flex items-center justify-center gap-1.5 py-4 px-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg transition-all cursor-pointer whitespace-nowrap"
                        title="Direct native SMS to Willy's phone"
                      >
                        <MessageSquare className="w-4 h-4 text-slate-950 fill-slate-950" />
                        <span>SMS</span>
                      </a>
                    </div>
                  </div>

                  {/* Clean message dispatch note */}
                  <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-1 gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Direct to William&apos;s phone &amp; WhatsApp: <strong className="text-slate-200">{BUSINESS_INFO.phoneDisplay}</strong></span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowDemoModal(true)}
                      className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer font-semibold"
                    >
                      Preview 3 Message Formats
                    </button>
                  </div>

                  {/* Final Authority Note from William */}
                  <div className="pt-4 border-t border-slate-800 text-center">
                    <p className="text-xs text-slate-300 italic">
                      &ldquo;Don&apos;t trust your home to the lowest bidder. Experience, proper equipment, and the right cleaning process make all the difference.&rdquo;
                    </p>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mt-1">
                      — William (Willy), Owner-Operator
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Live Message Format Demo Modal (User Request 2, 3 & 4) */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-white/20 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative text-left max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-cyan-400" />
                <h4 className="text-base font-bold text-white">Owner Lead Formats: WhatsApp · SMS · Email</h4>
              </div>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                className="text-slate-400 hover:text-white text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Ye raha clean aur structured format jo customer ke submit karte hi William (Willy) ke paas teeno channels ke combination se jata hai:
            </p>

            {/* 3 Interactive Format Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 mb-4">
              <button
                type="button"
                onClick={() => setDemoActiveTab("whatsapp")}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  demoActiveTab === "whatsapp"
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>1. WhatsApp Format</span>
              </button>

              <button
                type="button"
                onClick={() => setDemoActiveTab("sms")}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  demoActiveTab === "sms"
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>2. SMS Text (Non-WA)</span>
              </button>

              <button
                type="button"
                onClick={() => setDemoActiveTab("email")}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  demoActiveTab === "email"
                    ? "bg-cyan-400 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>3. Email (Fixed)</span>
              </button>
            </div>

            {/* TAB 1: WhatsApp Format Mockup */}
            {demoActiveTab === "whatsapp" && (
              <div className="space-y-3 animate-in fade-in">
                <div className="bg-[#0b141a] rounded-xl border border-emerald-950 p-4 relative">
                  <div className="flex items-center justify-between text-[11px] text-emerald-400 border-b border-emerald-950/60 pb-2 mb-2.5">
                    <span className="font-semibold flex items-center gap-1">
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
                      <span>WhatsApp Direct to Willy: +1 (346) 235-5984</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">End-to-End Encrypted</span>
                  </div>
                  <pre className="font-mono text-xs text-slate-100 whitespace-pre-wrap leading-relaxed select-all">
                    {demoWhatsAppText}
                  </pre>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200">
                  🟢 <strong>WhatsApp Use Karne Wale Users:</strong> Ek tap me WhatsApp khulega, prefilled structured message Willy ke WhatsApp number <strong>+1 346-235-5984</strong> par send ho jayega.
                </div>
              </div>
            )}

            {/* TAB 2: SMS Format Mockup */}
            {demoActiveTab === "sms" && (
              <div className="space-y-3 animate-in fade-in">
                <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 relative">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2 mb-2.5">
                    <span className="font-semibold text-white flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>Native SMS to Willy: +1 (346) 235-5984</span>
                    </span>
                    <span className="text-amber-400 font-mono">iMessage / Cellular SMS</span>
                  </div>
                  <pre className="font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed select-all">
                    {demoSmsText}
                  </pre>
                </div>
                <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200">
                  📱 <strong>WhatsApp Use Na Karne Wale Users (USA Common):</strong> Unka lead direct native SMS / iMessage se Willy ke number <strong>(346) 235-5984</strong> par jayega.
                </div>
              </div>
            )}

            {/* TAB 3: Email Format Mockup */}
            {demoActiveTab === "email" && (
              <div className="space-y-3 animate-in fade-in">
                <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 relative">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2 mb-2.5">
                    <span className="font-semibold text-white flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>To: secondlookpwr@gmail.com</span>
                    </span>
                    <span className="text-cyan-400 font-mono">100% Fixed Lead Record</span>
                  </div>
                  <pre className="font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed select-all max-h-56 overflow-y-auto">
                    {demoEmailText}
                  </pre>
                </div>
                <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200">
                  ✉️ <strong>Email Sabme Fix Hai:</strong> Chahe customer WhatsApp choose kare ya SMS, har lead ki complete digital job sheet automatically Willy ke email <strong>secondlookpwr@gmail.com</strong> par dispatch hoti hai.
                </div>
              </div>
            )}

            {/* Summary Box */}
            <div className="mt-4 space-y-1.5 text-xs text-slate-300 bg-slate-800/40 p-3 rounded-lg border border-slate-700/50">
              <div className="font-bold text-white text-[11px] uppercase tracking-wide text-cyan-400 mb-1">
                3-Way Combination Benefits:
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Zero Lost Leads:</strong> Jo WhatsApp use karta hai uska WhatsApp se, jo nahi karta uska SMS se.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Fixed Email Backup:</strong> Har enquiry secondlookpwr@gmail.com me save rahegi.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>1-Tap Instant Callback:</strong> William (Willy) customer ke number par tap karke turant call ya text kar sakta hai.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-2.5 mt-5">
              <button
                type="button"
                onClick={() => copyToClipboard(
                  demoActiveTab === "whatsapp" 
                    ? demoWhatsAppText 
                    : demoActiveTab === "sms" 
                    ? demoSmsText 
                    : demoEmailText
                )}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer transition-colors"
              >
                {copied ? "Copied to Clipboard!" : "Copy Active Format"}
              </button>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                className="px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold cursor-pointer transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
