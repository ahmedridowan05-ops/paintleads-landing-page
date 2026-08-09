import React from 'react';
import { FileText, Target, ShieldCheck, Filter, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export const WhatWeBuildSection: React.FC = () => {
  const cards = [
    {
      icon: FileText,
      title: 'Understand what makes you different',
      description: 'We first understand your business, your goals and the type of projects you actually want—so your marketing reflects what makes you worth choosing.',
    },
    {
      icon: Target,
      title: 'Get in front of the right homeowners',
      description: 'We create content and campaigns that put your business in front of people already looking for the type of work you do.',
    },
    {
      icon: ShieldCheck,
      title: 'Show people why they should choose you',
      description: 'We build a page that educates, builds trust and clearly explains why your business is different before someone even contacts you.',
    },
    {
      icon: Filter,
      title: 'Only the right enquiries reach you',
      description: 'Every enquiry goes through a system designed to filter out poor-fit projects, so you spend more time quoting the jobs you actually want.',
    },
    {
      icon: TrendingUp,
      title: 'Keep improving every month',
      description: "We don't build a system and disappear. We review it, improve it and grow it with you over time.",
    },
  ];

  return (
    <section id="what-we-build" className="py-20 md:py-28 bg-[#1B0D10] relative overflow-hidden">
      {/* Background radial lights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#E0B669]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#E0B669]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="space-y-4">
            <h2 className="text-[32px] md:text-5xl font-normal font-serif-display text-[#F6F2EA] tracking-tight leading-tight">
              We Build Client Acquisition Systems
            </h2>

            <p className="text-[#C2B29F] text-[15px] md:text-lg leading-[1.6]">
              Everything your painting business needs to <span className="text-[#E0B669]">attract better projects consistently.</span>
            </p>
          </div>

          <div className="bg-[#221215] border border-[#3b2126]/60 rounded-xl p-4 md:p-5 inline-block">
            <p className="text-[#A6978A] text-[13px] md:text-sm max-w-[280px] md:max-w-xl mx-auto leading-relaxed">
              Every system is built around <span className="text-[#F6F2EA]">your business, your market and the type of projects you want to win</span>—not around a generic marketing template.
            </p>
          </div>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative pt-4">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] md:left-[39px] top-4 bottom-4 w-px bg-gradient-to-b from-[#E0B669]/30 via-[#E0B669]/10 to-transparent"></div>

          <div className="space-y-8 md:space-y-12">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="relative pl-[72px] md:pl-28 group"
                >
                  {/* Step Number / Icon */}
                  <div className="absolute left-0 top-0 w-[56px] h-[56px] md:w-20 md:h-20 rounded-2xl bg-[#1B0D10] border border-[#3b2126] flex items-center justify-center text-[#E0B669] shadow-lg group-hover:border-[#E0B669]/50 group-hover:bg-[#221215] transition-all duration-300 z-10">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="bg-[#221215] p-5 md:p-8 rounded-2xl md:rounded-3xl border border-[#3b2126]/50 group-hover:border-[#3b2126] transition-colors shadow-sm">
                    <h3 className="text-[20px] md:text-2xl font-normal font-serif-display text-[#F6F2EA] mb-2 md:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[14px] md:text-base text-[#A6978A] md:text-[#C2B29F] leading-[1.6]">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};


