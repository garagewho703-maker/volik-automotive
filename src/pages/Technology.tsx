import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Scissors, ShieldCheck, Zap } from 'lucide-react';

const technologies = [
  {
    title: 'Self-Healing Technology',
    description: 'Our advanced top-coat technology allows minor scratches and swirl marks to disappear with heat exposure, keeping your vehicle looking brand new.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    imagePosition: 'object-center'
  },
  {
    title: 'Hydrophobic Performance',
    description: 'Superior water-repelling properties ensure that dirt and grime are easily washed away, making maintenance effortless while providing a deep, glossy finish.',
    icon: ShieldCheck,
    image: 'https://lh3.googleusercontent.com/d/1mbLCSQ07xZ6j50unM3aRWlB2fYE-G_fh',
    imagePosition: 'object-center'
  },
  {
    title: 'Cutting Software',
    description: 'Our proprietary cutting software offers the industry\'s most comprehensive pattern database, ensuring a perfect fit for every panel without the need for manual cutting on the paint.',
    icon: Scissors,
    image: 'https://lh3.googleusercontent.com/d/1pdgRnYdKGOffB66k4gbRoJ_Or0kXKmX2',
    imagePosition: 'object-center'
  },
  {
    title: 'Graphene Cooling Tech',
    description: 'Integrated graphene layers in our window films provide unmatched heat rejection and thermal insulation, significantly reducing cabin temperature.',
    icon: Cpu,
    image: 'https://lh3.googleusercontent.com/d/1FrO3Bhfmyr_J2gdcJ6ej8mvW1BkGDvQt',
    imagePosition: 'object-top'
  }
];

export default function Technology() {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
            ADVANCED <span className="text-gold">TECHNOLOGY</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Experience the pinnacle of automotive protection through our cutting-edge material science and precision engineering.
          </p>
        </motion.div>

        <div className="space-y-32">
          {technologies.map((tech, index) => (
            <motion.div 
              key={tech.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center">
                  <tech.icon className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                  {tech.title}
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  {tech.description}
                </p>
                <div className="pt-4">
                  <div className="h-px w-20 bg-gold/50" />
                </div>
              </div>
              
              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
                  <img 
                    src={tech.image} 
                    alt={tech.title}
                    className={`w-full h-full object-cover ${tech.imagePosition || 'object-center'} grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cutting Software Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 p-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-4">CUTTING SOFTWARE</h3>
          <p className="text-white/40 max-w-3xl mx-auto mb-8">
            Our proprietary database contains thousands of precise templates for virtually every vehicle make and model. This allows us to provide a "factory-fit" finish without ever putting a blade near your vehicle's paint.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            <span className="text-xs tracking-[0.3em] font-bold">100,000+ PATTERNS</span>
            <span className="text-xs tracking-[0.3em] font-bold">LASER PRECISION</span>
            <span className="text-xs tracking-[0.3em] font-bold">EDGE-TO-EDGE FIT</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
