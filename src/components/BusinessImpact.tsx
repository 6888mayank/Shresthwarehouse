import React from 'react';
import { TrendingUp, CheckCircle2 } from 'lucide-react';
import { BUSINESS_IMPACT } from '../data/content';

export const BusinessImpact: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#F28C28] text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            Socio-Economic Development
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight mb-4">
            {BUSINESS_IMPACT.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#5A6578] font-normal leading-relaxed">
            {BUSINESS_IMPACT.intro}
          </p>
        </div>

        {/* Projected Expansion Targets Bar (Clearly Labelled as Projections) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {BUSINESS_IMPACT.projectedTargets.map((stat, sIdx) => (
            <div
              key={sIdx}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#102B4E] to-[#183C6C] text-white shadow-lg text-center relative overflow-hidden"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#F28C28] tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-base font-bold text-white mb-2">
                {stat.label}
              </div>
              <div className="inline-block text-[11px] font-extrabold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-blue-200 border border-white/15">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

        {/* 5 Impact Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_IMPACT.points.map((point, pIdx) => (
            <div
              key={pIdx}
              className="p-6 rounded-2xl bg-[#F4F7FA] border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-orange-200 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#F28C28] shrink-0" />
                <h4 className="text-base font-bold text-[#102B4E]">
                  {point.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}

          {/* Callout box for local entrepreneurs */}
          <div className="p-6 rounded-2xl bg-gradient-to-tr from-blue-50 to-orange-50 border border-orange-200/70 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-[#F28C28] uppercase tracking-wider mb-2">
                Local MSME Priority
              </div>
              <h4 className="text-base font-bold text-[#102B4E] mb-2">
                Are you a local producer in Jharkhand?
              </h4>
              <p className="text-xs text-[#5A6578] leading-relaxed">
                Get priority onboarding support and custom storage guidance to take your products to national e-commerce channels.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-orange-200/50">
              <a
                href="#contact"
                className="text-xs font-bold text-[#102B4E] hover:text-[#F28C28] inline-flex items-center gap-1"
              >
                Inquire About Local Partnership →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
