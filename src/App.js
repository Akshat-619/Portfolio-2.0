import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/about";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
