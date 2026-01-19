import React from 'react';
import { Link } from 'react-router-dom';

const Na2CTA: React.FC = () => {
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Ready to see Na2 in action?
            </h2>
            
            <p className="text-gray-700  mb-8 max-w-2xl mx-auto opacity-95">
              Pricing is based on your business size, channels, and agent configuration. Every engagement starts with a consultation to design the right setup for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button
                className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base whitespace-nowrap"
                style={{
                  background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                }}
              >
                Schedule a Demo →
              </button>
              
              <Link
                to="/contact-us"
                className="bg-white text-[#1B44FE] px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base whitespace-nowrap border-2 border-white inline-block"
              >
                Contact Us
              </Link>
            </div>

            <p className="text-gray-700 text-sm opacity-90">
              Free consultation. Available in English and Japanese.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Na2CTA;

