import React from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Instagram, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">CONTACT US</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight">
              The Art of <br />
              <span className="serif-italic font-light text-gold">Preservation.</span>
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Safeguarding the Standard of Perfection</h2>
                <p className="text-white/60 font-light text-lg leading-relaxed mb-8">
                  VOLIK is dedicated to safeguarding the world's most prestigious vehicles. Our premium Paint Protection Films combine cutting-edge technology with an uncompromising commitment to aesthetic excellence. Whether you're a collector or a daily driver, we provide the ultimate invisible shield to ensure your investment remains in showroom condition for years to come.
                </p>
                
                <div className="space-y-8 mt-12">
                  <div className="flex items-center space-x-6">
                    <a href="https://www.instagram.com/official.stek/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="https://www.facebook.com/official.stek" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="https://www.youtube.com/@official_stek" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                      <Youtube size={24} />
                    </a>
                    <a href="https://www.linkedin.com/company/official-stek" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://www.twitter.com/stekofficial" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                      <Twitter size={24} />
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-8 pt-8 border-t border-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-surface rounded-sm text-gold"><Mail size={20} /></div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-40">Email</h4>
                        <p className="text-sm font-medium">info@VOLIK.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-surface/30 p-8 md:p-12 rounded-sm border border-white/5 backdrop-blur-sm lg:-mt-24">
                <h3 className="text-xl font-display font-bold mb-8">GET IN TOUCH</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">First Name</label>
                      <input type="text" className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm" placeholder="First Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Last Name</label>
                      <input type="text" className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm" placeholder="Last Name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Email Address</label>
                    <input type="email" className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm" placeholder="email@example.com" />
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Country / Nationality</label>
                      <select className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors appearance-none text-sm">
                        <option value="">Select Country</option>
                        <option value="KR">South Korea</option>
                        <option value="US">United States</option>
                        <option value="CN">China</option>
                        <option value="JP">Japan</option>
                        <option value="DE">Germany</option>
                        <option value="UK">United Kingdom</option>
                        <option value="FR">France</option>
                        <option value="IT">Italy</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Title / Subject</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm" placeholder="Inquiry Title" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Message</label>
                    <textarea rows={4} className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm" placeholder="How can we help you?"></textarea>
                  </div>

                  <button className="w-full py-5 bg-gold text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all flex items-center justify-center space-x-3">
                    <span>Submit Request</span>
                    <Send size={14} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
