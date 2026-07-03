import { motion, useReducedMotion, Variants } from 'motion/react';
import { BASE_EASING } from '../utils/motion';

export function Apply() {
  const shouldReduceMotion = useReducedMotion();

  const headerReveal: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: BASE_EASING, staggerChildren: shouldReduceMotion ? 0 : 0.08 } }
  };

  const childReveal: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: BASE_EASING } }
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: BASE_EASING } }
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { delay: shouldReduceMotion ? 0 : 0.2, duration: 0.6, ease: BASE_EASING } }
  };


  return (
    <section className="bg-[#2B1416] py-section-padding relative" id="apply">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerReveal}
          className="text-center mb-16"
        >
          <motion.span variants={childReveal} className="text-[#E0BE6A] font-label-sm text-label-sm uppercase tracking-widest block mb-4 font-bold">SEE IT FOR YOURSELF</motion.span>
          <motion.h2 variants={childReveal} className="font-display-lg text-headline-lg-mobile md:text-5xl text-[#F5EEE8] mb-6 leading-tight">See Exactly What We'd Build For Your Business</motion.h2>
          <motion.p variants={childReveal} className="font-body-md text-body-lg text-[#C4ABA5] mb-6 mx-auto max-w-[680px]">On a short call we'll walk you through the complete system—the ads, landing page, qualification process, automation, and the real results it produced for a painting business in Galway.</motion.p>
          <motion.p variants={childReveal} className="font-body-md text-body-lg text-[#C4ABA5] mb-12 mx-auto max-w-[680px]">Before we speak, we'll ask a few quick questions so we can understand your business and make the call as valuable as possible.</motion.p>

          <motion.div variants={childReveal} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-[800px] mx-auto mt-8">
            <motion.div variants={stepVariants} className="bg-[#160F0F] rounded-xl border border-[rgba(201,162,75,0.15)] p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[#E0BE6A] font-semibold mb-1">
                <div className="bg-[#2B1416] w-8 h-8 rounded-full flex items-center justify-center border border-[rgba(201,162,75,0.3)] text-sm">1</div>
                <h3 className="text-lg">Complete the application</h3>
              </div>
              <p className="text-[#C4ABA5] text-sm leading-relaxed">Takes under a minute. Helps us understand your business before the call.</p>
            </motion.div>
            
            <motion.div variants={stepVariants} className="bg-[#160F0F] rounded-xl border border-[rgba(201,162,75,0.15)] p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[#E0BE6A] font-semibold mb-1">
                <div className="bg-[#2B1416] w-8 h-8 rounded-full flex items-center justify-center border border-[rgba(201,162,75,0.3)] text-sm">2</div>
                <h3 className="text-lg">Pick a time</h3>
              </div>
              <p className="text-[#C4ABA5] text-sm leading-relaxed">Book directly into the calendar.</p>
            </motion.div>
            
            <motion.div variants={stepVariants} className="bg-[#160F0F] rounded-xl border border-[rgba(201,162,75,0.15)] p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[#E0BE6A] font-semibold mb-1">
                <div className="bg-[#2B1416] w-8 h-8 rounded-full flex items-center justify-center border border-[rgba(201,162,75,0.3)] text-sm">3</div>
                <h3 className="text-lg">See the whole system</h3>
              </div>
              <p className="text-[#C4ABA5] text-sm leading-relaxed">We'll walk you through everything we've built, answer your questions, and together decide if it's the right fit.</p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={formVariants}
          className="bg-[#160F0F]/50 backdrop-blur-sm p-2 rounded-xl mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-[#160F0F] p-8 md:p-12 border border-[rgba(201,162,75,0.2)] rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjAxLCAxNjIsIDc1LCAwLjEpIi8+PC9zdmc+')] opacity-20"></div>
            
            <div className="relative z-10 text-center mb-8 border-b border-[#C9A24B]/10 pb-8">
              <h3 className="text-[#F5EEE8] font-display-lg text-2xl md:text-3xl mb-2 uppercase tracking-wide">Apply To Work With Paintleads</h3>
              <p className="text-[#E0BE6A] font-medium mb-3">One painting business per service area.</p>
              <p className="text-[#C4ABA5] text-sm">Complete the application below and we'll review it within 24 hours.</p>
            </div>

            <div className="relative z-10">
  <iframe
    src="https://tally.so/embed/D4YR5j?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
    loading="lazy"
    width="100%"
    height="700"
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
    title="PaintLeads Application"
  />
</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-[#C4ABA5] text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#E0BE6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            No obligation
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#E0BE6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            24-hour response
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#E0BE6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            One painting business per service area
          </div>
        </motion.div>
      </div>
    </section>
  );
}
