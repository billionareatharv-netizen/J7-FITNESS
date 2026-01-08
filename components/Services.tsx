import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black relative">
       {/* Dark textured bg */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

       <div className="container mx-auto px-6 relative z-10">
          <SectionHeading 
            title="Our Services" 
            subtitle="Diverse training programs designed to sculpt your ultimate physique."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
       </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: typeof SERVICES[0], index: number }> = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer border border-white/5 bg-gray-900"
        >
            {/* Image Background */}
            <div className="absolute inset-0 w-full h-full">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-j7red/0 group-hover:bg-j7red/20 transition-colors duration-500 mix-blend-overlay" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-1 bg-j7red mb-4 origin-left transition-transform duration-300 group-hover:scale-x-150" />
                <h3 className="text-2xl font-heading font-bold text-white uppercase mb-2 group-hover:text-j7red transition-colors">
                    {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0">
                    {service.description}
                </p>
                
                <div className="flex items-center text-white text-xs font-bold uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span>Explore Class</span>
                    <ArrowRight size={14} className="text-j7red" />
                </div>
            </div>

            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-j7red to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </motion.div>
    )
}