import React from 'react';
import { MapPin, CircleDollarSign, Maximize, Headphones, TrendingUp, Zap, Check, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#F28C28]" />;
      case 'CircleDollarSign':
        return <CircleDollarSign className="w-6 h-6 text-[#F28C28]" />;
      case 'Maximize':
        return <Maximize className="w-6 h-6 text-[#F28C28]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#F28C28]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#F28C28]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#F28C28]" />;
      default:
        return <Check className="w-6 h-6 text-[#F28C28]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#F28C28] text-xs font-bold uppercase tracking-wider mb-3">
            Competitive Edge & Operational Values
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight mb-4">
            Why Growing Businesses Choose Shresth Warehouse
          </h2>
          <p className="text-base sm:text-lg text-[#5A6578] font-normal leading-relaxed">
            We solve the core operational bottlenecks of emerging e-commerce sellers—offering regional proximity, transparent costs, flexible space, and personalized support.
          </p>
        </div>

        {/* 6 Key Advantage Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="group p-8 rounded-2xl bg-[#F4F7FA] border border-slate-200/80 hover:border-[#F28C28]/50 hover:bg-white hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Icon & Counter */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 p-3.5 rounded-xl bg-white border border-slate-200/80 group-hover:border-orange-200 group-hover:bg-orange-50/50 shadow-sm transition-colors duration-300 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-extrabold text-slate-300 group-hover:text-[#F28C28] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Subtitle tag */}
                <div className="text-xs font-bold text-[#245B91] uppercase tracking-wider mb-1.5">
                  {item.subtitle}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#102B4E] mb-3 group-hover:text-[#245B91] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5A6578] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Indicator bar */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-500">
                <span>Verified Capability</span>
                <span className="w-2 h-2 rounded-full bg-[#F28C28]" />
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Regional Advantage Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#102B4E] to-[#183C6C] text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F28C28] text-white text-xs font-bold uppercase tracking-wider mb-3">
                Strategic Eastern India Corridor
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Reach Regional Customers 1–2 Days Faster
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                By staging stock locally in Ghatshila (East Singhbhum), you avoid the transit lag and higher shipping slabs of dispatching solely from northern or western mega-hubs.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#F28C28] hover:bg-[#d9771e] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <span>Partner With Us Today</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
