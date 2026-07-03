import { motion, useReducedMotion, Variants } from 'motion/react';
import { ProcessStep } from '../components/process/ProcessStep';
import { BASE_EASING } from '../utils/motion';

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: BASE_EASING, staggerChildren: shouldReduceMotion ? 0 : 0.08 }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: BASE_EASING } }
  };

  return (
    <section className="bg-[#2B1416] py-section-padding relative" id="process">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#160F0F] to-transparent pointer-events-none"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-8 relative z-10">
        
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span variants={childVariants} className="text-[#C9A24B] font-label-sm text-label-sm uppercase tracking-widest block mb-4 font-bold">THE SYSTEM, BUILT FOR YOU</motion.span>
          <motion.h2 variants={childVariants} className="font-display-lg text-headline-lg-mobile md:text-5xl text-[#F5EEE8] max-w-4xl mx-auto leading-tight">Here's How It Works</motion.h2>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          <ProcessStep 
            number="01"
            title="Your Business is Shown to the Right Homeowners"
            description="Your business gets shown to homeowners who are actually likely to need your services—not everyone scrolling Facebook. Every campaign is built to attract the type of projects you actually want to quote."
            bullets={[
              "Ad strategy and copy built around your business.",
              "Targeted to homeowners looking for your type of work.",
              "We manage everything—you focus on painting."
            ]}
            videoSrc="/ads.mp4"
            fallbackType="ads"
            imageCaption="The actual ad we ran for Juicelino, a painter in Galway."
            imageLeft={true}
          />

          <ProcessStep 
            number="02"
            title="We Build Trust Before You Ever Speak"
            description="Instead of sending people straight to WhatsApp, they first go through a page built specifically around your business. It explains what makes you different, answers the questions people normally ask, and gives them confidence before they ever contact you."
            bullets={[
              "Built around your business and your strengths.",
              "Explains why you're worth paying for.",
              "Builds trust before they ever contact you."
            ]}
            videoSrc="/lp.mp4"
            fallbackType="lp"
            imageCaption="The page we built for Juicelino — every enquiry goes through this first."
            imageLeft={false}
          />

          <ProcessStep 
            number="03"
            title="Only Serious Jobs Make It Through"
            description="Before anyone reaches you, we collect the information you actually need to quote properly. It filters out people who aren't serious and gives you everything you need before you ever pick up the phone."
            bullets={[
              "Captures everything needed for an accurate quote.",
              "Filters out poor-fit enquiries.",
              "Saves time before the first conversation."
            ]}
            videoSrc="/qualify.mp4"
            fallbackType="qualify"
            imageCaption="The automated messages that qualify every enquiry before it reaches Juicelino."
            imageLeft={true}
          />

          <ProcessStep 
            number="04"
            title="Every Enquiry Gets Checked First"
            description="As soon as someone submits their details, the system responds instantly. If they're clearly a good fit, you receive everything immediately. If something is missing, the system asks the extra questions automatically—so by the time they reach you, you've already got the answers."
            bullets={[
              "Good opportunities go straight to you.",
              "Extra questions are asked automatically when needed.",
              "More information without extra phone calls."
            ]}
            videoSrc="/leads.mp4"
            fallbackType="leads"
            imageCaption="Real enquiries landing on Juicelino's phone — ready to quote."
            imageLeft={false}
          />
        </div>

        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 flex flex-col items-center justify-center text-center"
        >
          <motion.div variants={childVariants} className="font-display-lg text-[#F5EEE8] text-xl md:text-2xl mb-4">
            You've now seen exactly how the system works.
          </motion.div>
          <motion.div variants={childVariants} className="font-body-md text-[#C4ABA5] text-[15px] md:text-[17px] mb-10 max-w-2xl mx-auto">
            Below you'll see what it costs, why we structure it this way, and whether it's the right fit for your business.
          </motion.div>
          
          <motion.div variants={childVariants} className="flex items-center justify-center text-sm text-[#E0BE6A]">
            <a href="#pricing" className="hover:underline underline-offset-4 flex items-center gap-2">Keep reading ↓</a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#160F0F] to-transparent pointer-events-none"></div>
    </section>
  );
}
