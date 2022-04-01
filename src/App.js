import "./App.css";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Work from "./components/work/Work";
import Navbar from "./components/navbar/Navbar";
import Education from './components/Education/Education'
import { StyledEngineProvider } from "@mui/material/styles";
import Contact from './components/Contact/Contact'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Navbar />
        <Header />
        <Work />
        <About />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
