import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_PHONE, WHATSAPP_PHONE } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Why Us', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, '#home')}>
             <div className="w-10 h-10 bg-j7red flex items-center justify-center font-heading font-bold text-white text-2xl skew-x-[-12deg]">
                J7
             </div>
             <span className="font-heading text-2xl md:text-3xl font-bold tracking-tighter text-white group-hover:text-j7red transition-colors">
               FITNESS
             </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-j7red transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-j7red after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
             <a href={`tel:${CONTACT_PHONE}`} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-j7red hover:border-j7red transition-all text-white">
               <Phone size={18} />
             </a>
             <a 
                href={`https://wa.me/${WHATSAPP_PHONE}`} 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-black border border-white px-6 py-2.5 font-bold uppercase text-xs tracking-[0.15em] hover:bg-j7red hover:text-white hover:border-j7red transition-all duration-300 font-heading"
             >
               Join Now
             </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center md:hidden"
          >
            <button 
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-3xl font-heading font-bold text-white hover:text-j7red uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 w-64">
                <a href={`tel:${CONTACT_PHONE}`} className="bg-white text-black py-4 font-bold uppercase tracking-widest text-center hover:bg-gray-200">
                    Call Now
                </a>
                <a href={`https://wa.me/${WHATSAPP_PHONE}`} className="bg-j7red text-white py-4 font-bold uppercase tracking-widest text-center hover:bg-red-700">
                    WhatsApp
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};