import React from 'react';
import { ShoppingCart, Sparkles, Building2, Store, Building, Smartphone, Check } from 'lucide-react';
import { INDUSTRIES } from '../data/content';

export const IndustriesServed: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-[#245B91]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#F28C28]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#245B91]" />;
      case 'Store':
        return <Store className="w-6 h-6 text-[#F28C28]" />;
      case 'Building':
        return <Building className="w-6 h-6 text-[#245B91]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#F28C28]" />;
      default:
        return <ShoppingCart className="w-6 h-6 text-[#245B91]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F4F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#245B91] text-xs font-bold uppercase tracking-wider mb-3">
            Market Sectors
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight mb-4">
            Supporting Businesses Across Multiple Industries
          </h2>
          <p className="text-base sm:text-lg text-[#5A6578] font-normal leading-relaxed">
            Whether you are an emerging direct-to-consumer brand, a seasoned marketplace vendor, or a regional wholesale supplier, our facilities adapt to your sector.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INDUSTRIES.map((ind, index) => (
            <div
              key={ind.name}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 group-hover:bg-blue-50/60 flex items-center justify-center transition-colors">
                    {getIcon(ind.icon)}
                  </div>
                  <span className="text-xs font-extrabold text-slate-300">
                    Sector 0{index + 1}
                  </span>
                </div>

                <div className="text-xs font-bold text-[#F28C28] uppercase tracking-wide mb-1">
                  {ind.tagline}
                </div>

                <h3 className="text-xl font-bold text-[#102B4E] mb-3 group-hover:text-[#245B91] transition-colors">
                  {ind.name}
                </h3>

                <p className="text-sm text-[#5A6578] leading-relaxed mb-6">
                  {ind.description}
                </p>
              </div>

              {/* Highlights Chips */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {ind.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                  >
                    <Check className="w-3 h-3 text-[#F28C28]" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
