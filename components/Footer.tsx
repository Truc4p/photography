
import React from 'react';
import { Camera, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Camera className="w-6 h-6 text-black" />
              <span className="text-xl font-bold tracking-tighter">CITYLENS</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              The premium marketplace for professional photography in the world's most beautiful cities.
            </p>
            <div className="flex space-x-4 pt-2">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/search" className="hover:text-black">All Cities</Link></li>
              <li><Link to="/search" className="hover:text-black">Portrait Sessions</Link></li>
              <li><Link to="/search" className="hover:text-black">Travel Photography</Link></li>
              <li><Link to="/search" className="hover:text-black">Brand Shoots</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Photographers</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/join" className="hover:text-black">Become a Partner</Link></li>
              <li><Link to="/join" className="hover:text-black">Community Guidelines</Link></li>
              <li><Link to="/join" className="hover:text-black">Resources</Link></li>
              <li><Link to="/join" className="hover:text-black">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-black">Help Center</Link></li>
              <li><Link to="#" className="hover:text-black">Trust & Safety</Link></li>
              <li><Link to="#" className="hover:text-black">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-black">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 CityLens Inc. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Crafted with passion for storytellers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
