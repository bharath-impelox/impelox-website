import React from 'react';
import { useTranslation } from 'react-i18next';

const OurEngagementProcess: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#0040C1] text-sm mb-2">• {t('servicesPage.engagementProcess.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('servicesPage.engagementProcess.title')}
          </h2>
        </div>

        <div className="flex justify-center">
          <img 
            src="/images/engagement.png" 
            alt="Our Engagement Process" 
            className="w-full max-w-3xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OurEngagementProcess;

