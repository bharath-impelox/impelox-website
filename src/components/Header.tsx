import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, CalendarDays } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// TypeScript declaration for Calendly
declare global {
  interface Window {
    Calendly?: any;
  }
}

const Header: React.FC = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', flag: 'US' },
    { code: 'jp', name: '日本語', flag: 'JP' },
  ];

  const selectedLanguage = i18n.language === 'ja' ? 'jp' : i18n.language;

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getFlagSVG = (country: string) => {
    if (country === 'US') {
      return (
        <svg className="w-5 h-4" xmlns="http://www.w3.org/2000/svg" id="flag-icons-us" viewBox="0 0 640 480">
          <path fill="#bd3d44" d="M0 0h640v480H0"/>
          <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
          <path fill="#192f5d" d="M0 0h364.8v258.5H0"/>
          <marker id="us-a" markerHeight="30" markerWidth="30">
            <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z"/>
          </marker>
          <path fill="none" markerMid="url(#us-a)" d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"/>
        </svg>
      );
    } else if (country === 'JP') {
      return (
        <svg className="w-5 h-4" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" d="M0 0h640v480H0z"/>
          <circle cx="320" cy="240" r="144" fill="#bc002d"/>
        </svg>
      );
    }
    return null;
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
              {t('header.about')}
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${
                isActive('/products') 
                  ? 'text-[#1B44FE] font-medium' 
                  : 'text-gray-700 hover:text-[#0066FF]'
              }`}
            >
              {t('header.products')}
            </Link>
            <Link 
              to="/careers" 
              className={`transition-colors ${
                isActive('/careers') 
                  ? 'text-[#1B44FE] font-medium' 
                  : 'text-gray-700 hover:text-[#0066FF]'
              }`}
            >
              {t('header.careers')}
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${
                isActive('/services') 
                  ? 'text-[#1B44FE] font-medium' 
                  : 'text-gray-700 hover:text-[#0066FF]'
              }`}
            >
              {t('header.services')}
            </Link>
            <a href="#blog" className="text-gray-700 hover:text-[#0066FF] transition-colors">{t('header.blog')}</a>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden lg:block relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {getFlagSVG(languages.find(lang => lang.code === selectedLanguage)?.flag || 'US')}
                <span className="text-sm text-gray-700 font-medium">
                  {languages.find(lang => lang.code === selectedLanguage)?.name || 'English'}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        i18n.changeLanguage(language.code);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                        selectedLanguage === language.code ? 'bg-blue-50' : ''
                      }`}
                    >
                      {getFlagSVG(language.flag)}
                      <span className="text-sm text-gray-700 font-medium">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Contact Button */}
            <Link
              to="/contact-us"
              className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
            >
              {t('header.contactUs')}
            </Link>
            
            {/* Calendly Button */}
            <button
              onClick={() => {
                if (window.Calendly) {
                  window.Calendly.initPopupWidget({ url: 'https://calendly.com/venkateshtv149/intro' });
                }
              }}
              className="p-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#1B44FE] focus:ring-offset-2 transition-opacity hover:opacity-90"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
              aria-label="Schedule a call"
            >
              <CalendarDays className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

