import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TECHNOLOGY, PROTECTION_PRODUCTS } from '../constants';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://loremflickr.com/1920/1080/porsche,911,luxury,car" 
            alt="Luxury Car Hero" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.5em] font-bold text-gold mb-6 block"
          >
            The Ultimate Shield for Your Asset
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight"
          >
            The Pinnacle of <br />
            <span className="serif-italic font-light text-gold">Preservation.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            VOLIK AUTOMOTIVE is a premier global distributor of high-performance Paint Protection Films, supplying elite protection solutions to professionals worldwide.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <Link to="/contact" className="btn-primary w-full md:w-auto">Contact</Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-white"></div>
        </div>
      </section>

      {/* Technology Highlight */}
      <section className="py-32 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Advanced Science</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold">THE FUTURE OF <br /><span className="serif-italic font-light text-gold">Protection Tech.</span></h2>
            </div>
            <Link to="/technology" className="hidden md:flex items-center space-x-2 text-xs uppercase tracking-widest font-bold hover:text-gold transition-colors group">
              <span>Explore Technology</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECHNOLOGY.map((tech, index) => (
              <motion.div 
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[500px] overflow-hidden rounded-sm"
              >
                <img 
                  src={tech.image} 
                  alt={tech.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 p-8 w-full">
                  <h3 className="text-xl font-display font-bold mb-2">{tech.title}</h3>
                  <p className="text-sm text-white/50 mb-6 line-clamp-2">{tech.description}</p>
                  <Link to="/technology" className="text-[10px] uppercase tracking-widest font-bold flex items-center space-x-2 group-hover:text-gold transition-colors">
                    <span>Learn More</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-32 bg-surface px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Premium Materials</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">VOLIK SERIES</h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light">We are the primary source for premium automotive films, the world leader in paint protection technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROTECTION_PRODUCTS.slice(0, 4).map((product, index) => (
              <div key={product.id} className="flex flex-col md:flex-row bg-black/40 rounded-sm overflow-hidden border border-white/5">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover" 
                    style={{ objectPosition: product.objectPosition || 'center' }}
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-bold mb-4">{product.name}</h3>
                  <p className="text-sm text-white/50 mb-6 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-8">
                    {product.features.map(f => (
                      <li key={f} className="text-[10px] uppercase tracking-widest flex items-center space-x-2">
                        <div className="w-1 h-1 bg-gold rounded-full"></div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/products" className="text-[10px] uppercase tracking-widest font-bold text-gold hover:underline">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gold px-6">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight">READY TO PROTECT <br /><span className="serif-italic font-light">Your Investment?</span></h2>
          <p className="text-lg mb-12 font-medium opacity-80">Contact us today for a personalized consultation and quote for your vehicle.</p>
          <Link to="/contact" className="px-12 py-5 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
