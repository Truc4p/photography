
import React from 'react';
import { Camera, DollarSign, Zap, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

const Join: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in slide-in-from-left-8 duration-700">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1] mb-8">
              Grow your photography business.
            </h1>
            <p className="text-xl text-gray-500 font-light mb-12 leading-relaxed">
              Join the world's most premium marketplace for local photographers. Focus on your craft, we'll handle the bookings and billing.
            </p>
            <button className="bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all flex items-center space-x-3">
              <span>Apply to Join</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative animate-in zoom-in-95 duration-700">
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" 
              className="w-full rounded-[3rem] shadow-2xl"
              alt="Photographer working"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block border border-gray-100">
              <div className="text-3xl font-bold mb-1">$4,500+</div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Avg. Monthly Earnings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Creators</h2>
            <p className="text-gray-500 font-light text-lg">We provide everything you need to run a professional studio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Keep more of what you earn",
                desc: "Transparent 10% platform fee. No hidden costs. Fast payouts after every session."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Automated Workflow",
                desc: "Booking requests, calendar syncing, and automated reminders for your clients."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Visibility",
                desc: "Reach clients from around the world who are visiting your city and looking for photos."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Examples */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
            <div className="p-12 md:p-24 flex-1 text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">Turn your passion into profit.</h2>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Set your own rates and packages</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Control your availability 24/7</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Build a verified professional portfolio</span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white p-12 md:p-24 flex items-center justify-center">
              <div className="max-w-md w-full">
                <h3 className="text-2xl font-bold mb-8">Ready to get started?</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:outline-none" />
                  <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:outline-none" />
                  <input type="text" placeholder="Portfolio Website URL" className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:outline-none" />
                  <select className="w-full bg-gray-50 border-gray-100 border p-4 rounded-xl focus:outline-none">
                    <option>Select your city</option>
                    <option>New York</option>
                    <option>Paris</option>
                    <option>London</option>
                    <option>Tokyo</option>
                  </select>
                  <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all mt-4">
                    Send Application
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">By applying, you agree to our Community Terms.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
