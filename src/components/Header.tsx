import React from 'react';
import { Link } from 'react-router-dom';
import { Wine } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-[#722F37] text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Wine className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Polish Vineyards</h1>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/map" className="hover:text-[#F7E7CE] transition-colors">Map</Link>
            <Link to="/menu" className="hover:text-[#F7E7CE] transition-colors">Menu</Link>
            <Link to="/events" className="hover:text-[#F7E7CE] transition-colors">Events</Link>
            <Link
              to="/admin/login"
              className="px-4 py-2 bg-[#1B4D3E] rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};