import React from 'react';
import { useTranslation } from 'react-i18next';

const Na2Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
           <span className="text-sm shadow-sm bg-white  font-medium mb-2 p-2 rounded-xl">
              <span style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }} className=' text-white rounded-xl p-1'>Na2</span> {t('productNa2Page.hero.badge')}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('productNa2Page.hero.title')}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('productNa2Page.hero.description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base"
                style={{
                  background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                }}
              >
                {t('productNa2Page.hero.seeInAction')}
              </button>
              <button className="bg-white shadow  px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-base">
                {t('productNa2Page.hero.talkToTeam')}
              </button>
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

export default Na2Hero;

