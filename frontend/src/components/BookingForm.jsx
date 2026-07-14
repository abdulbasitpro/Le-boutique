import React, { useState, useEffect } from 'react';
import { CheckCircle2, Calendar, Users, Clock, Info } from 'lucide-react';

const BOUTIQUE_SUITES = [
  { name: 'The Heritage Dome Suite', price: 220 },
  { name: 'Deep Blue Wine Suite', price: 195 },
  { name: 'The Covered Terrace Loft', price: 180 }
];

export default function BookingForm({ onNewBooking, initialSuiteName }) {
  const [bookingType, setBookingType] = useState('table');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '19:30',
    guests: '2',
    seatingArea: 'indoor',
    roomType: '',
    specialRequest: ''
  });

  useEffect(() => {
    if (initialSuiteName) {
      setBookingType('hotel');
      setFormData(prev => ({ ...prev, roomType: initialSuiteName }));
    }
  }, [initialSuiteName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) {
      alert("Please fill in your name, email, and preferred date.");
      return;
    }

    const price = bookingType === 'table' ? 0 : (BOUTIQUE_SUITES.find(s => s.name === formData.roomType)?.price || 180) * 2;

    const newBookingObj = {
      id: 'b-' + Math.random().toString(36).substr(2, 9),
      type: bookingType,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      date: formData.date,
      details: bookingType === 'table' 
        ? `${formData.guests} Guests, ${formData.timeSlot} (${formData.seatingArea.toUpperCase()})` 
        : `Room: ${formData.roomType || 'Boutique Suite'} for ${formData.guests} Guests`,
      status: 'pending',
      amount: price,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      specialRequest: formData.specialRequest
    };

    onNewBooking(newBookingObj);
    setBookingSuccess(true);
    
    setTimeout(() => {
      setBookingSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        timeSlot: '19:30',
        guests: '2',
        seatingArea: 'indoor',
        roomType: '',
        specialRequest: ''
      });
    }, 4000);
  };

  return (
    <section id="booking" className="py-20 border-t border-white/5 px-6 bg-navy-dark/20 wood-slice-bg">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Reservation Information Side panel */}
        <div className="md:col-span-5 text-left space-y-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Reservations</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight">Secure Your Dining or Room Stay</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Reservations are highly recommended. For groups larger than 8 or special corporate events, please contact us directly at our front desk.
          </p>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <div className="flex gap-3 text-left">
              <div className="bg-gold/10 p-2.5 rounded-lg border border-gold/20 h-10 w-10 flex items-center justify-center shrink-0">
                <Clock className="text-gold" size={18} />
              </div>
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">Restaurant Hours</h4>
                <p className="text-slate-400 text-xs mt-1">Monday - Sunday: 11:00 AM - Midnight</p>
              </div>
            </div>

            <div className="flex gap-3 text-left">
              <div className="bg-gold/10 p-2.5 rounded-lg border border-gold/20 h-10 w-10 flex items-center justify-center shrink-0">
                <Info className="text-gold" size={18} />
              </div>
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">Reservation Notice</h4>
                <p className="text-slate-400 text-xs mt-1">Table bookings are held for 15 minutes. Suites require check-in details.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Booking Card Form */}
        <div className="md:col-span-7 bg-navy-dark border border-gold/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl"></div>
          
          {/* Reservation Selector Switcher */}
          <div className="flex bg-navy-deep/80 rounded-lg p-1 border border-white/5 mb-6">
            <button 
              type="button"
              onClick={() => setBookingType('table')} 
              className={`flex-1 py-2 text-center text-xs font-bold rounded-md transition-all cursor-pointer ${bookingType === 'table' ? 'bg-gradient-to-r from-gold to-gold-dark text-navy-deep' : 'text-slate-400 hover:text-white'}`}>
              Dining Salon Book
            </button>
            <button 
              type="button"
              onClick={() => setBookingType('hotel')} 
              className={`flex-1 py-2 text-center text-xs font-bold rounded-md transition-all cursor-pointer ${bookingType === 'hotel' ? 'bg-gradient-to-r from-gold to-gold-dark text-navy-deep' : 'text-slate-400 hover:text-white'}`}>
              Boutique Suite Book
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Your Full Name</label>
              <input type="text" name="name" required className="w-full bg-navy-deep/50 border border-white/10 focus:border-gold rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all" value={formData.name} onChange={handleInputChange} placeholder="Alexandru Popescu" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Email Address</label>
                <input type="email" name="email" required className="w-full bg-navy-deep/50 border border-white/10 focus:border-gold rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all" value={formData.email} onChange={handleInputChange} placeholder="alexandru@gmail.com" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Phone Number</label>
                <input type="tel" name="phone" required className="w-full bg-navy-deep/50 border border-white/10 focus:border-gold rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all" value={formData.phone} onChange={handleInputChange} placeholder="+40 7..." />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Date</label>
                <input type="date" name="date" required className="w-full bg-navy-deep/50 border border-white/10 focus:border-gold rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all" value={formData.date} onChange={handleInputChange} />
              </div>
              {bookingType === 'table' ? (
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Dining Hours</label>
                  <select name="timeSlot" className="w-full bg-navy-deep/50 border border-white/10 focus:border-gold rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all" value={formData.timeSlot} onChange={handleInputChange}>
                    <option value="12:30">12:30 (Lunch)</option>
                    <option value="13:30">13:30 (Lunch)</option>
                    <option value="18:30">18:30 (Dinner)</option>
                    <option value="19:30">19:30 (Dinner)</option>
                    <option value="20:30">20:30 (Dinner)</option>
                    <option value="21:30">21:30 (Late Night)</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Suite Choice</label>
                  <select name="roomType" required className="w-full bg-navy-deep/50 border border-white/10 focus:border-gold rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all" value={formData.roomType} onChange={handleInputChange}>
                    <option value="">Select Suite Room...</option>
                    {BOUTIQUE_SUITES.map(s => <option key={s.name} value={s.name}>{s.name} (€{s.price})</option>)}
                  </select>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Guests count</label>
                <select name="guests" className="w-full bg-navy-deep/50 border border-white/10 focus:border-gold rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all" value={formData.guests} onChange={handleInputChange}>
                  <option value="1">1 Pax</option>
                  <option value="2">2 Pax</option>
                  <option value="4">4 Pax</option>
                  <option value="6">6 Pax</option>
                  <option value="8+">8+ Group</option>
                </select>
              </div>
              {bookingType === 'table' ? (
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Salon Area Preference</label>
                  <select name="seatingArea" className="w-full bg-navy-deep/50 border border-white/10 focus:border-gold rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all" value={formData.seatingArea} onChange={handleInputChange}>
                    <option value="indoor">Blue Wine Salon</option>
                    <option value="terrace">Covered Terrace</option>
                    <option value="cellar">Wood Slice Alcove</option>
                  </select>
                </div>
              ) : (
                <div className="flex flex-col justify-end">
                  <span className="text-[10.5px] text-slate-400">Total duration matches 2 nights minimum stay.</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Special Requests or Instructions</label>
              <textarea name="specialRequest" rows="2" className="w-full bg-navy-deep/50 border border-white/10 focus:border-gold rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-all resize-none" placeholder="Allergies, table preferences, arrival schedules..." value={formData.specialRequest} onChange={handleInputChange}></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-gold via-gold-dark to-gold text-navy-deep hover:from-gold-light hover:to-gold font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer">
              Book Appointment Slot
            </button>
          </form>

          {bookingSuccess && (
            <div className="absolute inset-0 bg-navy-dark/95 flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20">
              <CheckCircle2 className="text-gold mb-4 animate-bounce" size={54} />
              <h4 className="text-xl font-serif text-white font-bold mb-2">Reservation Submitted!</h4>
              <p className="text-slate-300 text-sm max-w-xs leading-relaxed">
                Your request is pending in our backend. You can instantly manage and confirm this inside the **Operator SaaS Console** in the top navigation!
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
