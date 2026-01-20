import React from 'react';
import { useTranslation } from 'react-i18next';

const ServicesCTA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div 
          className="rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/na2-bottom-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative z-10">
            <p className="text-[#0040C1] text-sm mb-4">• {t('servicesPage.cta.tag')}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t('servicesPage.cta.title')}
            </h2>
            
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              {t('servicesPage.cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button
                className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base whitespace-nowrap"
                style={{
                  background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                }}
              >
                {t('servicesPage.cta.scheduleConsultation')}
              </button>
              
              <button
                className="bg-white text-[#1B44FE] px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base whitespace-nowrap border-2 border-[#1B44FE]"
              >
                {t('servicesPage.cta.emailDirectly')}
              </button>
            </div>

            <p className="text-gray-600 text-sm">
              {t('servicesPage.cta.available')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;

