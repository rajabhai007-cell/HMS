import React from "react";
import "./Fuel.css";

const Fuel = () => {
  return (
    <section className="fuel-wrapper">
      <h2 className="fuel-title">Fuel your growth using MocDoc</h2>

      <div className="fuel-content">
        <div className="fuel-box">
          <h3>Uncompromised Data Security</h3>
          <p>Compliant to universal standards like HIPPA,ISO 9001:2015 and ISO 27001:2013 providing robust data security, limitless scalability and guaranteed 99.99% uptime.</p>
        </div>

        <div className="fuel-box">
          <h3>Best-in-Class 24/7 Support</h3>
          <p>Dedicated 24/7 support with experts through phone, email and ticketing ensuring all your queries addressed quickly to get the best out of MocDoc.</p>
        </div>
      </div>

      {/* ✅ Bottom Row: Buttons and Image Inline */}
      <div className="fuel-bottom">
        <div className="fuel-buttons">
          <button className="demo-btn">Book a Demo</button>
          <button className="partner-btn">Partner With Us</button>
        </div>

        <div className="fuel-image-wrapper">
          <img
            src="/anime-pic.png"
            alt="Fuel your growth"
            className="fuel-side-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Fuel;
