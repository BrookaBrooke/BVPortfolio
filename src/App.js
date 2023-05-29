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
 <div className=" bg-gradient-to-r from-violet-400 via-indigo-400 to-indigo-600">
  <Home />
  <About />
  <Portfolio />
  <Experience />
  <Contact />

  <SocialNavMobile />
  <SocialLinks />
  </div>
</div>
  );
}

export default App;
