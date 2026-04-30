import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = '', iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 group ${className}`}>
      <div className="relative flex-shrink-0">
        {/* Mobile Logo */}
        <img 
          src="https://lh3.googleusercontent.com/d/14TlPMx2O4LhYIWLI_c_RWwxJci4pxnDX" 
          alt="VOLIK Mobile Logo" 
          className="w-8 h-auto md:hidden group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {/* Desktop Logo */}
        <img 
          src="https://lh3.googleusercontent.com/d/15i2CXUw9Ht_1BKPA5VQg7qjOqEjjq068" 
          alt="VOLIK Desktop Logo" 
          className="hidden md:block w-10 h-auto group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-display font-bold tracking-tighter leading-none text-white group-hover:text-gold transition-colors duration-300">
            VOLIK
          </span>
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gold/60 font-semibold">
            Automotive
          </span>
        </div>
      )}
    </div>
  );
}
