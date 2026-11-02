import React from 'react';
import { X, Check, ArrowRight, Warehouse, Boxes, PackageCheck, Truck, Layers } from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onRequestQuote }) => {
  if (!service) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Warehouse':
        return <Warehouse className="w-8 h-8 text-white" />;
      case 'Boxes':
        return <Boxes className="w-8 h-8 text-white" />;
      case 'PackageCheck':
        return <PackageCheck className="w-8 h-8 text-white" />;
      case 'Truck':
        return <Truck className="w-8 h-8 text-white" />;
      case 'Layers':
        return <Layers className="w-8 h-8 text-white" />;
      default:
        return <Warehouse className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with Navy Gradient */}
        <div className="bg-gradient-to-r from-[#102B4E] to-[#245B91] p-6 sm:p-8 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-between mb-4 pr-10">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
              {getIcon(service.icon)}
            </div>
            <div className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
              <img src="/images/logo-emblem.png" alt="Shresth Warehouse Emblem" className="w-6 h-6 object-contain" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-blue-200">
                Shresth Warehouse
              </span>
            </div>
          </div>

          <div className="text-xs font-bold uppercase tracking-widest text-[#F28C28] mb-1">
            Service Specification
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {service.title}
          </h3>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {service.fullDesc}
            </p>
          </div>

          {/* Operational Features */}
          <div>
            <h4 className="text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-3">
              Standard Operational Workflow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4F7FA] border border-slate-200/60 text-xs text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Benefits */}
          <div>
            <h4 className="text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-3">
              Direct Business Advantages
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#245B91] mt-2 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For */}
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80">
            <span className="text-xs font-bold text-[#F28C28] uppercase tracking-wider block mb-1">
              Recommended For
            </span>
            <p className="text-xs font-semibold text-[#102B4E]">
              {service.idealFor}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onRequestQuote(service.title);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d9771e] text-white text-sm font-bold px-6 py-3 rounded-xl shadow transition"
            >
              <span>Enquire for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
