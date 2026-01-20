import React from 'react';
import { useTranslation } from 'react-i18next';

const CaseStudy: React.FC = () => {
  const { t } = useTranslation();
  const results = [
    { metric: t('productNa2Page.caseStudy.metrics.noShows'), change: '↓34%', position: 'left' },
    { metric: t('productNa2Page.caseStudy.metrics.afterHours'), change: '↑45%', position: 'left' },
    { metric: t('productNa2Page.caseStudy.metrics.phoneTime'), change: '↓60%', position: 'right' },
    { metric: t('productNa2Page.caseStudy.metrics.patientRating'), change: '4.8/5', position: 'right' },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Image */}
          <div className="bg-gray-300 rounded-xl p-12 h-96 flex items-center justify-center">
            <p className="text-gray-500 text-lg font-medium">IMAGE</p>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Header with pills */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-[#0040C1] text-sm">•</span>
                <span className="text-[#0040C1] text-sm">{t('productNa2Page.caseStudy.tag')}</span>
              </div>
              <span className="text-sm shadow-sm bg-white font-medium p-2 rounded-xl">
                <span 
                  style={{
                    background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                  }} 
                  className="text-white rounded-xl p-1 mr-1"
                >
                  {t('productNa2Page.caseStudy.caseStudyBadge')}
                </span>
                {t('productNa2Page.caseStudy.automationBadge')}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-slate-800 text-4xl md:text-5xl font-bold">
              {t('productNa2Page.caseStudy.title')}
            </h2>

            {/* Problem Description */}
            <p className="text-slate-700text-lg leading-relaxed">
              {t('productNa2Page.caseStudy.problem')}
            </p>

            {/* Results Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[#0040C1] text-sm">•</span>
                <h3 className="text-slate-800 font-semibold">{t('productNa2Page.caseStudy.results')}</h3>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  {results.filter(r => r.position === 'left').map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-slate-800">{result.metric}</span>
                      <span className="text-[#1B44FE] font-bold">{result.change}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {results.filter(r => r.position === 'right').map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-slate-800">{result.metric}</span>
                      <span className="text-[#1B44FE] font-bold">{result.change}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              className="text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium mt-4"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
            >
              {t('productNa2Page.caseStudy.readFullCaseStudy')} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
