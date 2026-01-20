import React from 'react';
import { CircleCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyWorkWithUs: React.FC = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      title: t('servicesPage.whyWorkWithUs.regulatedExpertise.title'),
      description: t('servicesPage.whyWorkWithUs.regulatedExpertise.description'),
    },
    {
      title: t('servicesPage.whyWorkWithUs.engineers.title'),
      description: t('servicesPage.whyWorkWithUs.engineers.description'),
    },
    {
      title: t('servicesPage.whyWorkWithUs.moveFast.title'),
      description: t('servicesPage.whyWorkWithUs.moveFast.description'),
    },
    {
      title: t('servicesPage.whyWorkWithUs.stayUntilWorks.title'),
      description: t('servicesPage.whyWorkWithUs.stayUntilWorks.description'),
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#0040C1] text-sm mb-2 uppercase">• {t('servicesPage.whyWorkWithUs.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('servicesPage.whyWorkWithUs.title')}
          </h2>
        </div>

        <div className="flex gap-6 justify-start">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4 flex-1"
            >
              {/* Icon at top */}
              <div className="w-12 h-12  rounded-lg flex items-center justify-center flex-shrink-0">
                <CircleCheck className="w-6 h-6 text-[#1B44FE]" />
              </div>
              {/* Text content below */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;

