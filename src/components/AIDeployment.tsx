import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AIDeployment: React.FC = () => {
  const { t } = useTranslation();
  const features = [
    t('aboutPage.aiDeployment.features.customAI'),
    t('aboutPage.aiDeployment.features.chatbotIntegration'),
    t('aboutPage.aiDeployment.features.machineLearning'),
    t('aboutPage.aiDeployment.features.businessProcess'),
    t('aboutPage.aiDeployment.features.startupSaaS'),
    t('aboutPage.aiDeployment.features.aiFirst'),
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('aboutPage.aiDeployment.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('aboutPage.aiDeployment.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <p className="text-gray-600 mb-6">
              {t('aboutPage.aiDeployment.description')}
            </p>
            <p className="text-gray-900 font-medium mb-6">
              {t('aboutPage.aiDeployment.noGeneric')}
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#D1E0FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#0040C1]" />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card with Blur Effect */}
          <div className="relative">
            {/* Blurred background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-100 rounded-xl blur-2xl opacity-50 -z-10"></div>
            
            {/* Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-12 shadow-sm relative z-10 h-full flex items-center justify-center min-h-[400px]">
              <img 
                src="/images/undraw_process_0wew.svg" 
                alt="AI Deployment Process" 
                className="w-full h-auto max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDeployment;
