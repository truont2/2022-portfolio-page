import "./App.css";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Work from "./components/work/Work";
import Navbar from "./components/navbar/Navbar";
import Experiences from "./components/Experiences/Experiences";
import { StyledEngineProvider } from "@mui/material/styles";
import Contact from "./components/Contact/Contact";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <div className="App">
        {/* <Navbar /> */}
        <Header />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
