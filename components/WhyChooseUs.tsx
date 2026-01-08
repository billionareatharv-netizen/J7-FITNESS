import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { FEATURES } from '../constants';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-j7dark relative overflow-hidden">
        {/* Geometric Accents */}
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-black to-transparent opacity-80 z-10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-20">
            <SectionHeading 
                title="The J7 Standard" 
                subtitle="We don't just provide equipment. We provide an ecosystem for success."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURES.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative bg-white/5 backdrop-blur-sm p-8 border border-white/5 hover:border-j7red/50 hover:bg-zinc-900 transition-all duration-500 overflow-hidden"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-j7red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="relative z-10">
                            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-none bg-black border border-white/10 group-hover:border-j7red group-hover:text-j7red text-white transition-colors duration-300">
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>
                            
                            <h3 className="text-xl font-heading font-bold text-white uppercase mb-3 tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                                {feature.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-2 h-2 bg-j7red rounded-full" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};