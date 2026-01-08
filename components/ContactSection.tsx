import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { SectionHeading } from './ui/SectionHeading';
import { CONTACT_PHONE, WHATSAPP_PHONE } from '../constants';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6">
            <SectionHeading title="Begin Your Journey" subtitle="Stop waiting for the perfect moment. Create it." />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-stretch max-w-6xl mx-auto bg-zinc-900/30 border border-white/5">
                
                {/* Info Side */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 bg-zinc-950">
                    <h3 className="font-heading text-3xl font-bold uppercase text-white mb-2">Get In Touch</h3>
                    <p className="text-gray-400 mb-10 text-sm tracking-wide">
                        Visit our facility for a personal tour and consultation.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-j7red shrink-0 group-hover:border-j7red transition-colors">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold uppercase text-white tracking-wider mb-1">Headquarters</h5>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    J7 Fitness Arena, 2nd Floor,<br />
                                    Empire Plaza, Main Road,<br />
                                    New City Center, India 110001
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-j7red shrink-0 group-hover:border-j7red transition-colors">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold uppercase text-white tracking-wider mb-1">Operating Hours</h5>
                                <p className="text-gray-400 text-sm">
                                    <span className="text-white">Mon - Sat:</span> 05:00 AM - 11:00 PM<br />
                                    <span className="text-white">Sunday:</span> 06:00 AM - 01:00 PM
                                </p>
                            </div>
                        </div>

                         <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-j7red shrink-0 group-hover:border-j7red transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold uppercase text-white tracking-wider mb-1">Email Us</h5>
                                <p className="text-gray-400 text-sm">
                                    memberships@j7fitness.com<br/>
                                    support@j7fitness.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Side */}
                <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[url('https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                        <div className="mb-8">
                            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2">Instant Enquiry</h3>
                            <p className="text-gray-300 text-sm">Speak directly with our head trainer.</p>
                        </div>

                        <div className="space-y-4">
                            <Button 
                                href={`tel:${CONTACT_PHONE}`}
                                fullWidth 
                                icon={<Phone size={20} />}
                                className="border-white/20 hover:border-white bg-black/50 hover:bg-black"
                            >
                                Call Now
                            </Button>
                            <Button 
                                href={`https://wa.me/${WHATSAPP_PHONE}`}
                                variant="whatsapp" 
                                fullWidth 
                                icon={<MessageCircle size={20} />}
                            >
                                Chat on WhatsApp
                            </Button>
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-center text-xs text-gray-400 uppercase tracking-widest">
                                Elite Training Spots Filling Fast
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};