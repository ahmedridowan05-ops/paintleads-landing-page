import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Paintbrush, MapPin, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCheckModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Client Video', href: '#client-video' },
    { label: 'What We Build', href: '#what-we-build' },
    { label: 'Who It’s For', href: '#ideal-clients' },
    { label: 'Our Story', href: '#why-we-started' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#180c0e]/95 backdrop-blur-md border-b border-[#3b2126] py-3 shadow-2xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-[46px] h-[46px] md:w-[52px] md:h-[52px] rounded-xl bg-[#E0B669]/10 border border-[#E0B669]/30 flex items-center justify-center text-[#E0B669] group-hover:scale-105 transition-transform">
            <span className="font-serif-display font-bold text-xl md:text-2xl leading-none">PL</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-display font-bold text-[20px] md:text-[22px] text-[#F6F2EA] tracking-tight leading-none group-hover:text-[#E0B669] transition-colors">
              Paint Leads
            </span>
            <span className="text-[10px] md:text-[11px] text-[#BFAEA0] font-medium tracking-wide mt-0.5 md:mt-1">
              Client Acquisition Systems
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#180c0e]/80 border border-[#3b2126] rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-[#C2B29F] hover:text-[#F6F2EA] hover:bg-[#3b2126]/60 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Exclusivity Tag */}
        <div className="hidden md:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#180c0e]/80 border border-[#3b2126] text-[11px] text-[#BFAEA0]">
            <span className="w-2 h-2 rounded-full bg-[#E0B669] animate-pulse" />
            <span>1 Partner Per Service Area</span>
          </div>

          <button
            onClick={onOpenCheckModal}
            className="bg-[#E0B669] hover:bg-[#ebd08c] text-[#221215] font-bold tracking-wider text-xs px-5 py-2.5 rounded-full transition-all shadow-lg shadow-[#E0B669]/10 flex items-center gap-1.5 hover:scale-[1.02]"
          >
            <MapPin className="w-3.5 h-3.5 text-[#221215]" />
            <span>See If Your Area Is Available</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-[46px] h-[46px] rounded-lg bg-[#180c0e] border border-[#3b2126] text-[#C2B29F] hover:text-[#F6F2EA]"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#180c0e] border-b border-[#3b2126] px-6 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-[#C2B29F] hover:text-[#E0B669] hover:bg-[#281519] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-[#3b2126] space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#BFAEA0] px-2">
                <span className="w-2 h-2 rounded-full bg-[#E0B669] animate-pulse" />
                <span>Strict 1 Partner Per Service Area Exclusivity</span>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCheckModal();
                }}
                className="w-full bg-[#E0B669] text-[#221215] font-bold py-3 px-4 rounded-full text-xs flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <MapPin className="w-4 h-4" />
                <span>See If Your Area Is Available</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

