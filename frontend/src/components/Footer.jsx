import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10 text-slate-400 text-xs py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Column 1: Brand Info & Contact */}
        <div className="md:col-span-4 space-y-4 text-left">
          <span className="font-serif text-lg font-bold text-gold tracking-widest block">LE BOUTIQUE</span>
          <p className="text-slate-300 leading-relaxed max-w-sm">
            Bucharest's landmark boutique hotel & Mediterranean concept dining. A premium experience where historical heritage meets culinary art.
          </p>
          <div className="space-y-2 pt-2 text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gold shrink-0" />
              <span>Strada Sfântul Ștefan 13, Bucharest, Romania</span>
            </div>
            
            <div className="flex items-center">
              <a href="tel:+40314380044" className="flex items-center gap-1.5 hover:text-gold transition-colors font-mono font-bold text-white">
                <Phone size={14} className="text-gold" /> +40 314 380 044
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Dining Links */}
        <div className="md:col-span-2 text-left space-y-4">
          <span className="text-white font-bold uppercase tracking-wider text-[11px] block">Dining Salon</span>
          <ul className="space-y-2">
            <li><a href="#restaurant" className="hover:text-gold transition-colors">Food Concept Store</a></li>
            <li><a href="#restaurant" className="hover:text-gold transition-colors">Mediterranean Menu</a></li>
            <li><a href="#restaurant" className="hover:text-gold transition-colors">Wine Cellar list</a></li>
            <li><a href="#booking" className="hover:text-gold transition-colors">Book a Table</a></li>
          </ul>
        </div>

        {/* Column 3: Lodging Links */}
        <div className="md:col-span-2 text-left space-y-4">
          <span className="text-white font-bold uppercase tracking-wider text-[11px] block">Hotel Suites</span>
          <ul className="space-y-2">
            <li><a href="#lodging" className="hover:text-gold transition-colors">Dome Heritage Suite</a></li>
            <li><a href="#lodging" className="hover:text-gold transition-colors">Blue Wine Suite</a></li>
            <li><a href="#lodging" className="hover:text-gold transition-colors">Covered Terrace Loft</a></li>
            <li><a href="#booking" className="hover:text-gold transition-colors">Reserve Accommodation</a></li>
          </ul>
        </div>

        {/* Column 4: Operator SaaS Sandbox */}
        <div className="md:col-span-4 text-left space-y-4">
          <span className="text-white font-bold uppercase tracking-wider text-[11px] block">SaaS Operations</span>
          <p className="text-slate-400 leading-normal mb-2">
            Manage seating configurations, confirm reservations, and analyze covers from our SaaS controller.
          </p>
          <div className="bg-navy-deep/80 border border-white/5 rounded-lg p-3 space-y-2">
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-emerald-400 font-bold uppercase tracking-widest">&bull; Live Server</span>
              <span className="text-slate-500">v4.3 Stable</span>
            </div>
            <p className="text-[11px] text-slate-300">
              Interactive table grids and guest reservations sync live.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <div className="text-[11px] text-slate-500 text-center md:text-left order-2 md:order-1">
          &copy; 2026 Le Boutique Food Concept Store. All rights simulated for SaaS demonstration.
        </div>

        {/* Social Icons including WhatsApp */}
        <div className="flex gap-5 order-1 md:order-2 items-center">
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold transition-colors" title="Facebook">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          
          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold transition-colors" title="Instagram">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/40314380044" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors" title="WhatsApp Chat">
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.07 1.006 11.993 1.006c-5.462 0-9.91 4.444-9.913 9.878-.002 1.717.447 3.391 1.303 4.87L2.33 21.846l6.317-1.692zM17.36 14.54c-.3-.15-1.782-.88-2.062-.982-.28-.102-.485-.153-.69.152-.203.305-.79.983-.97 1.186-.18.203-.359.229-.66.079-.3-.15-1.264-.467-2.41-1.485-.892-.795-1.493-1.777-1.669-2.081-.176-.305-.019-.47.132-.62.135-.135.305-.356.457-.534.153-.178.203-.305.305-.509.102-.203.05-.382-.025-.534-.076-.153-.69-1.662-.947-2.279-.25-.603-.526-.522-.723-.532-.185-.01-.397-.012-.61-.012-.213 0-.559.08-.85.407-.292.327-1.116 1.093-1.116 2.665 0 1.571 1.144 3.09 1.303 3.305.16.213 2.25 3.437 5.452 4.822.761.329 1.356.525 1.82.673.765.243 1.462.209 2.013.127.614-.092 1.782-.729 2.03-1.432.249-.703.249-1.306.175-1.433-.075-.127-.275-.203-.575-.353z" />
            </svg>
          </a>

          {/* TripAdvisor */}
          <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold transition-colors" title="TripAdvisor">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 17.93c-3.953-.52-7-3.908-7-7.93 0-.7.09-1.38.26-2.03L8 14v2c0 1.1.9 2 2 2v1.93zm7.07-3.56c-.18-.57-.71-.97-1.32-.97h-2.75v-3c0-.55-.45-1-1-1h-2v-2h3c.55 0 1-.45 1-1V6h1.25c.61 0 1.14-.4 1.32-.97.02-.07.03-.15.03-.23 0-.02-.01-.03-.01-.05C18.6 6.1 19.9 8.9 19.9 12c0 1.63-.49 3.14-1.32 4.41-.01-.01-.02-.02-.03-.03-.17-.18-.36-.34-.48-.41z" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
