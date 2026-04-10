import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Award, Target } from 'lucide-react';

const values = [
  {
    title: 'Uncompromising Quality',
    description: 'We never settle for "good enough." Every installation is a masterpiece of precision and care.',
    icon: Shield
  },
  {
    title: 'Customer Centric',
    description: 'Your satisfaction is our ultimate goal. We build lasting relationships through transparency and trust.',
    icon: Users
  },
  {
    title: 'Innovation Driven',
    description: 'We constantly search for the latest materials and technologies to provide the best protection available.',
    icon: Target
  },
  {
    title: 'Certified Excellence',
    description: 'Our team consists of industry-leading experts certified in the most advanced installation techniques.',
    icon: Award
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
            ABOUT <span className="text-gold">VOLIK</span>
          </h1>
          <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
            Founded on a passion for automotive perfection, VOLIK has evolved into a premier destination for vehicle protection and enhancement. We combine artisanal craftsmanship with cutting-edge technology to preserve the beauty of your investment.
          </p>
        </motion.div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-white/10"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1Ho4uth0u5nRJZer6BoNcBlyrh_UpBYBt" 
              alt="Workshop" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-display font-bold tracking-tight">OUR MISSION</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Our mission is simple: to provide the highest level of automotive protection services while maintaining the integrity and aesthetics of every vehicle we touch. We believe that every car deserves to look its best, and we have the tools and expertise to make that happen.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{value.title}</h3>
                    <p className="text-white/40 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team/Culture Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-6">JOIN THE VOLIK FAMILY</h3>
          <p className="text-white/40 max-w-3xl mx-auto mb-8">
            We are more than just a service provider; we are a community of enthusiasts dedicated to the art of detailing. Whether you are a professional installer or a car owner who loves their ride, you are part of our story.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
