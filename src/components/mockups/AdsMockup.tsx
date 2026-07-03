import { useState, useEffect } from 'react';
import { Pause, Play, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AdsMockup() {
  const [activeFrame, setActiveFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActiveFrame((f) => (f + 1) % 3);
          return 0;
        }
        return p + 0.8; // fine grain progress increment
      });
    }, 40);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full p-4 flex flex-col justify-between text-[#F5EEE8] font-sans text-xs bg-[#1A0B0C] select-none">
      {/* Top Profile Bar */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#E0BE6A]/20 border border-[#E0BE6A]/40 flex items-center justify-center text-[#E0BE6A] font-bold text-sm">
            RP
          </div>
          <div>
            <div className="font-semibold text-white flex items-center gap-1 text-[11px]">
              Renovation Paintworks
              <span className="text-[9px] text-blue-400 bg-blue-500/10 px-1 rounded font-bold">✓ Verified</span>
            </div>
            <div className="text-[9px] text-white/50">Sponsored • Instagram & Facebook</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMuted(!isMuted)} className="p-1 hover:bg-white/10 rounded transition-colors text-white/60">
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
          <span className="text-white/60 text-lg">•••</span>
        </div>
      </div>

      {/* Ad Copy */}
      <div className="text-white/90 text-[10px] mb-2 leading-normal">
        <span className="font-bold text-white">Renovation Paintworks:</span> Galway's premium dust-free spraying specialists. Fast, flawless, and fully qualified. Estimate in 30 seconds! 👇
      </div>

      {/* Ad Creative Video Canvas */}
      <div className="flex-1 min-h-0 bg-[#160A0A] rounded-lg border border-[#C9A24B]/20 relative overflow-hidden flex flex-col justify-between p-3 shadow-inner">
        {/* Progress Bar top */}
        <div className="absolute top-1 left-2 right-2 flex gap-1 z-20">
          <div className="h-0.5 bg-white/20 flex-1 rounded overflow-hidden">
            <div className="h-full bg-[#E0BE6A]" style={{ width: activeFrame === 0 ? `${progress}%` : activeFrame > 0 ? '100%' : '0%' }} />
          </div>
          <div className="h-0.5 bg-white/20 flex-1 rounded overflow-hidden">
            <div className="h-full bg-[#E0BE6A]" style={{ width: activeFrame === 1 ? `${progress}%` : activeFrame > 1 ? '100%' : '0%' }} />
          </div>
          <div className="h-0.5 bg-white/20 flex-1 rounded overflow-hidden">
            <div className="h-full bg-[#E0BE6A]" style={{ width: activeFrame === 2 ? `${progress}%` : '0%' }} />
          </div>
        </div>

        {/* Content Screens */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden py-1">
          <AnimatePresence mode="wait">
            {activeFrame === 0 && (
              <motion.div
                key="scene_wip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col justify-between p-2"
              >
                {/* Background Wall Paint simulation */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-700 opacity-65" />
                {/* Spray Animation */}
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#EFECE8] border-r-4 border-yellow-300/40"
                  initial={{ width: '0%' }}
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Text overlays matching user video */}
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 border border-white/10 text-white/90 text-[8px] tracking-wider uppercase font-mono font-bold">
                    <Sparkles className="w-2.5 h-2.5 text-[#E0BE6A] animate-pulse" /> Work in PROGRESS
                  </div>
                </div>

                <div className="relative z-10 text-center mb-1">
                  <h4 className="text-sm font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-tight">
                    A CLEAN FINISH
                  </h4>
                  <p className="text-[9px] text-white/90 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5">
                    WILL MAKE YOUR NEW HOME LOOK STUNNING
                  </p>
                </div>
              </motion.div>
            )}

            {activeFrame === 1 && (
              <motion.div
                key="scene_juicelino"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col justify-between p-2"
              >
                {/* Styled illustration of Juicelino */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#301618] to-[#1E0E10] flex items-center justify-center">
                  <div className="relative w-20 h-20 rounded-full bg-[#E0BE6A]/10 border-2 border-[#E0BE6A]/40 flex items-center justify-center overflow-hidden">
                    <div className="absolute bottom-0 w-16 h-12 bg-[#E0BE6A]/30 rounded-t-full flex items-center justify-center" />
                    {/* Head/Hair icon */}
                    <div className="w-7 h-7 rounded-full bg-[#E0BE6A]/70 -mt-2 border border-white/20" />
                  </div>
                </div>

                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-black/60 px-1.5 py-0.5 rounded border border-white/10 text-[8px] uppercase tracking-wider text-[#E0BE6A] font-bold">
                    Meet the Lead Painter
                  </div>
                </div>

                <div className="relative z-10 text-center bg-black/50 backdrop-blur-sm p-1.5 rounded-lg border border-white/5 max-w-[220px] mx-auto">
                  <p className="text-[10px] font-bold text-[#E0BE6A]">"Hi, I'm Juicelino"</p>
                  <p className="text-[8px] text-white/80 italic leading-snug mt-0.5">
                    "From Renovation Paintworks. Let us deliver the premium finish your home deserves."
                  </p>
                </div>
              </motion.div>
            )}

            {activeFrame === 2 && (
              <motion.div
                key="scene_detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col justify-between p-2"
              >
                {/* Background Van Shot */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-[#1E0E10] to-neutral-800 flex flex-col justify-center items-center p-3">
                  <div className="border border-[#E0BE6A]/30 p-2 rounded bg-black/40 text-center max-w-[180px]">
                    <div className="text-[13px] font-black tracking-tight text-white flex items-center justify-center gap-1">
                      <span>RENOVATION</span>
                    </div>
                    <div className="text-[8px] tracking-widest text-[#E0BE6A] uppercase font-mono font-bold mt-0.5 border-t border-[#E0BE6A]/20 pt-0.5">
                      TRUSTED & INSURED
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-[8px] uppercase tracking-wider font-bold">
                    Every Detail Matters
                  </div>
                </div>

                <div className="relative z-10 text-center bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/10 max-w-[200px] mx-auto mb-1">
                  <p className="text-[10px] font-bold text-white">Flawless Galway Finishes</p>
                  <p className="text-[8px] text-white/60">Professional airless spraying system</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Video HUD Overlays */}
        <div className="flex items-center justify-between z-10 mt-auto bg-black/30 p-1.5 rounded-md border border-white/5">
          <div className="flex items-center gap-1 text-[9px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white/80">Scene {activeFrame + 1}/3</span>
          </div>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-95"
          >
            {isPlaying ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5 fill-white text-transparent ml-0.5" />}
          </button>
        </div>
      </div>

      {/* Footer Bar / CTA */}
      <div className="mt-2 flex items-center justify-between bg-black/30 p-1.5 rounded-lg border border-[#C9A24B]/20">
        <div>
          <div className="text-[8px] text-white/40 uppercase tracking-widest font-mono">renovationpaintwork.com</div>
          <div className="font-bold text-white text-[10px]">Get Your Precise Price estimate</div>
        </div>
        <div className="bg-[#E0BE6A] text-[#160F0F] px-2.5 py-1 rounded font-bold text-[9px] tracking-wide uppercase flex items-center gap-1 hover:scale-105 transition-transform cursor-pointer">
          <span>Apply Now</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}
