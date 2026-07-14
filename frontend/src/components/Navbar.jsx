import React from 'react';
import { ShieldCheck, User, Phone } from 'lucide-react';

export default function Navbar({ viewMode, setViewMode }) {
  return (
    <header className="sticky top-0 z-50 bg-navy-deep/95 border-b border-white/10 backdrop-blur-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo brand with inline Premium SVG Logo */}
        <div 
          onClick={() => setViewMode('customer')} 
          className="flex items-center gap-3 cursor-pointer group select-none">
          
          <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="nav-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f3e5ab" />
                <stop offset="50%" stop-color="#d4af37" />
                <stop offset="100%" stop-color="#aa8c2c" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="44" stroke="url(#nav-gold-grad)" stroke-width="4.5" stroke-dasharray="280 20" stroke-linecap="round" />
            <path d="M50 16 L78 30 V56 C78 74 66 84 50 88 C34 84 22 74 22 56 V30 Z" stroke="url(#nav-gold-grad)" stroke-width="2.5" fill="rgba(212, 175, 55, 0.05)" />
            <path d="M50 25 L53 31 L60 32 L55 36 L56 43 L50 39 L44 43 L45 36 L40 32 L47 31 Z" fill="url(#nav-gold-grad)" />
            <path d="M42 42 H54 C58 42 61 44 61 48.5 C61 51 59 53 56 54 C60 55 62 57.5 62 61 C62 66 58 68 53 68 H42 V42 Z" fill="url(#nav-gold-grad)" />
            <path d="M46 45 V52 H53.5 C55 52 57 51 57 48.5 C57 46 55 45 53.5 45 H46 Z" fill="#001026" />
            <path d="M46 55 V65 H53 C55 65 57.5 64 57.5 60 C57.5 56 55 55 53 55 H46 Z" fill="#001026" />
          </svg>

          <span className="font-serif text-lg font-extrabold text-gold tracking-widest uppercase transition-colors group-hover:text-gold-light">
            LE BOUTIQUE
          </span>
        </div>

        {/* Contact Info & Nav Links */}
        {viewMode === 'customer' && (
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#restaurant" className="hover:text-gold transition-colors">Dining Menu</a>
            <a href="#lodging" className="hover:text-gold transition-colors">Boutique Suites</a>
            <a href="#booking" className="hover:text-gold transition-colors">Reservations</a>
            <a href="tel:+40314380044" className="flex items-center gap-1.5 text-gold hover:text-gold-light transition-colors normal-case font-mono font-bold">
              <Phone size={12} /> +40 314 380 044
            </a>
          </nav>
        )}

        {/* SaaS View Switcher */}
        <div className="flex items-center gap-4">
          {viewMode === 'customer' ? (
            <button 
              onClick={() => setViewMode('admin')}
              className="inline-flex items-center gap-2 bg-navy-dark hover:bg-navy-light text-slate-300 hover:text-gold border border-white/10 hover:border-gold px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md">
              <ShieldCheck size={14} className="text-gold" /> Operator SaaS Console
            </button>
          ) : (
            <button 
              onClick={() => setViewMode('customer')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-navy-deep hover:from-gold-light hover:to-gold px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md">
              <User size={14} /> Back to Customer Site
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
