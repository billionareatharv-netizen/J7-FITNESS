import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from './ui/Button';

export const MapSection: React.FC = () => {
  return (
    <section className="py-0 bg-black relative border-t border-white/5">
       <div className="container mx-auto px-6 pt-16 pb-8">
           <SectionHeading title="Locate The Arena" subtitle="Where champions are made. Visit our HQ." />
       </div>

       {/* Map Container */}
       <div className="relative w-full h-[350px] md:h-[450px] group overflow-hidden border-y border-white/10">
           {/* Google Map Iframe with Dark Mode Filter */}
           <iframe 
               width="100%" 
               height="100%" 
               frameBorder="0" 
               title="J7 Fitness Location"
               scrolling="no" 
               marginHeight={0} 
               marginWidth={0} 
               src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=J7%20Fitness%20Raipur+(J7%20Fitness)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
               style={{ filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
               className="w-full h-full relative z-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
           />
           
           {/* Overlay to ensure theme consistency on edges */}
           <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black opacity-60" />
           
           {/* Floating Info Card (Desktop) */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="absolute bottom-8 left-6 md:left-20 bg-black/90 backdrop-blur-xl p-6 md:p-8 border-l-4 border-j7red max-w-sm z-10 hidden md:block shadow-2xl"
           >
               <div className="flex items-start justify-between mb-4">
                   <div>
                       <h3 className="text-white font-heading text-xl md:text-2xl font-bold uppercase tracking-wide">J7 FITNESS</h3>
                       <p className="text-j7red text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Raipur Headquarters</p>
                   </div>
                   <MapPin className="text-j7red" size={24} />
               </div>
               
               <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed">
                   Come experience the vibe in person. Our facility is open 7 days a week for tours and consultations.
               </p>
               
               <Button 
                 href="https://g.co/kgs/4BpvNu" 
                 variant="primary" 
                 fullWidth
                 className="text-xs md:text-sm py-3"
                 icon={<Navigation size={16}/>}
               >
                   Get Directions
               </Button>
           </motion.div>
       </div>
       
       {/* Mobile Button (Visible below map on mobile) */}
       <div className="md:hidden p-6 bg-zinc-900 flex flex-col items-center text-center gap-3 border-b border-white/5">
            <div>
                <h3 className="text-white font-heading text-lg font-bold uppercase">Find Your Way</h3>
                <p className="text-gray-500 text-xs mt-1">Click below to open Google Maps</p>
            </div>
            <Button 
                 href="https://g.co/kgs/4BpvNu" 
                 fullWidth
                 variant="outline" 
                 icon={<Navigation size={18}/>}
                 className="text-sm py-3"
            >
                   Open in Maps
            </Button>
       </div>
    </section>
  );
};