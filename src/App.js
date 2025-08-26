import '../src/style/style.css';
import './fonts/font.css'
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Componets/Header';
import HeroBanner from './Componets/HeroBanner';
import About from './Componets/About';
import MarqueeText from './Componets/MarqueeText';
import Services from './Componets/Services';
import Portfolio from './Componets/Portfolio';
import Resume from './Componets/Resume';
import { useEffect } from 'react';

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,    // whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Header />
      <HeroBanner />
      <MarqueeText />
      <About />
      <Services />
      <Portfolio />
      <MarqueeText />
      <Resume />
    </>
  );
}

export default App;
