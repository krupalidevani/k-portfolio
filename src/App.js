import '../src/style/style.css';
import './fonts/font.css'
import './App.css';
import Header from './Componets/Header';
import HeroBanner from './Componets/HeroBanner';
import About from './Componets/About';
import MarqueeText from './Componets/MarqueeText';
import Services from './Componets/Services';
import Portfolio from './Componets/Portfolio';
import Resume from './Componets/Resume';

function App() {
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
