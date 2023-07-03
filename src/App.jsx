import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  useLocation,
  BrowserRouter,
} from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Routes location={location} key={location.pathname}>
//         <Sidenav />
//         <Route index element={<Main />} />
//         <Route path="about" element={<About />} />
//         <Route path="skills" element={<Skills />} />
//         <Route path="work" element={<Work />} />
//         <Route path="projects" element={<Projects />} />
//         <Route path="skills" element={<Skills />} />
//       </Routes>
//     </>
//   )
// );

function App() {

  return (
    <div>
      <Sidenav />
      <Main/>
      <About/>
      <Skills/>
      <Work/>
      <Projects/>
    </div>
  );
}

export default App;
