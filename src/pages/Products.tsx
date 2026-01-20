import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/ProductsHero';
import ProductTabs from '../components/ProductTabs';
import ProductDetail from '../components/ProductDetail';
import ProductsHowItWorks from '../components/ProductsHowItWorks';
import ProductsCTA from '../components/ProductsCTA';
import { LayoutGrid, ClipboardList, FileText, Calendar, DollarSign } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();
  const products = [
    { id: 'crm', name: t('productsPage.productDetail.crm.title'), icon: LayoutGrid },
    { id: 'project-management', name: t('productsPage.productDetail.projectManagement.title'), icon: ClipboardList },
    { id: 'contact-form', name: t('productsPage.productDetail.contactForm.title'), icon: FileText },
    { id: 'calendar', name: t('productsPage.productDetail.calendar.title'), icon: Calendar },
    { id: 'pricing-billing', name: t('productsPage.productDetail.pricingBilling.title'), icon: DollarSign },
  ];

  const productDetails = {
    crm: {
      id: 'crm',
      name: t('productsPage.productDetail.crm.title'),
      tag: `• ${t('productsPage.productDetail.tag')}`,
      title: t('productsPage.productDetail.crm.title'),
      description: t('productsPage.productDetail.crm.description'),
      withNa2: t('productsPage.productDetail.crm.withNa2'),
      standalone: t('productsPage.productDetail.crm.standalone'),
    },
    'project-management': {
      id: 'project-management',
      name: t('productsPage.productDetail.projectManagement.title'),
      tag: `• ${t('productsPage.productDetail.tag')}`,
      title: t('productsPage.productDetail.projectManagement.title'),
      description: t('productsPage.productDetail.projectManagement.description'),
      withNa2: t('productsPage.productDetail.projectManagement.withNa2'),
      standalone: t('productsPage.productDetail.projectManagement.standalone'),
    },
    'contact-form': {
      id: 'contact-form',
      name: t('productsPage.productDetail.contactForm.title'),
      tag: `• ${t('productsPage.productDetail.tag')}`,
      title: t('productsPage.productDetail.contactForm.title'),
      description: t('productsPage.productDetail.contactForm.description'),
      withNa2: t('productsPage.productDetail.contactForm.withNa2'),
      standalone: t('productsPage.productDetail.contactForm.standalone'),
    },
    calendar: {
      id: 'calendar',
      name: t('productsPage.productDetail.calendar.title'),
      tag: `• ${t('productsPage.productDetail.tag')}`,
      title: t('productsPage.productDetail.calendar.title'),
      description: t('productsPage.productDetail.calendar.description'),
      withNa2: t('productsPage.productDetail.calendar.withNa2'),
      standalone: t('productsPage.productDetail.calendar.standalone'),
    },
    'pricing-billing': {
      id: 'pricing-billing',
      name: t('productsPage.productDetail.pricingBilling.title'),
      tag: `• ${t('productsPage.productDetail.tag')}`,
      title: t('productsPage.productDetail.pricingBilling.title'),
      description: t('productsPage.productDetail.pricingBilling.description'),
      withNa2: t('productsPage.productDetail.pricingBilling.withNa2'),
      standalone: t('productsPage.productDetail.pricingBilling.standalone'),
    },
  };

  const [activeProduct, setActiveProduct] = useState('crm');

  return (
    <div className="app">
      <Header />
      <ProductsHero />
      
      {/* Product Tabs Section */}
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto">
          {/* Autonomy Indicator - Top */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#1B44FE] font-medium text-sm whitespace-nowrap">{t('productsPage.autonomy.withNa2')}</span>
              {/* Toggle Switch */}
              <div className="relative inline-flex items-center">
                <div className="w-10 h-5 bg-gray-900 rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-[#1B44FE] rounded-full"></div>
                </div>
              </div>
              <span className="text-gray-900 font-medium text-sm whitespace-nowrap">{t('productsPage.autonomy.standalone')}</span>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {t('productsPage.autonomy.title')}
              </h3>
              <p className="text-gray-600">
                {t('productsPage.autonomy.description')} {t('productsPage.autonomy.subtitle')}
              </p>
            </div>
          </div>

          <ProductTabs 
            products={products}
            activeProduct={activeProduct}
            onProductChange={setActiveProduct}
          />
          <ProductDetail product={productDetails[activeProduct as keyof typeof productDetails]} />
        </div>
      </section>

      <ProductsHowItWorks />
      <ProductsCTA />
      <Footer />
    </div>
  );
};

export default Products;

