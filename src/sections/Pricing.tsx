import { motion, useReducedMotion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { BASE_EASING } from '../utils/motion';

const rows = [
  {
    others: "Anyone who pays. Painters, plumbers, dentists.",
    paintleads: "Painters only. We don't take on anyone else."
  },
  {
    others: "You chase 3–4 different people. Nobody owns the problem.",
    paintleads: "One team. One call. We handle it."
  },
  {
    others: "Enquiries disappear and nobody knows why.",
    paintleads: "Every enquiry tracked from first click to your WhatsApp."
  },
  {
    others: "You end up managing the marketing.",
    paintleads: "You focus on the serious enquiries. We handle everything before they reach you."
  },
  {
    others: "They work with your competitors too.",
    paintleads: "One painter per area. Your competitors can't have this."
  }
];

function WhyPaintleads() {
  const shouldReduceMotion = useReducedMotion();

  const headerReveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: BASE_EASING } }
  };

  const othersHeaderVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const othersRowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const paintleadsHeaderVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: shouldReduceMotion ? 0 : 1.2, duration: 0.4 } }
  };

  const paintleadsCellVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const borderLineVariants = {
    hidden: { height: 0 },
    visible: { height: '100%', transition: { delay: shouldReduceMotion ? 0 : 1.4, duration: 0.6, ease: BASE_EASING } }
  };

  return (
    <section className="bg-[#160F0F] py-section-padding relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerReveal}
            className="text-center mb-16"
          >
            <span className="text-[#E0BE6A] font-dmsans text-xs uppercase tracking-widest block mb-4 font-bold">
              HOW WE COMPARE
            </span>
            <h2 className="font-fraunces text-3xl md:text-[32px] text-[#F5EEE8] font-semibold mb-4 leading-tight">
              Others vs Paintleads
            </h2>
            <p className="font-dmsans text-[#C4ABA5] text-[15px] max-w-[500px] mx-auto leading-relaxed">
              Most services solve one part of the problem. We built the whole thing.
            </p>
          </motion.div>

          {/* Table Container */}
          <div className="flex flex-col gap-6 md:gap-0 relative">
            {/* DESKTOP TABLE VIEW */}
            <div className="hidden md:block relative">
              {/* Border Line Animation */}
              {!shouldReduceMotion && (
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={borderLineVariants}
                  className="absolute top-0 bottom-0 left-1/2 w-px bg-[rgba(201,162,75,0.4)] z-20 origin-top"
                />
              )}
              {!shouldReduceMotion && (
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={borderLineVariants}
                  className="absolute top-0 bottom-0 right-0 w-px bg-[rgba(201,162,75,0.4)] z-20 origin-top"
                />
              )}

              {/* Table Column Headers */}
              <div className="grid grid-cols-2 items-stretch">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={othersHeaderVariants}
                  className="p-6 text-center text-[#C4ABA5] font-dmsans text-base font-medium border-b border-white/[0.06]"
                >
                  Others
                </motion.div>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={paintleadsHeaderVariants}
                  className="p-6 text-center text-[#E0BE6A] font-dmsans text-base font-semibold bg-[#2B1416] border-t border-[rgba(201,162,75,0.4)] rounded-t-xl"
                  style={shouldReduceMotion ? {} : { borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
                >
                  Paintleads
                </motion.div>
              </div>

              {/* Rows */}
              {rows.map((row, index) => {
                const isLast = index === rows.length - 1;
                return (
                  <div
                    key={index}
                    className="grid grid-cols-2 items-stretch"
                  >
                    {/* Others Column */}
                    <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={othersRowVariants}
                      transition={{ delay: shouldReduceMotion ? 0 : 0.1 * index }}
                      className="p-6 text-[#C4ABA5] font-dmsans text-sm text-left border-b border-white/[0.06] flex items-center bg-[#160F0F]"
                    >
                      {row.others}
                    </motion.div>

                    {/* Paintleads Column */}
                    <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={paintleadsCellVariants}
                      transition={{ delay: shouldReduceMotion ? 0 : 1.7 + (0.1 * index) }}
                      whileHover={{ backgroundColor: "rgba(201,162,75,0.1)", transition: { duration: 0.2 } }}
                      className={`p-6 text-[#E0BE6A] font-dmsans text-sm text-center font-bold bg-[#2B1416] border-[rgba(201,162,75,0.4)] transition-colors ${
                        isLast 
                          ? 'border-b rounded-b-xl' 
                          : 'border-b border-b-white/[0.06]'
                      } flex items-center justify-center`}
                      style={shouldReduceMotion ? {} : { borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
                    >
                      {row.paintleads}
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE COLLAPSED STACKED VIEW */}
            <div className="md:hidden flex flex-col gap-8">
              {rows.map((row, index) => (
                <div key={index} className="flex flex-col gap-2.5 w-full">
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={othersRowVariants}
                    transition={{ delay: shouldReduceMotion ? 0 : 0.1 * index }}
                    className="bg-[#160F0F] border border-white/[0.06] rounded-xl p-6 text-left text-[#C4ABA5] text-sm leading-relaxed w-full"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-[#C4ABA5]/40 font-bold mb-1.5 font-dmsans">Others</div>
                    {row.others}
                  </motion.div>

                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={paintleadsCellVariants}
                    transition={{ delay: shouldReduceMotion ? 0 : 1.7 + (0.1 * index) }}
                    className="bg-[#2B1416] border border-[rgba(201,162,75,0.4)] rounded-xl p-6 text-center text-[#E0BE6A] font-bold text-sm leading-relaxed w-full shadow-[0_4px_20px_-4px_rgba(201,162,75,0.15)]"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-[#E0BE6A]/50 font-bold mb-1.5 font-dmsans">Paintleads</div>
                    {row.paintleads}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowStartingWorks() {
  const shouldReduceMotion = useReducedMotion();

  const headerReveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: BASE_EASING } }
  };

  const card1Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: BASE_EASING } }
  };

  const card2Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { delay: shouldReduceMotion ? 0 : 0.18, duration: 0.5, ease: BASE_EASING } }
  };

  const card3Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30, boxShadow: '0 0 20px rgba(201,162,75,0.3)' },
    visible: { opacity: 1, y: 0, boxShadow: '0 4px 30px -4px rgba(201,162,75,0.1)', transition: { delay: shouldReduceMotion ? 0 : 0.36, duration: 0.8, ease: BASE_EASING } }
  };

  const tickLineVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: BASE_EASING } }
  };

  return (
    <section className="bg-[#2B1416] py-section-padding relative" id="pricing">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#160F0F] to-transparent pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerReveal}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24B] font-label-sm text-label-sm uppercase tracking-widest block mb-4 font-bold">HOW STARTING WORKS</span>
          <h2 className="font-display-lg text-4xl md:text-5xl text-[#F5EEE8] mb-6 leading-tight">You Risk Almost Nothing to Begin</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={card1Variants}
            className="bg-[#160F0F] border border-[#C9A24B]/15 rounded-xl p-6 md:p-8 flex items-center gap-6 md:gap-8"
          >
            <div className="font-display-lg text-[#E0BE6A] text-5xl md:text-6xl leading-none flex-shrink-0 min-w-[40px] md:min-w-[50px]">1</div>
            <div>
              <h3 className="text-[#F5EEE8] font-semibold text-lg md:text-xl mb-1">Pay €200 to get started</h3>
              <p className="text-[#C4ABA5] text-sm md:text-base">That's all it takes to begin. No monthly fee yet.</p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={card2Variants}
            className="bg-[#160F0F] border border-[#C9A24B]/15 rounded-xl p-6 md:p-8 flex items-center gap-6 md:gap-8"
          >
            <div className="font-display-lg text-[#E0BE6A] text-5xl md:text-6xl leading-none flex-shrink-0 min-w-[40px] md:min-w-[50px]">2</div>
            <div>
              <h3 className="text-[#F5EEE8] font-semibold text-lg md:text-xl mb-1">We build your entire system</h3>
              <p className="text-[#C4ABA5] text-sm md:text-base">Your ads, your page, the follow-up — all built and set up for you.</p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={card3Variants}
            className="bg-[#160F0F] border border-[#C9A24B]/35 rounded-xl p-6 md:p-8 flex items-center gap-6 md:gap-8"
          >
            <div className="font-display-lg text-[#E0BE6A] text-5xl md:text-6xl leading-none flex-shrink-0 min-w-[40px] md:min-w-[50px]">3</div>
            <div>
              <h3 className="text-[#F5EEE8] font-semibold text-lg md:text-xl mb-1">Pay the rest only when it's built and live</h3>
              <p className="text-[#C4ABA5] text-sm md:text-base">The remaining €800 isn't due until everything is up and running. Not before.</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08, delayChildren: shouldReduceMotion ? 0 : 1.2 } }
          }}
          className="mt-10 flex flex-col gap-4 max-w-xl mx-auto"
        >
          <motion.div variants={tickLineVariants} className="flex items-center gap-3 text-[#F0E8E4] text-sm md:text-base">
            <Check className="w-6 h-6 text-[#E0BE6A] flex-shrink-0" /> No monthly fee for your first month
          </motion.div>
          <motion.div variants={tickLineVariants} className="flex items-center gap-3 text-[#F0E8E4] text-sm md:text-base">
            <Check className="w-6 h-6 text-[#E0BE6A] flex-shrink-0" /> No long-term contract — month to month, always
          </motion.div>
          <motion.div variants={tickLineVariants} className="flex items-center gap-3 text-[#F0E8E4] text-sm md:text-base">
            <Check className="w-6 h-6 text-[#E0BE6A] flex-shrink-0" /> You pay Facebook directly for ads — no markup, no hidden fees
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerReveal}
          className="mt-16 text-center pt-8 border-t border-[#C9A24B]/20"
        >
          <h3 className="font-display-lg text-[#F5EEE8] text-xl md:text-2xl leading-relaxed mb-2">We only get paid in full when it's built and live.</h3>
          <p className="text-[#C9A24B] font-medium text-sm md:text-base">That's how sure we are.</p>
        </motion.div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <>
      <WhyPaintleads />
      <HowStartingWorks />
    </>
  );
}
