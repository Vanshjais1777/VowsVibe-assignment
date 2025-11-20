import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import BestSellers from './components/BestSellers';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import FormulationSection from './components/FormulationSection';
import ManufacturingSection from './components/ManufacturingSection';
import PhilanthropySection from './components/PhilanthropySection';
import CharitySection from './components/CharitySection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Categories />
      <BestSellers />
      <TrustSection />
      <AboutSection />
      <FormulationSection />
      <ManufacturingSection />
      <PhilanthropySection />
      <CharitySection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
