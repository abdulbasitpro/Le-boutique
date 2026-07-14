import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-cover bg-center border-b border-white/10 px-6 py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 16, 38, 0.8), rgba(0, 16, 38, 0.95)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')`
      }}>
      <div className="max-w-4xl text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mx-auto">
          <Sparkles size={14} /> Strada Sfântul Ștefan 13, Bucharest
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
          Where Culinary Art <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">
            Meets Boutique Luxury
          </span>
        </h1>
        
        <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
          Set inside a landmark dome-topped historic building, Le Boutique brings you cozy deep blue dining salons, rustic wood log accents, and design-led boutique lodgings.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a href="#booking" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-navy-deep hover:from-gold-light hover:to-gold font-bold px-6 py-3 rounded-lg uppercase text-xs tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-gold/20">
            Book Experience <ArrowRight size={16} />
          </a>
          <a href="#lodging" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-white hover:text-gold border border-white/10 hover:border-gold px-6 py-3 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300">
            Explore Suites
          </a>
        </div>
      </div>
    </section>
  );
}
