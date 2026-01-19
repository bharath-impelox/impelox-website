import React from 'react';

const PartnerLogos: React.FC = () => {

  return (
    <section className="bg-white py-12 bg-[#F6F8F9] px-6">
      <div className="container mx-auto">
        <h3 className="text-center text-gray-700 font-medium mb-8">Powering AI agents at</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-60">
            <img 
            src="/images/powered-icon.png" 
            alt="Powered icon" 
            className="h-5 w-[50%]"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;

