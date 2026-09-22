import React, { useState } from "react";
import { BRAND_INFO } from "../../lib/constants";
import {
  Send, CheckCircle2,  MessageCircle, AlertCircle, User, Phone, Mail, MapPin, GraduationCap, LinkIcon,
} from "lucide-react";
import { GOOGLE_SHEETS_CONFIG } from "../../lib/constants";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  qualification: string;
  portfolioLink: string;
  aboutYou: string;
}

const INITIAL: FormState = {
  fullName: "", phone: "", email: "", location: "", qualification: "", portfolioLink: "", aboutYou: "",
};

const SOFTWARE_OPTIONS = [
  "Adobe Premiere Pro", "DaVinci Resolve", "Final Cut Pro", "CapCut Pro", "After Effects", "Other", "Graphic Designer", "Content Creator"
];

export const CareerApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(INITIAL);
  const [software, setSoftware] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const toggleSoftware = (s: string) => {
    setSoftware((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError("Please fill in your Name, Phone Number, and Email Address.");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      const scriptUrl = GOOGLE_SHEETS_CONFIG.scriptUrl;
      if (scriptUrl) {
        const payload = new URLSearchParams();
        payload.append("sheet", "Careers");
        payload.append("position", "Video Editor (Fresher)");
        payload.append("fullName", formData.fullName);
        payload.append("phone", formData.phone);
        payload.append("email", formData.email);
        payload.append("location", formData.location || "Not provided");
        payload.append("qualification", formData.qualification || "Not provided");
        payload.append("softwareKnown", software.join(", ") || "Not specified");
        payload.append("portfolioLink", formData.portfolioLink || "Not provided");
        payload.append("aboutYou", formData.aboutYou || "None");
        payload.append("timestamp", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: payload.toString(),
        });
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Career form submission error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="career-form" className="py-16 sm:py-20 bg-[#F8FAF8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-20 h-20 bg-[#008000]/10 border-2 border-[#008000]/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#008000]" />
          </div>
          <h2 className="text-3xl font-black text-[#111111] mb-3">Application Received!</h2>
          <p className="text-[#555555] mb-8">
            Thank you for applying for the <strong>Video Editor (Fresher)</strong> position. Our team will review and get back to you shortly.
          </p>
          <div className="inline-flex items-center gap-2 text-xs text-[#008000] bg-[#008000]/10 border border-[#008000]/20 px-4 py-2 rounded-full font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            We typically respond within 2-3 working days
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="career-form" className="py-16 flex justify-center items-center sm:py-20 bg-[#F8FAF8]">
      <a
        href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Getup%20Digital%2C%20I%E2%80%99m%20interested%20in%20the%20Video%20Editor%20position%20and%20would%20like%20to%20apply%20for%20the%20opportunity.%20I%E2%80%99d%20love%20to%20share%20my%20work%20and%20discuss%20the%20role%20further.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 border border-[#25D366]/30 px-8 py-5 rounded-full text-xs font-bold transition-all duration-200 shadow-2xs"
      >
        <Send className="w-7 h-7 text-[#128C7E]" />
        <span className="text-lg" >Apply through WhatsApp</span>
      </a>
      {/* <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#008000] mb-2">Apply Now</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] mb-3">Video Editor Application</h2>
          <p className="text-[#555555] text-sm">Fill in your details below. Fields marked <span className="text-red-500 font-bold">*</span> are required.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-[#E5E7E5] rounded-3xl shadow-sm p-8 sm:p-10 space-y-7">
          {error && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />{error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#008000]" />Full Name <span className="text-red-500">*</span>
              </label>
              <input type="text" name="fullName" id="career-fullName" value={formData.fullName} onChange={handleChange}
                placeholder="e.g. Ramesh Kumar" required
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#008000]" />Phone Number <span className="text-red-500">*</span>
              </label>
              <input type="tel" name="phone" id="career-phone" value={formData.phone} onChange={handleChange}
                placeholder="+91 98765 43210" required
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#008000]" />Email Address <span className="text-red-500">*</span>
              </label>
              <input type="email" name="email" id="career-email" value={formData.email} onChange={handleChange}
                placeholder="ramesh@email.com" required
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#008000]" />Current Location
              </label>
              <input type="text" name="location" id="career-location" value={formData.location} onChange={handleChange}
                placeholder="e.g. Erode, Coimbatore..."
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-[#008000]" />Highest Qualification
            </label>
            <input type="text" name="qualification" id="career-qualification" value={formData.qualification} onChange={handleChange}
              placeholder="e.g. B.Sc Visual Communication, DME, B.Com..."
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors" />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[#111111]">Software You Know (select all that apply)</label>
            <div className="flex flex-wrap gap-2">
              {SOFTWARE_OPTIONS.map((s) => {
                const selected = software.includes(s);
                return (
                  <button key={s} type="button" onClick={() => toggleSoftware(s)}
                    className={"text-xs px-3.5 py-2 rounded-xl border transition-all font-medium cursor-pointer inline-flex items-center gap-1.5 select-none " +
                      (selected
                        ? "bg-[#008000] text-white border-[#008000] shadow-sm ring-2 ring-[#008000]/20"
                        : "bg-[#F8FAF8] text-[#333333] border-[#E5E7E5] hover:border-[#008000]/40")}>
                    {selected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}{s}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-[#008000]" />Portfolio / Demo Reel Link
            </label>
            <input type="url" name="portfolioLink" id="career-portfolio" value={formData.portfolioLink} onChange={handleChange}
              placeholder="YouTube, Google Drive, Behance, Instagram..."
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#111111]">Tell Us About Yourself</label>
            <textarea name="aboutYou" id="career-aboutYou" rows={4} value={formData.aboutYou} onChange={handleChange}
              placeholder="What makes you a great fit? Any projects, passion, or achievements you would like to share..."
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors resize-none" />
          </div>

          <button type="submit" disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#008000] hover:bg-[#006800] disabled:opacity-60 text-white font-bold text-sm py-4 px-6 rounded-xl transition-colors cursor-pointer">
            {isSubmitting ? (
              <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>Submitting Application...</>
            ) : (
              <><Send className="w-4 h-4" />Submit My Application</>
            )}
          </button>
          <p className="text-center text-[10px] text-[#888888]">Your details are confidential and used only for recruitment purposes.</p>
        </form>
      </div> */}
    </section>
  );
};
