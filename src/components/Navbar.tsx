import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/portfolioData';

interface NavbarProps {
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProfile }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-10 pt-2 transition-all duration-300">
      <div
        className={`h-16 max-w-[1240px] mx-auto px-4 lg:px-6 flex items-center justify-between rounded-xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border border-[#c2c7d0]/50 shadow-[0_12px_36px_rgba(2,16,36,0.12)]'
            : 'bg-white/85 backdrop-blur-xl border border-[#c2c7d0]/40 shadow-[0_12px_36px_rgba(2,16,36,0.08)]'
        }`}
      >
        {/* Logo and Status Badge */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => scrollTo('home', e)}
            className="font-headline-sm text-[18px] uppercase tracking-tight text-[#0d1c30] font-semibold hover:text-[#2d5f8d] transition-colors"
          >
            Aishwarya P S
          </a>
          <div className="hidden sm:flex items-center gap-1.5 bg-[#dee8ff]/60 px-2.5 py-0.5 rounded-full border border-[#c2c7d0]/30">
            <span className="w-2 h-2 rounded-full bg-[#2d5f8d] animate-pulse"></span>
            <span className="font-code-mono text-[11px] text-[#3b6174] tracking-wider uppercase">
              v2.6 :: online
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(item.id, e)}
                className={`px-3 py-1.5 rounded-lg text-[13px] tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-[#4878a7] text-white font-medium shadow-sm'
                    : 'text-[#42474f] hover:bg-[#dee8ff] hover:text-[#0d1c30] font-medium'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Profile Modal Trigger & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenProfile}
            title="View Student Profile"
            className="w-9 h-9 rounded-full bg-[#2d5f8d] hover:bg-[#1e4468] transition-all flex items-center justify-center text-white shadow-sm hover:scale-105 active:scale-95"
            aria-label="Student profile"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-lg bg-[#f0f3ff] hover:bg-[#e7eeff] border border-[#c2c7d0]/40 flex items-center justify-center text-[#0d1c30] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden max-w-[1240px] mx-auto mt-2 p-4 bg-white/95 backdrop-blur-2xl rounded-2xl border border-[#c2c7d0]/50 shadow-xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-[#e7eeff] mb-2">
            <span className="font-code-mono text-[11px] text-[#2d5f8d] uppercase tracking-wider font-semibold">
              NAVIGATION // JUMP TO
            </span>
            <div className="flex items-center gap-1.5 bg-[#dee8ff]/60 px-2 py-0.5 rounded-full text-[10px] font-code-mono text-[#3b6174]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2d5f8d] animate-pulse"></span>
              ONLINE
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollTo(item.id, e)}
                  className={`px-3 py-2 rounded-xl text-sm transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#4878a7] text-white font-medium'
                      : 'bg-[#f0f3ff] text-[#0d1c30] hover:bg-[#dee8ff]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
