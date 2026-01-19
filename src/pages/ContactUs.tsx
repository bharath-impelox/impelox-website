import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import AIDeployment from '../components/AIDeployment';
import TrustedBrands from '../components/TrustedBrands';
import AboutCTA from '../components/AboutCTA';

const ContactUs = () => {
  return (
    <div className="app">
      <Header />
      <ContactForm />
      <AIDeployment />
      <TrustedBrands />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default ContactUs;

