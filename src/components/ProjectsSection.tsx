import React, { useState } from 'react';

interface AuraSample {
  name: string;
  icon: string;
  matchRate: string;
  currentPrice: string;
  originalPrice: string;
  latency: string;
  uuid: string;
  sparkline: string;
}

const AURA_SAMPLES: AuraSample[] = [
  {
    name: 'Wireless Studio Headphones',
    icon: 'headphones',
    matchRate: '98.4% Match',
    currentPrice: '$34.50',
    originalPrice: '$49.99',
    latency: '84ms',
    uuid: 'aura_91f4b',
    sparkline: 'M 0 10 Q 30 5, 50 18 T 100 24 T 130 12 L 160 35',
  },
  {
    name: 'Minimalist Titanium Watch',
    icon: 'watch',
    matchRate: '96.2% Match',
    currentPrice: '$120.00',
    originalPrice: '$165.00',
    latency: '76ms',
    uuid: 'aura_44e1a',
    sparkline: 'M 0 30 Q 40 28, 70 12 T 110 18 T 140 8 L 160 22',
  },
  {
    name: 'Ergonomic Mechanical Board',
    icon: 'keyboard',
    matchRate: '99.1% Match',
    currentPrice: '$89.00',
    originalPrice: '$115.00',
    latency: '92ms',
    uuid: 'aura_83c7d',
    sparkline: 'M 0 15 Q 35 25, 65 10 T 105 30 T 135 15 L 160 32',
  },
];

