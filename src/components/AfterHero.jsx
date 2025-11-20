// src/components/AfterHero.jsx
import React from "react";
import "./AfterHero.css"; // Create this CSS file for styling

const AfterHero = () => {
  return (
    <section className="after-hero-section">
      {/* Text Section */}
      <div className="after-hero-text">
        <h1>
          Top Healthcare Software For <span>Simplified</span> Hospital Operations
        </h1>
        <h3>Is Outdated Technology Slowing You Down?</h3>
        <p>
          Upgrade to MocDoc, the cloud-based, fully integrated, secure, and reliable 
          healthcare management suite. Simplify and optimize your healthcare 
          operations today.
        </p>
      </div>

      {/* Feature Map Section */}
      <div className="feature-map">
        <img src="/tech.png" className="map-image" alt="diagram" />

        {/* Left Side Hotspots */}
        <div className="hotspot box1" data-text="Always up-to-date with hassle-free maintenance,99.99% uptime guarantees,full backup, failover redundancy and robust security."></div>
  <div className="hotspot box2" data-text="Data Processing for accurate analytics."></div>
  <div className="hotspot box3" data-text="User Insights from real-time reports."></div>

        {/* Right Side Hotspots */}
        <div className="hotspot box4"></div>
        <div className="hotspot box5"></div>
        <div className="hotspot box6"></div>
      </div>
    </section>
  );
};

export default AfterHero;
