
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isLightNav = location.pathname === '/' && !isScrolled && !isMobileMenuOpen;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-lg py-4 border-b border-black/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className={`text-2xl font-semibold tracking-[0.15em] serif transition-colors duration-500 ${isLightNav ? 'text-white' : 'text-black'}`}>
            CITYLENS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <Link 
            to="/search" 
            className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-opacity hover:opacity-50 ${
              isLightNav ? 'text-white' : 'text-black'
            }`}
          >
            The Directory
          </Link>
          <Link 
            to="/join" 
            className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-opacity hover:opacity-50 ${
              isLightNav ? 'text-white' : 'text-black'
            }`}
          >
            Join the Collective
          </Link>
          <Link 
            to="/search" 
            className={`px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500 border ${
              isLightNav 
                ? 'bg-transparent border-white text-white hover:bg-white hover:text-black' 
                : 'bg-black border-black text-white hover:bg-transparent hover:text-black'
            }`}
          >
            Reserve
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className={`w-6 h-6 transition-colors duration-500 ${isLightNav ? 'text-white' : 'text-black'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 p-12 flex flex-col justify-center items-center space-y-12 animate-in fade-in duration-500">
          <Link to="/search" className="text-4xl serif hover:opacity-50">The Directory</Link>
          <Link to="/join" className="text-4xl serif hover:opacity-50">Collective</Link>
          <Link to="/search" className="text-4xl serif hover:opacity-50">Reserve Session</Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8"><X className="w-8 h-8"/></button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
