import React from 'react';
import { TECH_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full py-16 lg:py-20 px-4 md:px-8 lg:px-10 bg-[#f0f3ff] border-y border-[#dee8ff]"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-8">
        {/* Section Title */}
        <div className="flex flex-col gap-1">
          <span className="font-code-mono text-[12px] uppercase tracking-widest text-[#2d5f8d] font-semibold">
            06 // CAPABILITIES
          </span>
          <h2 className="font-headline-lg text-[30px] sm:text-[34px] text-[#0d1c30] font-semibold tracking-tight">
            Tech stack
          </h2>
        </div>

        {/* Categorized clean card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#2d5f8d]/30 border border-[#c2c7d0]/35 transition-all flex flex-col gap-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#f0f3ff]">
                <span className="font-code-mono text-[12px] uppercase text-[#2d5f8d] font-bold">
                  {cat.category}
                </span>
                <span className="material-symbols-outlined text-[#2d5f8d] text-[20px]">
                  {cat.icon}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-xl bg-[#f0f3ff] hover:bg-[#dee8ff] border border-[#dee8ff]/50 font-headline-sm text-[16px] text-[#0d1c30] font-medium flex items-center justify-between transition-colors"
                  >
                    <span>{item.name}</span>
                    <span className="font-code-mono text-[11px] text-[#3b6174] bg-white px-2 py-0.5 rounded border border-[#dee8ff]">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
