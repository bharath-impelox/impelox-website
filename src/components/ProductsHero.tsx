import React from 'react';
import { Link } from 'react-router-dom';

const ProductsHero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <span className="text-sm shadow-sm bg-white font-medium p-2 rounded-xl">
            <span 
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }} 
              className='text-white rounded-xl p-1 mr-2'
            >
              The AI Brain
            </span>
            The Impelox Product Suite
          </span>
        </div>

        {/* Text Content - Centered */}
        <div className="text-center space-y-6 pb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Business tools that execute themselves
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Five products that work great standalone. Connect to Na2 and they become fully autonomous.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link
              to="/product/na2"
              className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
            >
              Explore Na2—The AI Brain
            </Link>
            <button className="bg-white shadow px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-base border border-gray-200">
              See All Products Below
            </button>
          </div>
        </div>

        {/* Central 3D Graphic - Floating, Centered, Small, Intersecting Sections */}
        <div className="relative translate-y-[60px] -my-16 z-10">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="/images/product_hero_cropped.png" 
                alt="Product Hero Visual" 
                className="w-full h-auto"
                style={{
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default ProductsHero;

