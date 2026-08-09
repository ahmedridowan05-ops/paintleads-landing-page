import React from 'react';
import { MapPin, Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyWeStartedSectionProps {
  onOpenCheckModal: () => void;
}

export const WhyWeStartedSection: React.FC<WhyWeStartedSectionProps> = ({ onOpenCheckModal }) => {
  return (
    <section id="why-we-started" className="py-20 md:py-28 bg-[#1B0D10] relative overflow-hidden border-t border-[#3b2126]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Only one large photo container */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square md:aspect-[4/5] w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#221215] to-[#180c0e] border border-[#3b2126]/60 flex items-center justify-center text-center shadow-2xl group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-overlay z-10"></div>
              
              {/* === ADD YOUR IMAGE HERE === */}
              {/* Replace the src below with your actual image URL (e.g., "/founders.jpg" if placed in the public folder) */}
              <img 
                src="/founders.png" 
                alt="Ridowan & Siam - Paint Leads Founders"
                className="absolute inset-0 w-full h-full object-cover scale-[1.15] group-hover:scale-[1.2] opacity-80 group-hover:opacity-100 transition-all duration-700 z-0" 
              />

            </div>
          </motion.div>

          {/* Right Column: Title, Paragraphs, Names, CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8 md:space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-[32px] md:text-5xl font-normal font-serif-display text-[#F6F2EA] tracking-tight leading-tight">
                Why We Started Paint Leads
              </h2>
            </div>

            <div className="relative">
              <Quote className="absolute -left-3 -top-3 md:-left-6 md:-top-4 w-8 h-8 md:w-12 md:h-12 text-[#E0B669]/10 rotate-180" />
              
              <div className="space-y-6 text-[#A6978A] md:text-[#C2B29F] text-[15px] md:text-lg leading-[1.7] md:leading-relaxed font-normal relative z-10">
                <p>
                  We realised most painting businesses weren't struggling because they weren't good painters.
                </p>

                <p>
                  They were struggling because they relied almost entirely on <span className="text-[#F6F2EA]">referrals, inconsistent enquiries, and marketing agencies</span> that disappeared after launching a few ads.
                </p>

                <div className="pl-4 md:pl-6 border-l-2 border-[#E0B669]/30 py-1 my-6">
                  <p className="text-[#E0B669] italic font-serif-display text-xl md:text-2xl">
                    We wanted to build something different. Not another agency.
                  </p>
                </div>

                <p>
                  Our goal isn't to become the biggest marketing agency. It's to become the <span className="text-[#F6F2EA]">most trusted growth partner</span> for the painting businesses we work with.
                </p>

                <p className="font-medium text-[#F6F2EA]">
                  If your business grows, ours grows too. That's exactly how we think it should work.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-4 md:pt-6 border-t border-[#3b2126]/50">
              {/* Names */}
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-serif-display text-[#F6F2EA] italic">Ridowan & Siam</div>
                <div className="text-[11px] md:text-xs text-[#A6978A] tracking-[0.15em] uppercase font-semibold">Paint Leads Founders</div>
              </div>

              {/* CTA button */}
              <div className="w-full md:w-auto">
                <button
                  onClick={onOpenCheckModal}
                  className="w-full md:w-auto bg-[#E0B669] hover:bg-[#ebd08c] text-[#221215] font-bold tracking-wider text-[13px] md:text-xs uppercase px-8 py-4 md:py-4 rounded-full transition-all shadow-xl shadow-[#E0B669]/10 inline-flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  <MapPin className="w-4 h-4 text-[#221215]" />
                  <span>See If Your Area Is Available</span>
                </button>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};


