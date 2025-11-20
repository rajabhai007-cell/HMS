import React from "react";
import "./HeroMid.css";

const HeroMid = () => {
  return (
    <section className="hero-row">
      {/* Top Heading */}
      <h2 className="hero-left">
        Best Cloud-based Healthcare Technology Software & Solutions
      </h2>

      {/* Middle Row: Image left, cards right */}
      <div className="hero-middle">
        {/* Left: Hero Image */}
        <div className="hero-main-image">
          <div className="hero-image-rectangle">
            <img src="/doctor2.png" alt="Doctor" />
          </div>
        </div>

        {/* Right: Cards 2x2 */}
        <div className="hero-cards">
          <div className="hero-card card-orange">
            <div className="hero-card-icon">🏥</div>
            <h3>Clinic/Polyclinic Management Software</h3>
            <p>
              MocDoc Clinic Management System provides a complete solution with
              features such as Appointment Management, OP Case Sheets, Patient
              Dashboard, and streamlined Billing & Accounting tools.
            </p>
          </div>

          <div className="hero-card card-blue">
            <div className="hero-card-icon">🏩</div>
            <h3>Hospital Management Software</h3>
            <p>
              MocDoc Hospital Management System software streamlines operations
              from patient registration to discharge, optimizing clinical
              workflows and administrative tasks for improved healthcare delivery.
            </p>
          </div>

          <div className="hero-card card-pink">
            <div className="hero-card-icon">🧪</div>
            <h3>Laboratory Management Software</h3>
            <p>
              MocDoc Laboratory Management System manages the sample lifecycle
              from billing to report dispatch, enhancing test execution and
              workflow efficiency for better service quality.
            </p>
          </div>

          <div className="hero-card card-green">
            <div className="hero-card-icon">💊</div>
            <h3>Pharmacy Management Software</h3>
            <p>
              MocDoc Pharmacy Management System offers advanced prescription
              management, real-time inventory tracking, and integrated analytics
              for efficient stock management and enhanced customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMid;
