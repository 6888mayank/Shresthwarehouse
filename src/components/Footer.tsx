import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1C33] text-white pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#245B91]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F28C28]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Message Banner */}
        <div className="mb-14 pb-12 border-b border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F28C28] mb-1.5 block">
              Enterprise Mission
            </span>
            <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
              "{COMPANY_INFO.coreMessage}"
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white/10 hover:bg-[#F28C28] text-white transition-colors duration-200 shrink-0 flex items-center gap-2 text-xs font-bold"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* 4-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" showTagline={true} />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mt-3">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering online sellers, D2C merchants, and MSMEs across Eastern India with dependable storage, accurate inventory control, and swift courier handovers.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-blue-200 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#F28C28]" />
              <span>Registered Corporate Entity • Jharkhand</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F28C28]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Process Workflow</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">Cost Estimator</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-white transition-colors">Leadership Team</a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">Growth Roadmap</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F28C28]">
              Our Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">E-Commerce Warehousing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Inventory Management</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Order Fulfillment</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Packaging & Dispatch Support</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Flexible 3PL Solutions</a>
              </li>
              <li>
                <a href="#contact" className="text-orange-300 hover:text-white transition-colors">Custom Regional Staging</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F28C28]">
              Operational Office & Hub
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F28C28] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F28C28] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="pt-2 text-xs text-slate-400">
                Operating Hours: {COMPANY_INFO.operatingHours}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">{COMPANY_INFO.name}</strong>. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
