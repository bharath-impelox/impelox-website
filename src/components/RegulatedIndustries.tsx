import React from 'react';

const RegulatedIndustries: React.FC = () => {
  const industries = [
    {
      title: 'Healthcare',
      icon: '/images/healthcare-icon.png',
    },
    {
      title: 'Hospitality',
      icon: '/images/hospitality-icon.png',
    },
    {
      title: 'Sales',
      icon: '/images/sales-icon.png',
    },
    {
      title: 'Insurance',
      icon: '/images/insurance-icon.png',
    },
  ];

  return (
    <section style={{
      backgroundImage: 'url(/images/third_bg.png)',
      backgroundSize: 'cover', backgroundPosition: 'center'
    }}
      className="m-[100px] rounded-lg py-20 px-6 relative overflow-hidden">
      <div className="container  relative z-10">
        <div className="text-center mb-16">
          <p className='text-[#0040C1]'>INDUSTRIES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Regulated <br></br> <span className='text-[#1B44FE]'>Industries</span>
          </h2>
          <p className=" text-gray-600 max-w-2xl mx-auto">
            We specialize in industries where compliance matters and errors aren't an option.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl pt-8 pl-8 pr-8 shadow-md hover:shadow-lg transition-shadow flex items-center gap-6"
            >
              <div className="flex-1 self-start">
                <h3 className="text-xl text-[#0040C1] text-gray-900">{industry.title}</h3>
              </div>
              <div className="flex-shrink-0 self-end">
                <img 
                  src={industry.icon} 
                  alt={industry.title} 
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base"
            style={{
              background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
            }}>
            See Industry Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegulatedIndustries;

