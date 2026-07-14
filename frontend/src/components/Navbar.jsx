import React from 'react';
import { ShieldCheck, User, Phone } from 'lucide-react';

export default function Navbar({ viewMode, setViewMode }) {
  return (
    <header className="sticky top-0 z-50 bg-navy-deep/95 border-b border-white/10 backdrop-blur-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo brand */}
        <div 
          onClick={() => setViewMode('customer')} 
          className="flex items-center gap-3 cursor-pointer group">
          <span className="font-serif text-xl font-extrabold text-gold tracking-widest uppercase transition-colors group-hover:text-gold-light">
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
