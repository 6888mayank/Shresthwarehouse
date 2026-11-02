import React from 'react';
import { CheckCircle2, Milestone } from 'lucide-react';
import { ROADMAP_GOALS } from '../data/content';

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#245B91] text-xs font-bold uppercase tracking-wider mb-3">
            <Milestone className="w-3.5 h-3.5 text-[#F28C28]" />
            Strategic Horizons
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight mb-4">
            Growing Today. Building Tomorrow.
          </h2>
          <p className="text-base sm:text-lg text-[#5A6578] font-normal leading-relaxed">
            Our multi-year developmental roadmap outlines planned strategic milestones as company goals to scale operational excellence, digital integration, and regional expansion.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#F28C28]" />
            <span>Presented as verified company roadmap goals</span>
          </div>
        </div>

        {/* 3-Phase Roadmap Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {ROADMAP_GOALS.map((goal, idx) => {
            const isCurrent = goal.year === '2026';
            return (
              <div
                key={goal.year}
                className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative shadow-sm hover:shadow-xl ${
                  isCurrent
                    ? 'bg-gradient-to-b from-blue-50/70 to-white border-[#245B91]/40 ring-1 ring-[#245B91]/30'
                    : 'bg-[#F4F7FA] border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Status Badge & Year */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-[#102B4E]">
                      {goal.year}
                    </span>
                    <span
                      className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                        goal.status === 'In Progress'
                          ? 'bg-[#F28C28] text-white shadow-sm'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {goal.status}
                    </span>
                  </div>

                  {/* Phase & Title */}
                  <div className="text-xs font-bold text-[#245B91] uppercase tracking-wider mb-1">
                    {goal.phase}
                  </div>
                  <h3 className="text-xl font-bold text-[#102B4E] mb-6">
                    {goal.title}
                  </h3>

                  {/* Key Roadmap Items */}
                  <div className="space-y-4">
                    {goal.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isCurrent ? 'text-[#F28C28]' : 'text-slate-400'
                          }`}
                        />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer milestone indicator */}
                <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Milestone 0{idx + 1}</span>
                  <span className="text-[#102B4E]">Roadmap Target</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
