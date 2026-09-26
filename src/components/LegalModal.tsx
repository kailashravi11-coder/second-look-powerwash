import React, { useState } from "react";
import { X, ShieldCheck, FileText, Lock, ChevronRight, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "privacy" | "terms";
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = "privacy"
}) => {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-white"
        style={{ backgroundColor: "#0b1322" }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-white font-heading">
                Second LOOK Power Wash, LLC
              </h2>
              <p className="text-xs text-slate-400">
                Official Business Disclosures & Legal Agreements · Houston, TX
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="flex border-b border-white/10 px-6 pt-3 bg-slate-950/30 gap-4">
          <button
            type="button"
            onClick={() => setActiveTab("privacy")}
            className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "privacy"
                ? "border-cyan-400 text-cyan-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy Policy (A2P 10DLC Compliant)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("terms")}
            className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "terms"
                ? "border-cyan-400 text-cyan-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms & Conditions (Service Agreement)</span>
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed custom-scrollbar">
          {activeTab === "privacy" ? (
            /* ================= PRIVACY POLICY ================= */
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                  LAST REVISED: SEPTEMBER 2026 · HOUSTON, TEXAS
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-white">
                  Privacy Policy & SMS Communications Disclosure
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Second LOOK Power Wash, LLC (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy of homeowners and property managers throughout the Greater Houston area.
                </p>
              </div>

              {/* 1. Information We Collect */}
              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-cyan-400">1.</span> Information We Collect via Contact & Estimate Forms
                </h3>
                <p>
                  When you request an estimate, schedule an exterior inspection, or interact with our web forms, we collect information that you voluntarily provide, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Full Name:</strong> To address you personally and identify property ownership or authorized tenancy.</li>
                  <li><strong>Telephone / Mobile Number:</strong> To contact you regarding estimates, appointments, on-site arrival notices, and job completion photos.</li>
                  <li><strong>Email Address:</strong> To deliver formal written quotes, invoicing, before/after documentation, and receipts.</li>
                  <li><strong>Physical Service Address / ZIP Code:</strong> To evaluate exterior square footage via satellite imagery, assess substrate requirements (vinyl, brick, limestone, stucco), and dispatch equipment.</li>
                  <li><strong>Property Specifics:</strong> Notes regarding HOA compliance deadlines, water source availability, or specific exterior problem areas.</li>
                </ul>
              </section>

              {/* 2. SMS / Text Messaging Consent (A2P 10DLC) */}
              <section className="space-y-2 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
                <h3 className="text-sm sm:text-base font-bold text-cyan-300 flex items-center gap-2">
                  <span className="text-cyan-400">2.</span> Strict SMS & Mobile Communication Terms (A2P 10DLC Compliance)
                </h3>
                <div className="p-3 bg-slate-950/80 rounded-lg border border-cyan-400/20 text-xs font-semibold text-white space-y-1">
                  <p className="text-amber-400 font-bold uppercase tracking-wide">
                    ★ STRICT THIRD-PARTY MARKETING PROHIBITION:
                  </p>
                  <p className="text-slate-200">
                    No mobile phone numbers, SMS opt-in data, or customer consent will ever be sold, rented, leased, or shared with third parties or affiliates for marketing or promotional purposes under any circumstances.
                  </p>
                </div>
                <p className="text-xs text-slate-300">
                  By checking the SMS consent box on our estimate form or providing your mobile phone number, you authorize Second LOOK Power Wash, LLC to send transactional and conversational text messages regarding:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                  <li>Direct estimates and property assessment video links.</li>
                  <li>Appointment scheduling, rescheduling, and technician ETA notifications.</li>
                  <li>Before and after photo verification and invoice links.</li>
                </ul>
                <p className="text-xs text-slate-400 pt-1">
                  <strong>Opt-Out & Help:</strong> You may reply <strong>STOP</strong> at any time to unsubscribe from SMS messaging. Reply <strong>HELP</strong> for assistance or call Willy directly at <span className="text-cyan-400 font-mono font-bold">(346) 235-5984</span>. Message and data rates may apply. Message frequency varies based on your requested services.
                </p>
              </section>

              {/* 3. Cookies & Analytics */}
              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-cyan-400">3.</span> Cookies & Website Analytics Disclaimer
                </h3>
                <p>
                  Our website uses standard browser cookies, pixels, and web analytics tools (such as Google Analytics) to monitor anonymous traffic patterns, site speed, and conversion effectiveness. These technologies collect non-personally identifiable technical information including browser type, operating system, pages viewed, and referral sources to help improve user experience. You may configure your browser to decline cookies without impacting your ability to submit quote requests.
                </p>
              </section>

              {/* 4. Data Security */}
              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-cyan-400">4.</span> Data Retention & Protection
                </h3>
                <p>
                  Second LOOK Power Wash, LLC maintains industry-standard physical, electronic, and procedural safeguards to secure personal information against unauthorized access, disclosure, or alteration. We retain customer contact and service records strictly for accounting, warranty, and recurring seasonal service scheduling.
                </p>
              </section>

              {/* 5. Contact Information */}
              <section className="pt-3 border-t border-white/10 text-xs text-slate-400">
                <p>
                  <strong>Second LOOK Power Wash, LLC</strong><br />
                  10131 East Palm Lake Drive, Houston, TX 77034, United States<br />
                  Direct: <a href="tel:3462355984" className="text-cyan-400 underline">(346) 235-5984</a> · Instagram: <a href="https://www.instagram.com/secondlookpwr" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline">@secondlookpwr</a>
                </p>
              </section>
            </div>
          ) : (
            /* ================= TERMS & CONDITIONS ================= */
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                  EFFECTIVE DATE: SEPTEMBER 2026 · HOUSTON, TEXAS
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-white">
                  Terms & Conditions (Service Agreement)
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  These Terms and Conditions govern all estimates, quotes, on-site service appointments, and exterior cleaning contracts performed by Second LOOK Power Wash, LLC throughout the State of Texas.
                </p>
              </div>

              {/* 1. Scope of Services */}
              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-cyan-400">1.</span> Scope of Services
                </h3>
                <p>
                  Second LOOK Power Wash, LLC provides professional exterior cleaning services for residential and commercial properties in Houston, TX and surrounding municipalities. Services include low-pressure chemical softwashing (vinyl siding, HardiePlank, stucco, and painted wood), high-pressure rotary surface washing (concrete driveways, walkways, curbs), brick and masonry efflorescence removal, pool deck restoration, and gutter brightening.
                </p>
              </section>

              {/* 2. Liability & Property Disclaimer */}
              <section className="space-y-2 p-4 rounded-xl bg-slate-950/80 border border-white/10">
                <h3 className="text-sm sm:text-base font-bold text-amber-400 flex items-center gap-2">
                  <span className="text-amber-400">2.</span> Liability & Property Disclaimer
                </h3>
                <p className="text-xs text-slate-300">
                  Second LOOK Power Wash, LLC utilizes professional-grade commercial equipment, calibrated pressure regulators, and manufacturer-recommended surfactant chemistry. We maintain active $1,000,000 commercial liability insurance for client peace of mind.
                </p>
                <div className="space-y-2 text-xs text-slate-300 pt-1">
                  <p>
                    <strong>A. Pre-Existing Conditions:</strong> Second LOOK Power Wash, LLC is not liable for pre-existing wear, degradation, or structural defects obscured by dirt, mold, or organic growth prior to cleaning, including failed thermal window seals, compromised siding integrity, spalled concrete, or loose mortar joints.
                  </p>
                  <p>
                    <strong>B. Loose Paint, Siding, and Fragile Elements:</strong> While softwashing utilizes dedicated low-pressure delivery (&lt; 100 PSI) to protect building envelopes, oxidized paint coatings, poorly adhered vinyl/soffit trims, or sun-rotted seals may reveal underlying degradation. Client agrees that cleaning merely removes grime and does not cause inherent material fatigue.
                  </p>
                  <p>
                    <strong>C. Plant & Property Care:</strong> Technician takes proactive precautions—including thorough pre-wetting, post-rinsing of vegetation, covering sensitive outdoor electrical outlets, and continuous perimeter monitoring—to safeguard landscaping and property fixtures.
                  </p>
                </div>
              </section>

              {/* 3. Estimates, Pricing & Payments */}
              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-cyan-400">3.</span> Estimates, Custom Plans & Payment Terms
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Estimates:</strong> Estimates provided online or over the phone are calculated using client-provided details and high-resolution aerial imaging. Prices remain valid for 30 calendar days. If on-site conditions diverge substantially from disclosures (e.g., inaccessible water supply, hazardous structural decay), technician reserves the right to issue an adjusted quote prior to commencing work.</li>
                  <li><strong>Payment Due Date:</strong> Payment is due immediately upon completion of services and final walk-through or electronic photo confirmation.</li>
                  <li><strong>Accepted Payment Forms:</strong> Credit/debit card, electronic bank transfer, check, or authorized commercial ACH.</li>
                </ul>
              </section>

              {/* 4. Client Responsibilities */}
              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-cyan-400">4.</span> Client Responsibilities on Service Day
                </h3>
                <p>Prior to arrival of the service rig, client agrees to:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>Ensure an operational outside water spigot with sustained continuous water pressure is unlocked and accessible.</li>
                  <li>Keep all windows, doors, pet doors, and skylights firmly closed and latched.</li>
                  <li>Relocate vehicles, patio furniture, outdoor pets, and fragile yard ornaments away from targeted work zones.</li>
                </ul>
              </section>

              {/* 5. Governing Law */}
              <section className="space-y-2 p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-400/20">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-cyan-400">5.</span> Governing Law & Jurisdiction (State of Texas)
                </h3>
                <p className="text-xs text-slate-300">
                  This Agreement and any disputes arising out of services performed shall be governed by and construed in accordance with the substantive laws of the <strong>State of Texas</strong>, without regard to conflicts of law principles. Any legal proceedings or dispute resolution shall take place exclusively in <strong>Harris County, Texas</strong>.
                </p>
              </section>

              {/* Contact Footer */}
              <section className="pt-3 border-t border-white/10 text-xs text-slate-400">
                <p>
                  <strong>Second LOOK Power Wash, LLC</strong><br />
                  10131 East Palm Lake Drive, Houston, TX 77034, United States<br />
                  Direct Inquiries: <a href="tel:3462355984" className="text-cyan-400 underline">(346) 235-5984</a>
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Compliant with Texas Business and Commerce Code & A2P 10DLC Regulations</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs cursor-pointer transition-all shadow-md"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
