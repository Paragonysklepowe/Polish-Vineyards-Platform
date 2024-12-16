import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B4D3E] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Wine className="h-6 w-6" />
              <span className="text-lg font-bold">Polish Vineyards</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Discover the finest vineyards across Poland, from historic regions to modern estates.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/legal/privacy-policy" className="hover:text-[#F7E7CE] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="hover:text-[#F7E7CE] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/legal/cookie-policy" className="hover:text-[#F7E7CE] transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/disclaimers" className="hover:text-[#F7E7CE] transition-colors">
                  Disclaimers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: privacy@polishvineyards.com</li>
              <li>Phone: +48 123 456 789</li>
              <li>Address: ul. Winna 1, 00-001 Warsaw, Poland</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#F7E7CE] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#F7E7CE] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#F7E7CE] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Polish Vineyards. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};