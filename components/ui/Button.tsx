import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  icon?: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon, 
  onClick, 
  fullWidth = false,
  className = '',
  href
}) => {
  // Modern, Premium, Clean
  // Removed skew/clip-path. Added strong tracking and clean borders for that "Luxury Industrial" look.
  const baseClasses = "relative inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-bold tracking-[0.2em] uppercase transition-all duration-300 font-heading overflow-hidden group border rounded-none";
  
  const variants = {
    // Red filled -> Turns white on hover (High contrast)
    primary: "bg-j7red border-j7red text-white hover:bg-white hover:text-j7red hover:border-white shadow-lg shadow-j7red/20",
    
    // White filled -> Turns red on hover
    secondary: "bg-white border-white text-black hover:bg-j7red hover:text-white hover:border-j7red",
    
    // Transparent -> Fills white on hover
    outline: "bg-transparent border-white/50 text-white hover:bg-white hover:text-black hover:border-white backdrop-blur-sm",
    
    // WhatsApp specific
    whatsapp: "bg-[#25D366] border-[#25D366] text-white hover:bg-[#128C7E] hover:border-[#128C7E] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
  };

  const iconElement = icon ? (
    <span className="mr-3 transition-transform duration-300 group-hover:-translate-x-1">
      {icon}
    </span>
  ) : null;

  const content = (
    <span className="relative z-10 flex items-center">
      {iconElement}
      {children}
    </span>
  );

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    // @ts-ignore
    <Component
      {...props}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {content}
    </Component>
  );
};