import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Motivation: React.FC = () => {
  return (
    <section className="py-32 relative flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/80"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Quote size={64} className="text-j7red mx-auto mb-8 opacity-80" />
                <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-tight mb-8">
                    "The only bad workout <br /> is the one that <span className="text-transparent bg-clip-text bg-gradient-to-r from-j7red to-red-600">didn't happen</span>."
                </h2>
                <p className="text-xl text-gray-300 font-light tracking-widest uppercase">
                    Stop Wishing. Start Doing.
                </p>
                <div className="mt-12 w-24 h-1 bg-white mx-auto"></div>
            </motion.div>
        </div>
    </section>
  );
};