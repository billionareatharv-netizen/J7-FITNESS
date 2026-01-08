import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { MEMBERSHIP_PLANS, WHATSAPP_PHONE } from '../constants';

export const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-32 bg-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-j7red/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-zinc-800/30 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Membership Tiers" 
          subtitle="Commit to the process. Choose the level of access you deserve." 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16 items-stretch">
          {MEMBERSHIP_PLANS.map((plan, index) => (
            <div key={plan.id} className={`relative flex flex-col ${plan.recommended ? 'md:-mt-8 md:-mb-8 z-20' : 'z-10'}`}>
              
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30">
                  <div className="bg-j7red text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-2 shadow-[0_0_20px_rgba(192,0,0,0.6)] flex items-center gap-2 clip-path-slant">
                    <Star size={12} fill="currentColor" />
                    Best Value
                  </div>
                </div>
              )}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`
                  relative h-full flex flex-col p-8 md:p-10 transition-all duration-500 group
                  ${plan.recommended 
                    ? 'bg-zinc-900 border border-j7red/50 shadow-[0_0_50px_rgba(192,0,0,0.15)]' 
                    : 'bg-zinc-950/50 backdrop-blur-md border border-white/5 hover:border-white/20 hover:bg-zinc-900'
                  }
                `}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="mb-8 relative z-10">
                  <h3 className={`text-3xl font-heading font-bold uppercase tracking-wider mb-2 ${plan.recommended ? 'text-j7red' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
                    {plan.duration} Access
                  </p>
                </div>

                <div className="mb-8 pb-8 border-b border-white/10 relative z-10">
                  <div className="flex items-start gap-1">
                    <span className="text-xl font-bold text-gray-500 mt-2">₹</span>
                    <span className={`text-6xl font-heading font-bold ${plan.recommended ? 'text-white' : 'text-gray-200'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 font-medium uppercase tracking-wide">Billed {plan.duration.toLowerCase()}</p>
                </div>

                <ul className="space-y-5 mb-10 flex-grow relative z-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-gray-300 group-hover:text-white transition-colors">
                      <div className={`mt-0.5 min-w-[18px] flex items-center justify-center rounded-full w-[18px] h-[18px] ${plan.recommended ? 'bg-j7red text-white' : 'bg-gray-800 text-gray-400 group-hover:bg-white group-hover:text-black'} transition-colors duration-300`}>
                        <Check size={10} strokeWidth={4} />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=Hi J7 Fitness, I am interested in the ${plan.name} membership plan.`}
                  variant={plan.recommended ? 'primary' : 'outline'}
                  fullWidth
                  className={plan.recommended ? 'py-5 text-lg' : ''}
                >
                  {plan.recommended ? 'Start Transformation' : 'Select Plan'}
                </Button>
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Trust Strip */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                <Zap size={16} /> No Hidden Fees
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                <Zap size={16} /> 7-Day Money Back
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                <Zap size={16} /> Pause Membership
            </div>
        </div>
      </div>
    </section>
  );
};