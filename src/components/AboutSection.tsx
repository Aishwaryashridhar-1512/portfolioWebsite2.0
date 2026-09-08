import React, { useState } from 'react';
import { EXPLORING_SKILLS, ETHOS_STEPS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeEthos, setActiveEthos] = useState<number | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section
      id="about"
      className="w-full py-16 lg:py-20 px-4 md:px-8 lg:px-10 bg-[#f0f3ff] border-y border-[#dee8ff]"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-8">
        {/* Section Tag & Title */}
        <div className="flex flex-col gap-1">
          <span className="font-code-mono text-[12px] uppercase tracking-widest text-[#2d5f8d] font-semibold">
            02 // OVERVIEW
          </span>
          <h2 className="font-headline-lg text-[30px] sm:text-[34px] text-[#0d1c30] font-semibold tracking-tight">
            About me
          </h2>
        </div>

        {/* Split 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Story / Background */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-[#0d1c30]">
            <p className="font-body-lg text-[17px] sm:text-[18px] text-[#0d1c30] font-normal leading-relaxed">
              Hi, I'm Aishwarya! I like understanding how systems work under the hood,
              and that's what pulled me toward{' '}
              <span className="font-medium text-[#2d5f8d] underline decoration-[#c1e8ff] decoration-2 underline-offset-4">
                AI & Data Science
              </span>
              .
            </p>
            <p className="font-body-md text-[15px] sm:text-[16px] text-[#42474f] leading-relaxed">
              I'm a B.Tech student in Artificial Intelligence and Data Science at REVA
              University, currently building my foundations in Python, C, and Data
              Structures.
            </p>
            <p className="font-body-md text-[15px] sm:text-[16px] text-[#42474f] leading-relaxed">
              I'm drawn to projects that combine data-driven thinking with real-world
              systems. I'm also exploring full-stack development to make my AI projects
              easier to build and demonstrate end-to-end.
            </p>
          </div>

          {/* Technical Card: Currently Exploring */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-sm border border-[#c2c7d0]/35 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-1 border-b border-[#f0f3ff]">
              <span className="font-code-mono text-[12px] uppercase tracking-wider text-[#2d5f8d] font-semibold">
                CURRENTLY EXPLORING
              </span>
              <span className="material-symbols-outlined text-[#2d5f8d] text-[20px]">
                explore
              </span>
            </div>

            {/* Skill pills in outline style */}
            <div className="flex flex-wrap gap-2">
              {EXPLORING_SKILLS.map((skill) => {
                const isSelected = selectedSkill === skill;
                return (
                  <button
                    key={skill}
                    onClick={() => setSelectedSkill(isSelected ? null : skill)}
                    className={`px-3 py-1 rounded-full text-[13px] font-medium transition-all ${
                      isSelected
                        ? 'bg-[#2d5f8d] text-white shadow-sm scale-105'
                        : 'bg-[#e7eeff] text-[#365a80] hover:bg-[#d5e3ff] hover:text-[#0d1c30]'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>

            {/* Metadata spec lines */}
            <div className="pt-2 flex flex-col gap-2 font-code-mono text-[12px] text-[#42474f] bg-[#dee8ff]/40 p-3 rounded-xl border border-[#dee8ff]">
              <div className="flex justify-between items-center">
                <span className="text-[#3b6174] font-medium">CORE FOCUS:</span>
                <span className="text-[#0d1c30] font-semibold text-right">
                  Foundations & Applied Systems
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#3b6174] font-medium">LOCATION:</span>
                <span className="text-[#0d1c30] font-semibold">Bangalore, India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#3b6174] font-medium">AFFILIATION:</span>
                <span className="text-[#0d1c30] font-semibold">REVA University</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Philosophy Card: Engineering Ethos */}
        <div className="mt-4 w-full bg-white rounded-2xl p-6 shadow-sm border border-[#c2c7d0]/35 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#f0f3ff]">
            <div>
              <span className="font-code-mono text-[11px] uppercase text-[#3b6174] tracking-widest block">
                ENGINEERING ETHOS
              </span>
              <h3 className="font-headline-sm text-[20px] text-[#0d1c30] font-semibold">
                Curiosity → Systems → Solutions
              </h3>
            </div>
            <p className="font-body-sm text-[13px] text-[#42474f] max-w-md italic">
              “I like understanding how things work under the hood — then turning that
              understanding into something useful.”
            </p>
          </div>

          {/* Horizontal Pipeline Process */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            {ETHOS_STEPS.map((step, idx) => {
              const isActive = activeEthos === idx;
              return (
                <div
                  key={step.step}
                  onMouseEnter={() => setActiveEthos(idx)}
                  onMouseLeave={() => setActiveEthos(null)}
                  className={`flex flex-col gap-1 p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#e7eeff] border-[#2d5f8d] shadow-md -translate-y-1'
                      : 'bg-[#f0f3ff] border-transparent hover:bg-[#e7eeff] hover:border-[#dee8ff]'
                  } ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-code-mono text-[12px] text-[#2d5f8d] font-bold">
                      {step.step}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d5f8d]"></span>
                    )}
                  </div>
                  <span className="font-label-md text-[12px] text-[#0d1c30] font-semibold uppercase tracking-wider">
                    {step.title}
                  </span>
                  <span className="font-body-sm text-[12px] text-[#42474f] leading-snug">
                    {step.description}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Ethos Detail Callout if active */}
          {activeEthos !== null && (
            <div className="mt-1 p-3 bg-[#f0f3ff] rounded-lg border border-[#dee8ff] text-[12px] font-code-mono text-[#2d5f8d] flex items-center gap-2 animate-fadeIn">
              <span className="font-bold">METHODOLOGY //</span>
              <span className="text-[#0d1c30]">{ETHOS_STEPS[activeEthos].details}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
