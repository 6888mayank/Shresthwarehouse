import React from 'react';
import { UserCheck, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { LEADERSHIP } from '../data/content';

export const LeadershipTeam: React.FC = () => {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-[#F4F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#245B91] text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-[#F28C28]" />
            Board of Directors
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-base sm:text-lg text-[#5A6578] font-normal leading-relaxed">
            Led by experienced professionals with backgrounds spanning financial operations, sales outreach, inventory management, and regional commerce development.
          </p>
        </div>

        {/* 4 Leadership Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {LEADERSHIP.map((leader) => (
            <div
              key={leader.name}
              className="bg-white rounded-3xl p-6 lg:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Professional Portrait Placeholder (No fake photos) */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-[#102B4E] to-[#245B91] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 relative overflow-hidden border-2 border-white">
                    {/* Monogram / Initials */}
                    <span className="text-2xl font-black tracking-wider text-white">
                      {leader.initials}
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Director Badge */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#F28C28] text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                    {leader.designation}
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mt-4 mb-4">
                  <h3 className="text-lg font-bold text-[#102B4E]">
                    {leader.name}
                  </h3>
                  <div className="text-xs text-[#245B91] font-semibold mt-0.5">
                    Director • Shresth Warehouse
                  </div>
                </div>

                {/* Experience & Education tags */}
                <div className="space-y-2 mb-4 pt-3 border-t border-slate-100 text-xs">
                  {leader.education && (
                    <div className="flex items-start gap-2 text-slate-600">
                      <GraduationCap className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
                      <span>{leader.education}</span>
                    </div>
                  )}

                  {leader.location && (
                    <div className="flex items-start gap-2 text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
                      <span>{leader.location}</span>
                    </div>
                  )}

                  <div className="flex items-start gap-2 text-slate-600">
                    <Briefcase className="w-3.5 h-3.5 text-[#245B91] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{leader.experience}</span>
                  </div>
                </div>

                {/* Verified Profile Text */}
                <p className="text-xs text-[#5A6578] leading-relaxed italic bg-[#F4F7FA] p-3.5 rounded-xl border border-slate-100">
                  "{leader.profile}"
                </p>
              </div>

              {/* Verified Credentials Marker */}
              <div className="mt-6 pt-3 border-t border-slate-100 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Verified Executive Record
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
