
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SlidersHorizontal, Search as SearchIcon, MapPin, ChevronDown } from 'lucide-react';
import { PHOTOGRAPHERS, CATEGORIES } from '../data/mockData';
import PhotographerCard from '../components/PhotographerCard';

const Search: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const [activeCategory, setActiveCategory] = useState(queryParams.get('category') || 'All');
  const [searchCity, setSearchCity] = useState(queryParams.get('city') || '');
  const [priceRange, setPriceRange] = useState(1000);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredPhotographers = PHOTOGRAPHERS.filter(p => {
    const cityMatch = !searchCity || p.city.toLowerCase().includes(searchCity.toLowerCase());
    const categoryMatch = activeCategory === 'All' || p.categories.includes(activeCategory);
    const priceMatch = p.startingPrice <= priceRange;
    return cityMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="pt-28 pb-32 bg-white">
      {/* Search Header */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-gray-100 pb-16">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-serif text-black">
                {searchCity ? `Talent in ${searchCity}` : 'Find your lens.'}
              </h1>
              <p className="text-gray-400 text-xl font-light">
                Discover {filteredPhotographers.length} verified creators available for your next session.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-96 group">
                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 transition-colors group-focus-within:text-black" />
                <input 
                  type="text"
                  placeholder="Switch city..."
                  className="w-full bg-white border border-gray-200 hover:border-gray-300 focus:border-black pl-14 pr-6 py-4 rounded-full focus:outline-none transition-all font-medium text-lg text-black placeholder:text-gray-300"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                />
              </div>
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-bold transition-all text-lg w-full sm:w-auto border-2 ${
                  isFilterOpen ? 'bg-black border-black text-white shadow-lg' : 'bg-white border-gray-200 text-black hover:border-black'
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Refine</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Expanded Filters */}
          {isFilterOpen && (
            <div className="mt-10 p-12 bg-white border border-gray-100 rounded-[3rem] shadow-sm animate-in fade-in slide-in-from-top-6 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Service Type</label>
                  <div className="flex flex-wrap gap-3">
                    {['All', ...CATEGORIES].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border-2 ${
                          activeCategory === cat ? 'bg-black border-black text-white' : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                    Price Ceiling: <span className="text-black ml-2">${priceRange}</span>
                  </label>
                  <input 
                    type="range" 
                    min="50" 
                    max="1000" 
                    step="50" 
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-black mb-4"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                    <span>$50</span>
                    <span>$1000+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Sorting</label>
                  <div className="relative group">
                    <select className="w-full bg-white border border-gray-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 font-bold appearance-none cursor-pointer">
                      <option>Community Favorites</option>
                      <option>Top Rated Artists</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-6">
          {filteredPhotographers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
              {filteredPhotographers.map(p => (
                <PhotographerCard key={p.id} photographer={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-40 bg-gray-50/30 rounded-[4rem]">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-[2rem] mb-10 text-gray-200 shadow-sm">
                <SearchIcon className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-4 font-serif">No matches found.</h3>
              <p className="text-gray-400 font-light text-lg mb-12">Adjust your criteria or explore a wider radius.</p>
              <button 
                onClick={() => {
                  setSearchCity('');
                  setActiveCategory('All');
                  setPriceRange(1000);
                }}
                className="bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-gray-800 transition-all text-lg"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
