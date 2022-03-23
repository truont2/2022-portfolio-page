import "./App.css";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Work from "./components/work/Work";
import Navbar from "./components/navbar/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Navbar />
        <Header />
        <Work />
        <About />
        <Skills />
        <Footer />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
