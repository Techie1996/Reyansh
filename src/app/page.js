import HeroHeader from './sections/HeroHeader';
import About from './sections/About';
import VisionMission from './sections/VisionMission';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <HeroHeader />
      <About />
      <VisionMission />
      <Contact />
      <Footer />
    </div>
  );
}
