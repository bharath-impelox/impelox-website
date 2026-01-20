import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, CalendarDays } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.header 
      className="bg-white  border-gray-100 sticky top-0 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlnsXlink="http://www.w3.org/1999/xlink" 
              version="1.1" 
              viewBox="0 0 3171.4285714285716 1859.9999999999998"
              className="h-8 md:h-10 w-auto"
            >
              <g transform="scale(8.571428571428571) translate(10, 10)">
                <defs id="SvgjsDefs1317">
                  <linearGradient id="SvgjsLinearGradient1326">
                    <stop id="SvgjsStop1327" stopColor="#ef4136" offset="0"></stop>
                    <stop id="SvgjsStop1328" stopColor="#fbb040" offset="1"></stop>
                  </linearGradient>
                </defs>
                <g id="SvgjsG1318" featureKey="rootContainer" transform="matrix(1,0,0,1,0,0)" fill="#137dc5">
                  <rect y="0" height="1" width="1" opacity="0"></rect>
                  <rect y="192" width="350" height="5"></rect>
                </g>
                <g id="SvgjsG1319" featureKey="symbolFeature-0" transform="matrix(1.5555555555555556,0,0,1.5555555555555556,97.22222222222223,-28.58733240763346)" fill="url(#SvgjsLinearGradient1326)">
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <circle cx="14.469" cy="60.581" r="9.469"></circle>
                      <circle cx="50" cy="60.581" r="9.469"></circle>
                      <path d="M47.228,43.866l-5.473-2.819l-0.687,1.333l7,3.606c0.11,0.057,0.227,0.083,0.343,0.083c0.272,0,0.534-0.148,0.667-0.407    l3.605-7l-1.332-0.687l-2.729,5.297c-1.952-7.707-9.04-13.323-17.182-13.323c-9.771,0-17.721,7.903-17.721,17.618h1.5    c0-8.887,7.277-16.118,16.221-16.118C38.974,31.451,45.525,36.699,47.228,43.866z"></path>
                      <circle cx="85.531" cy="60.581" r="9.469"></circle>
                      <path d="M82.759,43.866l-5.473-2.819L76.6,42.381l7,3.606c0.11,0.057,0.229,0.083,0.344,0.083c0.271,0,0.533-0.148,0.666-0.407    l3.606-7l-1.333-0.687l-2.729,5.297c-1.952-7.707-9.04-13.323-17.182-13.323c-3.925,0-7.642,1.248-10.748,3.609l0.904,1.194    c2.848-2.161,6.249-3.303,9.844-3.303C74.506,31.451,81.057,36.699,82.759,43.866z"></path>
                    </g>
                  </g>
                </g>
                <g id="SvgjsG1320" featureKey="nameFeature-0" transform="matrix(1.484062867961068,0,0,1.484062867961068,-4.749000894412889,89.67092309003478)" fill="#2464b0">
                  <path d="M8 7.039999999999999 c0.32 0 1.12 0.16 1.12 1.4 l0 30.2 c0 1.24 -0.8 1.4 -1.12 1.4 l-3.68 0 c-0.32 0 -1.12 -0.16 -1.12 -1.4 l0 -30.2 c0 -1.24 0.8 -1.4 1.12 -1.4 l3.68 0 z M52.049 7.039999999999999 c1.32 0 2.24 0.44 2.72 1.28 c0.44 0.76 0.64 2.04 0.64 3.88 l0 26.44 c0 1.24 -0.8 1.4 -1.16 1.4 l-3.44 0 c-0.32 0 -1.12 -0.16 -1.12 -1.4 l0 -24.12 l-0.2 0 c-0.04 0 -0.08 0 -0.08 0.08 l-6.88 16.96 c-0.28 0.84 -0.56 1.56 -0.84 2.16 s-0.64 1.08 -0.96 1.48 c-0.36 0.4 -0.8 0.72 -1.28 0.88 c-0.44 0.16 -1 0.24 -1.6 0.24 l-1.64 0 c-0.6 0 -1.12 -0.08 -1.6 -0.24 s-0.88 -0.48 -1.28 -0.88 c-0.32 -0.4 -0.64 -0.88 -0.96 -1.48 c-0.28 -0.6 -0.56 -1.32 -0.84 -2.16 l-6.84 -16.92 c-0.04 -0.12 -0.08 -0.12 -0.12 -0.12 l-0.2 0 l0 24.12 c0 1.24 -0.76 1.4 -1.12 1.4 l-3.44 0 c-0.36 0 -1.16 -0.16 -1.16 -1.4 l0 -26.44 c0 -1.84 0.2 -3.12 0.64 -3.88 c0.48 -0.84 1.4 -1.28 2.76 -1.28 l3.68 0 c0.52 0 1 0.04 1.4 0.16 s0.8 0.32 1.12 0.6 c0.28 0.32 0.56 0.68 0.8 1.16 c0.2 0.48 0.44 1.08 0.68 1.84 l7.04 17.68 c0.04 0.16 0.12 0.16 0.12 0.16 l0.4 0 c0.04 0 0.08 0 0.12 -0.16 l7.08 -17.68 c0.24 -0.76 0.44 -1.36 0.68 -1.84 s0.52 -0.84 0.8 -1.16 c0.32 -0.28 0.68 -0.48 1.08 -0.6 s0.84 -0.16 1.4 -0.16 l3.6 0 z M84.538 7.039999999999999 c2.72 0 4.68 0.84 5.88 2.56 c1.16 1.6 1.72 3.92 1.76 7 c0 3.16 -0.56 5.56 -1.76 7.24 s-3.16 2.52 -5.88 2.52 l-13.68 0.04 l0 12.24 c0 1.24 -0.8 1.4 -1.12 1.4 l-3.68 0 c-0.32 0 -1.12 -0.16 -1.12 -1.4 l0 -16.8 c0 -1.24 0.8 -1.36 1.12 -1.36 l17.44 0 c1 0 1.72 -0.28 2.12 -0.88 c0.44 -0.6 0.64 -1.56 0.64 -2.88 s-0.2 -2.28 -0.64 -2.88 c-0.4 -0.6 -1.12 -0.88 -2.12 -0.88 l-17.44 0 c-0.32 0 -1.12 -0.12 -1.12 -1.36 l0 -3.16 c0 -1.28 0.8 -1.4 1.12 -1.4 l18.48 0 z M125.747 32.84 c0.36 0 1.16 0.12 1.16 1.36 l0 4.4 c0 1.24 -0.8 1.36 -1.16 1.36 l-14.2 0 c-1.76 0 -3.24 -0.2 -4.48 -0.68 c-1.28 -0.44 -2.32 -1.16 -3.12 -2.2 c-0.76 -1 -1.36 -2.32 -1.72 -3.92 c-0.28 -1.32 -0.48 -2.92 -0.52 -4.8 l0 -0.2 l0.08 -5.04 c0.08 -0.36 0.24 -0.68 0.44 -1 c0.56 -1 1.56 -1.6 2.72 -1.68 l20.64 -0.04 c0.32 0 1.12 0.12 1.12 1.36 l0 3.16 c0 1.24 -0.8 1.4 -1.12 1.4 l-17.88 0 c-0.04 0 -0.08 2.88 -0.08 2.88 l0.08 0.68 c0.12 0.76 0.36 1.36 0.68 1.8 c0.32 0.4 0.68 0.68 1.2 0.88 c0.56 0.16 1.24 0.28 2.08 0.28 l14.08 0 z M125.787 6.960000000000001 c0.32 0 1.12 0.16 1.12 1.4 l0 3.16 c0 1.24 -0.8 1.4 -1.12 1.4 l-23 -0.04 c-0.32 0 -1.08 -0.12 -1.08 -1.36 l0 -3.12 c0 -1.28 0.76 -1.44 1.08 -1.44 l23 0 z M159.516 34.08 c0.36 0 1.12 0.16 1.12 1.4 l0 3.16 c0 1.24 -0.76 1.4 -1.12 1.4 l-13.2 0 c-1.76 0 -3.28 -0.24 -4.48 -0.68 c-1.28 -0.44 -2.32 -1.2 -3.12 -2.24 c-0.8 -1 -1.36 -2.32 -1.72 -3.92 c-0.36 -1.56 -0.56 -3.48 -0.56 -5.72 l0 -19.04 c0 -1.28 0.8 -1.4 1.16 -1.4 l3.68 0 c0.32 0 1.12 0.12 1.12 1.4 l0 19.72 c0 1.2 0.04 2.2 0.2 3 c0.12 0.72 0.36 1.32 0.68 1.76 c0.28 0.44 0.68 0.72 1.16 0.88 c0.56 0.2 1.24 0.28 2.08 0.28 l13 0 z M197.40499999999997 9.96 c0.8 1 1.36 2.32 1.72 3.92 c0.32 1.56 0.52 3.48 0.52 5.68 l0 7.92 c0 2.24 -0.2 4.16 -0.52 5.72 c-0.36 1.6 -0.92 2.92 -1.72 3.96 c-0.8 1 -1.84 1.76 -3.12 2.2 c-1.24 0.44 -2.76 0.68 -4.52 0.68 l-9.76 0 c-1.76 0 -3.28 -0.24 -4.48 -0.68 c-1.28 -0.44 -2.32 -1.2 -3.12 -2.24 c-0.76 -1 -1.36 -2.32 -1.72 -3.92 c-0.36 -1.56 -0.52 -3.48 -0.52 -5.72 l0 -7.92 c0 -2.24 0.16 -4.12 0.52 -5.68 c0.36 -1.6 0.96 -2.92 1.72 -3.92 c0.8 -1 1.84 -1.76 3.12 -2.24 c1.24 -0.44 2.72 -0.68 4.48 -0.68 l9.76 0 c1.76 0 3.28 0.24 4.52 0.68 c1.28 0.48 2.32 1.24 3.12 2.24 z M193.68499999999997 18.88 c0 -1.16 -0.04 -2.16 -0.2 -2.96 c-0.12 -0.76 -0.36 -1.36 -0.68 -1.8 c-0.28 -0.4 -0.68 -0.68 -1.2 -0.88 c-0.52 -0.16 -1.2 -0.28 -2.04 -0.28 l-9.36 0 c-0.84 0 -1.52 0.12 -2.04 0.28 c-0.52 0.2 -0.92 0.48 -1.2 0.88 c-0.32 0.44 -0.52 1.04 -0.68 1.8 c-0.12 0.8 -0.2 1.8 -0.2 2.96 l0 9.32 c0 1.16 0.08 2.16 0.2 2.96 c0.16 0.72 0.36 1.36 0.68 1.76 c0.28 0.44 0.68 0.72 1.2 0.88 c0.52 0.2 1.2 0.28 2.04 0.28 l9.36 0 c0.84 0 1.52 -0.08 2.04 -0.28 c0.52 -0.16 0.92 -0.44 1.2 -0.88 c0.32 -0.4 0.56 -1.04 0.68 -1.76 c0.16 -0.8 0.2 -1.8 0.2 -2.96 l0 -9.32 z M228.05399999999997 22.92 l10.72 15.32 c0.2 0.28 0.32 0.6 0.24 1 c-0.04 0.48 -0.36 0.76 -0.88 0.76 l-4.64 0 c-0.32 0 -0.6 -0.04 -0.84 -0.16 c-0.2 -0.16 -0.4 -0.36 -0.56 -0.68 l-8.08 -11.44 l-8.12 11.48 c-0.16 0.28 -0.36 0.48 -0.56 0.6 c-0.2 0.16 -0.48 0.2 -0.84 0.2 l-4.4 0 c-0.48 0 -0.8 -0.28 -0.88 -0.76 c-0.04 -0.4 0.04 -0.72 0.28 -1 l11 -15.56 l-9.92 -13.88 c-0.2 -0.28 -0.28 -0.64 -0.24 -1 c0.04 -0.48 0.36 -0.76 0.88 -0.76 l4.64 0 c0.32 0 0.64 0.08 0.84 0.2 c0.2 0.16 0.4 0.36 0.56 0.6 l7.08 10.24 l7.52 -10.24 c0.16 -0.24 0.36 -0.44 0.56 -0.6 c0.2 -0.12 0.48 -0.2 0.84 -0.2 l4.4 0 c0.52 0 0.84 0.28 0.92 0.76 c0.04 0.36 -0.04 0.72 -0.28 1 z"></path>
                  </g>
                  <g id="SvgjsG1321" featureKey="sloganFeature-0" transform="matrix(1.7100281497762462,0,0,1.7100281497762462,75.75304603676578,145.81397299578452)" fill="#f5793b">
                    <path d="M9.8354 7.711 l9.1766 12.19 l-2.9508 0 l-2.566 -3.3974 l-7.3197 0 l-2.5286 3.3974 l-2.9177 0 z M7.9362 14.1556 l3.7983 0 l-1.8992 -2.5322 z M23.753800000000002 20.02461 l-2.3246 0 l0 -11.295 l2.3246 0 l0 11.295 z M51.927 10.9648 l-13.59 0 l0 2.1824 l9.0599 0 l0 2.3476 l-9.0599 0 l0 4.5299 l-2.3477 0 l0 -11.407 l15.938 0 l0 2.3476 z M57.5938 20.02461 l-2.3246 0 l0 -11.295 l2.3246 0 l0 11.295 z M75.277 17.557 l1.162 -0.017422 l0.034786 2.3242 l-1.1621 0.017402 c-0.18088 0.002754 -0.38542 0.0058984 -0.6087 0.0058984 c-1.614 0 -4.2026 -0.16008 -5.8378 -1.7712 c-0.72798 -0.71726 -1.1865 -1.629 -1.3698 -2.72 l-4.2054 0 l-0.016602 4.4896 l-2.3246 -0.0086328 l0.037402 -10.127 l0 -1.1635 l0.0043164 0 l0 -0.0043164 l1.1612 0.0043164 l10.951 0 c1.4728 0 3.6638 0.90678 3.6638 3.4048 c0 2.4982 -2.0362 3.405 -3.4048 3.405 l-3.4826 0 c0.12543 0.4252 0.32842 0.77924 0.61734 1.064 c1.1685 1.151 3.608 1.1146 4.7804 1.0969 z M63.3114 13.0714 l10.041 -0.000019531 c0.10148 -0.0035352 0.40426 -0.041718 0.6538 -0.17971 c0.21608 -0.11955 0.43686 -0.32006 0.43686 -0.90076 c0 -0.46692 -0.15799 -0.71972 -0.56382 -0.90166 c-0.36882 -0.16531 -0.77152 -0.17865 -0.77532 -0.17865 l-9.7922 0 l0 2.1608 z M82.918 11.0046 c-0.21816 0.12059 -0.44118 0.32306 -0.44118 0.90966 c0 0.45724 0.14779 0.70718 0.52734 0.89108 c0.38386 0.18598 0.81196 0.19957 0.83354 0.2001 l8.5334 0.03336 c1.4828 0 3.6956 0.9158 3.6956 3.4388 s-2.0564 3.4388 -3.4388 3.4388 l-12.499 0 l0 -2.3477 l12.488 0 c0.1024 -0.0035352 0.40818 -0.04211 0.66022 -0.18152 c0.21828 -0.12072 0.44128 -0.32318 0.44128 -0.90964 c0 -0.45724 -0.14779 -0.70718 -0.52734 -0.89108 c-0.3827 -0.18547 -0.81038 -0.19947 -0.8343 -0.20012 l-8.5278 -0.03793 l0 0.0045703 c-1.4875 0 -3.7004 -0.9158 -3.7004 -3.4388 s2.0564 -3.4388 3.4388 -3.4388 l12.499 0 l0 2.3477 l-12.488 0 c-0.10229 0.0035352 -0.40834 0.04211 -0.6605 0.18152 z M99.40920000000001 8.475 l15.938 0 l0 2.3477 l-6.7954 0 l0 9.0932 l-2.3476 0 l0 -9.0932 l-6.7946 0 l0 -2.3477 z"></path>
                  </g>
              </g>
            </svg>
          </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/about', key: 'about' },
              { path: '/products', key: 'products' },
              { path: '/careers', key: 'careers' },
              { path: '/services', key: 'services' },
            ].map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link 
                  to={item.path} 
                  className={`transition-colors ${
                    isActive(item.path) 
                      ? 'text-[#1B44FE] font-medium' 
                      : 'text-gray-700 hover:text-[#0066FF]'
                  }`}
                >
                  {t(`header.${item.key}`)}
                </Link>
              </motion.div>
            ))}
            <motion.a 
              href="#blog" 
              className="text-gray-700 hover:text-[#0066FF] transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              {t('header.blog')}
            </motion.a>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <motion.div 
              className="hidden lg:block relative" 
              ref={dropdownRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getFlagSVG(languages.find(lang => lang.code === selectedLanguage)?.flag || 'US')}
                <span className="text-sm text-gray-700 font-medium">
                  {languages.find(lang => lang.code === selectedLanguage)?.name || 'English'}
                </span>
                <motion.div
                  animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div 
                    className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((language) => (
                      <motion.button
                        key={language.code}
                        onClick={() => {
                          i18n.changeLanguage(language.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                          selectedLanguage === language.code ? 'bg-blue-50' : ''
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        {getFlagSVG(language.flag)}
                        <span className="text-sm text-gray-700 font-medium">{language.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact-us"
                className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
                style={{
                  background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                }}
              >
                {t('header.contactUs')}
              </Link>
            </motion.div>
            
            {/* Calendly Button */}
            <motion.button
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <CalendarDays className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;

