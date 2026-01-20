import React from 'react';
import { useTranslation } from 'react-i18next';

const WhatWeveBuilt: React.FC = () => {
  const { t } = useTranslation();
  const caseStudies = [
    {
      tag: t('servicesPage.whatWeveBuilt.insuranceTech.tag'),
      category: `• ${t('servicesPage.whatWeveBuilt.insuranceTech.category')}`,
      title: t('servicesPage.whatWeveBuilt.insuranceTech.title'),
      description: t('servicesPage.whatWeveBuilt.insuranceTech.description'),
      learnMore: t('servicesPage.whatWeveBuilt.insuranceTech.learnMore'),
    },
    {
      tag: t('servicesPage.whatWeveBuilt.customerSupport.tag'),
      category: `• ${t('servicesPage.whatWeveBuilt.customerSupport.category')}`,
      title: t('servicesPage.whatWeveBuilt.customerSupport.title'),
      description: t('servicesPage.whatWeveBuilt.customerSupport.description'),
      learnMore: t('servicesPage.whatWeveBuilt.customerSupport.learnMore'),
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#0040C1] text-sm mb-2">• {t('servicesPage.whatWeveBuilt.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('servicesPage.whatWeveBuilt.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('servicesPage.whatWeveBuilt.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%)'
              }}
            >
              {/* Subtle grid pattern background */}
              <div className="absolute inset-0 opacity-5">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                ></div>
              </div>

              <div className="relative z-10">
                {/* Top Tag with gradient background */}
                <div className="mb-3">
                  <span 
                    className="text-white text-xs font-medium px-3 py-1 rounded-full inline-block"
                    style={{
                      background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                    }}
                  >
                    {study.tag}
                  </span>
                </div>

                {/* Category with bullet point */}
                <p className="text-[#0040C1] text-xs mb-4 uppercase">
                  {study.category}
                </p>

                {/* Main Heading */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Learn more button with gradient */}
                <button 
                  className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
                  style={{
                    background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                  }}
                >
                  {study.learnMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeveBuilt;

