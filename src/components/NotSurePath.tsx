import React from 'react';

const NotSurePath: React.FC = () => {
  const options = [
    {
      title: 'Product',
      items: [
        'Standard workflows',
        'Predictable pricing',
        'Quick start',
      ],
    },
    {
      title: 'Service',
      items: [
        'Unique workflows',
        'Legacy integrations',
        'Tight deadlines',
        'Capabilities beyond current products',
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Light blue-gray background box */}
        <div 
          className="rounded-xl p-12 md:p-16"
          style={{
            background: 'linear-gradient(135deg, #F5F7FA 0%, #E9ECEF 100%)'
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Not sure with path is right?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multi-location clinic losing revenue to no-shows, drowning in phone calls, missing after-hours bookings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {options.map((option, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
              >
                {/* Blue pill label at top */}
                <div className="flex justify-center mb-6">
                  <span 
                    className="text-white text-sm font-medium px-4 py-2 rounded-full inline-block"
                    style={{
                      background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                    }}
                  >
                    {option.title}
                  </span>
                </div>
                
                {/* Feature list without bullet points */}
                <div className="space-y-3">
                  {option.items.map((item, idx) => (
                    <div key={idx} className="text-gray-700 text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotSurePath;
