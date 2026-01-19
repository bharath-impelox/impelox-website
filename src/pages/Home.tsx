import Header from '../components/Header';
import Hero from '../components/Hero';
import PartnerLogos from '../components/PartnerLogos';
import NextAction from '../components/NextAction';
import RegulatedIndustries from '../components/RegulatedIndustries';
import Na2InAction from '../components/Na2InAction';
import ProductSuite from '../components/ProductSuite';
import CustomAI from '../components/CustomAI';
import Testimonials from '../components/Testimonials';
import WhyImpelox from '../components/WhyImpelox';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <PartnerLogos />
      <NextAction />
      <RegulatedIndustries />
      <Na2InAction />
      <ProductSuite />
      <CustomAI />
      <Testimonials />
      <WhyImpelox />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Home;

