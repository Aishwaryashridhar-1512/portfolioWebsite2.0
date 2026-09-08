import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="w-full py-16 lg:py-20 px-4 md:px-8 lg:px-10 bg-white"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-8">
        {/* Section Title */}
        <div className="flex flex-col gap-1">
          <span className="font-code-mono text-[12px] uppercase tracking-widest text-[#2d5f8d] font-semibold">
            03 // ACADEMIC FOUNDATIONS
          </span>
          <h2 className="font-headline-lg text-[30px] sm:text-[34px] text-[#0d1c30] font-semibold tracking-tight">
            Education
          </h2>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative pl-6 md:pl-8 ml-2 md:ml-4 flex flex-col gap-8">
          {/* Continuous vertical guideline */}
          <div className="absolute top-3 bottom-3 left-0 w-0.5 bg-[#dee8ff]"></div>

          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={edu.id}
              className="relative flex flex-col gap-2 bg-white p-6 rounded-2xl shadow-sm border border-[#c2c7d0]/35 hover:shadow-md hover:border-[#2d5f8d]/30 transition-all group"
            >
              {/* Concentric Timeline Dot */}
              <div
                className={`absolute -left-[calc(1.5rem+6px)] md:-left-[calc(2rem+6px)] top-7 w-3.5 h-3.5 rounded-full ${
                  idx === 0 ? 'bg-[#2d5f8d]' : 'bg-[#3b6174]'
                } ring-4 ring-[#c1e8ff] transition-transform group-hover:scale-125`}
              ></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-headline-sm text-[20px] text-[#0d1c30] font-semibold tracking-tight">
                    {edu.institution}
                  </h3>
                  <span className="text-[11px] font-code-mono px-2 py-0.5 rounded-full bg-[#dee8ff] text-[#2d5f8d] font-medium">
                    {edu.status}
                  </span>
                </div>
                <span className="font-code-mono text-[12px] text-[#2d5f8d] bg-[#dee8ff]/80 px-3 py-1 rounded-md self-start sm:self-auto font-semibold">
                  {edu.period}
                </span>
              </div>

              <div className="font-body-lg text-[16px] text-[#3d6187] font-medium">
                {edu.degree}
              </div>

              <p className="font-body-sm text-[14px] text-[#42474f] max-w-3xl leading-relaxed">
                {edu.description}
              </p>

              {/* Coursework highlights */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {edu.highlights.map((item) => (
                  <span
                    key={item}
                    className="font-code-mono text-[11px] px-2.5 py-0.5 rounded bg-[#f0f3ff] text-[#365a80] border border-[#dee8ff]"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
