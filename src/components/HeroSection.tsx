import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckModal }) => {
  return (
    <section className="relative pt-[88px] pb-[40px] sm:pt-[104px] md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E0B669]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Headline */}
          <h1 className="text-[32px] sm:text-[42px] md:text-6xl lg:text-7xl font-normal font-serif-display text-[#F6F2EA] tracking-tight leading-[1.12] md:leading-[1.1] max-w-4xl mx-auto">
            Become the painting business that{' '}
            <span className="italic text-[#E0B669] underline decoration-[#E0B669]/30 decoration-1 md:decoration-2 underline-offset-4 md:underline-offset-8">
              doesn't rely on referrals.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 md:mt-8 text-[15px] sm:text-[17px] md:text-xl text-[#A6978A] md:text-[#C2B29F] font-normal leading-[1.5] max-w-xl md:max-w-3xl mx-auto">
            We build your complete client acquisition system so you can consistently <span className="text-[#E0B669] md:text-[#C2B29F] font-medium md:font-normal">attract</span> the right projects, <span className="text-[#E0B669] md:text-[#C2B29F] font-medium md:font-normal">stand out</span> from every other painter in your area, and <span className="text-[#E0B669] md:text-[#C2B29F] font-medium md:font-normal">grow</span> without relying on referrals alone.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md md:max-w-none">
            <button
              onClick={onOpenCheckModal}
              className="w-full sm:w-auto h-[52px] sm:h-[56px] md:h-auto md:py-4 bg-[#E0B669] hover:bg-[#ebd08c] text-[#221215] font-bold tracking-wider uppercase text-[13px] md:text-sm px-8 rounded-full transition-all shadow-xl shadow-[#E0B669]/10 flex items-center justify-center gap-2.5 group hover:scale-[1.02]"
            >
              <MapPin className="w-4 h-4 text-[#221215]" />
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 text-[#221215] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#client-video"
              className="w-full sm:w-auto h-[48px] md:h-auto md:py-4 px-6 rounded-full text-[12px] md:text-xs font-medium text-[#BFAEA0] hover:text-[#F6F2EA] bg-[#180c0e]/60 md:bg-[#180c0e]/80 border border-[#3b2126]/50 md:border-[#3b2126] hover:bg-[#281519] transition-all flex items-center justify-center gap-2 text-center"
            >
              <span>Watch Client Interview (Juscelino)</span>
            </a>
          </div>

          {/* Three Trust Marks Underneath */}
          <div className="mt-8 sm:mt-10 md:mt-12 w-full flex justify-center">
            <div className="w-full md:w-auto flex flex-col md:flex-row md:items-center md:justify-center md:gap-8 text-[14px] sm:text-[15px] md:text-sm text-[#C2B29F] max-w-3xl mx-auto bg-[#180c0e]/80 md:bg-transparent border border-[#3b2126]/50 md:border-t md:border-b-0 md:border-l-0 md:border-r-0 md:border-[#3b2126]/60 rounded-2xl md:rounded-none md:pt-6 shadow-lg md:shadow-none">
              <div className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 md:p-0 border-b border-[#3b2126]/30 md:border-none">
                <CheckCircle2 className="w-[18px] h-[18px] md:w-4 md:h-4 text-[#E0B669] shrink-0" />
                <span>One Painting Business Per Service Area</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 md:p-0 border-b border-[#3b2126]/30 md:border-none">
                <CheckCircle2 className="w-[18px] h-[18px] md:w-4 md:h-4 text-[#E0B669] shrink-0" />
                <span>Pay After Results</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 md:p-0">
                <CheckCircle2 className="w-[18px] h-[18px] md:w-4 md:h-4 text-[#E0B669] shrink-0" />
                <span>Complete Client Acquisition System</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


