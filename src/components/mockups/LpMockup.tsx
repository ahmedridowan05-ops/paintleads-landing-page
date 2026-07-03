import { useState, useEffect } from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function LpMockup() {
  const [scrollPos, setScrollPos] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPos((pos) => {
        if (pos <= -150) {
          return 0;
        }
        return pos - 50;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-3 flex flex-col justify-between text-[#F5EEE8] font-sans bg-[#110506] select-none relative overflow-hidden">
      {/* Mock Browser Header */}
      <div className="flex items-center gap-2 border-b border-[#C9A24B]/10 pb-1.5 mb-1.5 z-20">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
        </div>
        <div className="bg-black/40 rounded px-2 py-0.5 text-[8px] text-[#E0BE6A]/80 flex-1 text-center font-mono border border-white/5 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3 h-3 text-green-500" />
          <span>https://renovationpaintwork.com/estimate</span>
        </div>
      </div>

      {/* Viewport scrolling area */}
      <div className="flex-1 overflow-hidden relative border border-[#C9A24B]/10 rounded bg-[#160A0A] p-2">
        <motion.div 
          className="space-y-4 absolute left-2 right-2"
          animate={{ y: scrollPos }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Header section */}
          <div className="flex justify-between items-center border-b border-white/5 pb-1">
            <div className="font-serif font-black text-[#E0BE6A] text-[9px] flex items-center gap-0.5">
              <span>RENOVATION</span>
            </div>
            <div className="bg-[#E0BE6A]/10 border border-[#E0BE6A]/30 text-[#E0BE6A] font-bold px-1.5 py-0.5 rounded-[3px] text-[7px] uppercase tracking-wider">
              Free Estimate
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center space-y-1 py-1 bg-black/10 rounded">
            <div className="flex items-center justify-center gap-1 text-[8px]">
              <span className="flex text-amber-400">★★★★★</span>
              <span className="text-white/50 text-[7px] font-mono">5.0 GOOGLE RATED</span>
            </div>
            <h4 className="text-[11px] font-black leading-tight text-white uppercase tracking-tight">
              Interior Painting <br/>
              <span className="text-[#E0BE6A]">Done Properly.</span>
            </h4>
            <p className="text-[7px] text-white/50 max-w-[180px] mx-auto leading-relaxed">
              Precision. Perfection. Airless spraying specialists in Galway.
            </p>
          </div>

          {/* Review Floating Badge overlay */}
          <div className="p-1.5 bg-[#210D0F] border border-[#E0BE6A]/30 rounded-lg shadow-lg flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#E0BE6A]/20 flex items-center justify-center text-[#E0BE6A] text-[10px] font-bold">G</div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white text-[8px]">John M. (Galway)</span>
                <span className="text-amber-400 text-[6px]">★★★★★</span>
              </div>
              <p className="text-[7px] text-white/70 line-clamp-1 italic mt-0.5">"Amazing job on our kitchen cabinets, dust-free finishes!"</p>
            </div>
          </div>

          {/* Form Step Estimator Card */}
          <div className="bg-[#1E0D0F] border border-[#C9A24B]/30 rounded-lg p-2 relative shadow-lg">
            <div className="flex justify-between items-center mb-1 border-b border-white/5 pb-1">
              <span className="text-[7px] font-bold uppercase tracking-wider text-[#E0BE6A]">Estimator step {activeStep + 1} of 3</span>
              <div className="flex gap-0.5">
                <div className={`w-4 h-0.5 rounded-full ${activeStep >= 0 ? 'bg-[#E0BE6A]' : 'bg-white/10'}`} />
                <div className={`w-4 h-0.5 rounded-full ${activeStep >= 1 ? 'bg-[#E0BE6A]' : 'bg-white/10'}`} />
                <div className={`w-4 h-0.5 rounded-full ${activeStep >= 2 ? 'bg-[#E0BE6A]' : 'bg-white/10'}`} />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeStep === 0 && (
                <motion.div
                  key="form1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-1"
                >
                  <p className="text-[8px] font-semibold text-white">What is your project type?</p>
                  <div className="p-1 bg-[#E0BE6A]/15 border border-[#E0BE6A] rounded text-[7px] text-white flex justify-between items-center">
                    <span>🏠 Full Interior House Painting</span>
                    <Check className="w-2 h-2 text-[#E0BE6A]" />
                  </div>
                  <div className="p-1 bg-black/20 border border-white/5 rounded text-[7px] text-white/50">🏢 Office / Commercial Space</div>
                </motion.div>
              )}

              {activeStep === 1 && (
                <motion.div
                  key="form2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-1"
                >
                  <p className="text-[8px] font-semibold text-white">When do you need it done?</p>
                  <div className="p-1 bg-black/20 border border-white/5 rounded text-[7px] text-white/50">⚡ Immediately (Next 2 weeks)</div>
                  <div className="p-1 bg-[#E0BE6A]/15 border border-[#E0BE6A] rounded text-[7px] text-white flex justify-between items-center">
                    <span>📅 Flexible (Next 1-2 months)</span>
                    <Check className="w-2 h-2 text-[#E0BE6A]" />
                  </div>
                </motion.div>
              )}

              {activeStep === 2 && (
                <motion.div
                  key="form3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-1"
                >
                  <p className="text-[8px] font-semibold text-white">Property Ownership?</p>
                  <div className="p-1 bg-[#E0BE6A]/15 border border-[#E0BE6A] rounded text-[7px] text-white flex justify-between items-center">
                    <span>🔑 Yes, I am the homeowner</span>
                    <Check className="w-2 h-2 text-[#E0BE6A]" />
                  </div>
                  <div className="p-1 bg-black/20 border border-white/5 rounded text-[7px] text-white/50">🏢 Tenant / Rental space</div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next step visual indicator */}
            <div className="mt-1.5 flex justify-between items-center">
              <span className="text-[6px] text-white/40">Filters out tyre-kickers</span>
              <div className="bg-[#E0BE6A] text-black text-[7px] px-1.5 py-0.5 rounded font-black uppercase flex items-center gap-0.5">
                <span>Continue</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* Pricing list transparent section */}
          <div className="bg-black/30 border border-white/5 rounded-lg p-2 space-y-1 text-[7px]">
            <div className="flex justify-between font-bold border-b border-white/5 pb-1">
              <span className="text-white/80">Galway Spray Pricing Guide</span>
              <span className="text-[#E0BE6A]">Transparent</span>
            </div>
            <div className="flex justify-between"><span className="text-white/60">Standard New Build</span><span className="text-white font-bold">€14-15 / m²</span></div>
            <div className="flex justify-between"><span className="text-white/60">High Ceiling / Extra Prep</span><span className="text-white font-bold">€16-18 / m²</span></div>
            <div className="flex justify-between border-t border-white/5 pt-1"><span className="text-[#E0BE6A] font-bold">Typical Project Budget</span><span className="text-[#E0BE6A] font-bold">€3,000 - €5,000</span></div>
          </div>
        </motion.div>

        {/* Mock virtual pointer/hand */}
        <motion.div
          className="absolute z-30 pointer-events-none"
          animate={{ x: [40, 180, 120, 40], y: [60, 110, 140, 60] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-3.5 h-3.5 bg-yellow-400 border border-black rounded-full flex items-center justify-center shadow-md opacity-80 scale-90">
            <span className="text-[6px] font-mono text-black font-black">👆</span>
          </div>
        </motion.div>
      </div>

      {/* Watermark/Badge */}
      <div className="mt-2 text-center text-[7px] font-semibold text-white/40 uppercase tracking-widest bg-black/20 p-1 rounded">
        💻 Automated landing system for pre-qualifying leads
      </div>
    </div>
  );
}
