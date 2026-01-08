import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { CONTACT_PHONE, WHATSAPP_PHONE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-j7red/20 via-black/0 to-black/0 z-10" />
        
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[kenburns_20s_ease-out_infinite_alternate]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center md:text-left pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6 justify-center md:justify-start"
          >
            <div className="h-[2px] w-12 md:w-20 bg-j7red" />
            <span className="text-white/80 font-bold tracking-[0.3em] uppercase text-sm md:text-base">
              Welcome to the elite
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold leading-[0.9] text-white uppercase mb-6 drop-shadow-2xl">
            Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Fitness</span> Like <br />
            <span className="text-j7red relative inline-block">
               Never Before
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-j7red opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
               </svg>
            </span>
          </h1>

          <p className="font-sans text-gray-300 text-lg md:text-xl lg:text-2xl max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
            Forge your body, sharpen your mind. Join the community where 
            <span className="text-white font-bold mx-1">strength meets discipline</span>. 
            This isn't just a gym; it's your transformation center.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
            <Button 
                href={`tel:${CONTACT_PHONE}`} 
                icon={<Phone className="w-5 h-5" />}
                className="w-full md:w-auto"
            >
                Call Now
            </Button>
            <Button 
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                variant="whatsapp"
                icon={<MessageCircle className="w-5 h-5" />}
                className="w-full md:w-auto"
            >
                WhatsApp Enquiry
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};