import React from 'react';

const TrustedBrands: React.FC = () => {
  const brands = ['Logolpsum', 'IPSUM', 'logo ipsum', 'LOGO', 'Logolpsum', 'Logolpsum'];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-lg md:text-xl font-medium text-gray-700 text-center mb-8">
          Trusted by top-tier brands
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-gray-400 text-sm font-medium border border-gray-200 rounded-lg px-6 py-4"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;

