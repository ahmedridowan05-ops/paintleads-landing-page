import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';

export function Ticker() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    "QUALIFIED LEADS",
    "ONE CLIENT PER AREA",
    "NO ADS MANAGER",
    "BUILT FOR YOU",
    "QUALIFIED OPPORTUNITIES",
    // Double items to ensure seamless scroll
    "QUALIFIED LEADS",
    "ONE CLIENT PER AREA",
    "NO ADS MANAGER",
    "BUILT FOR YOU",
    "QUALIFIED OPPORTUNITIES"
  ];

  return (
    <section 
      className="bg-[#160F0F] py-8 border-y border-[#C9A24B]/10 overflow-hidden relative z-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex whitespace-nowrap overflow-hidden">
        {shouldReduceMotion ? (
          <div className="flex gap-8 items-center shrink-0 w-full justify-center flex-wrap">
            {items.slice(0, 5).map((item, index) => (
              <div key={index} className="flex gap-8 items-center">
                <span className="font-label-sm text-[#F0E8E4] uppercase tracking-widest text-sm">{item}</span>
                <span className="text-[#E0BE6A] font-bold">·</span>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="flex gap-8 items-center shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: isHovered ? 80 : 40,
                ease: "linear",
              },
            }}
          >
            {[...items, ...items].map((item, index) => (
              <div key={index} className="flex gap-8 items-center">
                <span className="font-label-sm text-[#F0E8E4] uppercase tracking-widest text-sm">{item}</span>
                <span className="text-[#E0BE6A] font-bold">·</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
