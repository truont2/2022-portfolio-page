import './App.css';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Header from './components/header/Header';
import Work from './components/work/Work';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Work />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
