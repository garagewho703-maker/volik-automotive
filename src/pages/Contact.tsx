import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-surface/30 p-8 md:p-12 rounded-sm border border-white/5 backdrop-blur-sm lg:-mt-24">
                <h3 className="text-xl font-display font-bold mb-8">GET IN TOUCH</h3>
                
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
                    <h4 className="text-2xl font-display font-bold mb-4">Request Submitted</h4>
                    <p className="text-white/60 mb-8">Thank you for your inquiry. A VOLIK representative will contact you shortly.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-[10px] uppercase tracking-widest font-bold text-gold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">First Name</label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm" 
                          placeholder="First Name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm" 
                          placeholder="Last Name" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm" 
                        placeholder="email@example.com" 
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Country / Nationality</label>
                        <select 
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors appearance-none text-sm"
                        >
                          <option value="">Select Country</option>
                          <option value="South Korea">South Korea</option>
                          <option value="United States">United States</option>
                          <option value="China">China</option>
                          <option value="Japan">Japan</option>
                          <option value="Germany">Germany</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="France">France</option>
                          <option value="Italy">Italy</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Title / Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm" 
                        placeholder="Inquiry Title" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4} 
                        className="w-full bg-black/40 border border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm" 
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-xs text-center font-bold">Something went wrong. Please try again later.</p>
                    )}

                    <button 
                      disabled={status === 'submitting'}
                      className="w-full py-5 bg-gold text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
