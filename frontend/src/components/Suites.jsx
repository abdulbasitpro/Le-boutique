import React from 'react';

const BOUTIQUE_SUITES = [
  {
    id: 's1',
    name: 'The Heritage Dome Suite',
    description: 'Located in the historic dome peak of our 3-story cream building, featuring classic rounded windows, vintage moldings, and a sweeping view of Bucharest.',
    price: 220,
    size: '58 m²',
    amenities: ['King Bed', 'Dome View Alcove', 'Espresso Station', 'Luxury Rain Shower', 'Complimentary Wine Flight'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    name: 'Deep Blue Wine Suite',
    description: 'Styled like our signature indoor blue salon. Features rich dark velvet furniture, dim gold ambient accent lighting, and a personal temperature-controlled wine cabinet.',
    price: 195,
    size: '48 m²',
    amenities: ['King Bed', 'In-room Wine Cabinet', 'Velvet Armchairs', 'Smart TV & Soundbar', 'High-speed Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's3',
    name: 'The Covered Terrace Loft',
    description: 'Direct terrace views, wood beam ceilings, hanging wicker lanterns, and an open layout that feels exactly like our outdoor garden pavilion.',
    price: 180,
    size: '45 m²',
    amenities: ['Queen Bed', 'Direct Terrace View', 'Soaking Tub', 'Breakfast Included', 'Dedicated Workspace'],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Suites({ onSelectSuite }) {
  return (
    <section id="lodging" className="py-20 border-t border-white/5 px-6 max-w-6xl mx-auto">
      <div className="text-left space-y-2 mb-12 border-b border-white/10 pb-8">
        <span className="text-gold text-xs font-semibold uppercase tracking-widest">Boutique Luxury</span>
        <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">Design-Led Stays</h2>
        <p className="text-slate-400 text-sm max-w-xl">Architect-designed spaces mirroring the distinct dining salons of Le Boutique.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {BOUTIQUE_SUITES.map(suite => (
          <div key={suite.id} className="bg-navy-dark/40 border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-gold/20 transition-all duration-300 text-left shadow-lg">
            <div className="h-56 overflow-hidden">
              <img src={suite.image} alt={suite.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-serif font-bold text-white">{suite.name}</h3>
                  <span className="text-gold text-xs font-semibold">{suite.size}</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{suite.description}</p>
                
                <div>
                  <h5 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Suite Exclusives</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {suite.amenities.map(amenity => (
                      <div key={amenity} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <div className="w-1 h-1 rounded-full bg-gold"></div>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-6 mt-6 border-t border-white/5">
                <div>
                  <span className="text-[10px] text-slate-500 block">Night Rate</span>
                  <span className="text-2xl text-white font-bold">€{suite.price}</span>
                </div>
                <a href="#booking" className="bg-gradient-to-r from-gold to-gold-dark text-navy-deep px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105" 
                  onClick={() => onSelectSuite(suite.name)}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
