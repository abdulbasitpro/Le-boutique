import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Compass, 
  TrendingUp, 
  Coffee, 
  Check, 
  X, 
  AlertCircle,
  CheckCircle2,
  PieChart,
  UserCheck
} from 'lucide-react';

const INITIAL_TABLES = [
  { id: 1, name: 'Table 1', seats: 2, status: 'occupied', client: 'Elena V.', area: 'Blue Wine Salon' },
  { id: 2, name: 'Table 2', seats: 4, status: 'free', client: '', area: 'Blue Wine Salon' },
  { id: 3, name: 'Table 3', seats: 2, status: 'reserved', client: 'Andrei P.', area: 'Blue Wine Salon' },
  { id: 4, name: 'Table 4', seats: 6, status: 'free', client: '', area: 'Blue Wine Salon' },
  { id: 5, name: 'Table 5', seats: 4, status: 'occupied', client: 'Mirela B.', area: 'Covered Terrace' },
  { id: 6, name: 'Table 6', seats: 2, status: 'cleaning', client: '', area: 'Covered Terrace' },
  { id: 7, name: 'Table 7', seats: 4, status: 'free', client: '', area: 'Covered Terrace' },
  { id: 8, name: 'Table 8', seats: 8, status: 'reserved', client: 'Group Booking', area: 'Covered Terrace' },
  { id: 9, name: 'Table 9', seats: 2, status: 'occupied', client: 'Dan S.', area: 'Wood Slice Alcove' },
  { id: 10, name: 'Table 10', seats: 4, status: 'free', client: '', area: 'Wood Slice Alcove' },
  { id: 11, name: 'Table 11', seats: 4, status: 'reserved', client: 'Mihai T.', area: 'Wood Slice Alcove' },
  { id: 12, name: 'Table 12', seats: 6, status: 'free', client: '', area: 'Wood Slice Alcove' },
];

