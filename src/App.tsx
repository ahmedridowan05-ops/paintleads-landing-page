import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Process } from './sections/Process';
import { Ticker } from './sections/Ticker';
import { Pricing } from './sections/Pricing';
import { Criteria } from './sections/Criteria';
import { Apply } from './sections/Apply';
import { Footer } from './components/Footer';
import { motion, useScroll, useReducedMotion } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="antialiased min-h-screen flex flex-col font-body-md text-body-md bg-[#160F0F]">
      {/* Scroll Progress Bar */}
      {!shouldReduceMotion && (
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[2px] bg-[#E0BE6A] origin-left z-[100]"
          style={{ scaleX: scrollYProgress }}
        />
      )}
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Process />
        <Ticker />
        <Pricing />
        <Criteria />
        <Apply />
      </main>
      <Footer />
    </div>
  );
}
