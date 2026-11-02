import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const InfrastructureTech: React.FC = () => {
  const pillars = [
    {
      title: "Organized Warehouse Operations",
      desc: "Structured floor layout with designated receiving bays, categorized rack storage, high-density pick zones, and safety protocols."
    },
    {
      title: "Inventory & Stock Management",
      desc: "Meticulous stock tracking at SKU levels, periodic cycle counts, and disciplined stock replenishment to safeguard availability."
    },
    {
      title: "Order Processing Systems",
      desc: "Systematic picklist generation, verified item identification, and error-prevention steps before packaging and dispatch."
    },
    {
      title: "Dispatch Management",
      desc: "Organized dispatch bay coordination with prompt handover manifests and daily scheduled logistics pickups."
    },
    {
      title: "Technology-Enabled Inventory Tracking",
      desc: "Active roadmap and phased implementation of digital SKU scanning, digital audit logging, and inventory visibility."
    },
    {
      title: "Scalable Fulfillment Infrastructure",
      desc: "Modular shelving and flexible operational capability designed to adapt seamlessly as client order volume ramps up."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#245B91] text-xs font-bold uppercase tracking-wider mb-3">
            Operational Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight mb-4">
            Building Smarter Warehousing Infrastructure
          </h2>
          <p className="text-base sm:text-lg text-[#5A6578] font-normal leading-relaxed">
            Our operational model focuses on organized warehousing, inventory handling, order processing, and dispatch management. We are continuously working towards technology-enabled inventory systems and scalable fulfillment operations.
          </p>
        </div>

        {/* Visual Showcase + Operational Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900 group">
              <img
                src="/images/dispatch-hub.jpg"
                alt="Shresth Warehouse Packaging and Dispatch Operations"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-5 bg-gradient-to-t from-[#102B4E] to-[#183C6C] text-white">
                <div className="text-xs font-bold text-[#F28C28] uppercase tracking-wider">
                  Dispatch & Quality Control Bay
                </div>
                <div className="text-sm font-semibold mt-1">
                  Standardized Packing & Courier Staging
                </div>
              </div>
            </div>

            {/* Credibility & Transparency Box */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#245B91] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-[#102B4E] font-semibold">Authentic Logistics Capability:</strong>{' '}
                  We believe in complete transparency with our clients. We present verified, hands-on operational practices and a committed technology roadmap without inflated automation claims.
                </div>
              </div>
            </div>
          </div>

          {/* Pillars List (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F4F7FA] border border-slate-200/80 hover:bg-white hover:border-[#245B91]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0" />
                  <h4 className="text-base font-bold text-[#102B4E]">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-[#5A6578] leading-relaxed pl-6">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
