import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full py-16 lg:py-20 px-4 md:px-8 lg:px-10 bg-white"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <span className="font-code-mono text-[12px] uppercase tracking-widest text-[#2d5f8d] font-semibold">
            05 // EXPERIENCE
          </span>
          <h2 className="font-headline-lg text-[30px] sm:text-[34px] text-[#0d1c30] font-semibold tracking-tight">
            Beyond the classroom
          </h2>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Experience 1: Kaya AI India Hackathon 2026 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#c2c7d0]/35 hover:shadow-md hover:border-[#2d5f8d]/30 transition-all flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="font-code-mono text-[12px] text-[#2d5f8d] font-semibold">
                    {EXPERIENCES[0].type}
                  </span>
                  <h3 className="font-headline-sm text-[20px] text-[#0d1c30] font-semibold">
                    {EXPERIENCES[0].title}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#dee8ff] text-[#0d1c30] font-code-mono text-[11px] self-start sm:self-auto font-medium">
                  {EXPERIENCES[0].tagline}
                </span>
              </div>

              <div className="font-code-mono text-[13px] text-[#3b6174]">
                Teammate:{' '}
                <span className="font-semibold text-[#0d1c30]">
                  {EXPERIENCES[0].organizerOrTeammate}
                </span>
              </div>

              {/* Problem & Solution Block */}
              <div className="flex flex-col gap-2.5 pt-1">
                <div className="p-3.5 rounded-xl bg-[#f0f3ff] border border-[#dee8ff] flex flex-col gap-1">
                  <span className="font-code-mono text-[11px] text-[#3b6174] font-semibold uppercase">
                    The Problem
                  </span>
                  <p className="font-body-sm text-[13px] text-[#42474f] leading-relaxed">
                    {EXPERIENCES[0].problem}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#f0f3ff] border border-[#dee8ff] flex flex-col gap-1">
                  <span className="font-code-mono text-[11px] text-[#2d5f8d] font-semibold uppercase">
                    The Solution
                  </span>
                  <p className="font-body-sm text-[13px] text-[#0d1c30] font-medium leading-relaxed">
                    {EXPERIENCES[0].solution}
                  </p>
                </div>
              </div>

              <p className="font-body-sm text-[13px] text-[#42474f] leading-relaxed">
                {EXPERIENCES[0].description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {EXPERIENCES[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-code-mono text-[11px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Experience 2: HACK.ALGO */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#c2c7d0]/35 hover:shadow-md hover:border-[#2d5f8d]/30 transition-all flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="font-code-mono text-[12px] text-[#2d5f8d] font-semibold">
                    {EXPERIENCES[1].type}
                  </span>
                  <h3 className="font-headline-sm text-[20px] text-[#0d1c30] font-semibold">
                    {EXPERIENCES[1].title}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#dee8ff] text-[#0d1c30] font-code-mono text-[11px] self-start sm:self-auto font-medium">
                  {EXPERIENCES[1].tagline}
                </span>
              </div>

              <div className="font-code-mono text-[13px] text-[#3b6174]">
                Organized by:{' '}
                <span className="font-semibold text-[#0d1c30]">
                  {EXPERIENCES[1].organizerOrTeammate}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#f0f3ff] border border-[#dee8ff] flex flex-col gap-2 my-auto">
                <span className="font-code-mono text-[11px] text-[#2d5f8d] font-semibold uppercase">
                  Impact & Learnings
                </span>
                <p className="font-body-sm text-[14px] text-[#0d1c30] leading-relaxed">
                  {EXPERIENCES[1].impact}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {EXPERIENCES[1].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-code-mono text-[11px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
