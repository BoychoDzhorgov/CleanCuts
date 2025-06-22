import './App.scss';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Studio from './components/studio/studio';
import ServicesSection from './components/services-section/services-section';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-wrapper">
        <Intro />
        <Studio />
        <div className="large-button-wrapper">
          <a href="https://www.fresha.com/bg/a/studio-clean-cutz-plovdiv-bul-knyaginya-mariya-luiza-boulevard-knyaginya-maria-luiza-hxbp3i75/booking?menu=true&dppub=true&offerItems=sv%3A15365086"
            target="_blank"
            rel="noopener noreferrer"
            className="large-button">
                Book Now
          </a>
        </div>
        <ServicesSection />
        <div className="follow-us"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
