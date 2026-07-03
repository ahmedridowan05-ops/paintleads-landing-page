import { useEffect, useState, useRef } from 'react';
import { useInView, useReducedMotion } from 'motion/react';
import { easeOutQuart } from '../utils/math';

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}

export function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000, delay = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    if (isInView) {
      let startTimestamp: number | null = null;
      let timeoutId: number;

      const runAnimation = () => {
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const linearProgress = Math.min((timestamp - startTimestamp) / duration, 1);
          
          // Apply ease-out using our math utility
          const progress = easeOutQuart(linearProgress);
          
          setCount(Math.floor(progress * target));
          
          if (linearProgress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };
        window.requestAnimationFrame(step);
      };

      if (delay > 0) {
        timeoutId = window.setTimeout(runAnimation, delay);
      } else {
        runAnimation();
      }

      return () => {
        if (timeoutId) window.clearTimeout(timeoutId);
      };
    }
  }, [isInView, target, duration, delay, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
