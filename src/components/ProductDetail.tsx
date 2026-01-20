import React from 'react';
import { Check, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    tag: string;
    title: string;
    description: string;
    withNa2: string;
    standalone: string;
    image?: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { t } = useTranslation();
  // Use CRM image for CRM product, or use provided image, or placeholder
  const imageSrc = product.image || (product.id === 'crm' ? '/images/crm.png' : '/images/crm.png');

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Dashboard Mockup */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm min-h-[400px] flex items-center justify-center relative">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={`${product.name} Dashboard`}
                className="w-full h-full object-cover"
                style={{
                  filter: 'blur(2px)',
                  opacity: 0.8
                }}
              />
            ) : (
              <div className="text-center text-gray-400 text-lg font-medium">
                {product.name} Dashboard Mockup
              </div>
            )}
          </div>

          {/* Right - Description */}
          <div className="bg-[#F5FAFF] p-10 rounded-lg space-y-6 flex flex-col justify-start">
            <div>
              <p className="text-[#0040C1] text-sm mb-2">{product.tag}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {product.title}
              </h2>
              <p className="text-lg text-gray-600">
                {product.description}
              </p>
            </div>

            {/* Comparison */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#D1E0FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4  text-[#0040C1] " />
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium text-[#1B44FE]">{t('productsPage.productDetail.withNa2')}</span> {product.withNa2}
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#EEEEEF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-[#0A0B10]" />
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium text-gray-500">{t('productsPage.productDetail.standalone')}</span> {product.standalone}
                </p>
              </div>
            </div>

            {/* Learn More Button - Bottom Right */}
            <div className="flex justify-end mt-auto pt-4">
              <button
                className="text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
                style={{
                  background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                }}
              >
                {t('productsPage.productDetail.learnMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

