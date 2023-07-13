import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="">
      <Sidenav />
      <Main/>
      <About/>
      <Skills/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
