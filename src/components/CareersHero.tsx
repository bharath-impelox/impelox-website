import React from 'react';
import { useTranslation } from 'react-i18next';

const CareersHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {t('careersPage.hero.title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            {t('careersPage.hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;

