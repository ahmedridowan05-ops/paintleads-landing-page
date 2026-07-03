import { useState, useEffect } from 'react';
import { Search, MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function LeadsMockup() {
  const [leadsList, setLeadsList] = useState([
    { name: 'Liam Glynn', type: 'Full House Painting', amount: '€3,170 + VAT', area: 'Salthill, Galway', time: 'Just Now', text: 'Full masking, 2 sprayed coats, ceiling quote...', avatar: 'L', color: 'bg-emerald-600' },
    { name: 'Eoin Ó Conghaile', type: 'Premium Spray Painting', amount: '€3,770 + VAT', area: 'Inis Oirr', time: '2 mins ago', text: 'Scope: full interior & trim, spray estimation...', avatar: 'E', color: 'bg-indigo-600' },
    { name: 'Deirdre Coleman', type: 'Interior Spray Quote', amount: '€2,470 + VAT', area: 'Claddagh, Galway', time: '1 hour ago', text: 'Premium spray trim & walls, Dulux materials included.', avatar: 'D', color: 'bg-amber-600' },
    { name: 'Trevor Lead', type: 'House Refresh', amount: '€3,170 + VAT', area: 'Galway City', time: '3 hours ago', text: 'Professional spraying, fully qualified painters...', avatar: 'T', color: 'bg-teal-600' },
    { name: 'Katie Lavin', type: 'Interior Spray Estimator', amount: '€3,370 + VAT', area: 'Oranmore', time: '5 hours ago', text: 'Premium spray painting quotation requested.', avatar: 'K', color: 'bg-pink-600' },
    { name: 'Neasa Lead', type: 'Renovation Paintwork', amount: '€3,670 + VAT', area: 'Barna, Galway', time: 'Yesterday', text: 'Full masking, clean space, 15 years trust.', avatar: 'N', color: 'bg-purple-600' },
    { name: 'Aoife Connolly', type: 'Interior Spray', amount: '€1,544 + VAT', area: 'Galway', time: 'Yesterday', text: 'Confirming if price includes full trim masking.', avatar: 'A', color: 'bg-rose-600' },
    { name: 'Michael Lead', type: 'Salthill Residential', amount: '€3,170 + VAT', area: 'Salthill', time: '2 days ago', text: 'Wants premium finish. Great conversion lead.', avatar: 'M', color: 'bg-cyan-600' }
  ]);

  useEffect(() => {
    // Simulate a brand new qualified WhatsApp lead dropping in
    const interval = setInterval(() => {
      setLeadsList((prev) => {
        const potentialLeads = [
          { name: 'Patrick O\'Flaherty', type: 'Airless Spray', amount: '€3,550 + VAT', area: 'Galway West', time: 'Just Now', text: 'New build painting estimation, ready to proceed', avatar: 'P', color: 'bg-emerald-600' },
          { name: 'Sarah Joyce', type: 'Kitchen Cabinets Spray', amount: '€2,100 + VAT', area: 'Salthill', time: 'Just Now', text: 'Full kitchen spray painting requested, ready to quote', avatar: 'S', color: 'bg-orange-600' }
        ];
        const randomLead = potentialLeads[Math.floor(Math.random() * potentialLeads.length)];
        // Filter out duplicates
        if (prev.some((lead) => lead.name === randomLead.name)) return prev;
        
        // Update previous top lead to "2 mins ago"
        const updatedPrev = prev.map((lead, idx) => {
          if (idx === 0) return { ...lead, time: '3 mins ago' };
          return lead;
        });
        return [randomLead, ...updatedPrev].slice(0, 8); // keep top 8
      });
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-3 flex flex-col justify-between text-[#F5EEE8] font-sans bg-[#0B0506] select-none relative overflow-hidden">
      {/* WhatsApp Header Mock */}
      <div className="bg-[#075E54] -mx-3 -mt-3 p-3 text-white flex items-center justify-between shadow-md z-10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <div>
            <h4 className="text-xs font-bold leading-none">WhatsApp Business Inbox</h4>
            <span className="text-[7px] text-white/70">Prequalified Galway Paint Leads Active</span>
          </div>
        </div>
        <div className="flex gap-2 text-white/80">
          <Search className="w-3.5 h-3.5" />
          <MoreVertical className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Conversation Thread scrolling list */}
      <div className="flex-1 overflow-y-auto space-y-1.5 mt-2 pr-0.5 scrollbar-thin max-h-[175px]">
        <AnimatePresence>
          {leadsList.map((lead, idx) => (
            <motion.div
              key={lead.name}
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: 'auto' }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`p-1.5 rounded-lg border flex gap-2 items-center justify-between ${idx === 0 ? 'bg-[#E0BE6A]/10 border-[#E0BE6A]/50 shadow-md ring-1 ring-[#E0BE6A]/20' : 'bg-black/30 border-white/5'}`}
            >
              <div className="flex items-center gap-1.5 min-w-0 flex-1">
                <div className={`w-6 h-6 rounded-full ${lead.color} flex items-center justify-center font-bold text-[9px] text-white shrink-0`}>
                  {lead.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-white text-[10px] truncate">{lead.name}</span>
                    <span className="text-[7px] text-white/40 shrink-0">{lead.time}</span>
                  </div>
                  <div className="text-[8px] text-white/60 flex items-center gap-1 truncate font-medium">
                    <span>📍 {lead.area}</span>
                    <span className="text-white/30">•</span>
                    <span className="text-emerald-400 truncate font-semibold">{lead.type}</span>
                  </div>
                  <p className="text-[7px] text-white/40 truncate italic mt-0.2">"{lead.text}"</p>
                </div>
              </div>

              {/* Status Badge right */}
              <div className="text-right shrink-0">
                <div className="text-[9px] font-black text-white">{lead.amount}</div>
                <span className="inline-block text-[6.5px] font-black uppercase px-1 py-0.2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded mt-0.5 tracking-wider">
                  Qualified
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Message Footer stats bar */}
      <div className="mt-1.5 border-t border-white/5 pt-1.5 flex justify-between items-center text-[7px] text-white/40 uppercase font-bold tracking-widest font-mono">
        <span>Active Live Connection</span>
        <span className="text-[#E0BE6A]">● Direct to your smartphone</span>
      </div>
    </div>
  );
}
