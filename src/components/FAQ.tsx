import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How is Na2 different from a chatbot?',
      answer: 'Multi-agent platform executing complete workflows across all channels — not just Q&A.',
    },
    {
      question: 'Can Na2 make phone calls?',
      answer: '',
    },
    {
      question: 'What languages?',
      answer: '',
    },
    {
      question: 'Implementation time?',
      answer: '',
    },
    {
      question: 'Is it secure?',
      answer: '',
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left */}
          <div>
            <p className="text-[#0040C1] text-sm mb-2">• FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Here's everything you need to know before getting started.
            </p>
            <div className="bg-gray-100 rounded-xl p-6 space-y-4">
              <p className="text-gray-900 font-medium">Still have questions?</p>
              <Link
                to="/contact-us"
                className="inline-block text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
                style={{
                  background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                }}
              >
                Contact Us
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
