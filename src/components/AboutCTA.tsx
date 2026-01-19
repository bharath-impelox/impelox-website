import React from 'react';

const AboutCTA: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div 
          className="rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/na2-bottom-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative z-10">
            <p className="text-[#0040C1] text-sm mb-4">• GET STARTED</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Become an AI-First Company?
            </h2>
            
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Move from isolated AI concepts to production-ready systems that automate real workflows and deliver measurable outcomes.
            </p>

            <button
              className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base whitespace-nowrap"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
            >
              Get started today →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;

