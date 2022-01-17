import "./App.css";
import HeroSection from './heroSection/HeroSection';
import AboutUs from './about/about';
import Skills from './skills/skills'
import Portfolio from './Portfolio/Portfolio'
import Footer from './footer/footer'
function App() {
  return (
    <div className="App">
      <HeroSection/>
      <AboutUs/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
