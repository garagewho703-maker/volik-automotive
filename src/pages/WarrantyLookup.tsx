import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShieldCheck, Calendar, Car, MapPin, AlertCircle, Loader2 } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db, WarrantyRecord } from '../lib/firebase';

export default function WarrantyLookup() {
  const [warrantyId, setWarrantyId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<WarrantyRecord | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!warrantyId.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const docRef = doc(db, 'warranties', warrantyId.trim());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setResult({ id: docSnap.id, ...docSnap.data() } as WarrantyRecord);
      } else {
        setError('No warranty found with the provided ID. Please check and try again.');
      }
    } catch (err) {
      console.error('Warranty lookup error:', err);
      setError('An error occurred while fetching warranty details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 rounded-2xl bg-gold/10 text-gold mb-6"
          >
            <ShieldCheck size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Warranty <span className="serif-italic font-light text-gold">Lookup</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Enter your VOLIK warranty ID to verify your protection status and view detailed installation information.
          </motion.p>
        </div>

        {/* Search Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl mb-12"
        >
          <form onSubmit={handleLookup} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Enter Warranty ID (e.g., VK-123456)"
                value={warrantyId}
                onChange={(e) => setWarrantyId(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold/50 transition-colors text-lg"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !warrantyId.trim()}
              className="bg-gold text-black font-bold px-8 py-4 rounded-2xl transition-all hover:bg-gold/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                'Search'
              )}
            </button>
          </form>
        </motion.div>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex items-start gap-4 text-red-400"
            >
              <AlertCircle className="flex-shrink-0 mt-1" />
              <p>{error}</p>
            </motion.div>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="bg-gold/5 border border-gold/20 p-8 rounded-3xl relative overflow-hidden">
                {/* Status Badge */}
                <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                  result.status === 'Active' ? 'bg-green-500/20 text-green-400' : 
                  result.status === 'Expired' ? 'bg-white/10 text-white/60' : 
                  'bg-red-500/20 text-red-400'
                }`}>
                  {result.status}
                </div>

                <h2 className="text-2xl font-bold mb-8">Warranty Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Vehicle Info */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/5 text-gold">
                        <Car size={24} />
                      </div>
                      <div>
                        <div className="text-white/40 text-sm mb-1 uppercase tracking-widest font-bold">Vehicle Info</div>
                        <div className="text-lg font-medium">{result.vehicleModel}</div>
                        <div className="text-white/60 font-mono text-sm">{result.vehicleVin}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/5 text-gold">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <div className="text-white/40 text-sm mb-1 uppercase tracking-widest font-bold">Protected By</div>
                        <div className="text-lg font-medium">{result.productName}</div>
                      </div>
                    </div>
                  </div>

                  {/* Dates & Location */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/5 text-gold">
                        <Calendar size={24} />
                      </div>
                      <div>
                        <div className="text-white/40 text-sm mb-1 uppercase tracking-widest font-bold">Coverage Period</div>
                        <div className="text-white/80">Installed: <span className="text-white">{new Date(result.installationDate).toLocaleDateString()}</span></div>
                        <div className="text-white/80">Expires: <span className="text-white">{new Date(result.expiryDate).toLocaleDateString()}</span></div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/5 text-gold">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <div className="text-white/40 text-sm mb-1 uppercase tracking-widest font-bold">Authorized Installer</div>
                        <div className="text-lg font-medium">{result.installerName}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra Message */}
              <div className="text-center text-white/40 text-sm italic">
                This verification is provided by VOLIK AUTOMOTIVE Global Protection Network.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
