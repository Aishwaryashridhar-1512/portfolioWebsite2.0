import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [showQuickNote, setShowQuickNote] = useState<boolean>(false);
  const [noteForm, setNoteForm] = useState({ name: '', email: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState<boolean>(false);

  const emailAddress = 'aishwaryashridhar15@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleSendNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteForm.message) return;
    setSentSuccess(true);
    setTimeout(() => {
      window.location.href = `mailto:${emailAddress}?subject=Transmission from ${encodeURIComponent(
        noteForm.name || 'Visitor'
      )}&body=${encodeURIComponent(
        `${noteForm.message}\n\nSender Email: ${noteForm.email || 'Not provided'}`
      )}`;
    }, 800);
  };

  return (
    <section
      id="contact"
      className="w-full py-16 lg:py-24 px-4 md:px-8 lg:px-10 bg-white"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Prominent Final CTA Banner */}
        <div className="relative w-full rounded-3xl bg-[#c1e8ff] p-8 lg:p-12 overflow-hidden shadow-lg border border-[#aed2fe]">
          {/* Ambient decorative vector graphic inside CTA */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#d5e3ff]/70 blur-2xl pointer-events-none"></div>
          <div className="absolute -left-16 -top-16 w-72 h-72 rounded-full bg-white/40 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="font-code-mono text-[12px] uppercase tracking-widest text-[#0f4976] font-bold">
                08 // INITIATE TRANSMISSION
              </span>

              <h2 className="font-headline-xl text-[34px] sm:text-[42px] text-[#0d1c30] font-semibold tracking-tight leading-tight">
                Let's build something interesting.
              </h2>

              <p className="font-body-lg text-[17px] sm:text-[19px] text-[#23496e] font-medium">
                Always looking to connect with others building in AI or full-stack.
              </p>

              <div className="font-code-mono text-[13px] text-[#42474f] pt-1">
                Aishwarya PS • AI & Data Science Student @ REVA University
              </div>

              {/* Copy email pill */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 hover:bg-white text-[12px] font-code-mono text-[#0d1c30] border border-[#2d5f8d]/20 transition-all shadow-sm active:scale-95"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#2d5f8d]">
                    {copiedEmail ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedEmail ? 'Email Copied!' : emailAddress}</span>
                </button>
                <button
                  onClick={() => setShowQuickNote(!showQuickNote)}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#2d5f8d]/10 hover:bg-[#2d5f8d]/20 text-[12px] font-code-mono text-[#0f4976] transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px]">edit_note</span>
                  <span>{showQuickNote ? 'Hide Quick Note' : 'Quick Message Form'}</span>
                </button>
              </div>
            </div>

            {/* Direct CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px]">
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0d1c30] text-[#c1e8ff] font-label-md text-[13px] font-semibold px-8 py-3 rounded-xl hover:bg-[#0f4976] shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
                <span className="tracking-wider uppercase">EMAIL ME</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aishwarya-p-s-685787349"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0d1c30] font-label-md text-[13px] font-semibold px-8 py-3 rounded-xl hover:bg-[#f0f3ff] shadow border border-[#2d5f8d]/20 hover:-translate-y-0.5 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">share</span>
                <span className="tracking-wider uppercase">LINKEDIN</span>
              </a>

              <a
                href="https://github.com/Aishwaryashridhar-1512"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0d1c30] font-label-md text-[13px] font-semibold px-8 py-3 rounded-xl hover:bg-[#f0f3ff] shadow border border-[#2d5f8d]/20 hover:-translate-y-0.5 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
                <span className="tracking-wider uppercase">GITHUB</span>
              </a>
            </div>
          </div>

          {/* Quick Note Form Drawer */}
          {showQuickNote && (
            <div className="mt-6 pt-6 border-t border-[#a6c9f5] animate-fadeIn">
              {sentSuccess ? (
                <div className="p-4 bg-white/90 rounded-2xl border border-[#2d5f8d]/30 text-center font-code-mono text-[13px] text-[#2d5f8d]">
                  Opening your default mail client with transmission payload...
                </div>
              ) : (
                <form onSubmit={handleSendNote} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-code-mono text-[#0f4976] uppercase mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Alex Johnson"
                      value={noteForm.name}
                      onChange={(e) => setNoteForm({ ...noteForm, name: e.target.value })}
                      className="w-full bg-white px-3 py-2 rounded-lg border border-[#727780]/30 text-[13px] text-[#0d1c30] focus:outline-none focus:border-[#2d5f8d]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-code-mono text-[#0f4976] uppercase mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={noteForm.email}
                      onChange={(e) => setNoteForm({ ...noteForm, email: e.target.value })}
                      className="w-full bg-white px-3 py-2 rounded-lg border border-[#727780]/30 text-[13px] text-[#0d1c30] focus:outline-none focus:border-[#2d5f8d]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-[11px] font-code-mono text-[#0f4976] uppercase mb-1">
                      Message / Project Idea
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell me about your idea, collaboration opportunity, or say hi..."
                      value={noteForm.message}
                      onChange={(e) => setNoteForm({ ...noteForm, message: e.target.value })}
                      className="w-full bg-white px-3 py-2 rounded-lg border border-[#727780]/30 text-[13px] text-[#0d1c30] focus:outline-none focus:border-[#2d5f8d]"
                    ></textarea>
                  </div>
                  <div className="sm:col-span-3 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#0d1c30] text-[#c1e8ff] px-6 py-2 rounded-lg text-[13px] font-code-mono uppercase font-semibold hover:bg-[#0f4976] transition-colors"
                    >
                      <span>SEND DISPATCH</span>
                      <span className="material-symbols-outlined text-[16px]">send</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
