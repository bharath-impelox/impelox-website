import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white  border-gray-100 sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Impelox Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`transition-colors ${
                isActive('/about') 
                  ? 'text-[#1B44FE] font-medium' 
                  : 'text-gray-700 hover:text-[#0066FF]'
              }`}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${
                isActive('/products') 
                  ? 'text-[#1B44FE] font-medium' 
                  : 'text-gray-700 hover:text-[#0066FF]'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/careers" 
              className={`transition-colors ${
                isActive('/careers') 
                  ? 'text-[#1B44FE] font-medium' 
                  : 'text-gray-700 hover:text-[#0066FF]'
              }`}
            >
              Careers
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${
                isActive('/services') 
                  ? 'text-[#1B44FE] font-medium' 
                  : 'text-gray-700 hover:text-[#0066FF]'
              }`}
            >
              Services
            </Link>
            <a href="#blog" className="text-gray-700 hover:text-[#0066FF] transition-colors">Blog</a>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden lg:flex items-center space-x-2 cursor-pointer">
              <span className="text-2xl">🇺🇸</span>
            </div>
            
            {/* Contact Button */}
            <Link
              to="/contact-us"
              className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

