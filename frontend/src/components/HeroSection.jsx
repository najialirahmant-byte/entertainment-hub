import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Entertainment Hub</h1>
        <p>Stream thousands of movies and TV shows anytime, anywhere</p>
        <button className="btn btn-primary">Start Watching</button>
      </div>
    </section>
  );
}

export default HeroSection;
