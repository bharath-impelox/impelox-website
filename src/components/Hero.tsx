import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#F6F8F9] py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-between w-full">
            <div className="space-y-6">
              {/* Next icon at top */}
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.titleFor') ? (
                  <>
                    <span className='flex items-center'>
                      <span>{t('hero.title')} </span><img 
                      src="/images/hero-visual.png" 
                      alt="Next Icon" 
                      className="w-13 h-13 transform rotate-6"
                    /> {t('hero.titleFor')}</span> 
                    {t('hero.titleRegulated')}
                  </>
                ) : (
                  <>
                    {t('hero.title')} {t('hero.titleRegulated')}
                  </>
                )}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {t('hero.description')}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/products"
                  className="inline-block text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base"
                  style={{
                    background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                  }}
                >
                  {t('hero.exploreProducts')}
                </Link>
                <button className=" bg-white shadow px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-base border border-transparent hover:border-blue-100">
                 {t('hero.talkToTeam')}
                </button>
              </div>
            </div>

            {/* Users Count - at bottom */}
            <div className="flex items-center space-x-4 pt-8 mt-auto">
              <div className="flex -space-x-2">
                <img src="/images/avatar-1.png" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="/images/avatar-2.png" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="/images/avatar-3.png" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="/images/avatar-4.png" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <span className="text-gray-600">| {t('hero.happyUsers')}</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center w-full h-full">
            <div 
              className="relative w-full bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{
                backgroundImage: 'url(/images/header_side_bg.png)',
                minHeight: '400px',
              }}
            >
              {/* Container with rotation - centered */}
              <div className="relative p-8 w-full h-full flex items-center justify-center">
                {/* Main card with Demo */}
                <div className="bg-white rounded-lg shadow-xl p-6 transform rotate-3 relative z-0">
                  <div className="text-center text-gray-400 text-lg font-medium py-8 min-w-[200px]">
                    Demo
                  </div>
                </div>
                
                {/* Floating card with chart */}
                <div className="absolute left-8 top-20 bg-white rounded-lg shadow-xl p-4 transform translate-x-[-60%] translate-y-[-10%] z-10">
                  <div className="text-sm font-thin  text-gray-500 mb-3">{t('hero.productivity')}</div>
                  {/* Bar Chart */}
                  <div className="flex items-end justify-center gap-1.5 h-16">
                    <div className="w-4 bg-[#1B44FE] opacity-80 rounded-t" style={{ height: '40%' }}></div>
                    <div className="w-4 bg-[#1B44FE] rounded-t" style={{ height: '70%' }}></div>
                    <div className="w-4 bg-[#1B44FE] rounded-t" style={{ height: '50%' }}></div>
                    <div className="w-4 bg-[#1B44FE] rounded-t" style={{ height: '90%' }}></div>
                    <div className="w-4 bg-[#1B44FE] rounded-t" style={{ height: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
  
      </div>
    </section>
  );
};

export default Hero;

