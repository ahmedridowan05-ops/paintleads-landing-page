import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ClientVideoSection } from './components/ClientVideoSection';
import { WhatWeBuildSection } from './components/WhatWeBuildSection';
import { IdealClientsSection } from './components/IdealClientsSection';
import { WhyWeStartedSection } from './components/WhyWeStartedSection';
import { AreaAvailabilityModal } from './components/AreaAvailabilityModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);

  const handleOpenCheckModal = () => {
    setIsCheckModalOpen(true);
  };

  const handleCloseCheckModal = () => {
    setIsCheckModalOpen(false);
  };

  const handleSeeHowWeBuild = () => {
    const section = document.getElementById('what-we-build');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Navigation Bar */}
      <Navbar onOpenCheckModal={handleOpenCheckModal} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <HeroSection onOpenCheckModal={handleOpenCheckModal} />

        {/* Section 2: Hear From A Client */}
        <ClientVideoSection onSeeHowWeBuild={handleSeeHowWeBuild} />

        {/* Section 3: What We Build Together */}
        <WhatWeBuildSection onOpenCheckModal={handleOpenCheckModal} />

        {/* Section 4: The Businesses We Get The Best Results With */}
        <IdealClientsSection onOpenCheckModal={handleOpenCheckModal} />

        {/* Section 5: Why We Started Paint Leads */}
        <WhyWeStartedSection onOpenCheckModal={handleOpenCheckModal} />
      </main>

      {/* Footer */}
      <Footer onOpenCheckModal={handleOpenCheckModal} />

      {/* Area Availability Lookup Modal */}
      <AreaAvailabilityModal
        isOpen={isCheckModalOpen}
        onClose={handleCloseCheckModal}
      />

    </div>
  );
}
