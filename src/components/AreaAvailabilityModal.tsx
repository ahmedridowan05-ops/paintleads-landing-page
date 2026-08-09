import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface AreaAvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AreaAvailabilityModal: React.FC<AreaAvailabilityModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
  const handleTallyMessage = (event: MessageEvent) => {
    if (!event.origin.includes('tally.so')) return;

    let data = event.data;

    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch {
        return;
      }
    }

    if (data?.event === 'Tally.FormSubmitted') {
      if (typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Lead');
        console.log('Meta Lead event fired');
      }
    }
  };

  window.addEventListener('message', handleTallyMessage);

  return () => {
    window.removeEventListener('message', handleTallyMessage);
  };
}, []);
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl max-h-[90vh] bg-[#180c0e] border border-[#3b2126] rounded-2xl shadow-2xl overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-[#BFAEA0] hover:text-[#F6F2EA] rounded-lg bg-[#221215]/90 hover:bg-[#2d181c] transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full max-h-[90vh] overflow-y-auto">
            <iframe
              src="https://tally.so/embed/D4YR5j?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="750"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Paint Leads Area Availability Form"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
