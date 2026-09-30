import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyUs from './components/WhyUs';
import Results from './components/Results';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Resources from './components/Resources';
import AdmissionCTA from './components/AdmissionCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-body bg-paper-100">
      <Navbar />
      <Hero />
      <Stats />
      <WhyUs />
      <Results />
      <Courses />
      <Faculty />
      <Testimonials />
      <Gallery />
      <Resources />
      <AdmissionCTA />
      <Contact />
      <Footer />
    </div>
  );
}