export const ProjectsSection: React.FC = () => {
  // AURA state
  const [selectedAuraIndex, setSelectedAuraIndex] = useState<number>(0);
  const activeAura = AURA_SAMPLES[selectedAuraIndex];

  // 2D Graphics Canvas state
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 142, y: 288 });
  const [polygonPoints, setPolygonPoints] = useState<[number, number][]>([
    [60, 110],
    [130, 40],
    [230, 70],
    [190, 130],
  ]);
  const [activePointIdx, setActivePointIdx] = useState<number | null>(null);

  // Kaya Sentinel state
  const [selectedAgent, setSelectedAgent] = useState<number>(0);

  const handleCanvasMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    // Scaled coordinate
    const scaledX = Math.round((x / rect.width) * 300);
    const scaledY = Math.round((y / rect.height) * 160);
    setCursorPos({ x: scaledX, y: scaledY });

    if (activePointIdx !== null) {
      const updated = [...polygonPoints];
      updated[activePointIdx] = [
        Math.max(10, Math.min(290, scaledX)),
        Math.max(10, Math.min(150, scaledY)),
      ];
      setPolygonPoints(updated as [number, number][]);
    }
  };

  const kayaAgents = [
    {
      id: '01',
      code: '01 // SAFETY',
      title: 'Vision & Safety',
      detail: 'Real-time hazard & PPE detection',
      telemetry: 'Helmet: 99.8% verified • Zone A clear',
      badge: 'EDGE VISION',
    },
    {
      id: '02',
      code: '02 // INVENTORY',
      title: 'Procurement',
      detail: 'Predictive purchase triggers',
      telemetry: 'Concrete Batch #4 dispatched • Lead time: 24h',
      badge: 'AUTO RE-ORDER',
    },
    {
      id: '03',
      code: '03 // TRANSIT',
      title: 'Logistics',
      detail: 'Delivery routes & vendor coordination',
      telemetry: 'Route 8B optimized • Zero idle time',
      badge: 'LIVE GPS',
    },
    {
      id: '04',
      code: '04 // YIELD',
      title: 'Fabrication',
      detail: 'Lead time & delay forecasting',
      telemetry: 'Structural steel tolerance: ±0.02mm',
      badge: 'QUALITY METRIC',
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-16 lg:py-24 px-4 md:px-8 lg:px-10 bg-[#f0f3ff] border-y border-[#dee8ff]"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-code-mono text-[12px] uppercase tracking-widest text-[#2d5f8d] font-semibold">
              04 // PORTFOLIO
            </span>
            <h2 className="font-headline-xl text-[32px] sm:text-[40px] text-[#0d1c30] font-semibold tracking-tight">
              Things I've built
            </h2>
          </div>
          <p className="font-body-md text-[15px] text-[#42474f] max-w-md">
            Projects where AI, data, software and real-world systems meet.
          </p>
        </div>

        {/* Project 01 — AURA (AI Shopping Assistant) [Primary / Prominent Card] */}
        <div className="w-full bg-white rounded-3xl p-6 lg:p-8 shadow-md hover:shadow-xl border border-[#c2c7d0]/40 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text and Specs */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-code-mono text-[22px] font-bold text-[#2d5f8d]">
                  01
                </span>
                <span className="font-code-mono text-[11px] uppercase tracking-wider text-[#3b6174]">
                  PYTHON • AI • IMAGE SEARCH • BACKEND
                </span>
              </div>

              <h3 className="font-headline-lg text-[26px] sm:text-[30px] text-[#0d1c30] font-semibold">
                AURA — AI Shopping Assistant
              </h3>

              <p className="font-body-md text-[15px] text-[#42474f] leading-relaxed">
                An AI-powered shopping assistant that lets users upload an image to find
                similar products online, track prices, and get notified when a price
                drops — making shopping smarter and automated. Built as a Python backend
                for an end-to-end product.
              </p>

              {/* Interactive Sample Selector */}
              <div className="flex flex-col gap-1.5 pt-1">
                <span className="font-code-mono text-[11px] text-[#3b6174] uppercase">
                  Simulate Query Sample:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {AURA_SAMPLES.map((sample, idx) => (
                    <button
                      key={sample.name}
                      onClick={() => setSelectedAuraIndex(idx)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-code-mono transition-all ${
                        selectedAuraIndex === idx
                          ? 'bg-[#2d5f8d] text-white shadow-sm'
                          : 'bg-[#f0f3ff] text-[#0d1c30] hover:bg-[#dee8ff]'
                      }`}
                    >
                      {sample.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  Python
                </span>
                <span className="px-3 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  AI
                </span>
                <span className="px-3 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  Image Search
                </span>
                <span className="px-3 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  Backend
                </span>
              </div>

              {/* GitHub CTA */}
              <div className="pt-3">
                <a
                  href="https://github.com/Aishwaryashridhar-1512/AURA_FINAL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0d1c30] text-[#c1e8ff] font-label-md text-[13px] px-6 py-2.5 rounded-lg hover:bg-[#0f4976] shadow hover:shadow-lg transition-all"
                >
                  <span className="font-semibold uppercase tracking-wider">VIEW ON GITHUB</span>
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Custom Interactive Visual Mockup: AURA Product Pipeline Preview */}
            <div className="lg:col-span-6 bg-[#f0f3ff] rounded-2xl p-4 sm:p-5 shadow-inner border border-[#dee8ff] flex flex-col gap-3">
              <div className="flex items-center justify-between pb-1 bg-white px-3 py-2 rounded-lg border border-[#dee8ff]">
                <span className="font-code-mono text-[12px] text-[#0d1c30] font-semibold">
                  pipeline // aura_engine.py
                </span>
                <span className="inline-flex items-center gap-1.5 font-code-mono text-[11px] text-[#2d5f8d]">
                  <span className="w-2 h-2 rounded-full bg-[#2d5f8d] animate-pulse"></span>
                  INFERENCE READY
                </span>
              </div>

              {/* Interactive visual diagram: Upload -> Extraction -> Match & Price Tracker */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Upload & Vector Extraction Mockup */}
                <div className="bg-white p-3.5 rounded-xl border border-[#dee8ff] flex flex-col gap-2 shadow-sm">
                  <span className="font-code-mono text-[11px] text-[#3b6174] uppercase">
                    Input Image • Query
                  </span>
                  <div className="relative w-full h-24 rounded-lg bg-[#e7eeff] flex items-center justify-center overflow-hidden border border-[#d5e3ff]">
                    <span className="material-symbols-outlined text-[36px] text-[#2d5f8d]">
                      {activeAura.icon}
                    </span>
                    <div className="absolute bottom-1 right-2 px-1.5 py-0.5 rounded bg-[#0d1c30]/85 text-white font-code-mono text-[9px]">
                      256x256 EMB
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-code-mono text-[#42474f]">
                    <span>Cosine Similarity</span>
                    <span className="font-semibold text-[#2d5f8d]">
                      {activeAura.matchRate}
                    </span>
                  </div>
                </div>

                {/* Price Tracker Mini-Graph */}
                <div className="bg-white p-3.5 rounded-xl border border-[#dee8ff] flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-code-mono text-[11px] text-[#3b6174] uppercase">
                        Price Dropped
                      </span>
                      <span className="bg-[#c1e8ff] text-[#23496e] font-code-mono text-[10px] px-1.5 py-0.5 rounded font-medium">
                        Alert Set
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-headline-sm text-[22px] font-semibold text-[#0d1c30]">
                        {activeAura.currentPrice}
                      </span>
                      <span className="font-code-mono text-[13px] line-through text-[#42474f]">
                        {activeAura.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* SVG Sparkline Trend */}
                  <div className="w-full h-12 pt-1">
                    <svg className="w-full h-full" viewBox="0 0 160 40" fill="none">
                      <path
                        d={activeAura.sparkline}
                        fill="none"
                        stroke="#2d5f8d"
                        strokeWidth="2.5"
                      />
                      <circle cx="160" cy="32" r="3.5" fill="#2d5f8d" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Mock Terminal Console */}
              <div className="p-2.5 rounded-lg bg-[#0d1c30] text-[#c1e8ff] font-code-mono text-[11px] flex justify-between items-center">
                <span>
                  POST /api/v1/search • 200 OK ({activeAura.latency})
                </span>
                <span className="text-[#a5cce2]">UUID: {activeAura.uuid}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 02 & 03: Two Column Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PROJECT 02 — 2D GRAPHICS EDITOR */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-[#c2c7d0]/40 transition-all duration-300 flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-code-mono text-[18px] font-bold text-[#2d5f8d]">
                  02
                </span>
                <span className="font-code-mono text-[11px] uppercase tracking-wider text-[#3b6174]">
                  C • GRAPHICS • CANVAS • INTERACTION
                </span>
              </div>

              <h3 className="font-headline-md text-[22px] text-[#0d1c30] font-semibold">
                2D Graphics Editor
              </h3>

              <p className="font-body-sm text-[14px] text-[#42474f] leading-relaxed">
                An interactive 2D graphics editing tool written in C, with shape manipulation
                and canvas interaction. This project strengthened my understanding of
                graphics concepts, coordinate-based interaction, and building responsive user
                controls from scratch.
              </p>

              {/* Custom 2D Graphics Canvas Visual */}
              <div className="w-full bg-[#f0f3ff] rounded-xl p-3 shadow-inner border border-[#dee8ff] flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px] font-code-mono text-[#42474f] pb-1">
                  <span>BUFFER: 0x7FFE_CANVAS</span>
                  <span className="text-[#2d5f8d] font-semibold">
                    POS [X: {cursorPos.x}, Y: {cursorPos.y}]
                  </span>
                </div>

                {/* Geometric Interactive Wireframe Area */}
                <div className="relative w-full h-44 bg-white rounded-lg overflow-hidden flex items-center justify-center border border-[#dee8ff] select-none">
                  <svg
                    className="w-full h-full cursor-crosshair"
                    viewBox="0 0 300 160"
                    fill="none"
                    onMouseMove={handleCanvasMouseMove}
                    onMouseUp={() => setActivePointIdx(null)}
                  >
                    {/* Pixel Coordinate Matrix Backing */}
                    <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#dee8ff" strokeWidth="0.75" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#gridPattern)" />

                    {/* Vector Polygon with transformation handles */}
                    <polygon
                      points={polygonPoints.map((p) => p.join(',')).join(' ')}
                      fill="#c1e8ff"
                      fillOpacity="0.35"
                      stroke="#2d5f8d"
                      strokeWidth="2"
                    />

                    {/* Bounding Box */}
                    <rect
                      x="52"
                      y="32"
                      width="186"
                      height="106"
                      fill="none"
                      stroke="#54798e"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />

                    {/* Interactive Gizmo handles */}
                    {polygonPoints.map((pt, idx) => (
                      <circle
                        key={idx}
                        cx={pt[0]}
                        cy={pt[1]}
                        r={activePointIdx === idx ? 6 : 4.5}
                        fill="#0d1c30"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        className="cursor-pointer hover:fill-[#2d5f8d]"
                        onMouseDown={() => setActivePointIdx(idx)}
                      />
                    ))}

                    {/* Crosshair indicator */}
                    <line
                      x1={cursorPos.x}
                      y1={Math.max(10, cursorPos.y - 15)}
                      x2={cursorPos.x}
                      y2={Math.min(150, cursorPos.y + 15)}
                      stroke="#ba1a1a"
                      strokeWidth="1.5"
                    />
                    <line
                      x1={Math.max(10, cursorPos.x - 15)}
                      y1={cursorPos.y}
                      x2={Math.min(290, cursorPos.x + 15)}
                      y2={cursorPos.y}
                      stroke="#ba1a1a"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="text-[10px] font-code-mono text-[#3b6174] text-center">
                  Tip: Move cursor across canvas or drag vertex handles to inspect real-time buffer coordinates
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  C
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  Graphics
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  Canvas
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  Low-Level Memory
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://github.com/Aishwaryashridhar-1512/2D-Graphics-Editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0d1c30] font-label-md text-[13px] px-5 py-2.5 rounded-lg border border-[#c2c7d0]/50 hover:bg-[#dee8ff] transition-colors shadow-sm"
              >
                <span className="font-semibold uppercase tracking-wider">VIEW ON GITHUB</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* PROJECT 03 — KAYA SENTINEL */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-[#c2c7d0]/40 transition-all duration-300 flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-code-mono text-[18px] font-bold text-[#2d5f8d]">
                  03
                </span>
                <span className="font-code-mono text-[11px] uppercase tracking-wider text-[#3b6174]">
                  PHYSICAL AI • CONSTRUCTIONTECH • HACKATHON
                </span>
              </div>

              <h3 className="font-headline-md text-[22px] text-[#0d1c30] font-semibold">
                Kaya Sentinel
              </h3>

              <p className="font-body-sm text-[14px] text-[#42474f] leading-relaxed">
                A Physical AI co-pilot designed for construction job sites, bringing AI
                assistance directly into the field rather than keeping it inside a
                dashboard.
              </p>

              {/* Custom Visual Architecture: 4-Agent Schema */}
              <div className="w-full bg-[#f0f3ff] rounded-xl p-3.5 shadow-inner border border-[#dee8ff] flex flex-col gap-2">
                <div className="text-center font-code-mono text-[12px] text-[#0d1c30] font-semibold py-1 bg-white rounded-lg border border-[#dee8ff]">
                  KAYA SENTINEL CORE ARCHITECTURE
                </div>

                {/* 4 Connected Node Agents */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {kayaAgents.map((agent, idx) => {
                    const isSelected = selectedAgent === idx;
                    return (
                      <button
                        key={agent.id}
                        onClick={() => setSelectedAgent(idx)}
                        className={`p-2.5 rounded-lg text-left transition-all border ${
                          isSelected
                            ? 'bg-white border-[#2d5f8d] shadow-sm ring-1 ring-[#2d5f8d]'
                            : 'bg-white border-[#dee8ff] hover:bg-[#dee8ff]/50'
                        }`}
                      >
                        <span className="font-code-mono text-[10px] text-[#2d5f8d] font-bold block">
                          {agent.code}
                        </span>
                        <span className="font-label-sm text-[12px] font-semibold text-[#0d1c30] block">
                          {agent.title}
                        </span>
                        <span className="font-body-sm text-[11px] text-[#42474f] block leading-tight">
                          {agent.detail}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Live Agent Signal Readout */}
                <div className="p-2 bg-white rounded-lg border border-[#dee8ff] flex items-center justify-between text-[11px] font-code-mono text-[#2d5f8d]">
                  <span className="truncate">
                    STATUS: {kayaAgents[selectedAgent].telemetry}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-[#dee8ff] text-[10px] font-semibold uppercase">
                    {kayaAgents[selectedAgent].badge}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  Physical AI
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  Edge Agents
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  Computer Vision
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#e7eeff] text-[#365a80] font-label-sm text-[11px] uppercase font-semibold">
                  System Design
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 font-code-mono text-[12px] text-[#2d5f8d] font-medium bg-[#e7eeff] px-3.5 py-2 rounded-lg border border-[#dee8ff]">
                <span className="material-symbols-outlined text-[16px]">stars</span>
                Built during Kaya AI India Hackathon 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
