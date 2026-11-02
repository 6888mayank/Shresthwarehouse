import React from 'react';
import { Target, Compass, Sparkles } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#102B4E] text-white relative overflow-hidden">
      {/* Background aesthetic touches */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#245B91]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#F28C28]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F28C28] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Guiding Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Purpose, Vision & Strategic Mission
          </h2>
        </div>

        {/* Side-by-Side Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 hover:border-[#F28C28]/60 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#245B91]/80 group-hover:bg-[#F28C28] transition-colors duration-300 flex items-center justify-center mb-6 shadow-lg">
                <Compass className="w-7 h-7 text-white" />
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-2">
                Long-Term Aspiration
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Our Vision
              </h3>

              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal italic border-l-2 border-[#F28C28] pl-4">
                "To become a trusted logistics and fulfillment partner by developing efficient, scalable, and technology-enabled warehousing infrastructure across emerging markets."
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-blue-200 font-semibold">
              <span>Emerging Market Focus</span>
              <span>Regional Empowerment</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 hover:border-[#F28C28]/60 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#245B91]/80 group-hover:bg-[#F28C28] transition-colors duration-300 flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-orange-300 mb-2">
                Daily Operational Commitment
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Our Mission
              </h3>

              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal italic border-l-2 border-[#F28C28] pl-4">
                "To empower businesses with reliable, cost-effective, and customer-focused fulfillment solutions that improve inventory management and delivery efficiency."
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-blue-200 font-semibold">
              <span>Customer-Centric Operations</span>
              <span>Reliable Delivery Efficiency</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