export default function AdminDashboard({ bookings, onUpdateBookingStatus }) {
  const [tables, setTables] = useState(INITIAL_TABLES);
  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings', 'tables', 'analytics'

  const handleTableStatusChange = (tableId, nextStatus) => {
    setTables(prev => prev.map(t => {
      if (t.id === tableId) {
        return { 
          ...t, 
          status: nextStatus,
          client: nextStatus === 'free' || nextStatus === 'cleaning' ? '' : t.client 
        };
      }
      return t;
    }));
  };

  const approvedBookings = bookings.filter(b => b.status === 'approved');
  const pendingBookings = bookings.filter(b => b.status === 'pending');
  
  const estimatedRevenue = bookings.reduce((acc, curr) => {
    if (curr.status === 'cancelled') return acc;
    return acc + (curr.amount || (curr.type === 'table' ? 45 : 180));
  }, 0);

  return (
    <div className="bg-navy-deep min-h-screen text-slate-100 py-8 px-6 font-sans">
      
      {/* SaaS Developer Header using Tailwind v4 */}
      <div className="max-w-6xl mx-auto bg-navy-dark/75 border border-gold/20 rounded-2xl p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl backdrop-blur-md">
        <div className="text-left w-full md:w-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">SaaS Cloud Controller v4.3</span>
          </div>
          <h2 className="text-2xl font-serif text-white font-bold mt-1">Le Boutique Operator Console</h2>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {[
            { id: 'bookings', label: `Bookings Queue (${bookings.length})` },
            { id: 'tables', label: 'Restaurant Grid' },
            { id: 'analytics', label: 'SaaS Analytics' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === tab.id ? 'bg-gradient-to-r from-gold to-gold-dark text-navy-deep shadow-md' : 'bg-navy-deep hover:bg-navy-light text-slate-300 border border-white/5'}`}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Key SaaS KPI Metrics */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        
        {/* KPI 1 */}
        <div className="bg-navy-dark border border-white/5 rounded-xl p-6 text-left shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/2 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Daily Estimated Sales</span>
            <DollarSign size={16} className="text-gold" />
          </div>
          <h3 className="text-3xl font-bold text-white mt-3 font-sans">€{estimatedRevenue}</h3>
          <span className="text-[10px] text-emerald-400 font-semibold block mt-1">+12.4% vs last Tuesday</span>
        </div>

        {/* KPI 2 */}
        <div className="bg-navy-dark border border-white/5 rounded-xl p-6 text-left shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/2 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Approved Covers</span>
            <Users size={16} className="text-gold" />
          </div>
          <h3 className="text-3xl font-bold text-white mt-3 font-sans">{approvedBookings.length}</h3>
          <span className="text-[10px] text-slate-400 block mt-1">{pendingBookings.length} pending review</span>
        </div>

        {/* KPI 3 */}
        <div className="bg-navy-dark border border-white/5 rounded-xl p-6 text-left shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/2 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Lodging Occupancy</span>
            <Compass size={16} className="text-gold" />
          </div>
          <h3 className="text-3xl font-bold text-white mt-3 font-sans">66.7%</h3>
          <span className="text-[10px] text-emerald-400 font-semibold block mt-1">2 of 3 suites booked</span>
        </div>

        {/* KPI 4 */}
        <div className="bg-navy-dark border border-white/5 rounded-xl p-6 text-left shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/2 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Live Seating status</span>
            <Coffee size={16} className="text-gold" />
          </div>
          <h3 className="text-3xl font-bold text-white mt-3 font-sans">
            {tables.filter(t => t.status === 'occupied').length} / {tables.length}
          </h3>
          <span className="text-[10px] text-gold font-semibold block mt-1">3 tables reserved</span>
        </div>

      </div>

      {/* Main SaaS panel viewports */}
      <div className="max-w-6xl mx-auto">
        
        {/* Bookings Queue */}
        {activeTab === 'bookings' && (
          <div className="bg-navy-dark border border-white/5 rounded-2xl p-6 text-left shadow-xl">
            <h3 className="text-lg font-serif text-white font-semibold mb-6 border-b border-white/10 pb-4">
              Booking Request Queue
            </h3>
            
            {bookings.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <AlertCircle className="text-gold mx-auto" size={40} />
                <p className="text-slate-400 text-sm">No incoming booking requests found. Create a reservation on the Customer Portal!</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400">
                      <th className="py-3 px-2">Type</th>
                      <th className="py-3 px-2">Guest Details</th>
                      <th className="py-3 px-2">Reservation specs</th>
                      <th className="py-3 px-2">Schedule</th>
                      <th className="py-3 px-2">Simulated Price</th>
                      <th className="py-3 px-2">Status</th>
                      <th className="py-3 px-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map(booking => (
                      <tr key={booking.id} className="border-b border-white/5 hover:bg-white/1 transition-all">
                        <td className="py-4 px-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${booking.type === 'table' ? 'bg-gold/10 text-gold border-gold/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                            {booking.type}
                          </span>
                        </td>
                        <td className="py-4 px-2">
                          <div className="font-semibold text-white">{booking.customerName}</div>
                          <div className="text-[10px] text-slate-500">{booking.customerEmail}</div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="text-slate-300">{booking.details}</div>
                          {booking.specialRequest && (
                            <div className="text-[10px] text-gold italic mt-0.5">&ldquo;{booking.specialRequest}&rdquo;</div>
                          )}
                        </td>
                        <td className="py-4 px-2">
                          <div>{booking.date}</div>
                          <div className="text-[10px] text-slate-500">Sent {booking.createdAt}</div>
                        </td>
                        <td className="py-4 px-2 font-bold text-gold">
                          {booking.amount > 0 ? `€${booking.amount}` : '— (Menu Spend)'}
                        </td>
                        <td className="py-4 px-2 capitalize">
                          <span className={`text-xs font-bold ${booking.status === 'approved' ? 'text-emerald-400' : booking.status === 'cancelled' ? 'text-rose-400' : 'text-amber-400'}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-4 px-2 text-right">
                          {booking.status === 'pending' ? (
                            <div className="flex gap-2 justify-end">
                              <button 
                                onClick={() => onUpdateBookingStatus(booking.id, 'approved')}
                                className="bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-navy-deep border border-emerald-500/20 px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1">
                                <Check size={12} /> Confirm
                              </button>
                              <button 
                                onClick={() => onUpdateBookingStatus(booking.id, 'cancelled')}
                                className="bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/20 px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1">
                                <X size={12} /> Decline
                              </button>
                            </div>
                          ) : (
                            <span className={`text-xs font-semibold inline-flex items-center gap-1 ${booking.status === 'approved' ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {booking.status === 'approved' ? <CheckCircle2 size={12} /> : <X size={12} />} {booking.status === 'approved' ? 'Active' : 'Closed'}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Live Restaurant Grid */}
        {activeTab === 'tables' && (
          <div className="bg-navy-dark border border-white/5 rounded-2xl p-6 text-left shadow-xl">
            <h3 className="text-lg font-serif text-white font-semibold mb-1">Live Table Manager</h3>
            <p className="text-slate-400 text-xs mb-8">Operator layout of Le Boutique dining rooms: Blue Wine Salon, Covered Terrace, and Wood Slice Room.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Table Map */}
              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tables.map(table => {
                  let statusBg = 'bg-navy-deep border-white/10 text-slate-300';
                  
                  if (table.status === 'occupied') {
                    statusBg = 'bg-rose-500/10 border-rose-500/30 text-rose-400';
                  } else if (table.status === 'reserved') {
                    statusBg = 'bg-gold/10 border-gold/30 text-gold';
                  } else if (table.status === 'cleaning') {
                    statusBg = 'bg-blue-500/10 border-blue-500/30 text-blue-400';
                  } else if (table.status === 'free') {
                    statusBg = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
                  }

                  return (
                    <div key={table.id} className={`border rounded-xl p-5 flex flex-col items-center justify-center relative shadow-sm transition-all duration-300 ${statusBg}`}>
                      <span className="text-base font-bold text-white">{table.name}</span>
                      <span className="text-[10px] text-slate-400 mt-0.5">{table.seats} seats &bull; {table.area}</span>
                      
                      <div className="mt-4 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-black/30">
                        {table.status}
                      </div>

                      {table.client && (
                        <div className="text-[10px] text-white font-medium mt-2 max-w-full truncate">
                          {table.client}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quick Controller */}
              <div className="bg-navy-deep border border-white/5 rounded-xl p-5 shadow-inner">
                <h4 className="text-sm font-serif text-gold font-bold mb-4">Table Status Adjuster</h4>
                
                <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                  {tables.map(table => (
                    <div key={table.id} className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-300">{table.name} ({table.seats} Pax)</span>
                      <select 
                        value={table.status}
                        onChange={(e) => handleTableStatusChange(table.id, e.target.value)}
                        className="bg-navy-dark border border-white/10 rounded px-2.5 py-1 text-white text-xs outline-none focus:border-gold">
                        <option value="free">Free</option>
                        <option value="occupied">Occupied</option>
                        <option value="reserved">Reserved</option>
                        <option value="cleaning">Cleaning</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SaaS Analytics */}
        {activeTab === 'analytics' && (
          <div className="bg-navy-dark border border-white/5 rounded-2xl p-6 text-left shadow-xl">
            <h3 className="text-lg font-serif text-white font-semibold mb-1">Menu & Seating Metrics</h3>
            <p className="text-slate-400 text-xs mb-8">Performance metrics charting table reservation volumes and accommodation sales splits.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Graphic Chart */}
              <div className="bg-navy-deep border border-white/5 rounded-xl p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-6 flex items-center gap-2">
                  <TrendingUp size={14} /> Weekly Occupancy Load
                </h4>
                
                <div className="relative h-44 mt-4">
                  <svg viewBox="0 0 500 180" className="w-full h-full">
                    <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.03)" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.03)" />
                    <line x1="0" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.03)" />
                    
                    <path 
                      d="M 20 140 Q 100 115, 180 55 T 340 100 T 480 25" 
                      fill="none" 
                      stroke="var(--color-gold)" 
                      strokeWidth="3.5" 
                    />
                    
                    <circle cx="20" cy="140" r="4.5" fill="#fff" stroke="var(--color-gold)" strokeWidth="2.5" />
                    <circle cx="180" cy="55" r="4.5" fill="#fff" stroke="var(--color-gold)" strokeWidth="2.5" />
                    <circle cx="340" cy="100" r="4.5" fill="#fff" stroke="var(--color-gold)" strokeWidth="2.5" />
                    <circle cx="480" cy="25" r="4.5" fill="#fff" stroke="var(--color-gold)" strokeWidth="2.5" />
                  </svg>
                  
                  <div className="flex justify-between mt-2 text-slate-400 text-[10px]">
                    <span>Monday</span>
                    <span>Wednesday</span>
                    <span>Friday</span>
                    <span>Sunday (Peak)</span>
                  </div>
                </div>
              </div>

              {/* Revenue Splits */}
              <div className="bg-navy-deep border border-white/5 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-6 flex items-center gap-2">
                    <PieChart size={14} /> Revenue Distribution
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-300">Boutique Suites accommodation</span>
                        <span className="font-bold text-white">€{bookings.filter(b => b.type === 'hotel' && b.status !== 'cancelled').reduce((a,c) => a + c.amount, 0)}</span>
                      </div>
                      <div className="bg-navy-dark h-2.5 rounded-full overflow-hidden">
                        <div className="bg-blue-400 h-full rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-300">Mediterranean Dining (Covers)</span>
                        <span className="font-bold text-white">€{bookings.filter(b => b.type === 'table' && b.status !== 'cancelled').length * 45}</span>
                      </div>
                      <div className="bg-navy-dark h-2.5 rounded-full overflow-hidden">
                        <div className="bg-gold h-full rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-navy-dark/60 border border-gold/10 rounded-lg p-3.5 flex gap-3 items-center mt-6">
                  <UserCheck size={16} className="text-gold shrink-0" />
                  <span className="text-[10px] text-slate-400 leading-relaxed text-left">
                    High visitor conversion rate on weekends. Suite booking is recommended to list in premium packages.
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
