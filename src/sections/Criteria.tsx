import { motion, useReducedMotion, Variants } from 'motion/react';
import { BadgeCheck, CheckCircle2, XCircle, X } from 'lucide-react';
import { BASE_EASING } from '../utils/motion';

export function Criteria() {
  const shouldReduceMotion = useReducedMotion();

  const headerReveal: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: BASE_EASING } }
  };

  const card1Variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: BASE_EASING } }
  };

  const card2Variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { delay: shouldReduceMotion ? 0 : 0.15, duration: 0.6, ease: BASE_EASING } }
  };

  const footerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: shouldReduceMotion ? 0 : 0.6, duration: 0.6, ease: BASE_EASING } }
  };

  return (
    <section className="bg-[#160F0F] py-section-padding relative" id="criteria">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerReveal}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24B] font-label-sm text-label-sm uppercase tracking-widest block mb-4 font-bold">WHO THIS IS FOR</span>
          <h2 className="font-display-lg text-4xl md:text-5xl text-[#F5EEE8] mb-6 leading-tight">This Isn't for Everyone</h2>
          <p className="font-body-md text-base md:text-[16px] text-[#C4ABA5] mx-auto max-w-[560px] leading-relaxed">
            We're selective about who we work with. We partner with a small number of quality-focused painting businesses that want to grow, and we only work with one painting business per service area.
          </p>
          <p className="font-body-md text-base md:text-[16px] text-[#C4ABA5] mx-auto max-w-[560px] leading-relaxed mt-4">
            We'd rather help a handful of painters dominate their area than work with everyone.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Left/Top: Good Fit */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={card1Variants}
            whileHover={shouldReduceMotion ? {} : { y: -6, borderColor: 'rgba(201,162,75,0.8)', boxShadow: '0 8px 40px rgba(201,162,75,0.2)', transition: { duration: 0.3 } }}
            className="w-full md:w-1/2 bg-[#2B1416] p-8 md:p-10 rounded-xl border border-[rgba(201,162,75,0.5)] shadow-[0_0_30px_rgba(201,162,75,0.1)] transition-colors"
          >
            <h3 className="font-title-md text-2xl text-[#F5EEE8] border-b border-[#C9A24B]/20 pb-4 mb-6 flex items-center gap-3">
              <BadgeCheck className="text-[#E0BE6A] w-6 h-6 group-hover:scale-110 transition-transform duration-300" /> Good Fit
            </h3>
            <ul className="flex flex-col gap-5 font-body-md text-[#F5EEE8]">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[#E0BE6A] w-6 h-6 flex-shrink-0" />Painting businesses regularly quoting €2k+ projects</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[#E0BE6A] w-6 h-6 flex-shrink-0" />Quality-focused craftsmanship</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[#E0BE6A] w-6 h-6 flex-shrink-0" />Established painting business ready to take on more quality projects</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[#E0BE6A] w-6 h-6 flex-shrink-0" />One client per service area — we don't work with your competitors</li>
            </ul>
          </motion.div>

          {/* Right/Bottom: Not a Fit */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={card2Variants}
            whileHover={shouldReduceMotion ? {} : { y: -6, borderColor: 'rgba(255,255,255,0.2)', boxShadow: '0 8px 40px rgba(0,0,0,0.5)', transition: { duration: 0.3 } }}
            className="w-full md:w-1/2 bg-[#160F0F] border border-[rgba(255,255,255,0.08)] p-8 md:p-10 rounded-xl transition-colors"
          >
            <h3 className="font-title-md text-2xl text-[#8A6F6A] border-b border-[rgba(255,255,255,0.08)] pb-4 mb-6 flex items-center gap-3">
              <XCircle className="text-[#8A6F6A] w-6 h-6" /> Not a Fit
            </h3>
            <ul className="flex flex-col gap-5 font-body-md text-[#8A6F6A]">
              <li className="flex items-start gap-3"><X className="text-[#8A6F6A] w-6 h-6 flex-shrink-0" />Cheapest-quote operations</li>
              <li className="flex items-start gap-3"><X className="text-[#8A6F6A] w-6 h-6 flex-shrink-0" />Just starting out with no existing client base</li>
              <li className="flex items-start gap-3"><X className="text-[#8A6F6A] w-6 h-6 flex-shrink-0" />Not willing to follow the system consistently</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={footerVariants}
          className="mt-16 text-center"
        >
          <p className="font-body-md font-medium text-[17px] text-[#F5EEE8]">
            If you see your business on the left, we'd love to show you how this works.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
