import About from "./components/About";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialNavMobile from "./components/SocialNavMobile";
import 'tailwindcss/tailwind.css'


function App() {
  return (
<div>
  <NavBar />
  <Home />
  <About />
  <Portfolio />
  <Experience />
  <Contact />

  <SocialNavMobile />
  <SocialLinks />
</div>
  );
}

export default App;
