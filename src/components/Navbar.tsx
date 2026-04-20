import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Products', 
      path: '/products',
      subLinks: [
        { name: 'Protection Film', path: '/products/protection-film' },
        { name: 'Window Film', path: '/products/window-film' },
        { name: 'Chemicals', path: '/products/chemicals' },
        { name: 'Tools', path: '/products/tools' },
      ]
    },
    { name: 'Technology', path: '/technology' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about' },
  ];

  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center space-x-12">
          {navLinks.map((link) => (
            <div 
              key={link.path} 
              className="relative group py-4"
              onMouseEnter={() => link.subLinks && setActiveSubmenu(link.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                to={link.path}
                className={`text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-gold ${location.pathname.startsWith(link.path) ? 'text-gold' : 'text-white/80'}`}
              >
                {link.name}
              </Link>
              
              {link.subLinks && (
                <AnimatePresence>
                  {activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 py-4 mt-2"
                    >
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-6 py-2 text-[10px] uppercase tracking-widest font-bold text-white/60 hover:text-gold hover:bg-white/5 transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <Link 
            to="/warranty"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-black transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse group-hover:bg-black" />
            Warranty Lookup
          </Link>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.path} className="space-y-2">
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-sm uppercase tracking-widest font-bold text-white/80 hover:text-gold block"
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-4 flex flex-col space-y-2">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="text-xs uppercase tracking-widest font-medium text-white/40 hover:text-gold"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/warranty"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gold text-black font-bold text-xs uppercase tracking-widest"
                >
                  Warranty Lookup
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
