import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Introduction from "./Components/Introduction/introduction"; // Added import
import About from "./Components/About/about";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";

console.log("Navbar:", Navbar);
console.log("Hero:", Hero);
console.log("Introduction:", Introduction); // Added log
console.log("About:", About);
console.log("Skills:", Skills);
console.log("Projects:", Projects);
console.log("Contact:", Contact);
console.log("Footer:", Footer);

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction /> {/* Added Introduction section */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
