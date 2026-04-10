import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PROTECTION_PRODUCTS, WINDOW_PRODUCTS, CHEMICAL_PRODUCTS, TOOL_PRODUCTS } from '../constants';

export default function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const category = useMemo(() => {
    const path = location.pathname;
    if (path.includes('protection-film')) return 'protection-film';
    if (path.includes('window-film')) return 'window-film';
    if (path.includes('chemicals')) return 'chemicals';
    if (path.includes('tools')) return 'tools';
    return 'all';
  }, [location.pathname]);

  const filteredProducts = useMemo(() => {
    if (category === 'all' || category === 'protection-film') {
      return PROTECTION_PRODUCTS;
    }
    if (category === 'window-film') {
      return WINDOW_PRODUCTS;
    }
    if (category === 'chemicals') {
      return CHEMICAL_PRODUCTS;
    }
    if (category === 'tools') {
      return TOOL_PRODUCTS;
    }
    return [];
  }, [category]);

  const categoryTitles: Record<string, string> = {
    'all': 'PREMIUM MATERIALS',
    'protection-film': 'PROTECTION FILMS',
    'window-film': 'WINDOW FILMS',
    'chemicals': 'CHEMICAL SOLUTIONS',
    'tools': 'PROFESSIONAL TOOLS'
  };

  const categories = [
    {
      id: 'protection-film',
      title: 'Protection Film',
      description: 'The ultimate invisible shield for your vehicle\'s paintwork, featuring self-healing and high-gloss technology.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      path: '/products/protection-film'
    },
    {
      id: 'window-film',
      title: 'Window Film',
      description: 'Advanced graphene-infused cooling technology for superior heat rejection, UV protection, and privacy.',
      image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800',
      path: '/products/window-film'
    },
    {
      id: 'chemicals',
      title: 'Chemicals',
      description: 'Premium maintenance and cleaning solutions engineered to preserve the performance of our films.',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800',
      path: '/products/chemicals'
    },
    {
      id: 'tools',
      title: 'Tools',
      description: 'Precision instruments and professional-grade equipment designed for flawless film installation.',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800',
      path: '/products/tools'
    }
  ];

  if (category === 'all') {
    return (
      <div className="pt-32 pb-20">
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Our Materials</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">PRODUCT RANGE</h1>
            <p className="text-white/50 max-w-2xl mx-auto font-light text-lg">
              Explore our comprehensive collection of premium automotive solutions, from advanced protection films to professional installation tools.
            </p>
          </div>
        </section>

        <section className="px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[16/10] overflow-hidden rounded-sm cursor-pointer"
                onClick={() => navigate(cat.path)}
              >
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-display font-bold mb-3">{cat.title}</h3>
                  <p className="text-white/60 font-light text-sm max-w-md mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {cat.description}
                  </p>
                  <div className="flex items-center space-x-2 text-gold text-xs uppercase tracking-widest font-bold">
                    <span>Explore Collection</span>
                    <div className="w-8 h-[1px] bg-gold transition-all duration-300 group-hover:w-12"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Our Materials</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">{categoryTitles[category]}</h1>
          <p className="text-white/50 max-w-2xl mx-auto font-light text-lg">
            {category === 'protection-film' || category === 'all' 
              ? "We exclusively use high-performance automotive films, engineered to provide the highest level of protection while enhancing the visual appeal of your vehicle."
              : `Explore our premium range of ${categoryTitles[category].toLowerCase()} designed for professionals.`}
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="md:w-1/2 aspect-video overflow-hidden rounded-sm">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover" 
                    style={{ objectPosition: product.objectPosition || 'center' }}
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-4xl font-display font-bold">{product.name}</h2>
                  <p className="text-white/60 text-lg leading-relaxed font-light">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {product.features.map(feature => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                        <span className="text-xs uppercase tracking-widest font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-8">
                    <button className="btn-outline">Technical Specs</button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-white/30 uppercase tracking-widest">New products coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
