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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] bg-[#180c0e] border border-[#3b2126] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 text-[#BFAEA0] hover:text-[#F6F2EA] rounded-full bg-[#221215]/90 hover:bg-[#2d181c] border border-[#3b2126] transition-colors shadow-md"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto pt-6 sm:pt-4 pb-2">
            <iframe
              src="https://tally.so/embed/D4YR5j?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="750"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Paint Leads Area Availability Form"
              className="w-full min-h-[600px] sm:min-h-[700px]"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
