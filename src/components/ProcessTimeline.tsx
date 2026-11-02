import React, { useState } from 'react';
import { PackagePlus, ShieldCheck, FileCheck2, ShoppingBag, Send, UserCheck, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName: string, isActive: boolean) => {
    const iconClass = `w-6 h-6 ${isActive ? 'text-white' : 'text-[#245B91]'}`;
    switch (iconName) {
      case 'PackagePlus':
        return <PackagePlus className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'FileCheck2':
        return <FileCheck2 className={iconClass} />;
      case 'ShoppingBag':
        return <ShoppingBag className={iconClass} />;
      case 'Send':
        return <Send className={iconClass} />;
      case 'UserCheck':
        return <UserCheck className={iconClass} />;
      default:
        return <CheckCircle2 className={iconClass} />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F4F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#245B91] text-xs font-bold uppercase tracking-wider mb-3">
            Operational Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight mb-4">
            From Storage to Dispatch – Simplifying Every Step
          </h2>
          <p className="text-base sm:text-lg text-[#5A6578] font-normal leading-relaxed">
            Our systematic 6-step fulfillment lifecycle ensures error-free handling, accurate stock reconciliation, and prompt customer deliveries.
          </p>
        </div>

        {/* Step Indicator Nav for Desktop */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-12 relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-200 -translate-y-1/2 z-0" />

          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center group focus:outline-none"
              >
                {/* Node Circle */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    isActive
                      ? 'bg-[#F28C28] ring-4 ring-orange-200 scale-110 shadow-lg'
                      : isCompleted
                      ? 'bg-[#102B4E] text-white'
                      : 'bg-white border-2 border-slate-200 group-hover:border-[#245B91]'
                  }`}
                >
                  {getStepIcon(step.icon, isActive || isCompleted)}
                </div>

                {/* Step Number & Title */}
                <span
                  className={`mt-3 text-xs font-extrabold uppercase tracking-wider transition-colors ${
                    isActive ? 'text-[#F28C28]' : 'text-slate-400'
                  }`}
                >
                  Step {step.step}
                </span>
                <span
                  className={`text-sm font-bold mt-1 text-center line-clamp-1 transition-colors ${
                    isActive ? 'text-[#102B4E]' : 'text-slate-600'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Highlight Card for Desktop */}
        <div className="hidden lg:block bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200/80 mb-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-4 border-r border-slate-100 pr-8">
              <span className="text-4xl font-extrabold text-[#F28C28]">
                {PROCESS_STEPS[activeStep].step}
              </span>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1 mb-2">
                Operational Milestone
              </div>
              <h3 className="text-2xl font-bold text-[#102B4E]">
                {PROCESS_STEPS[activeStep].title}
              </h3>
              <p className="text-sm text-[#5A6578] mt-3 leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            <div className="col-span-8 pl-4">
              <div className="text-xs font-bold uppercase text-[#245B91] tracking-wider mb-4">
                What Happens at This Stage
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PROCESS_STEPS[activeStep].details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-4 rounded-2xl bg-[#F4F7FA] border border-slate-200/60 flex flex-col justify-between"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-[#245B91] flex items-center justify-center text-xs font-bold mb-3">
                      {dIdx + 1}
                    </div>
                    <p className="text-xs font-medium text-slate-700 leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Vertical Connected Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-[#102B4E] flex items-center justify-center shrink-0 text-white shadow">
                  {getStepIcon(step.icon, true)}
                </div>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="w-0.5 flex-1 bg-slate-200 my-2" />
                )}
              </div>

              <div className="flex-1">
                <span className="text-xs font-extrabold text-[#F28C28] uppercase tracking-wider">
                  Step {step.step}
                </span>
                <h3 className="text-lg font-bold text-[#102B4E] mt-0.5 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5A6578] mb-3 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Summary Banner */}
        <div className="mt-8 text-center text-xs sm:text-sm text-slate-500 flex items-center justify-center gap-2">
          <span>Need a customized dispatch schedule or specific marketplace SLA?</span>
          <a href="#contact" className="font-bold text-[#245B91] hover:text-[#102B4E] underline">
            Speak with our floor managers
          </a>
        </div>

      </div>
    </section>
  );
};
