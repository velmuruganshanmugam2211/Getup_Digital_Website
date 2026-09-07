import React, { useState } from 'react';
import { Button } from '../common/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { servicesData } from '../../data/serviceData';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Social Media Marketing',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please fill in your Name, Email, and Phone Number.');
      return;
    }

    // Frontend validation pass
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#F6F7F5] rounded-3xl p-8 sm:p-12 border border-[#E5E7E5] text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#008000]/10 text-[#008000] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-extrabold text-[#111111]">
          Thanks! We'll get back to you soon.
        </h3>
        <p className="text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to Getup Digital Solution. Our team will review your inquiry details and contact you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              company: '',
              phone: '',
              email: '',
              service: 'Social Media Marketing',
              details: ''
            });
          }}
          className="text-xs font-semibold text-[#008000] hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7E5] shadow-xl space-y-6">
      <div className="border-b border-[#E5E7E5] pb-4">
        <h3 className="text-2xl font-bold text-[#111111]">Send an Inquiry</h3>
        <p className="text-xs text-[#6B7280] mt-1">Fill out the project details below to request a strategic proposal.</p>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Siva Kumar"
            className="w-full px-4 py-3 rounded-xl bg-[#F6F7F5] border border-[#E5E7E5] text-sm text-[#222222] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors"
            required
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
            Company / Brand Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Siva Biryani Karur"
            className="w-full px-4 py-3 rounded-xl bg-[#F6F7F5] border border-[#E5E7E5] text-sm text-[#222222] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            className="w-full px-4 py-3 rounded-xl bg-[#F6F7F5] border border-[#E5E7E5] text-sm text-[#222222] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. name@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#F6F7F5] border border-[#E5E7E5] text-sm text-[#222222] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors"
            required
          />
        </div>
      </div>

      {/* Service Dropdown */}
      <div className="space-y-2">
        <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
          Select Primary Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-[#F6F7F5] border border-[#E5E7E5] text-sm text-[#222222] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors cursor-pointer"
        >
          {servicesData.map((s) => (
            <option key={s.id} value={s.title}>
              {s.number} — {s.title}
            </option>
          ))}
        </select>
      </div>

      {/* Project Details */}
      <div className="space-y-2">
        <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
          Project Details & Objectives
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          value={formData.details}
          onChange={handleChange}
          placeholder="Tell us about your brand, target audience, budget, or timeline..."
          className="w-full px-4 py-3 rounded-xl bg-[#F6F7F5] border border-[#E5E7E5] text-sm text-[#222222] focus:outline-none focus:border-[#008000] focus:ring-1 focus:ring-[#008000] transition-colors resize-none"
        ></textarea>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" showArrow>
        Send Enquiry
      </Button>
    </form>
  );
};
