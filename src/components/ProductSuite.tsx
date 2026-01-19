import React from 'react';
import { Link } from 'react-router-dom';

const ProductSuite: React.FC = () => {
  const products = [
    { 
      title: 'CRM', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#1B44FE" viewBox="0 0 24 24" style={{ color: '#1B44FE' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#1B44FE" />
          <circle cx="12" cy="12" r="2" fill="#1B44FE" />
        </svg>
      ),
      description: 'Customer data that updates and acts on itself.' 
    },
    { 
      title: 'Project Management', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#1B44FE" viewBox="0 0 24 24" style={{ color: '#1B44FE' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="#1B44FE" />
        </svg>
      ),
      description: 'Tasks that move forward — even when people forget.' 
    },
    { 
      title: 'Contact Form', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#1B44FE" viewBox="0 0 24 24" style={{ color: '#1B44FE' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="#1B44FE" />
        </svg>
      ),
      description: 'Keep tabs on all your regular payments and set them up to run automatically, all in one spot!' 
    },
    { 
      title: 'Calendar', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#1B44FE" viewBox="0 0 24 24" style={{ color: '#1B44FE' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#1B44FE" />
        </svg>
      ),
      description: 'Download detailed financial reports and statements anytime for easy record-keeping.' 
    },
    { 
      title: 'Pricing & Billing', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#1B44FE" viewBox="0 0 24 24" style={{ color: '#1B44FE' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="#1B44FE" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#1B44FE" />
        </svg>
      ),
      description: 'Easily manage shared accounts with family or team members with customizable access levels.' 
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0040C1] text-sm mb-2">• OTHER PRODUCTS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The <span className="text-[#1B44FE]">Impelox</span> Product Suite
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Na2 is powerful alone. Even better with our integrated tools.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* First row - 2 cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {products.slice(0, 2).map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#EDF1FC] rounded-lg flex items-center justify-center mb-4" >
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>

          {/* Second row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {products.slice(2).map((product, index) => (
              <div key={index + 2} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#EDF1FC] rounded-lg flex items-center justify-center mb-4" >
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
            style={{
              background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
            }}
          >
            Explore All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;

