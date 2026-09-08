import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const [activeCertModal, setActiveCertModal] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      className="w-full py-16 lg:py-20 px-4 md:px-8 lg:px-10 bg-white"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-8">
        {/* Section Title */}
        <div className="flex flex-col gap-1">
          <span className="font-code-mono text-[12px] uppercase tracking-widest text-[#2d5f8d] font-semibold">
            07 // ACCREDITATIONS
          </span>
          <h2 className="font-headline-lg text-[30px] sm:text-[34px] text-[#0d1c30] font-semibold tracking-tight">
            Certifications & learning
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* IBM SkillsBuild Tier (8 cols, 3 Credentials) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 shadow-sm border border-[#c2c7d0]/35 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#f0f3ff]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2d5f8d] text-[24px]">
                  verified
                </span>
                <h3 className="font-headline-sm text-[20px] text-[#0d1c30] font-semibold">
                  IBM SkillsBuild
                </h3>
              </div>
              <span className="font-code-mono text-[11px] text-[#2d5f8d] bg-[#e7eeff] px-3 py-1 rounded-full uppercase font-medium border border-[#dee8ff]">
                3 Credentials
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  onClick={() => setActiveCertModal(cert.title)}
                  className="p-4 rounded-xl bg-[#f0f3ff] border border-[#dee8ff] flex flex-col justify-between gap-3 hover:bg-[#e7eeff] hover:border-[#2d5f8d]/40 transition-all cursor-pointer group"
                >
                  <span className="font-code-mono text-[10px] text-[#2d5f8d] font-bold">
                    {cert.module}
                  </span>
                  <div className="font-headline-sm text-[16px] text-[#0d1c30] font-medium leading-snug group-hover:text-[#2d5f8d] transition-colors">
                    {cert.title}
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-code-mono text-[#3b6174]">
                    <span>{cert.status}</span>
                    <span className="material-symbols-outlined text-[14px] opacity-60 group-hover:opacity-100">
                      verified_user
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NPTEL Tier (4 cols, Currently Pursuing) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 shadow-sm border border-[#c2c7d0]/35 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#f0f3ff]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2d5f8d] text-[24px]">
                    school
                  </span>
                  <h3 className="font-headline-sm text-[20px] text-[#0d1c30] font-semibold">
                    NPTEL
                  </h3>
                </div>
                <span className="font-code-mono text-[11px] text-[#2d5f8d] bg-[#e7eeff] px-2.5 py-0.5 rounded-full uppercase font-medium border border-[#dee8ff]">
                  Pursuing
                </span>
              </div>

              <div className="font-headline-sm text-[18px] text-[#0d1c30] font-semibold leading-snug">
                Data Structures
              </div>

              <p className="font-body-sm text-[13px] text-[#42474f] leading-relaxed">
                Rigorous study of linear and non-linear data structures, algorithmic
                complexity analysis, and efficient system implementations.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#f0f3ff] border border-[#dee8ff] font-code-mono text-[11px] text-[#3b6174] flex items-center justify-between">
              <span>STATUS: IN PROGRESS</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#2d5f8d] animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Modal for viewing certification verification */}
        {activeCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#dee8ff] flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-[#dee8ff] pb-3">
                <div className="flex items-center gap-2 text-[#2d5f8d]">
                  <span className="material-symbols-outlined">verified</span>
                  <span className="font-code-mono text-[12px] font-bold uppercase">
                    CREDENTIAL SPECIFICATION
                  </span>
                </div>
                <button
                  onClick={() => setActiveCertModal(null)}
                  className="w-8 h-8 rounded-lg bg-[#f0f3ff] text-[#0d1c30] hover:bg-[#dee8ff] flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <div>
                <h4 className="font-headline-sm text-[18px] font-bold text-[#0d1c30]">
                  {activeCertModal}
                </h4>
                <p className="font-code-mono text-[12px] text-[#3b6174] mt-1">
                  Issued by IBM SkillsBuild • Verified Competency Track
                </p>
              </div>

              <div className="p-3.5 bg-[#f0f3ff] rounded-xl text-[13px] text-[#42474f] flex flex-col gap-1.5 font-body-sm">
                <p>
                  Demonstrates hands-on mastery in processing, transforming, and
                  analyzing datasets using standard Python ecosystems (Pandas, NumPy,
                  Matplotlib) and algorithm fundamentals.
                </p>
                <div className="pt-2 border-t border-[#dee8ff] flex justify-between font-code-mono text-[11px] text-[#2d5f8d]">
                  <span>Status: Verified</span>
                  <span>ID: IBM-SKILL-2025</span>
                </div>
              </div>

              <button
                onClick={() => setActiveCertModal(null)}
                className="w-full py-2.5 rounded-lg bg-[#0d1c30] text-[#c1e8ff] font-label-md text-[13px] font-semibold uppercase hover:bg-[#0f4976] transition-colors"
              >
                Close Certificate
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
