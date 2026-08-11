import React, { useState } from 'react';
import { ArrowRight, Quote, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface ClientVideoSectionProps {
  onSeeHowWeBuild: () => void;
}

export const ClientVideoSection: React.FC<ClientVideoSectionProps> = ({ onSeeHowWeBuild }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="client-video" className="py-14 sm:py-20 md:py-28 bg-[#221215] relative overflow-hidden border-t border-[#3b2126]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#E0B669]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 md:space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#E0B669] block">
            Hear From A Client
          </span>

          <p className="text-[#C2B29F] text-[14.5px] sm:text-[16px] md:text-lg leading-[1.6] max-w-xl md:max-w-none mx-auto">
            Instead of telling you why we believe in our approach, we'd rather let <span className="text-[#F6F2EA]">one of our clients</span> tell you what it was actually like working with us.
          </p>

          <h2 className="text-[28px] sm:text-[36px] md:text-5xl font-normal font-serif-display text-[#F6F2EA] tracking-tight pt-1 md:pt-4">
            Meet Juscelino.
          </h2>
        </motion.div>

        {/* Video Player Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-[#180c0e] border border-[#3b2126]/60 md:border-[#3b2126] shadow-2xl group transition-colors duration-500 hover:border-[#E0B669]/40 aspect-video">
            
            {/* YouTube Player or Custom Thumbnail */}
            {!isPlaying ? (
              <div 
                className="absolute inset-0 w-full h-full cursor-pointer overflow-hidden flex items-center justify-center bg-[#12080a]"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail Image */}
                <img 
                  src="https://img.youtube.com/vi/wuvuH4Al410/maxresdefault.jpg" 
                  alt="Client Interview Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-700 group-hover:scale-[1.03] transform"
                />
                
                {/* Dark Gradient Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12080a]/80 via-[#12080a]/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[#221215]/20 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Custom Play Button */}
                <div className="relative z-10 w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 rounded-full bg-[#E0B669] flex items-center justify-center shadow-[0_0_40px_rgba(224,182,105,0.2)] group-hover:shadow-[0_0_60px_rgba(224,182,105,0.4)] group-hover:scale-110 transition-all duration-500">
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 text-[#221215] fill-[#221215] ml-1 md:ml-2" />
                </div>
              </div>
            ) : (
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/wuvuH4Al410?autoplay=1&rel=0&cc_load_policy=0&iv_load_policy=3" 
                title="Client Interview with Juscelino" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}

          </div>
        </motion.div>

        {/* Quote Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto px-0 md:px-0"
        >
          <div className="bg-gradient-to-b from-[#180c0e] to-transparent border border-[#3b2126]/40 md:border-[#3b2126] rounded-xl sm:rounded-2xl p-4 sm:p-8 relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6 text-center sm:text-left">
              <Quote className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#E0B669] shrink-0 sm:mt-1 opacity-60 md:opacity-80" />
              <p className="text-[16px] sm:text-[19px] md:text-xl text-[#F6F2EA] font-serif-display italic leading-snug md:leading-relaxed text-balance">
                "The biggest change wasn't getting more enquiries, it was getting the <span className="text-[#E0B669]">right</span> enquiries consistently."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Statement & CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-6 sm:space-y-8 pt-1 sm:pt-4"
        >
          <p className="text-[14px] sm:text-[15px] md:text-base text-[#A6978A] md:text-[#C2B29F] leading-[1.6] max-w-xl md:max-w-none mx-auto text-balance">
            Every painting business is different, which is why every system we build is <span className="text-[#F6F2EA] font-medium">tailored to the goals, market and type of projects</span> you want to win.
          </p>

          <div className="flex justify-center">
            <a
              href="#what-we-build"
              onClick={(e) => {
                e.preventDefault();
                onSeeHowWeBuild();
              }}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#180c0e] md:bg-transparent hover:bg-[#281519] border border-[#3b2126]/60 md:border-[#3b2126] text-[#F6F2EA] font-semibold text-[11px] md:text-xs tracking-[0.1em] md:tracking-wider uppercase transition-all hover:gap-3 group shadow-lg md:shadow-none text-center"
            >
              <span>See How We Build Your System</span>
              <ArrowRight className="w-4 h-4 text-[#E0B669] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


