import React from 'react';
import { Paintbrush, MapPin, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onOpenCheckModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckModal }) => {
  return (
    <footer className="bg-[#12080a] border-t border-[#3b2126] pt-16 pb-12 text-[#C2B29F] text-xs relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#E0B669]/5 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Footer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#221215] to-[#180c0e] border border-[#3b2126] shadow-xl gap-6 md:gap-8"
        >
          <div className="flex items-center gap-4 md:gap-5 w-full md:w-auto">
            <div className="w-[52px] h-[52px] md:w-14 md:h-14 rounded-xl bg-[#E0B669]/10 border border-[#E0B669]/30 flex items-center justify-center text-[#E0B669] shrink-0 shadow-inner">
              <Paintbrush className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <div>
              <h4 className="text-[#F6F2EA] font-normal font-serif-display text-[22px] md:text-2xl leading-none">Paint Leads</h4>
              <p className="text-[11px] md:text-xs text-[#A6978A] mt-1.5 font-medium tracking-wide">Boutique Client Acquisition Systems</p>
            </div>
          </div>

          <div className="flex items-center w-full md:w-auto">
            <button
              onClick={onOpenCheckModal}
              className="w-full md:w-auto bg-[#E0B669] hover:bg-[#ebd08c] text-[#221215] font-bold tracking-wider text-[11px] md:text-xs uppercase px-6 py-4 md:py-3.5 rounded-full transition-all flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg shadow-[#E0B669]/10"
            >
              <MapPin className="w-3.5 h-3.5 text-[#221215]" />
              <span>See If Your Area Is Available</span>
            </button>
          </div>
        </motion.div>

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pt-4">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:col-span-5 lg:col-span-4"
          >
            <span className="text-[#F6F2EA] font-normal font-serif-display text-[20px] block">Our Exclusivity Commitment</span>
            <p className="text-[#C2B29F] text-[13px] leading-[1.6] max-w-sm">
              We work with an intentionally small group of painting contractors. To protect market share and ad efficiency, we strictly partner with <strong className="text-[#E0B669] font-medium">1 painting business per service area</strong>.
            </p>
            <div className="flex items-center gap-2 text-[#E0B669] text-xs pt-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#E0B669]" />
              <span>Territory Protection Guaranteed</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 md:col-span-3 lg:col-span-2 lg:col-start-7"
          >
            <span className="text-[#F6F2EA] font-normal font-serif-display text-[20px] block">Navigation</span>
            <ul className="space-y-3 text-[13px]">
              <li><a href="#client-video" className="hover:text-[#E0B669] transition-colors">Hear From A Client</a></li>
              <li><a href="#what-we-build" className="hover:text-[#E0B669] transition-colors">What We Build</a></li>
              <li><a href="#ideal-clients" className="hover:text-[#E0B669] transition-colors">Who It's For</a></li>
              <li><a href="#why-we-started" className="hover:text-[#E0B669] transition-colors">Why We Started</a></li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 md:col-span-4 lg:col-span-3"
          >
            <span className="text-[#F6F2EA] font-normal font-serif-display text-[20px] block">Contact & Agency</span>
            <div className="space-y-1">
              <p className="text-[#C2B29F] text-[13px] font-medium">Paint Leads Agency</p>
              <p className="text-[#A6978A] text-[13px] leading-relaxed">Boutique Growth Partners for Painting Businesses</p>
            </div>
            <p className="text-[#E0B669] text-[12px] font-medium pt-2">
              contact: paintleads.ie@gmail.com
            </p>
          </motion.div>

        </div>

        {/* Bottom Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-[#3b2126]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#A6978A] text-[11px]"
        >
          <p>© {new Date().getFullYear()} Paint Leads. All rights reserved.</p>
          <p className="text-[#A6978A] text-center sm:text-right">Tailored Client Acquisition Systems • Built for Quality Painting Contractors</p>
        </motion.div>

      </div>
    </footer>
  );
};

