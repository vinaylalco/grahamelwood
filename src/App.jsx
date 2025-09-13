import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTASection from './components/CTASection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="space-y-20">
        <Hero />
        <Features />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
