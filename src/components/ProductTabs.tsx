import React from 'react';

interface Product {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ProductTabs: React.FC<{ products: Product[]; activeProduct: string; onProductChange: (id: string) => void }> = ({ 
  products, 
  activeProduct, 
  onProductChange 
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {products.map((product) => {
        const IconComponent = product.icon;
        const isActive = activeProduct === product.id;
        
        return (
          <button
            key={product.id}
            onClick={() => onProductChange(product.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all ${
              isActive
                ? 'bg-[#EDF1FC] text-[#1B44FE] font-medium'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <IconComponent className={`w-5 h-5 ${isActive ? 'text-[#1B44FE]' : 'text-gray-500'}`} />
            <span className="text-sm">{product.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ProductTabs;

