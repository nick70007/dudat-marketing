import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { PortfolioTestimonials } from './components/PortfolioTestimonials';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen dark">
      <Navigation />
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="portfolio"><PortfolioTestimonials /></section>
      <section id="team"><Team /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}
