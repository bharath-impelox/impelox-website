import Header from '../components/Header';
import Footer from '../components/Footer';
import Na2Hero from '../components/Na2Hero';
import MeetTheAgents from '../components/MeetTheAgents';
import PreConfiguredIndustry from '../components/PreConfiguredIndustry';
import HowItWorks from '../components/HowItWorks';
import CaseStudy from '../components/CaseStudy';
import FAQ from '../components/FAQ';
import Na2CTA from '../components/Na2CTA';

const ProductNa2 = () => {
  return (
    <div className="app">
      <Header />
      <Na2Hero />
      <MeetTheAgents />
      <PreConfiguredIndustry />
      <HowItWorks />
      <CaseStudy />
      <FAQ />
      <Na2CTA />
      <Footer />
    </div>
  );
};

export default ProductNa2;

