import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import ProductNa2 from './pages/ProductNa2';
import Products from './pages/Products';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/about" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
            >
              <About />
            </motion.div>
          } 
        />
        <Route 
          path="/products" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
            >
              <Products />
            </motion.div>
          } 
        />
        <Route 
          path="/product/na2" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
            >
              <ProductNa2 />
            </motion.div>
          } 
        />
        <Route 
          path="/contact-us" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
            >
              <ContactUs />
            </motion.div>
          } 
        />
        <Route 
          path="/careers" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
            >
              <Careers />
            </motion.div>
          } 
        />
        <Route 
          path="/services" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
            >
              <Services />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
