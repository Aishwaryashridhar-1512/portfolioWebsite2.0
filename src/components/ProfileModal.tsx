import React from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#c2c7d0]/50 relative flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f0f3ff] hover:bg-[#dee8ff] text-[#0d1c30] flex items-center justify-center transition-colors"
          aria-label="Close profile modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Header with avatar */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#2d5f8d] text-white flex items-center justify-center font-headline-lg text-[24px] font-bold shadow-md">
            APS
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className="font-headline-sm text-[22px] text-[#0d1c30] font-bold">
                Aishwarya P S
              </h3>
              <span className="w-2 h-2 rounded-full bg-[#2d5f8d] animate-pulse"></span>
            </div>
            <p className="font-code-mono text-[12px] text-[#2d5f8d] font-semibold">
              B.Tech Artificial Intelligence & Data Science
            </p>
            <p className="font-body-sm text-[12px] text-[#42474f]">
              REVA University • Bangalore, India
            </p>
          </div>
        </div>

        {/* Vitals matrix */}
        <div className="grid grid-cols-2 gap-2.5 bg-[#f0f3ff] p-4 rounded-2xl border border-[#dee8ff] font-code-mono text-[12px]">
          <div>
            <span className="text-[#3b6174] uppercase block text-[10px]">CURRENT FOCUS</span>
            <span className="font-semibold text-[#0d1c30]">ML & Applied Data Science</span>
          </div>
          <div>
            <span className="text-[#3b6174] uppercase block text-[10px]">PROGRAMMING</span>
            <span className="font-semibold text-[#0d1c30]">Python, C, SQL</span>
          </div>
          <div>
            <span className="text-[#3b6174] uppercase block text-[10px]">STATUS</span>
            <span className="font-semibold text-[#2d5f8d]">Open to Collaborations</span>
          </div>
          <div>
            <span className="text-[#3b6174] uppercase block text-[10px]">GRADUATION</span>
            <span className="font-semibold text-[#0d1c30]">July 2029</span>
          </div>
        </div>

        {/* Profile Bio */}
        <div className="flex flex-col gap-2">
          <span className="font-code-mono text-[11px] uppercase tracking-wider text-[#3b6174] font-semibold">
            ABOUT // BACKGROUND
          </span>
          <p className="font-body-sm text-[14px] text-[#42474f] leading-relaxed">
            Passionate about understanding how complex systems operate under the hood. Currently building a solid foundation in computational algorithms, machine learning models, and full-stack software architecture.
          </p>
        </div>

        {/* Direct Connect Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <a
            href="https://github.com/Aishwaryashridhar-1512"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#f0f3ff] hover:bg-[#dee8ff] border border-[#dee8ff] flex items-center justify-center gap-2 font-code-mono text-[12px] text-[#0d1c30] font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">code</span>
            <span>GitHub Profile</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aishwarya-p-s-685787349"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#f0f3ff] hover:bg-[#dee8ff] border border-[#dee8ff] flex items-center justify-center gap-2 font-code-mono text-[12px] text-[#0d1c30] font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Primary Contact CTA */}
        <a
          href="mailto:aishwaryashridhar15@gmail.com"
          className="w-full py-3 rounded-xl bg-[#0d1c30] text-[#c1e8ff] font-label-md text-[13px] font-semibold uppercase flex items-center justify-center gap-2 hover:bg-[#0f4976] transition-colors shadow-md"
        >
          <span className="material-symbols-outlined text-[18px]">mail</span>
          <span>Send Direct Message</span>
        </a>
      </div>
    </div>
  );
};
