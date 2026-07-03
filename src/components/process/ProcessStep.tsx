import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, Variants } from 'motion/react';
import { ProcessVideo } from '../mockups/ProcessVideo';
import { AnimatedTick } from './AnimatedTick';
import { BASE_EASING } from '../../utils/motion';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  videoSrc: string;
  fallbackType: 'ads' | 'lp' | 'leads' | 'qualify';
  imageCaption: string;
  imageLeft: boolean;
}

export function ProcessStep({ number, title, description, bullets, videoSrc, fallbackType, imageCaption, imageLeft }: ProcessStepProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const numberVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: BASE_EASING } }
  };

  const mediaVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : (imageLeft ? -30 : 30) },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1, ease: BASE_EASING } }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25, ease: BASE_EASING } }
  };

  const descVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.33, ease: BASE_EASING } }
  };

  const bulletVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: BASE_EASING } }
  };

  const TextContent = () => (
    <div className="w-full md:w-1/2 text-left relative z-10" ref={ref}>
      <motion.div style={shouldReduceMotion ? {} : { y }} className="absolute -left-2 -top-8 -z-10 pointer-events-none">
        <motion.span 
          variants={numberVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-[#E0BE6A]/20 font-display-lg text-7xl block"
        >
          {number}
        </motion.span>
      </motion.div>
      <motion.h3 
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="font-display-lg text-headline-lg text-[#F5EEE8] mb-6 pt-2"
      >
        {title}
      </motion.h3>
      <motion.p 
        variants={descVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="font-body-md text-body-lg text-[#C4ABA5] mb-6"
      >
        {description}
      </motion.p>
      <ul className="flex flex-col gap-4 font-body-md text-[#C4ABA5]">
        {bullets.map((bullet, idx) => (
          <motion.li 
            key={idx}
            variants={bulletVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.43 + (idx * 0.08) }}
            className="flex items-start gap-3"
          >
            <AnimatedTick /> {bullet}
          </motion.li>
        ))}
      </ul>
    </div>
  );

  const MediaContent = () => (
    <motion.div 
      variants={mediaVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full md:w-1/2 relative group"
    >
      <div className="aspect-video bg-[#2B1416] rounded-xl overflow-hidden relative border border-[#C9A24B]/25 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[rgba(201,162,75,0.5)] shadow-[0_0_30px_rgba(201,162,75,0.05)]">
        <ProcessVideo src={videoSrc} fallbackType={fallbackType} />
      </div>
      <div className="text-center mt-3 text-[13px] text-[#C4ABA5] italic transition-opacity">{imageCaption}</div>
    </motion.div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 relative">
      {imageLeft ? (
        <>
          <div className="w-full md:w-1/2 order-1"><MediaContent /></div>
          <div className="w-full md:w-1/2 order-2"><TextContent /></div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 order-2 md:order-1"><TextContent /></div>
          <div className="w-full md:w-1/2 order-1 md:order-2"><MediaContent /></div>
        </>
      )}
    </div>
  );
}
