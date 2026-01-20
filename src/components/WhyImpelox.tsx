import React from 'react';
import { Link } from 'react-router-dom';
import { CircleCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyImpelox: React.FC = () => {
  const { t } = useTranslation();
  const features = [
    {
      title: t('whyImpelox.regulatedExpertise.title'),
      description: t('whyImpelox.regulatedExpertise.description'),
    },
    {
      title: t('whyImpelox.japanExperience.title'),
      description: t('whyImpelox.japanExperience.description'),
    },
    {
      title: t('whyImpelox.engineers.title'),
      description: t('whyImpelox.engineers.description'),
    },
    {
      title: t('whyImpelox.stayUntilWorks.title'),
      description: t('whyImpelox.stayUntilWorks.description'),
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0040C1] text-sm mb-2">• {t('whyImpelox.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('whyImpelox.title')}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex-1 min-w-[250px] max-w-[300px] flex flex-col"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <CircleCheck className="w-6 h-6 text-[#1B44FE]" />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/about"
            className="inline-block text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
            style={{
              background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
            }}
          >
            {t('whyImpelox.aboutUs')} →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyImpelox;
