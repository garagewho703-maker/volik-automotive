import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/">
            <Logo />
          </Link>
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            Global distributor of premium Paint Protection Films. We supply world-class PPF and automotive care solutions to professionals and enthusiasts worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/technology" className="hover:text-white transition-colors">Technology</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[10px] uppercase tracking-widest text-white/30">
          © 2026 VOLIK AUTOMOTIVE. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-white/30">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
