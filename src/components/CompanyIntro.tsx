import React from 'react';
import { CheckCircle2, ArrowRight, MapPin, Building, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface CompanyIntroProps {
  onLearnMore?: () => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Decorative subtle backdrop elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Operational Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="/images/inventory-scanning.jpg"
                alt="Shresth Warehouse Inventory Management & Operations"
                className="w-full h-[440px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102B4E]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge at bottom of image with Official Logo Emblem */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/images/logo-emblem.png" alt="Shresth Warehouse Emblem" className="w-10 h-10 object-contain shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#F28C28] uppercase tracking-wider">
                      Regional Operational Hub
                    </div>
                    <div className="text-sm font-bold text-[#102B4E]">
                      Ghatshila, East Singhbhum
                    </div>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#102B4E] flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-4 h-4 text-[#F28C28]" />
                </div>
              </div>
            </div>

            {/* Floating Floating Stat Box */}
            <div className="absolute -top-6 -left-4 sm:-left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-[260px] animate-bounce-subtle">
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-[#F28C28]" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Fulfillment SLA</div>
                <div className="text-sm font-extrabold text-[#102B4E]">Same-Day Staging & Dispatch</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Company Content */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#245B91] text-xs font-bold uppercase tracking-wider mb-4">
              <Building className="w-3.5 h-3.5 text-[#F28C28]" />
              About Shresth Warehouse Pvt. Ltd.
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-6">
              Your Trusted Partner in Modern E-Commerce Fulfillment
            </h2>

            {/* Verified Content from user prompt */}
            <div className="space-y-4 text-base sm:text-lg text-[#252B35]/85 leading-relaxed font-normal">
              <p>
                <strong className="text-[#102B4E] font-semibold">{COMPANY_INFO.name}</strong> is an emerging e-commerce warehousing and fulfillment solutions provider based in <span className="text-[#102B4E] font-medium">Ghatshila, East Singhbhum, Jharkhand</span>.
              </p>
              <p>
                We help online sellers and businesses simplify their logistics operations through secure storage, inventory management, order processing, packaging, and dispatch services.
              </p>
              <p>
                With a focus on operational efficiency and technology-driven logistics, we aim to build a scalable regional fulfillment network that supports businesses in growing markets.
              </p>
            </div>

            {/* Value Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F7FA] border border-slate-200/70">
                <CheckCircle2 className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#102B4E]">
                  Regional Warehousing Closer to Eastern Markets
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F7FA] border border-slate-200/70">
                <CheckCircle2 className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#102B4E]">
                  Tailored Storage for MSMEs & D2C Sellers
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F7FA] border border-slate-200/70">
                <CheckCircle2 className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#102B4E]">
                  Accurate SKU Handling & Inventory Control
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F7FA] border border-slate-200/70">
                <CheckCircle2 className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#102B4E]">
                  Professional Pick, Pack & Courier Coordination
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 bg-[#102B4E] hover:bg-[#245B91] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#F28C28]" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[#245B91] hover:text-[#102B4E] font-bold px-4 py-3 rounded-xl transition-colors text-sm sm:text-base group"
              >
                <span>View All Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
