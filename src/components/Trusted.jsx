import React from "react";
import "./trusted.css"; // Make sure this contains the trusted section CSS

const TrustedSection = () => {
  return (
    <section className="trusted-section">
      {/* Trusted Stats */}
      <div className="trusted-inside-hero">
        <h2>
          Trusted by Over <span>1500</span> Customers Worldwide!
        </h2>
        <div className="trusted-stats">
          <div className="trusted-item">
            <span className="trusted-number">15M+</span>
            <p>Patient Records</p>
          </div>
          <div className="trusted-divider"></div>
          <div className="trusted-item">
            <span className="trusted-number">30k+</span>
            <p>Doctors</p>
          </div>
          <div className="trusted-divider"></div>
          <div className="trusted-item">
            <span className="trusted-number">50+</span>
            <p>Cities</p>
          </div>
          <div className="trusted-divider"></div>
          <div className="trusted-item">
            <span className="trusted-number">10+</span>
            <p>Countries</p>
          </div>
        </div>
      </div>

      {/* Logos Slider */}
      <section className="trusted-logos-slider">
        <div className="logos-track">
          <img src="/client1.png" alt="Health Plus" />
          <img src="/client2.png" alt="Secure Hospitals" />
        
          <img src="/client4.png" alt="Clinica Victoria" />
          <img src="/client5.png" alt="Coramandel" />
          <img src="/client6.png" alt="AG Hospital" />
          <img src="/client7.png" alt="Zens" />
          <img src="/client8.png" alt="Medica Hospital" />
        </div>
         <div className="logos-track">
           <img src="/client2.png" alt="Secure Hospitals" />
          <img src="/client1.png" alt="Health Plus" />
         
          
          <img src="/client4.png" alt="Clinica Victoria" />
          <img src="/client6.png" alt="AG Hospital" />
          <img src="/client5.png" alt="Coramandel" />
          <img src="/client8.png" alt="Medica Hospital" />
          <img src="/client7.png" alt="Zens" />
          
        </div>
        <div className="slider-controls">
          <button className="arrow left-arrow">❮</button>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
          <button className="arrow right-arrow">❯</button>
        </div>
      </section>
    </section>
  );
};

export default TrustedSection;
