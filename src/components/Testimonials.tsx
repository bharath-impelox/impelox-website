import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: '"Venkatesh is extremely professional and the best team to work with. Don\'t think twice. They deliver exactly what they promise.".',
      name: 'Founder',
      company: 'AI Solutions Company, UAE',
    },
    {
      quote: '"I am extremely proud of what we built together. The Impelox team built it — I only guided. Today, Aura\'s platform is one of the best. When a group of people get together, we can move mountains."',
      name: 'Business Head',
      company: 'InsureTech Company, UAE',
    },
    {
      quote: 'Implementation was smooth and the results exceeded our expectations.',
      name: 'Emily Rodriguez',
      company: 'Government Agency',
    },
    {
      quote: 'Outstanding support and innovative solutions. Impelox is the future of AI.',
      name: 'David Thompson',
      company: 'Hospitality Inc',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0040C1] text-sm mb-2">• TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            When off-the-shelf isn't enough, we build it for you..
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl px-10 py-2 hover:shadow-lg transition-shadow"
              >
                {/* <div className="flex space-x-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div> */}
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

