import React from 'react';

export default function Spaces() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center space-y-2 mb-16">
        <span className="text-gold text-xs font-semibold uppercase tracking-widest">Architectural Tour</span>
        <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">The Spaces of Le Boutique</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">A visual glimpse into our historic Bucharest villa, Mediterranean dining rooms, and garden terrace.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Photo 1: Deep Blue Wine Salon */}
        <div className="md:col-span-8 bg-navy-dark border border-white/5 rounded-2xl overflow-hidden group shadow-lg">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" alt="Deep Blue Dining Room" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            <div className="absolute bottom-6 left-6 z-20 text-left">
              <span className="bg-gold text-navy-deep px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider mb-2 inline-block">Indoor Salon</span>
              <h4 className="text-lg font-serif text-white font-semibold">Deep Blue Wine Displays</h4>
              <p className="text-slate-300 text-xs mt-1">Velvet plush gray benches, matching armchairs, and glowing gold wine display columns.</p>
            </div>
          </div>
        </div>

        {/* Photo 2: Historic Dome Exterior */}
        <div className="md:col-span-4 bg-navy-dark border border-white/5 rounded-2xl overflow-hidden group shadow-lg">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80" alt="Historic Villa Building" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            <div className="absolute bottom-6 left-6 z-20 text-left">
              <span className="bg-gold text-navy-deep px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider mb-2 inline-block">Architecture</span>
              <h4 className="text-lg font-serif text-white font-semibold">The Landmark Villa</h4>
              <p className="text-slate-300 text-xs mt-1">Historic dome roof and classic white awnings on Strada Sfântul Ștefan.</p>
            </div>
          </div>
        </div>

        {/* Photo 3: Covered Wood Terrace */}
        <div className="md:col-span-4 bg-navy-dark border border-white/5 rounded-2xl overflow-hidden group shadow-lg">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80" alt="Garden Terrace" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            <div className="absolute bottom-6 left-6 z-20 text-left">
              <span className="bg-gold text-navy-deep px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider mb-2 inline-block">Outdoor</span>
              <h4 className="text-lg font-serif text-white font-semibold">Covered Timber Pavilion</h4>
              <p className="text-slate-300 text-xs mt-1">Hanging wicker lanterns, wood beams, turquoise chairs, and oak aging barrels.</p>
            </div>
          </div>
        </div>

        {/* Photo 4: Log Slice Wall */}
        <div className="md:col-span-8 bg-navy-dark border border-white/5 rounded-2xl overflow-hidden group shadow-lg">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80" alt="Wood slice logo wall" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            <div className="absolute bottom-6 left-6 z-20 text-left">
              <span className="bg-gold text-navy-deep px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider mb-2 inline-block">Signature Spot</span>
              <h4 className="text-lg font-serif text-white font-semibold">The Log Slice Accent Room</h4>
              <p className="text-slate-300 text-xs mt-1">A massive textured wall of round timber cuts featuring the gold Le Boutique crest.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
