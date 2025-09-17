import React from "react";
import "./introduction.css";

function Introduction() {
  return (
    <section className="introduction" id="intro">
      <div className="intro-text">
        <h1>Hello, I'm Akshat Sharma</h1>
        <p>
          I'm a Full Stack Developer passionate about creating beautiful and
          functional web applications. I love turning ideas into reality with
          code.
        </p>
        <a href="#contact" className="contact-button">
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default Introduction;
