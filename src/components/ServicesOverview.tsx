import React from 'react';
import { Warehouse, Boxes, PackageCheck, Truck, Layers, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/content';
import type { ServiceItem } from '../types';

interface ServicesOverviewProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Warehouse':
        return <Warehouse className="w-7 h-7 text-white" />;
      case 'Boxes':
        return <Boxes className="w-7 h-7 text-white" />;
      case 'PackageCheck':
        return <PackageCheck className="w-7 h-7 text-white" />;
      case 'Truck':
        return <Truck className="w-7 h-7 text-white" />;
      case 'Layers':
        return <Layers className="w-7 h-7 text-white" />;
      default:
        return <Warehouse className="w-7 h-7 text-white" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F4F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#245B91] text-xs font-bold uppercase tracking-wider mb-3">
            Core Service Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight mb-4">
            Complete Warehousing & Fulfillment Solutions Under One Roof
          </h2>
          <p className="text-base sm:text-lg text-[#5A6578] font-normal leading-relaxed">
            From inbound stock receiving to order processing, custom packaging, and courier dispatch—we provide end-to-end logistics infrastructure engineered for growing brands.
          </p>
        </div>

        {/* 5 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0 || index === 2; // E-Commerce Warehousing & Order Fulfillment
            return (
              <div
                key={service.id}
                id={service.id}
                className={`group rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-xl hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'border-blue-200/80 ring-1 ring-blue-100'
                    : 'border-slate-200'
                }`}
              >
                {/* Accent top stripe */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#102B4E] via-[#245B91] to-[#F28C28] group-hover:h-2 transition-all duration-300" />

                <div className="p-7">
                  {/* Service Icon with Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#102B4E] group-hover:bg-[#F28C28] transition-colors duration-300 flex items-center justify-center shadow-md">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-[#245B91] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#102B4E] mb-3 group-hover:text-[#245B91] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#5A6578] leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Key Features preview */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#F28C28] shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Service Action */}
                <div className="px-7 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between group-hover:bg-blue-50/50 transition-colors">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#102B4E] group-hover:text-[#F28C28] transition-colors focus:outline-none"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Learn More
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Customized Enterprise / Hybrid Requirement Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#102B4E] to-[#0B1C33] text-white p-7 flex flex-col justify-between shadow-lg relative overflow-hidden border border-blue-900">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F28C28]/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                <Layers className="w-7 h-7 text-[#F28C28]" />
              </div>
              <span className="text-xs font-bold text-[#F28C28] uppercase tracking-wider">
                Custom Logistics Architecture
              </span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">
                Need a Custom Warehousing Plan?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Have specific storage sq.ft., pallet configurations, or specialized packaging protocols? We tailor solutions for MSMEs, regional distributors, and growing brands.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d9771e] text-white font-bold py-3 px-4 rounded-xl shadow transition-colors text-sm"
              >
                <span>Request Custom Solution</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
