import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shresth Warehouse, I would like to inquire about warehousing and order fulfillment services for my business.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white text-[#102B4E] shadow-lg border border-slate-200 hover:bg-slate-50 flex items-center justify-center transition-all duration-200 transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Call Button (Mobile & Desktop) */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="w-12 h-12 rounded-full bg-[#102B4E] hover:bg-[#245B91] text-white shadow-xl flex items-center justify-center transition-all duration-200 transform hover:scale-105"
        aria-label="Call Shresth Warehouse"
        title="Call +91 9470511428"
      >
        <Phone className="w-5 h-5 text-[#F28C28]" />
      </a>

      {/* WhatsApp Floating Chat Button */}
      <button
        type="button"
        onClick={handleWhatsApp}
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </div>
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
};
