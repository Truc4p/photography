
import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronLeft, MapPin, Calendar, Clock, CreditCard } from 'lucide-react';
import { PHOTOGRAPHERS } from '../data/mockData';

const Booking: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const photographer = PHOTOGRAPHERS.find(p => p.id === id);
  const pkgId = new URLSearchParams(location.search).get('package') || 'standard';

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '14:00',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send to API here
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-64 flex items-center justify-center px-6">
        <div className="max-w-xl w-full text-center bg-white p-12 rounded-[3rem] shadow-2xl animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Request Sent!</h2>
          <p className="text-gray-500 text-lg font-light mb-12">
            Your booking request has been sent to {photographer?.name}. They usually respond within 4 hours.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-gray-800 transition-all text-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-500 hover:text-black transition-colors mb-12 font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Go Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl font-bold mb-4">Booking Request</h1>
            <p className="text-gray-500 mb-12 font-light">Tell {photographer?.name} a bit about your vision for this session.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full border border-gray-200 bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black/5" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full border border-gray-200 bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black/5" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Date</label>
                  <input 
                    required
                    type="date" 
                    className="w-full border border-gray-200 bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black/5" 
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Preferred Time</label>
                  <input 
                    required
                    type="time" 
                    className="w-full border border-gray-200 bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black/5" 
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Preferred Location</label>
                <div className="relative">
                  <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Central Park, Brooklyn Bridge..."
                    className="w-full border border-gray-200 bg-white pl-12 pr-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5" 
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message (optional)</label>
                <textarea 
                  rows={4}
                  placeholder="Share any specific goals or questions you have..."
                  className="w-full border border-gray-200 bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black/5" 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-gray-800 transition-all text-lg shadow-xl"
              >
                Send Request
              </button>
            </form>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-8">Summary</h3>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm">
                  <img src={photographer?.avatar} className="w-full h-full object-cover" alt={photographer?.name} />
                </div>
                <div>
                  <div className="font-bold">{photographer?.name}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">{photographer?.city}</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Package</span>
                  <span className="font-bold uppercase tracking-wider">{pkgId} Session</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Service Fee</span>
                  <span className="font-bold">$0.00</span>
                </div>
                <hr className="border-gray-50" />
                <div className="flex justify-between items-center text-xl">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">$150.00</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                <div className="flex space-x-4">
                  <CreditCard className="w-6 h-6 text-gray-400" />
                  <div>
                    <div className="text-sm font-bold">Safe Payments</div>
                    <p className="text-xs text-gray-500 mt-1">Your payment is only processed after the photographer accepts your request.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
