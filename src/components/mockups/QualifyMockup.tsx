import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function QualifyMockup() {
  const [messages, setMessages] = useState<{sender: 'bot' | 'user', text: string}[]>([
    { sender: 'bot', text: 'Hi John! We got your enquiry for the exterior painting in Salthill. Can I ask a quick question?' },
  ]);

  useEffect(() => {
    const sequence = [
      { delay: 2000, sender: 'user' as const, text: 'Sure, go ahead.' },
      { delay: 1500, sender: 'bot' as const, text: 'Great. When are you looking to have this done by?' },
      { delay: 2500, sender: 'user' as const, text: 'Within the next 3 weeks if possible.' },
      { delay: 1500, sender: 'bot' as const, text: 'Perfect. I will send this straight to Juicelino and he will be in touch to arrange a quote!' },
    ];
    
    let timeoutIds: NodeJS.Timeout[] = [];
    let cumulativeDelay = 0;
    
    sequence.forEach((msg) => {
      cumulativeDelay += msg.delay;
      const id = setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, cumulativeDelay);
      timeoutIds.push(id);
    });
    
    // Loop it
    const resetId = setTimeout(() => {
      setMessages([{ sender: 'bot', text: 'Hi John! We got your enquiry for the exterior painting in Salthill. Can I ask a quick question?' }]);
    }, cumulativeDelay + 4000);
    timeoutIds.push(resetId);

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [messages.length === 1]); // re-run when it resets

  return (
    <div className="w-full h-full p-3 flex flex-col justify-between text-[#F5EEE8] font-sans bg-[#0B0506] select-none relative overflow-hidden">
      {/* Header Mock */}
      <div className="bg-[#1F1F1F] -mx-3 -mt-3 p-3 text-white flex items-center shadow-md z-10 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#E0BE6A]/20 flex items-center justify-center font-bold text-[#E0BE6A] text-xs">P</div>
          <div>
            <h4 className="text-xs font-bold leading-none">Paintleads Bot</h4>
            <span className="text-[9px] text-white/50">Qualifying enquiry...</span>
          </div>
        </div>
      </div>

      {/* Chat space */}
      <div className="flex-1 overflow-y-auto space-y-2 mt-3 pr-0.5 scrollbar-none flex flex-col p-2 bg-[#0B0506]">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`max-w-[85%] rounded-lg p-2.5 text-[10px] ${msg.sender === 'bot' ? 'bg-[#2B1416] border border-[#C9A24B]/30 text-white self-start' : 'bg-[#E0BE6A] text-black self-end font-medium'}`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer input mock */}
      <div className="mt-2 bg-[#1F1F1F] p-2 rounded-full border border-white/10 flex items-center gap-2 opacity-50">
        <div className="flex-1 text-[9px] text-white/40 pl-2">Message...</div>
        <div className="w-5 h-5 rounded-full bg-[#E0BE6A]/50 flex items-center justify-center">
          <Send className="w-2.5 h-2.5 text-black" />
        </div>
      </div>
    </div>
  );
}
