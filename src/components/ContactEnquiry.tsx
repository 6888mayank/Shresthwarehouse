import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO, SERVICES } from '../data/content';
import type { EnquiryFormData } from '../types';

interface ContactEnquiryProps {
  initialService?: string;
  initialVolume?: string;
  initialMessage?: string;
}

export const ContactEnquiry: React.FC<ContactEnquiryProps> = ({
  initialService = '',
  initialVolume = '',
  initialMessage = ''
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    serviceRequired: initialService || 'E-Commerce Warehousing',
    monthlyOrderVolume: initialVolume || '100 – 500 orders/month',
    message: initialMessage || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update if props change
  React.useEffect(() => {
    if (initialService) setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    if (initialVolume) setFormData((prev) => ({ ...prev, monthlyOrderVolume: initialVolume }));
    if (initialMessage) setFormData((prev) => ({ ...prev, message: initialMessage }));
  }, [initialService, initialVolume, initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in your Full Name, Email, and Phone Number.');
      return;
    }

    setIsSubmitting(true);

    // Save to local storage for persistent logging & download
    try {
      const existing = JSON.parse(localStorage.getItem('shresth_enquiries') || '[]');
      existing.push({
        ...formData,
        id: Date.now(),
        date: new Date().toISOString()
      });
      localStorage.setItem('shresth_enquiries', JSON.stringify(existing));
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#F28C28', '#102B4E', '#245B91']
      });
    }, 600);
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hello Shresth Warehouse Team,\nI am interested in your logistics & fulfillment services.\nName: ${formData.fullName || 'Business Inquiry'}\nCompany: ${formData.businessName || 'N/A'}\nService: ${formData.serviceRequired}\nVolume: ${formData.monthlyOrderVolume}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#245B91] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#F28C28]" />
            Business Connect
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight mb-4">
            Let's Grow Your Business Together
          </h2>
          <p className="text-base sm:text-lg text-[#5A6578] font-normal leading-relaxed">
            Looking for reliable warehousing, inventory management, or e-commerce fulfillment support? Connect with Shresth Warehouse and discuss your business requirements.
          </p>
        </div>

        {/* Contact Layout Grid: Left Company Info & Map Card, Right Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (5 Cols): Verified Details & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Verified Contact Card */}
            <div className="p-8 rounded-3xl bg-[#102B4E] text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                  <div className="bg-white px-3 py-2 rounded-xl shadow-md inline-block">
                    <img
                      src="/images/logo-transparent.png"
                      alt="Shresth Warehouse Pvt. Ltd. Official Logo"
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#F28C28] bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    Verified Hub
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-6">
                  {COMPANY_INFO.name}
                </h3>

                <div className="space-y-5 text-sm">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#F28C28]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200">Registered Facility Location</div>
                      <div className="font-semibold text-white mt-0.5">{COMPANY_INFO.location}</div>
                      <div className="text-xs text-slate-300">Pincode: {COMPANY_INFO.pincode} • Jharkhand, India</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#F28C28]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200">Direct Contact & WhatsApp</div>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="font-bold text-white hover:text-[#F28C28] transition-colors mt-0.5 block text-base"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <div className="text-xs text-slate-300">Direct stakeholder & operations access</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#F28C28]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200">Official Email</div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-semibold text-white hover:text-[#F28C28] transition-colors mt-0.5 block break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#F28C28]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200">Operational Inward & Dispatch Hours</div>
                      <div className="font-semibold text-white mt-0.5">{COMPANY_INFO.operatingHours}</div>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Quick Button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    type="button"
                    onClick={handleWhatsAppChat}
                    className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow transition-all duration-200 hover:-translate-y-0.5 text-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp Directly</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Regional Route & Connectivity Card */}
            <div className="p-6 rounded-3xl bg-[#F4F7FA] border border-slate-200">
              <h4 className="text-sm font-bold text-[#102B4E] uppercase tracking-wider mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F28C28]" />
                Strategic Transit Connectivity
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Strategically positioned in Ghatshila (East Singhbhum) along the vital NH-18 and NH-49 arterial transport corridors, connecting Jamshedpur industrial belt, Ranchi, Kharagpur, Kolkata, and the broader Eastern logistics network.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
                  🚗 ~45 km from Jamshedpur
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
                  🚛 Direct NH Highway Access
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols): Professional Business Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F4F7FA] rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#102B4E]">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#102B4E]">{formData.fullName}</strong>. Our business operations team has received your details and will review your requirements for <strong>{formData.serviceRequired}</strong>. We will get in touch shortly via phone or email.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppChat}
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-3 rounded-xl shadow transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow-Up on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        serviceRequired: 'E-Commerce Warehousing',
                        monthlyOrderVolume: '100 – 500 orders/month',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 bg-white text-slate-700 text-xs font-bold px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-[#102B4E]">
                    Request a Customized Business Quote
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your logistics details below. We respond promptly with customized volume rates.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Mahato"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#252B35] focus:outline-none focus:ring-2 focus:ring-[#245B91] transition"
                    />
                  </div>

                  {/* Company / Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-1.5">
                      Company / Business Name *
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Bharat Craft Essentials"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#252B35] focus:outline-none focus:ring-2 focus:ring-[#245B91] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@business.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#252B35] focus:outline-none focus:ring-2 focus:ring-[#245B91] transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#252B35] focus:outline-none focus:ring-2 focus:ring-[#245B91] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Required */}
                  <div>
                    <label htmlFor="serviceRequired" className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-1.5">
                      Service Required (Dropdown)
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#252B35] focus:outline-none focus:ring-2 focus:ring-[#245B91] transition"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="End-to-End 3PL Fulfillment">End-to-End 3PL Fulfillment</option>
                      <option value="Custom Storage Space Requirement">Custom Storage Space Requirement</option>
                    </select>
                  </div>

                  {/* Estimated Monthly Order Volume */}
                  <div>
                    <label htmlFor="monthlyOrderVolume" className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-1.5">
                      Estimated Monthly Order Volume
                    </label>
                    <select
                      id="monthlyOrderVolume"
                      name="monthlyOrderVolume"
                      value={formData.monthlyOrderVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#252B35] focus:outline-none focus:ring-2 focus:ring-[#245B91] transition"
                    >
                      <option value="Under 100 orders/month">Under 100 orders/month</option>
                      <option value="100 – 500 orders/month">100 – 500 orders/month</option>
                      <option value="500 – 2,000 orders/month">500 – 2,000 orders/month</option>
                      <option value="2,000 – 5,000 orders/month">2,000 – 5,000 orders/month</option>
                      <option value="5,000+ orders/month (High Scale)">5,000+ orders/month (High Scale)</option>
                    </select>
                  </div>
                </div>

                {/* Message / Business Requirements */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-1.5">
                    Message / Business Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your product categories, storage sq.ft./pallet requirements, marketplace channels, or launch timelines..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#252B35] focus:outline-none focus:ring-2 focus:ring-[#245B91] transition"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#F28C28] hover:bg-[#d9771e] text-white font-extrabold py-4 px-6 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5 text-base cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting Details...' : 'Submit Business Enquiry'}</span>
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2.5">
                    🔒 We respect your business privacy. Your operational details are kept strictly confidential.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
