
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, Share2, Heart, Calendar, Clock, Image as ImageIcon } from 'lucide-react';
import { PHOTOGRAPHERS } from '../data/mockData';
import { Package } from '../types';

const PACKAGES: Package[] = [
  {
    id: 'mini',
    title: 'The Portrait',
    duration: '1 Hour',
    photoCount: '15 High-Res',
    price: 350,
    features: ['Curated location', 'Signature retouching', 'Private digital vault', '48hr preview']
  },
  {
    id: 'standard',
    title: 'The Editorial',
    duration: '3 Hours',
    photoCount: '40 High-Res',
    price: 850,
    features: ['Multi-location narrative', 'Creative direction', 'Styling consultation', 'Printed keepsake box']
  },
  {
    id: 'premium',
    title: 'The Masterpiece',
    duration: 'Full Day',
    photoCount: '100+ Images',
    price: 2500,
    features: ['Cinematic storytelling', 'Behind-the-scenes film', 'Fine art album', 'Worldwide travel included']
  }
];

const Profile: React.FC = () => {
  const { id } = useParams();
  const photographer = PHOTOGRAPHERS.find(p => p.id === id);
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[1]);

  if (!photographer) {
    return (
      <div className="pt-40 pb-64 text-center">
        <h2 className="text-4xl serif italic">Artisan not found</h2>
        <Link to="/search" className="mt-8 inline-block text-[10px] uppercase tracking-[0.3em] border-b border-black pb-1">Return to Collective</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6]">
      {/* Editorial Header */}
      <section className="relative h-[85vh] overflow-hidden flex items-end">
        <img src={photographer.coverImage} className="absolute inset-0 w-full h-full object-cover" alt="Cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 pb-20 text-white flex flex-col md:flex-row justify-between items-end gap-12">
           <div className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.5em] opacity-70">Artist Portfolio</span>
              <h1 className="text-7xl md:text-[9rem] serif italic leading-[0.8] tracking-tighter">
                {photographer.name.split(' ')[0]} <br/> {photographer.name.split(' ')[1]}
              </h1>
              <div className="flex space-x-8 text-[10px] uppercase tracking-[0.3em] font-bold">
                 <span>{photographer.city} &mdash; {photographer.rating}/5.0</span>
                 <span className="opacity-50">Verified Creator</span>
              </div>
           </div>
           
           <div className="flex gap-4">
              <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md hover:bg-white hover:text-black transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md hover:bg-white hover:text-black transition-all">
                <Heart className="w-5 h-5" />
              </button>
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Narrative & Portfolio */}
          <div className="lg:col-span-7 space-y-40">
            {/* Biography Spread */}
            <section className="space-y-12">
              <h2 className="text-5xl serif italic">The Vision</h2>
              <div className="w-12 h-[1px] bg-black/20" />
              <p className="text-2xl text-gray-500 font-light leading-relaxed serif italic">
                "{photographer.bio}"
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {photographer.categories.map((cat, idx) => (
                  <span key={idx} className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 border border-black/5 px-4 py-2 rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
            </section>

            {/* Editorial Gallery - Nicole Ashley Style */}
            <section className="space-y-16">
              <div className="flex justify-between items-end">
                <h2 className="text-5xl serif">The Work</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {photographer.portfolio.map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`group overflow-hidden relative shadow-sm ${
                      idx % 3 === 0 ? 'md:col-span-2' : ''
                    }`}
                  >
                    <img 
                      src={img} 
                      className="w-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                      alt={`Spread ${idx}`} 
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking & Collections Spread */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-12">
              <div className="bg-white p-12 shadow-2xl space-y-12">
                <div className="space-y-4">
                   <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold block">Reserve Session</span>
                   <h3 className="text-4xl serif italic">Inquire Availability</h3>
                </div>

                <div className="space-y-8">
                  {PACKAGES.map((pkg) => (
                    <div 
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`group cursor-pointer border-b border-black/5 pb-8 transition-all ${
                        selectedPackage.id === pkg.id ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl serif italic font-bold tracking-wide">{pkg.title}</h4>
                        <span className="text-xl font-light serif italic">${pkg.price}</span>
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6">{pkg.duration} &mdash; {pkg.photoCount}</p>
                      
                      <div className={`space-y-3 transition-all duration-500 overflow-hidden ${selectedPackage.id === pkg.id ? 'max-h-40' : 'max-h-0'}`}>
                         {pkg.features.map((f, i) => (
                            <div key={i} className="flex items-center text-[10px] uppercase tracking-[0.1em] text-gray-500">
                               <Check className="w-3 h-3 mr-3 text-black opacity-30" />
                               {f}
                            </div>
                         ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Link 
                    to={`/book/${photographer.id}?package=${selectedPackage.id}`}
                    className="block w-full bg-black text-white text-center py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all shadow-xl"
                  >
                    Request Reservation
                  </Link>
                  <p className="text-center text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-6 italic">Secure payment &mdash; Signature delivery guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-8 border border-black/5">
                <ImageIcon className="w-8 h-8 opacity-20" />
                <div className="space-y-2">
                  <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold">The CityLens Promise</h5>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">Every session is protected by our global standard of excellence and satisfaction guarantee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
