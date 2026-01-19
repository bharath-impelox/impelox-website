import React from 'react';

const Na2InAction: React.FC = () => {
  const stats = [
    { value: '34%', label: 'fewer no-shows' },
    { value: '60%', label: 'less staff phone time' },
    { value: '45%', label: 'after-hours bookings captured' },
  ];

  return (
    <section className="m-[100px] bg-white py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#0040C1] text-sm mb-2">• METRICS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Na2 in action</h2>
        </div>

        {/* Main Card */}
        <div className="bg-gray-100 rounded-2xl p-8 md:p-12 mx-auto">
          <div className="grid md:grid-cols-2">
            {/* Left Section - Metrics */}
            <div className="flex items-start gap-0">
              {stats.map((stat, index) => (
                <div key={index} className="flex-1 relative flex items-center">
                  {index > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#1B44FE]"></div>
                  )}
                  <div className="px-4 md:px-6 w-full">
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Section - Testimonial */}
            <div className="border-l border-[#1B44FE] pl-8 md:pl-12 mt-8 md:mt-0">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Na2 handles calls that would have gone to voicemail. Patients get scheduled. We get paid."
              </p>
              <div className="text-sm text-gray-500">
                Operations Director, US Chiropractic Network
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Na2InAction;

