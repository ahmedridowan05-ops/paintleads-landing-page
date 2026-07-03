import React, { useState, useRef } from 'react';
import { Play, Clock, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { useMouseGlow } from '../hooks/useMouseGlow';
import { BASE_EASING } from '../utils/motion';

export function Hero() {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Integrated custom hook for the trailing cursor glow
  const mousePosition = useMouseGlow(shouldReduceMotion);

  const handlePlayClick = () => {
    if (videoRef.current) {
      setHasPlayed(true);
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Playback failed", err);
      });
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const eyebrowVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.1, ease: BASE_EASING }
    }
  };

  const headlineWords = "We Build the System. You Quote the Right Jobs.".split(" ");
  const headlineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.3,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: BASE_EASING }
    }
  };

  const glowVariants = {
    hidden: { textShadow: '0 0 0px rgba(224,190,106,0)' },
    visible: {
      textShadow: shouldReduceMotion ? '0 0 20px rgba(224,190,106,0.2)' : ['0 0 30px rgba(224,190,106,0.4)', '0 0 20px rgba(224,190,106,0.2)'],
      transition: { duration: 0.6, ease: BASE_EASING }
    }
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.4, staggerChildren: 0 }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 3.2, ease: BASE_EASING }
    }
  };

  const labelVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, delay: 2.2, ease: BASE_EASING }
    }
  };

  const italicLineVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, delay: 2.5, ease: BASE_EASING }
    }
  };

  const underlineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: { duration: 0.4, delay: 2.0, ease: BASE_EASING }
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-16 bg-[#2B1416]">
      {/* Background Noise Texture */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Cursor Glow */}
      {!shouldReduceMotion && (
        <div 
          className="absolute z-0 pointer-events-none rounded-full w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 hidden md:block"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,75,0.06) 0%, rgba(201,162,75,0) 70%)',
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transition: 'opacity 0.3s',
            opacity: mousePosition.x === -1000 ? 0 : 1
          }}
        />
      )}

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-8 flex flex-col items-center text-center relative z-10">
        
        {/* 1. EYEBROW */}
        <motion.span 
          variants={eyebrowVariants}
          initial="hidden"
          animate="visible"
          className="text-[#C9A24B] font-label-sm text-xs md:text-sm uppercase block mb-6 font-bold" 
          style={{ letterSpacing: '0.12em' }}
        >
          PROJECT ACQUISITION SYSTEM FOR IRISH PAINTERS
        </motion.span>
        
        {/* 2. HEADLINE */}
        <motion.h1 
          variants={headlineContainerVariants}
          initial="hidden"
          animate="visible"
          className="font-display-lg text-[clamp(32px,5vw,56px)] max-w-5xl text-[#F5EEE8] mb-8 leading-tight text-center flex flex-wrap justify-center gap-x-3 gap-y-1"
        >
          {headlineWords.map((word, i) => {
            const isHighlighted = word.includes("System") || word.includes("Calls");
            return (
              <motion.span key={i} variants={wordVariants} className="inline-block relative">
                {isHighlighted ? (
                  <motion.span 
                    variants={glowVariants}
                    className="text-[#E0BE6A] inline-block transition-all duration-300"
                  >
                    {word}
                  </motion.span>
                ) : (
                  word
                )}
              </motion.span>
            );
          })}
        </motion.h1>
        
        {/* 4. RESULT */}
        <motion.div 
          variants={statsContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl mx-auto mb-10"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 border border-[#C9A24B]/20 md:border-none rounded-xl md:rounded-none p-6 md:p-0 bg-[#160F0F]/20 md:bg-transparent mb-6">
            {/* Stat 1 */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center px-4">
              <div className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-[#E0BE6A] mb-2 font-semibold relative">
                <AnimatedCounter target={600} prefix="€" duration={1600} delay={1400} />
                <motion.div variants={underlineVariants} className="absolute -bottom-1 left-0 h-[2px] bg-[#C9A24B]" />
              </div>
              <motion.div variants={labelVariants} className="font-label-sm text-[#C4ABA5] uppercase tracking-widest text-xs mt-2">what Juicelino spent on ads</motion.div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] md:w-[1px] md:h-16 bg-[#C9A24B]/30"></div>

            {/* Stat 2 */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center px-4">
              <div className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-[#E0BE6A] mb-2 font-semibold relative">
                <AnimatedCounter target={34000} prefix="€" duration={1800} delay={1400} />
                <motion.div variants={underlineVariants} className="absolute -bottom-1 left-0 h-[2px] bg-[#C9A24B]" />
              </div>
              <motion.div variants={labelVariants} className="font-label-sm text-[#C4ABA5] uppercase tracking-widest text-xs mt-2">in quoted opportunities his system produced</motion.div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] md:w-[1px] md:h-16 bg-[#C9A24B]/30"></div>

            {/* Stat 3 */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center px-4">
              <div className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-[#E0BE6A] mb-2 font-semibold flex items-center gap-2 relative">
                <AnimatedCounter target={30} duration={1800} delay={1400} />
                <span className="text-3xl md:text-4xl lg:text-5xl font-display-lg opacity-90">Days</span>
                <motion.div variants={underlineVariants} className="absolute -bottom-1 left-0 h-[2px] bg-[#C9A24B]" />
              </div>
              <motion.div variants={labelVariants} className="font-label-sm text-[#C4ABA5] uppercase tracking-widest text-xs mt-2">From Launch to Results.</motion.div>
            </div>
          </div>
          
          <motion.p variants={italicLineVariants} className="font-body-md text-sm md:text-base text-[#C4ABA5] italic text-center">
            Watch how we built the complete system for a Galway painting business.
          </motion.p>
        </motion.div>
        
        {/* 5. VIDEO BLOCK */}
        <motion.div 
          variants={videoVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl aspect-video bg-[#2B1416] relative flex items-center justify-center overflow-hidden rounded-2xl group mx-auto border border-[#C9A24B]/25 hover:border-[rgba(201,162,75,0.45)] transition-colors duration-300 shadow-2xl"
        >
          <div className="absolute top-4 right-4 bg-[#160F0F]/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-[#F5EEE8] font-label-sm text-xs z-20 flex items-center gap-1.5 border border-[#C9A24B]/20 shadow-md">
            <Clock className="w-3.5 h-3.5 text-[#C9A24B]" /> 3:24
          </div>
          
          <video
            ref={videoRef}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hasPlayed ? 'opacity-100' : 'opacity-40'}`}
            playsInline
            loop
            muted={isMuted}
            onClick={hasPlayed ? togglePlay : handlePlayClick}
          >
            <source src="/sales.mp4" type="video/mp4" />
            <source src="/SALES.mp4" type="video/mp4" />
          </video>

          {!hasPlayed ? (
            <>
              <div className="absolute inset-0 bg-[#160F0F]/40 mix-blend-multiply z-10 pointer-events-none"></div>
              <button 
                onClick={handlePlayClick}
                className="absolute z-20 w-16 h-16 md:w-20 md:h-20 bg-[#E0BE6A] flex items-center justify-center cursor-pointer hover:scale-[1.12] transition-transform duration-250 rounded-full shadow-[0_4px_20px_rgba(235,192,115,0.4)] hover:shadow-[0_0_0_4px_rgba(201,162,75,0.2)]"
              >
                <Play className="text-[#160F0F] w-8 h-8 md:w-10 md:h-10 ml-1" fill="currentColor" />
              </button>
            </>
          ) : (
            <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={togglePlay}
                className="p-1.5 hover:bg-white/10 rounded-lg text-white flex items-center gap-1.5 text-xs font-semibold"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white text-transparent ml-0.5" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <button 
                onClick={toggleMute}
                className="p-1.5 hover:bg-white/10 rounded-lg text-white flex items-center gap-1.5 text-xs font-semibold"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isMuted ? 'Muted' : 'Unmuted'}</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
