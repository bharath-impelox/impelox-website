import React from 'react';

const MeetFounders: React.FC = () => {
  const founders = [
    {
      name: 'Brandon Stevenson',
      role: 'CEO',
      image: '/images/founder-1.png',
    },
    {
      name: 'Wayne Rooney',
      role: 'CTO',
      image: '/images/founder-2.png',
    },
    {
      name: 'Robert Fox',
      role: 'CPO',
      image: '/images/founder-3.png',
    },
    {
      name: 'Jacob Jones',
      role: 'COO',
      image: '/images/founder-4.png',
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet our Founders
            </h2>
            <p className="text-lg text-gray-600">
              Our team is a passionate team of data experts, product innovators.
            </p>
            <button
              className="text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
            >
              Contact us →
            </button>
          </div>

          {/* Right - Founder Images */}
          <div className="grid grid-cols-2 gap-6">
            {founders.map((founder, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 rounded-xl overflow-hidden aspect-square mb-3">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400">Image</div>';
                    }}
                  />
                </div>
                <h3 className="font-bold text-gray-900">{founder.name}</h3>
                <p className="text-sm text-gray-600">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetFounders;

