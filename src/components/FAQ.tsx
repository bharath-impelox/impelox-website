import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t('productNa2Page.faq.questions.q1'),
      answer: t('productNa2Page.faq.answers.a1'),
    },
    {
      question: t('productNa2Page.faq.questions.q2'),
      answer: t('productNa2Page.faq.answers.a2'),
    },
    {
      question: t('productNa2Page.faq.questions.q3'),
      answer: t('productNa2Page.faq.answers.a3'),
    },
    {
      question: t('productNa2Page.faq.questions.q4'),
      answer: t('productNa2Page.faq.answers.a4'),
    },
    {
      question: t('productNa2Page.faq.questions.q5'),
      answer: t('productNa2Page.faq.answers.a5'),
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left */}
          <div>
            <p className="text-[#0040C1] text-sm mb-2">• {t('productNa2Page.faq.tag')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('productNa2Page.faq.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('productNa2Page.faq.description')}
            </p>
            <div className="bg-gray-100 rounded-xl p-6 space-y-4">
              <p className="text-gray-900 font-medium">{t('productNa2Page.faq.stillHaveQuestions')}</p>
              <Link
                to="/contact-us"
                className="inline-block text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
                style={{
                  background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                }}
              >
                {t('productNa2Page.faq.contactUs')}
              </Link>
            </div>
          </div>

          {/* Right - FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 border border-gray-200 rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-medium">
                    {index + 1}. {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openIndex === index && faq.answer && (
                  <p className="text-gray-600 text-sm mt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
