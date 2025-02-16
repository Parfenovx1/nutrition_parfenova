import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Results from './components/Results/Results';
import AboutMe from './components/AboutMe/AboutMe';
import Guides from './components/Guides/Guides';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Results />
      <AboutMe />
      <Guides />
      <Services />
    </div>
  );
}

export default App;
