import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Target, Users, Crown } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-j7dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-j7red/5 skew-x-[-12deg] z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4 mt-12"
              >
                 <img 
                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" 
                    alt="Strength Training" 
                    className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border-b-4 border-j7red" 
                 />
                 <div className="p-6 bg-j7gray rounded-sm border-l-4 border-j7red">
                    <h3 className="text-white font-heading text-2xl font-bold mb-2">3000+</h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Lives Transformed</p>
                 </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                 <div className="p-6 bg-j7red rounded-sm text-white">
                    <Crown size={32} className="mb-4 text-black" />
                    <h3 className="font-heading text-xl font-bold mb-2 uppercase">Premium Facility</h3>
                    <p className="text-white/80 text-sm">Top-tier equipment for elite performance.</p>
                 </div>
                 <img 
                    src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop" 
                    alt="Gym Interior" 
                    className="w-full h-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl" 
                 />
              </motion.div>
            </div>
            
            {/* Decorative Outline Text */}
            <div className="absolute -bottom-12 -left-12 font-heading text-9xl font-bold text-outline opacity-10 pointer-events-none hidden md:block">
              J7
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading 
                title="About J7 Fitness" 
                align="left" 
                subtitle="More than just a gym. We are a movement."
            />
            
            <div className="space-y-6 text-gray-300 font-sans leading-relaxed text-lg">
                <p>
                    At <span className="text-j7red font-bold">J7 FITNESS</span>, we believe that fitness is not a hobby—it's a lifestyle. Born from a passion for strength and discipline, we have created a sanctuary for those who refuse to be average.
                </p>
                <p>
                    Whether you are stepping into a gym for the first time or you are an elite athlete looking to break barriers, our facility is designed to push you beyond your limits.
                </p>
                <p>
                   We don't just sell memberships; we sell <span className="text-white font-bold border-b border-j7red">Results</span>. Our ecosystem focuses on three pillars:
                </p>
            </div>

            <div className="mt-8 space-y-4">
                {[
                    { title: "Discipline", desc: "Consistency is the key to mastery.", icon: Target },
                    { title: "Community", desc: "Surround yourself with those on the same mission.", icon: Users },
                    { title: "Transformation", desc: "Evolve physically and mentally every single day.", icon: Crown },
                ].map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                    >
                        <div className="bg-j7red/10 p-3 rounded-full text-j7red">
                            <item.icon size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg uppercase font-heading">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};