import React from 'react';
import { ArrowRight, Warehouse, Boxes, PackageCheck, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center bg-[#0B1C33] text-white overflow-hidden">
      {/* Background Hero Image with Deep Navy & Royal Blue Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-warehouse.jpg"
          alt="Modern E-Commerce Warehousing Facility"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms]"
        />
        {/* Layered Gradient Overlays for High Legibility & Enterprise Aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C33]/95 via-[#102B4E]/85 to-[#0B1C33]/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C33] via-transparent to-transparent opacity-80" />
        
        {/* Subtle Geometric Supply Chain Grid Lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F28C28_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Official Brand Identity Card & Tagline */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="bg-white px-3.5 py-1.5 rounded-xl shadow-lg border border-white/20 flex items-center">
              <img
                src="/images/logo-transparent.png"
                alt="Shresth Warehouse Pvt. Ltd. Official Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-blue-200 shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-[#F28C28] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#F28C28]" />
              <span className="tracking-wide">
                {COMPANY_INFO.tagline}
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Smart Warehousing.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-100">
              Seamless Fulfillment.
            </span>{' '}
            <span className="text-[#F28C28] block sm:inline">
              Faster Business Growth.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 font-normal leading-relaxed mb-8 max-w-2xl">
            Empowering e-commerce sellers, D2C brands, and growing businesses with reliable warehousing, intelligent inventory management, and end-to-end order fulfillment solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F28C28] hover:bg-[#d9771e] text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5 text-base"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenQuoteModal) {
                  e.preventDefault();
                  onOpenQuoteModal();
                }
              }}
              className="inline-flex items-center justify-center gap-2.5 bg-white/15 hover:bg-white/25 text-white font-semibold px-7 py-4 rounded-xl border border-white/25 backdrop-blur-md shadow-md transition-all duration-200 hover:-translate-y-0.5 text-base"
            >
              <span>Get a Business Quote</span>
            </a>
          </div>

          {/* Location & Reliability Micro-badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mb-8 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F28C28]" />
              <span>Ghatshila Hub, East Singhbhum (Jharkhand)</span>
            </div>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Tailored for MSMEs, D2C & Regional E-Commerce</span>
            </div>
          </div>
        </div>

        {/* 3 Service Highlights Cards */}
        <div className="mt-6 pt-6 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Highlight 1 */}
          <a
            href="#ecommerce-warehousing"
            className="group p-5 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#F28C28]/60 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#245B91]/60 flex items-center justify-center mb-3 group-hover:bg-[#F28C28] transition-colors duration-300">
              <Warehouse className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                E-Commerce Warehousing
              </h3>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#F28C28] group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Secure, organized, and scalable storage infrastructure ready for online sellers and retail merchants.
            </p>
          </a>

          {/* Highlight 2 */}
          <a
            href="#inventory-management"
            className="group p-5 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#F28C28]/60 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#245B91]/60 flex items-center justify-center mb-3 group-hover:bg-[#F28C28] transition-colors duration-300">
              <Boxes className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                Inventory Management
              </h3>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#F28C28] group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Organized stock handling, SKU tracking, and cycle control to eliminate mismatches and stock-outs.
            </p>
          </a>

          {/* Highlight 3 */}
          <a
            href="#order-fulfillment"
            className="group p-5 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#F28C28]/60 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#245B91]/60 flex items-center justify-center mb-3 group-hover:bg-[#F28C28] transition-colors duration-300">
              <PackageCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                Order Fulfillment & 3PL
              </h3>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#F28C28] group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Fast pick, pack, verified packaging, and courier dispatch coordination for seamless order delivery.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
