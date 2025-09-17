import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;
