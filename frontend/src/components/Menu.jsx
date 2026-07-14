import React, { useState } from 'react';
import { Utensils, ShoppingBag } from 'lucide-react';

const REAL_MENU_ITEMS = [
  {
    id: 'm1',
    name: 'Grilled Mediterranean Octopus',
    category: 'specials',
    price: 32,
    description: 'Tender octopus tentacles, seasoned herbs, olive oil lemon emulsion, served over grilled asparagus and baby potatoes.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    tags: ['Chef Recommendation', 'Gluten-Free']
  },
  {
    id: 'm2',
    name: 'Burger Le Boutique',
    category: 'classics',
    price: 18,
    description: 'Premium dry-aged beef patty, melted cheddar cheese, crispy bacon, caramelized onions, and house barbecue sauce, served in a brioche bun with hand-cut fries.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    tags: ['Best Seller']
  },
  {
    id: 'm3',
    name: 'Mușchi de Vită Premium (Filet Mignon)',
    category: 'specials',
    price: 38,
    description: 'Prime local tenderloin grilled to your liking, served with baby carrots, asparagus, and a choice of green peppercorn or black truffle sauce.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    tags: ['Premium Cut']
  },
  {
    id: 'm4',
    name: 'Signature Le Boutique Salad',
    category: 'salads',
    price: 16,
    description: 'Fresh baby spinach, grilled chicken breast, rich avocado, crispy bacon, roasted hazelnuts, and sweet dried figs, tossed in a balsamic glaze dressing.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    tags: ['Signature', 'Healthy Choice']
  },
  {
    id: 'm5',
    name: 'Mussels in White Wine Sauce',
    category: 'specials',
    price: 22,
    description: 'Fresh Black Sea mussels, steamed in garlic, butter, white wine, cherry tomatoes, and fresh parsley, served with garlic grilled sourdough.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
    tags: ['Seafood Special']
  },
  {
    id: 'm6',
    name: 'Pizza Prosciutto Crudo e Rucola',
    category: 'classics',
    price: 17,
    description: 'Stone-baked thin crust, tomato sauce, mozzarella, delicate slices of Prosciutto di Parma, fresh rucola, and shaved Parmigiano-Reggiano.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    tags: ['Wood-Fired']
  },
  {
    id: 'm7',
    name: 'Peruvian Ceviche',
    category: 'specials',
    price: 19,
    description: 'Fresh sea bass cubes cured in lime juice, red onions, hot peppers, fresh cilantro, served with sweet potato and Andean corn.',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=600&q=80',
    tags: ['Fresh Catch']
  },
  {
    id: 'm8',
    name: 'Trio of Spanish & Romanian Wines',
    category: 'wine-pairing',
    price: 26,
    description: 'A curated flight of three wines: a bold local Fetească Neagră, a crisp Spanish Verdejo, and a sweet local Cabernet Sauvignon.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
    tags: ['Wine Cellar Reserve']
  }
];

export default function Menu() {
  const [menuFilter, setMenuFilter] = useState('all');
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
  };

  const filteredMenuItems = menuFilter === 'all' 
    ? REAL_MENU_ITEMS 
    : REAL_MENU_ITEMS.filter(item => item.category === menuFilter);

  const cartTotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);

  return (
    <section id="restaurant" className="py-20 border-t border-white/5 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 border-b border-white/10 pb-8 gap-6">
        <div className="text-left space-y-2">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Gastronomic Experience</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">Food Concept Store</h2>
          <p className="text-slate-400 text-sm max-w-md">Mediterranean dishes prepared with premium imports and seasoned experience by our Executive Chef.</p>
        </div>
        
        {/* Menu Categories filter */}
        <div className="flex flex-wrap gap-2">
          {['all', 'specials', 'classics', 'salads', 'wine-pairing'].map(cat => (
            <button 
              key={cat} 
              onClick={() => setMenuFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${menuFilter === cat ? 'bg-gradient-to-r from-gold to-gold-dark text-navy-deep shadow-md' : 'bg-navy-dark text-slate-300 hover:text-white border border-white/5'}`}>
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenuItems.map(item => (
          <div key={item.id} className="bg-navy-dark/60 border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-gold/30 transition-all duration-300 group shadow-md text-left">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent z-10"></div>
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              <div className="absolute top-4 right-4 z-20 flex flex-wrap gap-1">
                {item.tags.map(t => (
                  <span key={t} className="bg-navy-deep/80 text-gold border border-gold/30 text-[9px] font-bold px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-base font-semibold text-white font-sans">{item.name}</h4>
                  <span className="text-gold font-bold text-lg">€{item.price}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </div>
              <button 
                onClick={() => handleAddToCart(item)}
                className="w-full inline-flex justify-center items-center gap-2 bg-transparent hover:bg-gold hover:text-navy-deep text-slate-200 border border-white/10 hover:border-gold py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer">
                <Utensils size={12} /> Add to Simulated Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Drawer Widget inside Menu */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 w-96 bg-navy-dark border border-gold rounded-2xl shadow-2xl p-6 z-50 flex flex-col max-h-[480px]">
          <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
            <h4 className="flex items-center gap-2 text-base font-serif text-white font-semibold">
              <ShoppingBag size={18} className="text-gold" /> Basket Simulator
            </h4>
            <span className="bg-gold text-navy-deep text-xs font-extrabold px-2.5 py-0.5 rounded-full">
              {cart.reduce((a,c) => a + c.qty, 0)} items
            </span>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-left text-xs mb-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <span className="text-gold font-semibold">{item.qty}x </span>
                  <span className="text-slate-200">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-300">€{item.price * item.qty}</span>
                  <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-400 hover:text-red-500 font-medium">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-white/10 pt-4 mb-4 text-sm font-semibold">
            <span>Est. Order Total</span>
            <span className="text-gold text-lg font-bold">€{cartTotal}</span>
          </div>

          <button 
            onClick={() => {
              alert(`Simulated order of €${cartTotal} dispatched to the SaaS kitchen monitor panel!`);
              setCart([]);
            }}
            className="w-full bg-gradient-to-r from-gold to-gold-dark text-navy-deep font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer text-center">
            Dispatch to Kitchen Screen
          </button>
        </div>
      )}
    </section>
  );
}
