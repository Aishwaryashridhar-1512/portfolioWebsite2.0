import React, { useState, useEffect } from 'react';
import { PIPELINE_STAGES } from '../data/portfolioData';
import { PipelineStage } from '../types';

export const HeroSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<PipelineStage>(PIPELINE_STAGES[0]);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [pulseIndex, setPulseIndex] = useState<number>(0);
  const [liveLatency, setLiveLatency] = useState<string>('<14ms');

  // Interactive inference stream loop
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % PIPELINE_STAGES.length);
      const latencies = ['<12ms', '<14ms', '<11ms', '<15ms', '<13ms'];
      setLiveLatency(latencies[Math.floor(Math.random() * latencies.length)]);
    }, 2200);
    return () => clearInterval(interval);
  }, [isSimulating]);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full py-16 lg:py-24 px-4 md:px-8 lg:px-10 overflow-hidden"
    >
      {/* Subtle technical grid background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(rgba(84, 131, 179, 0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      ></div>

      {/* Atmospheric gradient glow */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#c1e8ff]/30 blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-[#d0e4ff]/25 blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#c1e8ff]/50 border border-[#2d5f8d]/20">
              <span className="w-2 h-2 rounded-full bg-[#2d5f8d] animate-ping"></span>
              <span className="font-code-mono text-[11px] uppercase tracking-widest text-[#2d5f8d] font-semibold">
                AI & Data Science Student @ REVA University
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-headline-xl text-[42px] sm:text-[54px] lg:text-[62px] text-[#0d1c30] font-bold tracking-tight leading-[1.05]">
              Aishwarya P S
            </h1>

            {/* Supporting sub-headline */}
            <p className="font-headline-md text-[20px] sm:text-[23px] text-[#1e3a5f] font-semibold leading-snug">
              Building intelligent systems that connect{' '}
              <span className="text-[#2d5f8d] underline decoration-[#c1e8ff] decoration-4 underline-offset-4">
                data
              </span>
              ,{' '}
              <span className="text-[#2d5f8d] underline decoration-[#c1e8ff] decoration-4 underline-offset-4">
                code
              </span>{' '}
              &{' '}
              <span className="text-[#2d5f8d] underline decoration-[#c1e8ff] decoration-4 underline-offset-4">
                reality
              </span>
              .
            </p>

            <p className="font-code-mono text-[13px] sm:text-[14px] text-[#3b6174] font-medium tracking-wide">
              Exploring Machine Learning, Data Science & Full-Stack Development.
            </p>

            {/* Core intro paragraph */}
            <p className="font-body-lg text-[16px] sm:text-[17px] text-[#42474f] max-w-xl leading-relaxed">
              Hi, I'm Aishwarya. I like understanding how systems work under the hood,
              and that's what pulled me toward AI & Data Science.
            </p>

            {/* Primary / Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={(e) => scrollTo('projects', e)}
                className="inline-flex items-center justify-center gap-2 bg-[#0d1c30] text-[#c1e8ff] font-label-md text-[13px] px-6 py-3 rounded-lg hover:bg-[#0f4976] shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="tracking-wider uppercase font-semibold">VIEW MY WORK</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollTo('contact', e)}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0d1c30] font-label-md text-[13px] px-6 py-3 rounded-lg border border-[#c2c7d0]/50 hover:bg-[#dee8ff] hover:border-[#2d5f8d]/30 transition-all duration-200 shadow-sm"
              >
                <span className="tracking-wider uppercase font-semibold">LET'S CONNECT</span>
                <span className="material-symbols-outlined text-[18px]">east</span>
              </a>
            </div>

            {/* Quick Connect Chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-[#42474f]">
              <span className="font-code-mono text-[11px] uppercase text-[#3b6174] font-medium">
                Quick Links //
              </span>
              <a
                href="https://github.com/Aishwaryashridhar-1512"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-code-mono text-[11px] px-3 py-1 rounded-full bg-white border border-[#c2c7d0]/40 text-[#2d5f8d] hover:bg-[#e7eeff] hover:border-[#2d5f8d]/40 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[14px]">code</span>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aishwarya-p-s-685787349"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-code-mono text-[11px] px-3 py-1 rounded-full bg-white border border-[#c2c7d0]/40 text-[#2d5f8d] hover:bg-[#e7eeff] hover:border-[#2d5f8d]/40 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Technical AI/Data Visualization */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative w-full rounded-2xl bg-white p-5 sm:p-6 shadow-xl border border-[#c2c7d0]/35 overflow-hidden">
              {/* Header metadata of the schema viewer */}
              <div className="flex items-center justify-between pb-2.5 mb-3 bg-[#f0f3ff] px-3 py-2 rounded-lg border border-[#dee8ff]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2d5f8d]/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2d5f8d] animate-pulse"></span>
                  <span className="font-code-mono text-[11px] text-[#2d5f8d] font-semibold tracking-wide">
                    SYS_FLOW :: PIPELINE.V2
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-code-mono text-[10px] text-[#3b6174] uppercase tracking-wider">
                    STATUS // SYNCHRONIZED
                  </span>
                  <button
                    onClick={() => setIsSimulating(!isSimulating)}
                    title={isSimulating ? 'Pause Stream Simulation' : 'Resume Stream Simulation'}
                    className="text-[10px] font-code-mono text-[#2d5f8d] hover:underline"
                  >
                    {isSimulating ? '[PAUSE]' : '[PLAY]'}
                  </button>
                </div>
              </div>

              {/* Mathematical Architecture Graphic */}
              <div className="relative w-full h-64 sm:h-72 flex items-center justify-center bg-[#fcfdff] rounded-xl border border-[#dee8ff]/60 p-2 sm:p-3">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 480 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="gradFlow" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#3d6187" stopOpacity="0.35" />
                      <stop offset="50%" stopColor="#2d5f8d" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#54798e" stopOpacity="0.35" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Horizontal Grid Guide Lines */}
                  <line x1="20" y1="36" x2="460" y2="36" stroke="#dee8ff" strokeDasharray="3 3" />
                  <line x1="20" y1="100" x2="460" y2="100" stroke="#dee8ff" strokeWidth="1.5" />
                  <line x1="20" y1="164" x2="460" y2="164" stroke="#dee8ff" strokeDasharray="3 3" />

                  {/* Vertical Stage Guide Lines */}
                  <line x1="60" y1="20" x2="60" y2="180" stroke="#dee8ff" strokeDasharray="3 3" />
                  <line x1="180" y1="20" x2="180" y2="180" stroke="#dee8ff" strokeDasharray="3 3" />
                  <line x1="300" y1="20" x2="300" y2="180" stroke="#dee8ff" strokeDasharray="3 3" />
                  <line x1="420" y1="20" x2="420" y2="180" stroke="#dee8ff" strokeDasharray="3 3" />

                  {/* Directional Flow Markers */}
                  <path d="M 118 96 L 123 100 L 118 104" fill="none" stroke="#2d5f8d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 238 96 L 243 100 L 238 104" fill="none" stroke="#2d5f8d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 358 96 L 363 100 L 358 104" fill="none" stroke="#2d5f8d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Active Interconnect Splines with Harmonized Amplitude */}
                  <path
                    d="M 60 100 C 100 68, 140 132, 180 100"
                    fill="none"
                    stroke="url(#gradFlow)"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M 180 100 C 220 68, 260 132, 300 100"
                    fill="none"
                    stroke="url(#gradFlow)"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M 300 100 C 340 68, 380 132, 420 100"
                    fill="none"
                    stroke="url(#gradFlow)"
                    strokeWidth="2.5"
                  />

                  {/* Dynamic Stream Pulse Node */}
                  {isSimulating && (
                    <circle
                      cx={
                        pulseIndex === 0
                          ? 60
                          : pulseIndex === 1
                          ? 180
                          : pulseIndex === 2
                          ? 300
                          : 420
                      }
                      cy="100"
                      r="12"
                      fill="#2d5f8d"
                      fillOpacity="0.25"
                      className="animate-ping"
                    />
                  )}

                  {/* Pipeline Stage 01: DATA */}
                  <g
                    transform="translate(60, 100)"
                    className="cursor-pointer transition-transform hover:scale-110"
                    onClick={() => setSelectedStage(PIPELINE_STAGES[0])}
                  >
                    <circle
                      r="20"
                      fill={selectedStage.id === 'data' ? '#c1e8ff' : '#f0f3ff'}
                      stroke={selectedStage.id === 'data' ? '#2d5f8d' : '#dee8ff'}
                      strokeWidth={selectedStage.id === 'data' ? '2.5' : '1.5'}
                    />
                    <circle r="14" fill="#c1e8ff" stroke="#2d5f8d" strokeWidth="1.5" />
                    <circle r="5" fill="#2d5f8d" />
                    <text
                      y="-32"
                      textAnchor="middle"
                      fill="#0d1c30"
                      className="font-code-mono text-[10.5px] font-semibold select-none"
                    >
                      01 // DATA
                    </text>
                    <text
                      y="36"
                      textAnchor="middle"
                      fill="#3b6174"
                      className="font-code-mono text-[9px] select-none"
                    >
                      Raw Vector Stream
                    </text>
                  </g>

                  {/* Pipeline Stage 02: ALGORITHMS */}
                  <g
                    transform="translate(180, 100)"
                    className="cursor-pointer transition-transform hover:scale-110"
                    onClick={() => setSelectedStage(PIPELINE_STAGES[1])}
                  >
                    <circle
                      r="20"
                      fill={selectedStage.id === 'algorithms' ? '#c1e8ff' : '#f0f3ff'}
                      stroke={selectedStage.id === 'algorithms' ? '#2d5f8d' : '#dee8ff'}
                      strokeWidth={selectedStage.id === 'algorithms' ? '2.5' : '1.5'}
                    />
                    <circle r="14" fill="#d0e4ff" stroke="#2d5f8d" strokeWidth="1.5" />
                    <circle r="5" fill="#2d5f8d" filter="url(#glow)" />
                    <text
                      y="-32"
                      textAnchor="middle"
                      fill="#0d1c30"
                      className="font-code-mono text-[10.5px] font-semibold select-none"
                    >
                      02 // ALGORITHMS
                    </text>
                    <text
                      y="36"
                      textAnchor="middle"
                      fill="#3b6174"
                      className="font-code-mono text-[9px] select-none"
                    >
                      Feature Extraction
                    </text>
                  </g>

                  {/* Pipeline Stage 03: INTELLIGENCE */}
                  <g
                    transform="translate(300, 100)"
                    className="cursor-pointer transition-transform hover:scale-110"
                    onClick={() => setSelectedStage(PIPELINE_STAGES[2])}
                  >
                    <circle
                      r="20"
                      fill={selectedStage.id === 'intelligence' ? '#c1e8ff' : '#f0f3ff'}
                      stroke={selectedStage.id === 'intelligence' ? '#2d5f8d' : '#dee8ff'}
                      strokeWidth={selectedStage.id === 'intelligence' ? '2.5' : '1.5'}
                    />
                    <circle r="14" fill="#d5e3ff" stroke="#2d5f8d" strokeWidth="1.5" />
                    <circle r="5" fill="#2d5f8d" />
                    <text
                      y="-32"
                      textAnchor="middle"
                      fill="#0d1c30"
                      className="font-code-mono text-[10.5px] font-semibold select-none"
                    >
                      03 // INTELLIGENCE
                    </text>
                    <text
                      y="36"
                      textAnchor="middle"
                      fill="#3b6174"
                      className="font-code-mono text-[9px] select-none"
                    >
                      Neural Synthesis
                    </text>
                  </g>

                  {/* Pipeline Stage 04: APPLICATIONS */}
                  <g
                    transform="translate(420, 100)"
                    className="cursor-pointer transition-transform hover:scale-110"
                    onClick={() => setSelectedStage(PIPELINE_STAGES[3])}
                  >
                    <circle
                      r="20"
                      fill={selectedStage.id === 'applications' ? '#c1e8ff' : '#f0f3ff'}
                      stroke={selectedStage.id === 'applications' ? '#2d5f8d' : '#dee8ff'}
                      strokeWidth={selectedStage.id === 'applications' ? '2.5' : '1.5'}
                    />
                    <circle r="14" fill="#c1e8ff" stroke="#2d5f8d" strokeWidth="1.5" />
                    <circle r="5" fill="#2d5f8d" />
                    <text
                      y="-32"
                      textAnchor="middle"
                      fill="#0d1c30"
                      className="font-code-mono text-[10.5px] font-semibold select-none"
                    >
                      04 // APPLICATIONS
                    </text>
                    <text
                      y="36"
                      textAnchor="middle"
                      fill="#3b6174"
                      className="font-code-mono text-[9px] select-none"
                    >
                      Field & Web Action
                    </text>
                  </g>
                </svg>
              </div>

              {/* Selected Stage Detail Card */}
              <div className="mt-3 p-3 bg-[#f0f3ff] rounded-xl border border-[#dee8ff]">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2d5f8d]"></span>
                    <span className="font-code-mono text-[11px] font-bold text-[#2d5f8d] uppercase tracking-wider">
                      STAGE {selectedStage.number} // {selectedStage.name}
                    </span>
                  </div>
                  <span className="font-code-mono text-[10px] font-semibold text-[#2d5f8d] uppercase bg-white px-2 py-0.5 rounded-full border border-[#dee8ff] shadow-xs">
                    {selectedStage.status}
                  </span>
                </div>
                <p className="text-[12px] text-[#42474f] leading-relaxed font-body">
                  {selectedStage.detail}
                </p>
              </div>

              {/* Footer micro-readout inside schema */}
              <div className="mt-2.5 grid grid-cols-3 gap-2 text-center bg-[#f0f3ff] rounded-xl p-2.5 border border-[#dee8ff]">
                <div>
                  <span className="block font-code-mono text-[10px] text-[#3b6174] uppercase tracking-wider">
                    Vector Space
                  </span>
                  <span className="font-code-mono text-[12px] font-semibold text-[#0d1c30]">
                    {selectedStage.dim || '512 DIM'}
                  </span>
                </div>
                <div>
                  <span className="block font-code-mono text-[10px] text-[#3b6174] uppercase tracking-wider">
                    Inference Speed
                  </span>
                  <span className="font-code-mono text-[12px] font-semibold text-[#0d1c30]">
                    {liveLatency}
                  </span>
                </div>
                <div>
                  <span className="block font-code-mono text-[10px] text-[#3b6174] uppercase tracking-wider">
                    System Target
                  </span>
                  <span className="font-code-mono text-[12px] font-semibold text-[#0d1c30]">
                    Production
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
