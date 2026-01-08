import React from 'react';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                
                {/* Brand Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-j7red flex items-center justify-center font-heading font-bold text-white text-xl skew-x-[-12deg]">
                            J7
                        </div>
                        <span className="font-heading text-3xl font-bold text-white tracking-tighter">FITNESS</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        The premier destination for body transformation and athletic performance. Built for the dedicated.
                    </p>
                    <div className="flex gap-4">
                        <a 
                            href="https://www.instagram.com/j7fitnessraipur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white hover:bg-j7red hover:border-j7red transition-all duration-300"
                        >
                            <Instagram size={18} />
                        </a>
                        <a 
                            href="https://www.facebook.com/106364205033451?ref=_xav_ig_profile_page_web" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                        >
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-300">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6 text-sm">Sitemap</h4>
                    <ul className="space-y-4 text-gray-400 text-sm font-medium">
                        <li><a href="#about" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</a></li>
                        <li><a href="#services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Services</a></li>
                        <li><a href="#membership" className="hover:text-white hover:translate-x-1 transition-all inline-block">Membership Plans</a></li>
                        <li><a href="#contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact Support</a></li>
                    </ul>
                </div>

                {/* Programs */}
                <div>
                    <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6 text-sm">Expertise</h4>
                    <ul className="space-y-4 text-gray-400 text-sm font-medium">
                        <li><a href="#" className="hover:text-j7red transition-colors">Strength Training</a></li>
                        <li><a href="#" className="hover:text-j7red transition-colors">Mixed Martial Arts</a></li>
                        <li><a href="#" className="hover:text-j7red transition-colors">High-Intensity Interval</a></li>
                        <li><a href="#" className="hover:text-j7red transition-colors">Personal Coaching</a></li>
                    </ul>
                </div>

                {/* Newsletter (Visual Only) */}
                <div>
                    <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6 text-sm">Stay Updated</h4>
                    <p className="text-gray-500 text-xs mb-4">
                        Join our newsletter for fitness tips and exclusive offers.
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full bg-zinc-900 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-j7red transition-colors placeholder:text-gray-600"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-j7red transition-colors">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-gray-600 uppercase tracking-widest font-bold">
                <p>&copy; {new Date().getFullYear()} J7 Fitness. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
};