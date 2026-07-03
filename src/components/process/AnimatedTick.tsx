import { motion, useReducedMotion } from 'motion/react';

export function AnimatedTick() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <svg className="text-[#E0BE6A] w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <motion.path 
        d="M22 11.08V12a10 10 0 1 1-5.93-9.14" 
        initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.path 
        d="M22 4L12 14.01l-3-3" 
        initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.4 }}
        viewport={{ once: true }}
      />
    </svg>
  );
}
