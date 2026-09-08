/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  const [profileModalOpen, setProfileModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#0d1c30] selection:bg-[#c1e8ff] selection:text-[#0d1c30] overflow-x-hidden">
      {/* Sticky Top Navigation Bar */}
      <Navbar onOpenProfile={() => setProfileModalOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="flex-1 pt-16">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Deep Navy Technical Footer */}
      <Footer />

      {/* Student Profile Quick Vitals Modal */}
      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
    </div>
  );
}

