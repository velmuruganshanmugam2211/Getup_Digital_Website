import React, { useState } from 'react';
import { Button } from '../common/Button';
import { CheckCircle2, AlertCircle, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { servicesData } from '../../data/serviceData';
import { BRAND_INFO } from '../../lib/constants';

const BUDGET_RANGES = [
  '₹25,000 - ₹50,000 / mo',
  '₹50,000 - ₹1,00,000 / mo',
  '₹1,00,000 - ₹2,50,000 / mo',
  '₹2,50,000+ / Custom Scope',
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Social Media Marketing',
    budget: '₹50,000 - ₹1,00,000 / mo',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setFormData({ ...formData, service: serviceTitle });
  };

  const handleBudgetSelect = (budgetRange: string) => {
    setFormData({ ...formData, budget: budgetRange });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please fill in your Name, Email, and Phone Number.');
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#F8FAF8] rounded-3xl p-8 sm:p-12 border border-[#E5E7E5] text-center space-y-6 shadow-md">
        <div className="w-16 h-16 rounded-2xl bg-[#008000]/10 text-[#008000] mx-auto flex items-center justify-center border border-[#008000]/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008000] bg-[#008000]/10 px-3 py-1 rounded-full">
            INQUIRY RECEIVED
          </span>
          <h3 className="text-3xl font-extrabold text-[#111111]">
            We'll Connect Within 2 Hours
          </h3>
          <p className="text-sm text-[#666666] max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. Our growth team is reviewing your requirements for <strong>{formData.service}</strong> and will reach out shortly.
          </p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-[#E5E7E5] max-w-sm mx-auto text-left text-xs space-y-1 text-[#555555]">
          <div><strong>Selected Service:</strong> {formData.service}</div>
          <div><strong>Budget Tier:</strong> {formData.budget}</div>
          <div><strong>Direct Contact:</strong> {formData.phone}</div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                service: 'Social Media Marketing',
                budget: '₹50,000 - ₹1,00,000 / mo',
                details: ''
              });
            }}
            className="text-xs font-semibold text-[#008000] hover:underline cursor-pointer"
          >
            ← Submit Another Project Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7E5] shadow-xl space-y-6">
      {/* Header & Direct WhatsApp Fast Track */}
      <div className="border-b border-[#E5E7E5] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-extrabold text-[#111111] tracking-tight">
            Start a Growth Project
          </h3>
          <p className="text-xs text-[#666666] mt-1">
            Tell us about your brand goals to receive a tailored strategy proposal.
          </p>
        </div>

        <a
          href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Getup%20Digital,%20I'd%20like%20to%20discuss%20a%20marketing%20project`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 border border-[#25D366]/30 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors shrink-0"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>Quick Chat on WhatsApp</span>
        </a>
      </div>

      {error && (
        <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Service Selection Interactive Pills */}
      <div className="space-y-2.5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
          1. Select Your Primary Objective
        </label>
        <div className="flex flex-wrap gap-2">
          {servicesData.map((s) => {
            const isSelected = formData.service === s.title;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => handleServiceSelect(s.title)}
                className={`text-xs px-3.5 py-2 rounded-xl border transition-all font-medium cursor-pointer text-left ${isSelected
                    ? 'bg-[#008000] text-white border-[#008000] shadow-xs'
                    : 'bg-[#F8FAF8] text-[#333333] border-[#E5E7E5] hover:border-[#008000]/40'
                  }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget Tier Pills */}
      <div className="space-y-2.5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
          2. Estimated Monthly Growth Budget
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {BUDGET_RANGES.map((b) => {
            const isSelected = formData.budget === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => handleBudgetSelect(b)}
                className={`text-xs p-3 rounded-xl border transition-all font-medium cursor-pointer text-left ${isSelected
                    ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                    : 'bg-[#F8FAF8] text-[#444444] border-[#E5E7E5] hover:border-neutral-400'
                  }`}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Senthil Kumar"
            className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
            Company / Brand
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Siva Biryani / VEV Industries"
            className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. senthil@brand.com"
            className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors"
            required
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-1.5">
        <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
          Project Details & Current Bottlenecks
        </label>
        <textarea
          id="details"
          name="details"
          rows={3}
          value={formData.details}
          onChange={handleChange}
          placeholder="What are your primary goals? (e.g. increase walk-in customers, scale online sales, rebrand social identity...)"
          className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7E5] text-sm text-[#111111] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors resize-none"
        ></textarea>
      </div>

      <div className="space-y-3 pt-2">
        <Button type="submit" variant="primary" size="lg" className="w-full" showArrow>
          Submit Growth Inquiry
        </Button>

        <div className="flex items-center justify-center space-x-4 text-xs text-[#777777] pt-2">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#008000]" />
            2-Hour Response Time
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#008000]" />
            100% Confidential
          </span>
        </div>
      </div>
    </form>
  );
};
