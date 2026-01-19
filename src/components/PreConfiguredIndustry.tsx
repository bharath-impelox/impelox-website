import React, { useState } from 'react';

const PreConfiguredIndustry: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      tag: 'Healthcare',
      title: 'Fill Every Empty Slot. Automatically.',
      features: ['Booking', 'No-Show Prevention', 'Follow-Up', 'Registration', 'Verification'],
    },
    {
      tag: 'Hospitality',
      title: 'inbound bookings. no staff required.',
      features: ['Reservations', 'Guest Communication', 'Reviews', 'Upsells'],
    },
    {
      tag: 'Sales',
      title: 'Never Let A Deal Go Cold.',
      features: ['Lead Response', 'Quotation', 'Follow-Up', 'Meeting Scheduling'],
    },
    {
      tag: 'Insurance',
      title: 'Client Relationships That Scale.',
      features: ['Renewals', 'Claims Follow-Up', 'Anniversaries', 'Lead Qualification'],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading and Industry Cards */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pre-Configured for your Industry
            </h2>
            
            {industries.map((industry, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndustry(index)}
                className={`bg-white border rounded-xl p-6 pt-8 cursor-pointer transition-all relative ${
                  selectedIndustry === index
                    ? 'border-[#1B44FE] border-2 shadow-md'
                    : 'border-gray-200 hover:shadow-md'
                }`}
              >
                <span 
                  className="absolute -top-3 left-6 text-white text-xs font-medium px-2 py-1 rounded"
                  style={{
                    background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                  }}
                >
                  {industry.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-gray-600 text-sm">
                  {industry.features.map((feature, idx) => (
                    <span key={idx}>
                      {feature}
                      {idx < industry.features.length - 1 && <span className="mx-1">|</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Tagline and Demo Area */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Powerful automation tailored to the exact needs of your industry deployed in weeks, not months.
            </p>
            
            <div className="bg-white border border-gray-300 rounded-xl p-12 h-96 flex flex-col items-center justify-end relative">
              <p className="text-gray-400 text-sm absolute bottom-4">
                Show Demo For Selected One Here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreConfiguredIndustry;
