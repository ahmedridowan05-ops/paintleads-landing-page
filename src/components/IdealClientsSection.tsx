import React from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface IdealClientsSectionProps {
  onOpenCheckModal: () => void;
}

export const IdealClientsSection: React.FC<IdealClientsSectionProps> = ({ onOpenCheckModal }) => {
  const cards = [
    {
      id: 'quality',
      title: 'You care about quality.',
      description: 'You take pride in your work and want homeowners to understand what makes your business worth choosing.',
      icon: Award
    },
    {
      id: 'capacity',
      title: 'You want consistent work.',
      description: "You're looking for a reliable source of quality enquiries and have the capacity to take on more of the right projects.",
      icon: TrendingUp
    },
    {
      id: 'commitment',
      title: "You're committed to your business.",
      description: 'You answer enquiries, quote jobs, follow up with homeowners, and want a system that improves over time.',
      icon: ShieldCheck
    },
    {
      id: 'longterm',
      title: "You're looking for a long-term system.",
      description: "You're not looking for a quick burst of leads. You're looking for a reliable system that keeps bringing quality opportunities month after month.",
      icon: Clock
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="ideal-clients" className="py-14 sm:py-20 md:py-28 bg-[#180c0e] relative overflow-hidden border-t border-[#3b2126]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E0B669]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E0B669]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 md:space-y-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-6"
        >
          <h2 className="text-[28px] sm:text-[36px] md:text-5xl font-normal font-serif-display text-[#F6F2EA] tracking-tight leading-tight">
            The Businesses We Get the <span className="text-[#E0B669] italic">Best</span> Results With
          </h2>

          <p className="text-[#C2B29F] text-[14.5px] sm:text-[16px] md:text-lg max-w-xl md:max-w-2xl mx-auto leading-[1.6]">
            We partner with established painting contractors who are looking for a reliable growth engine built for the long haul.
          </p>
        </motion.div>

        {/* 4 Qualification Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={card.id}
                className="bg-gradient-to-br from-[#221215] to-[#1B0D10] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#3b2126]/60 hover:border-[#E0B669]/40 transition-all duration-300 group flex flex-row gap-3.5 sm:gap-6 items-start shadow-sm hover:shadow-xl hover:shadow-[#E0B669]/5"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#180c0e] border border-[#3b2126] flex items-center justify-center text-[#E0B669] shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>

                <div className="space-y-1.5 sm:space-y-3">
                  <h3 className="text-[17px] sm:text-[20px] md:text-[22px] font-normal font-serif-display text-[#F6F2EA] leading-tight group-hover:text-[#E0B669] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-[#A6978A] md:text-[#C2B29F] text-[13.5px] sm:text-[14.5px] md:text-[15px] leading-[1.6]">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-2 sm:pt-4 md:pt-8"
        >
          <button
            onClick={onOpenCheckModal}
            className="w-full sm:w-auto bg-[#E0B669] hover:bg-[#ebd08c] text-[#221215] font-bold tracking-wider text-[12px] sm:text-xs uppercase px-8 py-3.5 sm:py-4 rounded-full transition-all shadow-xl shadow-[#E0B669]/10 inline-flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <MapPin className="w-4 h-4 text-[#221215]" />
            <span>See If Your Area Is Available</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};


