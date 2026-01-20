import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PreConfiguredIndustry: React.FC = () => {
  const { t } = useTranslation();
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      tag: t('productNa2Page.preConfigured.industries.healthcare.tag'),
      title: t('productNa2Page.preConfigured.industries.healthcare.title'),
      features: [
        t('productNa2Page.preConfigured.industries.healthcare.features.0'),
        t('productNa2Page.preConfigured.industries.healthcare.features.1'),
        t('productNa2Page.preConfigured.industries.healthcare.features.2'),
        t('productNa2Page.preConfigured.industries.healthcare.features.3'),
        t('productNa2Page.preConfigured.industries.healthcare.features.4'),
      ],
    },
    {
      tag: t('productNa2Page.preConfigured.industries.hospitality.tag'),
      title: t('productNa2Page.preConfigured.industries.hospitality.title'),
      features: [
        t('productNa2Page.preConfigured.industries.hospitality.features.0'),
        t('productNa2Page.preConfigured.industries.hospitality.features.1'),
        t('productNa2Page.preConfigured.industries.hospitality.features.2'),
        t('productNa2Page.preConfigured.industries.hospitality.features.3'),
      ],
    },
    {
      tag: t('productNa2Page.preConfigured.industries.sales.tag'),
      title: t('productNa2Page.preConfigured.industries.sales.title'),
      features: [
        t('productNa2Page.preConfigured.industries.sales.features.0'),
        t('productNa2Page.preConfigured.industries.sales.features.1'),
        t('productNa2Page.preConfigured.industries.sales.features.2'),
        t('productNa2Page.preConfigured.industries.sales.features.3'),
      ],
    },
    {
      tag: t('productNa2Page.preConfigured.industries.insurance.tag'),
      title: t('productNa2Page.preConfigured.industries.insurance.title'),
      features: [
        t('productNa2Page.preConfigured.industries.insurance.features.0'),
        t('productNa2Page.preConfigured.industries.insurance.features.1'),
        t('productNa2Page.preConfigured.industries.insurance.features.2'),
        t('productNa2Page.preConfigured.industries.insurance.features.3'),
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading and Industry Cards */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('productNa2Page.preConfigured.title')}
            </h2>
            
            {industries.map((industry, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndustry(index)}
                className={`bg-white border rounded-xl p-6 pt-8 cursor-pointer transition-all relative ${
                  selectedIndustry === index
                    ? 'border-[#1B44FE] border-2 shadow-md'
                    : 'border-gray-200 hover:shadow-md'
                }`}
              >
                <span 
                  className="absolute -top-3 left-6 text-white text-xs font-medium px-2 py-1 rounded"
                  style={{
                    background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                  }}
                >
                  {industry.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-gray-600 text-sm">
                  {industry.features.map((feature, idx) => (
                    <span key={idx}>
                      {feature}
                      {idx < industry.features.length - 1 && <span className="mx-1">|</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Tagline and Demo Area */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              {t('productNa2Page.preConfigured.description')}
            </p>
            
            <div className="bg-white border border-gray-300 rounded-xl p-12 h-96 flex items-center justify-center">
              <img 
                src="/images/undraw_booking_1ztt.svg" 
                alt="Booking illustration" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreConfiguredIndustry;
