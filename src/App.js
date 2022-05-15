import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyled } from "./componentsGlobal/FontsStyled";
import { NavBar, NavLink, Logo } from "./componentsGlobal/ComponentsGlobal";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <div>
      <GlobalStyled />
      <Router basename={process.env.PUBLIC_URL + "/Portfolio"}>
        <NavBar>
          <Logo to="/">R</Logo>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-page">About</NavLink>
          <NavLink to="/project-page">Projects</NavLink>
          <NavLink to="/resume-page">Resume</NavLink>
          <NavLink to="/contact-page">Contact</NavLink>
        </NavBar>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/project-page" element={<ProjectsPage />} />
          <Route path="/resume-page" element={<ResumePage />} />
          <Route path="/contact-page" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
