import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('servicesPage.hero.title')}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('servicesPage.hero.description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base"
                style={{
                  background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                }}
              >
                {t('servicesPage.hero.discussProject')}
              </button>
              <Link
                to="/products"
                className="bg-white border-2 border-[#1B44FE] text-[#1B44FE] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-base"
              >
                {t('servicesPage.hero.seeProducts')}
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <p className="text-gray-400 text-lg">Product image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

