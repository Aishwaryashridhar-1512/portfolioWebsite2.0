import React from 'react';
import { NAV_ITEMS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="w-full bg-[#233146] text-[#ebf1ff] py-14 px-4 md:px-8 lg:px-10 border-t border-[#3b6174]/40">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Bio */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-headline-sm text-[22px] font-bold text-white tracking-tight">
                Aishwarya P S
              </span>
              <span className="font-code-mono text-[10px] text-[#c1e8ff] bg-[#0d1c30] px-2 py-0.5 rounded border border-[#3b6174]">
                v2.6
              </span>
            </div>

            <p className="font-code-mono text-[12px] text-[#a5cce2]">
              AI & Data Science Student @ REVA University • Bangalore, India
            </p>

            <p className="font-body-sm text-[14px] text-[#c2c7d0] max-w-md leading-relaxed">
              Engineering intelligent ecosystems through Artificial Intelligence, Data
              Science, Machine Learning architectures, and scalable Full-Stack platforms.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Python', 'Machine Learning', 'Data Science', 'Full-Stack', 'SQL'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-code-mono text-[11px] px-2.5 py-0.5 rounded bg-[#0d1c30] text-[#c1e8ff] border border-[#3b6174]/50"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <span className="font-code-mono text-[12px] uppercase text-[#c1e8ff] font-bold tracking-wider">
              Sections //
            </span>
            <div className="grid grid-cols-2 gap-2 text-[13px] font-body-md text-[#c2c7d0]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollTo(item.id, e)}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <span className="font-code-mono text-[12px] uppercase text-[#c1e8ff] font-bold tracking-wider">
              Connect //
            </span>
            <div className="flex flex-col gap-2 text-[13px] font-body-md text-[#c2c7d0]">
              <a
                href="https://github.com/Aishwaryashridhar-1512"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aishwarya-p-s-685787349"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                <span>LinkedIn Network</span>
              </a>
              <a
                href="mailto:aishwaryashridhar15@gmail.com"
                className="hover:text-white flex items-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
                <span>aishwaryashridhar15@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Return Bar */}
        <div className="pt-6 border-t border-[#3b6174]/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-code-mono text-[12px] text-[#a5cce2]">
          <div>
            © {new Date().getFullYear()} Aishwarya PS. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Refined Technical Minimalist Architecture</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#c1e8ff] hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
