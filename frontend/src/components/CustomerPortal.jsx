import React, { useState } from 'react';
import Hero from './Hero';
import Spaces from './Spaces';
import Menu from './Menu';
import Suites from './Suites';
import BookingForm from './BookingForm';

export default function CustomerPortal({ onNewBooking }) {
  const [selectedSuiteName, setSelectedSuiteName] = useState('');

  const handleSelectSuite = (suiteName) => {
    setSelectedSuiteName(suiteName);
    // Smooth scroll to booking
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-navy-deep text-slate-100 min-h-screen font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Atmospheric Photos Section */}
      <Spaces />

      {/* Food Concept Store Menu Section */}
      <Menu />

      {/* Suites / Lodging Section */}
      <Suites onSelectSuite={handleSelectSuite} />

      {/* Booking Form Section */}
      <BookingForm onNewBooking={onNewBooking} initialSuiteName={selectedSuiteName} />
    </div>
  );
}
