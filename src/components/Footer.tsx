import { motion, useReducedMotion } from 'motion/react';
import { BASE_EASING } from '../utils/motion';

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="bg-[#160F0F] border-t border-[#C9A24B]/10 full-width mt-auto relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: BASE_EASING }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-container-max mx-auto gap-8"
      >
        <div className="flex items-center gap-2">
          <span className="font-headline-lg text-headline-lg text-[#F5EEE8] font-bold">PL</span>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-[#F0E8E4]/80 font-body-md text-sm mb-1">A project acquisition system built for Irish painting businesses.</p>
          <p className="text-[#F0E8E4]/50 font-body-md text-xs">© 2025 Paintleads. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-[#F0E8E4]/60 font-label-sm text-xs uppercase tracking-widest hover:text-[#E0BE6A] transition-colors duration-300" href="#">Contact</a>
          <a className="text-[#F0E8E4]/60 font-label-sm text-xs uppercase tracking-widest hover:text-[#E0BE6A] transition-colors duration-300" href="#">Privacy</a>
          <a className="text-[#F0E8E4]/60 font-label-sm text-xs uppercase tracking-widest hover:text-[#E0BE6A] transition-colors duration-300" href="#">Terms</a>
        </div>
      </motion.div>
    </footer>
  );
}
