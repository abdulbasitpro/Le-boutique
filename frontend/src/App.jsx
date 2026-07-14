import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomerPortal from './components/CustomerPortal';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import './App.css';

const INITIAL_BOOKINGS = [
  {
    id: 'b-1',
    type: 'table',
    customerName: 'Elena Vasilescu',
    customerEmail: 'elena.v@gmail.com',
    customerPhone: '+40 722 839 123',
    date: '2026-07-15',
    details: '2 Guests, 19:30 (Blue Wine Salon)',
    status: 'approved',
    amount: 0,
    createdAt: '10:45 AM',
    specialRequest: 'Anniversary celebration - prefers a quiet table near wine displays.'
  },
  {
    id: 'b-2',
    type: 'hotel',
    customerName: 'Radu Marinescu',
    customerEmail: 'radu.m@yahoo.com',
    customerPhone: '+40 735 992 001',
    date: '2026-07-16',
    details: 'Room: The Heritage Dome Suite for 2 Guests',
    status: 'pending',
    amount: 440,
    createdAt: '11:12 AM',
    specialRequest: 'Will require late check-in around 11:00 PM.'
  },
  {
    id: 'b-3',
    type: 'table',
    customerName: 'Andrei Popa',
    customerEmail: 'andrei.p@outlook.com',
    customerPhone: '+40 729 444 888',
    date: '2026-07-15',
    details: '4 Guests, 20:30 (Wood Slice Alcove)',
    status: 'pending',
    amount: 0,
    createdAt: '12:05 PM',
    specialRequest: 'Vegetarian options in the menu please.'
  }
];

function App() {
  const [viewMode, setViewMode] = useState('customer');
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);

  const handleNewBooking = (newBooking) => {
    setBookings(prev => [newBooking, ...prev]);
  };

  const handleUpdateBookingStatus = (id, newStatus) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  return (
    <div className="bg-navy-deep text-slate-100 min-h-screen flex flex-col font-sans">
      
      {/* Dev Mode Toolbar / Sticky Header */}
      <Navbar viewMode={viewMode} setViewMode={setViewMode} />

      {/* Main View Area */}
      <main className="flex-grow">
        {viewMode === 'customer' ? (
          <CustomerPortal onNewBooking={handleNewBooking} />
        ) : (
          <AdminDashboard bookings={bookings} onUpdateBookingStatus={handleUpdateBookingStatus} />
        )}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
