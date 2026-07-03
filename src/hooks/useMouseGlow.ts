import { useState, useEffect } from 'react';

export function useMouseGlow(disabled: boolean) {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    if (disabled) return;
    
    // Only desktop / hoverable devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateGlow = () => {
      // Lerp (Linear Interpolation) factor for smooth trailing effect
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      
      setMousePosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animateGlow);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateGlow();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [disabled]);

  return mousePosition;
}
