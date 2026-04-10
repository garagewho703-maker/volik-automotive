import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = '', iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 group ${className}`}>
      <div className="relative flex-shrink-0">
        {/* Outer Hexagon Frame */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="w-10 h-10 text-white/20 group-hover:text-gold/30 transition-colors duration-500"
        >
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
        </svg>
        
        {/* Inner Stylized V */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-6 h-6 text-white group-hover:text-gold transition-all duration-500 transform group-hover:scale-110"
          >
            <path d="M5 8l7 10 7-10" />
            <path d="M9 8l3 4 3-4" className="opacity-40" strokeWidth="1.5" />
          </svg>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className="text-2xl font-display font-bold tracking-tighter leading-none text-white group-hover:text-gold transition-colors duration-300">
            VOLIK
          </span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-gold/60 font-semibold">
            Automotive
          </span>
        </div>
      )}
    </div>
  );
}
