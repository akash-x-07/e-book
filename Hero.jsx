import React from "react";
import "./Hero.css";
import ak1 from "/ak1.jpg"; 

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Teen to Millionaire</h1>
        <p className="hero-subtitle">
          Revolutionary strategies for the generation that refuses to wait.
        </p>
        <p className="hero-description">
          This isn't a sugar-coated self-help book. It's a raw, honest guide that helped me escape the average mindset with real shifts, income ideas, and daily habits.
        </p>
        <button className="hero-btn">Start Your Journey</button>
      </div>

      <div className="hero-image">
        <img src={ak1} alt="Teen Success" />
      </div>
    </section>
  );
}

export default Hero;
