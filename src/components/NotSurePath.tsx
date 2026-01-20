import React from 'react';
import { useTranslation } from 'react-i18next';

const NotSurePath: React.FC = () => {
  const { t } = useTranslation();
  const options = [
    {
      title: t('servicesPage.notSurePath.product.title'),
      items: [
        t('servicesPage.notSurePath.product.items.standardWorkflows'),
        t('servicesPage.notSurePath.product.items.predictablePricing'),
        t('servicesPage.notSurePath.product.items.quickStart'),
      ],
    },
    {
      title: t('servicesPage.notSurePath.service.title'),
      items: [
        t('servicesPage.notSurePath.service.items.uniqueWorkflows'),
        t('servicesPage.notSurePath.service.items.legacyIntegrations'),
        t('servicesPage.notSurePath.service.items.tightDeadlines'),
        t('servicesPage.notSurePath.service.items.capabilitiesBeyond'),
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Light blue-gray background box */}
        <div 
          className="rounded-xl p-12 md:p-16"
          style={{
            background: 'linear-gradient(135deg, #F5F7FA 0%, #E9ECEF 100%)'
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('servicesPage.notSurePath.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('servicesPage.notSurePath.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {options.map((option, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
              >
                {/* Blue pill label at top */}
                <div className="flex justify-center mb-6">
                  <span 
                    className="text-white text-sm font-medium px-4 py-2 rounded-full inline-block"
                    style={{
                      background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                    }}
                  >
                    {option.title}
                  </span>
                </div>
                
                {/* Feature list without bullet points */}
                <div className="space-y-3">
                  {option.items.map((item, idx) => (
                    <div key={idx} className="text-gray-700 text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotSurePath;
