import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center', light = false }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-4 ${light ? 'text-white' : 'text-white'}`}
      >
        <span className="text-j7red">/</span> {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-1 w-24 bg-j7red mt-6 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : 'mr-auto'}`}
      />
    </div>
  );
};