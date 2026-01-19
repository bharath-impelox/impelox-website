import React from 'react';
import { Link } from 'react-router-dom';
import { CircleCheck } from 'lucide-react';

const WhyImpelox: React.FC = () => {
  const features = [
    {
      title: 'Regulated Industry Expertise',
      description: 'HIPAA, SOC 2, ISO27001, GDPR-aware architecture.',
    },
    {
      title: 'Japan Market Experience',
      description: 'Kansai region experience. Native Japanese support.',
    },
    {
      title: '20+ Engineers',
      description: 'Full team in Chennai. Production-grade systems.',
    },
    {
      title: 'We Stay Until It Works',
      description: 'Implementation, integration, and support included.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0040C1] text-sm mb-2">• WHY US</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Impelox
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
            About Us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyImpelox;
