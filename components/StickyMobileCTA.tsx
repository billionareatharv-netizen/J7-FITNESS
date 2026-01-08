import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_PHONE, WHATSAPP_PHONE } from '../constants';
import { motion } from 'framer-motion';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col gap-4 items-end">
      {/* Call Button - Top */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:${CONTACT_PHONE}`}
        className="w-12 h-12 bg-white text-j7red rounded-full flex items-center justify-center shadow-lg border border-gray-100"
        aria-label="Call Now"
      >
         <Phone size={22} fill="currentColor" className="fill-current" />
      </motion.a>
      
      {/* WhatsApp Button - Bottom */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${WHATSAPP_PHONE}`}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg border border-[#128C7E]"
        aria-label="WhatsApp Enquiry"
      >
         <MessageCircle size={28} fill="currentColor" className="fill-current" />
      </motion.a>
    </div>
  );
};