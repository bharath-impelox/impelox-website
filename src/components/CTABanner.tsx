import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CTABanner: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="container mx-auto">
        <div 
          className="rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Rotated background image */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/automation_bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              transform: 'rotate(180deg)',
            }}
          />
          
          {/* Decorative wave shapes */}
          <div className="absolute inset-0 opacity-20 z-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1440 640" preserveAspectRatio="none">
                <path
                  d="M0,200 Q360,150 720,200 T1440,200 L1440,640 L0,640 Z"
                  fill="white"
                  opacity="0.3"
                />
                <path
                  d="M0,300 Q360,250 720,300 T1440,300 L1440,640 L0,640 Z"
                  fill="white"
                  opacity="0.2"
                />
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('ctaBanner.title')}
            </h2>
            
            <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
              {t('ctaBanner.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button
                className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base whitespace-nowrap"
                style={{
                  background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                }}
              >
                {t('ctaBanner.scheduleDemo')} →
              </button>
              
              <Link
                to="/contact-us"
                className="bg-white text-[#1B44FE] px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base whitespace-nowrap inline-block"
              >
                {t('ctaBanner.contactUs')}
              </Link>
            </div>

            <p className="text-white text-sm opacity-90">
              {t('ctaBanner.available')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
