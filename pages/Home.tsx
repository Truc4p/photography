
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PHOTOGRAPHERS } from '../data/mockData';
import PhotographerCard from '../components/PhotographerCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchCity, setSearchCity] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?city=${searchCity}`);
  };

  return (
    <div className="bg-[#FAF9F6]">
      {/* Hero Section - High End Editorial */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2400&q=90" 
            className="w-full h-full object-cover brightness-90"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 w-full px-8 text-center text-white space-y-8 fade-up">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-7xl md:text-[10rem] font-light tracking-tighter leading-[0.85] serif italic">
              Legacy <br/> in the Light.
            </h1>
          </div>
          <p className="text-lg md:text-xl font-light tracking-[0.1em] uppercase max-w-xl mx-auto opacity-90">
            A curated collective of elite storytellers for the discerning traveler.
          </p>
          
          <form 
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mt-16 max-w-xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20"
          >
            <input 
              type="text" 
              placeholder="YOUR CITY" 
              className="bg-transparent border-none focus:outline-none text-white placeholder:text-white/60 text-xs tracking-[0.3em] font-bold px-8 py-4 w-full md:w-auto flex-grow"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-white text-black px-12 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all w-full md:w-auto shadow-2xl"
            >
              Discover
            </button>
          </form>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
           <div className="w-[1px] h-16 bg-white/30" />
           <span className="text-[10px] text-white/50 tracking-[0.4em] uppercase">Scroll</span>
        </div>
      </section>

      {/* Intro Section - Ashley Smith Style */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-12">
            <h2 className="text-6xl md:text-8xl serif italic leading-tight">Artistic <br/> Integrity.</h2>
            <div className="w-16 h-[1px] bg-black" />
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              CityLens is not a database. It is a curated sanctuary of visionaries. We hand-select photographers who capture more than an image—they capture the silent, sophisticated poetry of a moment.
            </p>
            <Link to="/search" className="inline-flex items-center space-x-4 text-[11px] font-bold uppercase tracking-[0.3em] group">
              <span>View the Collective</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-8">
            <div className="pt-24">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80" className="w-full aspect-[3/5] object-cover grayscale" alt="Editorial" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" className="w-full aspect-[3/5] object-cover" alt="Editorial" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collective - Grid Refined */}
      <section className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-24">
             <h2 className="text-5xl md:text-7xl serif tracking-tight mb-4">The Collective</h2>
             <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400">Current Spotlight &bull; Season 01</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {PHOTOGRAPHERS.map(p => (
              <PhotographerCard key={p.id} photographer={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling Quote - KT Merry Inspired */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=1200&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          alt="Quote Bg"
        />
        <div className="relative z-10 max-w-5xl px-8 text-center text-white">
          <span className="text-[11px] uppercase tracking-[0.5em] mb-12 block opacity-60">The Vision</span>
          <blockquote className="text-4xl md:text-7xl serif italic leading-[1.2] tracking-tight">
            "We believe in the quiet beauty of a stolen glance, the timelessness of a silhouette, and the profound depth of human connection."
          </blockquote>
        </div>
      </section>

      {/* Categories - Editorial Horizontal Layout */}
      <section className="py-40 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-b border-black/5 pb-20 mb-20">
          <h2 className="text-5xl serif italic">The Disciplines</h2>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mt-8 md:mt-0">
            <span className="text-black border-b border-black pb-2 cursor-pointer">Portraits</span>
            <span className="hover:text-black transition-colors cursor-pointer">Editorials</span>
            <span className="hover:text-black transition-colors cursor-pointer">Escapes</span>
            <span className="hover:text-black transition-colors cursor-pointer">Collectives</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group overflow-hidden relative aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Portraits" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white text-4xl serif italic">Portraits</span>
            </div>
          </div>
          <div className="group overflow-hidden relative aspect-[4/5] md:translate-y-12">
            <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Travel" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white text-4xl serif italic">Escapes</span>
            </div>
          </div>
          <div className="group overflow-hidden relative aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Brand" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white text-4xl serif italic">Editorial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-8 space-y-12">
          <h2 className="text-6xl md:text-8xl serif italic leading-none">Your story, <br/> reimagined.</h2>
          <p className="text-lg opacity-60 font-light tracking-wide italic">Begin your journey with a master of the craft.</p>
          <Link to="/search" className="inline-block bg-white text-black px-16 py-6 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-transparent hover:text-white border border-white transition-all">
            Inquire Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
