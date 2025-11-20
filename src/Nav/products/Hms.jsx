import React from "react";
import { Link } from "react-router-dom";
import "./HMS.css";

function Hms() {
  return (
    <div className="hms-page">
      {/* 🧭 Header Section */}
      <header className="hms-header">
                   <Link to="/" className="nav-item">
                              Home
                            </Link>
          <button className="nav-btn active">HMS</button>
      </header>

      {/* 🩺 Main HMS Content */}
      <div className="hms-container">
        <div className="hms-content">
          <div className="hms-text-section">
           

            <h1 className="hms-title">
              Best Hospital Management <br />
              System For <span>Better Hospital</span> <br />
              Operations
            </h1>

            <p className="hms-description">
              Empower Your Hospital's Efficiency and Patient Care with MocDoc HMS –
              Trusted by 30k+ Healthcare Professionals Worldwide for Over 12 Years.
            </p>

            <div className="hms-buttons">
              <button className="btn-primary" onClick={() => navigate("/BookDemo")}>
                Book a Demo
              </button>
              <button className="btn-outline">Contact Us</button>
            </div>
          </div>

          <div className="hms-image-section">
            <img src="/hospital-man.png" alt="Doctor" className="doctor-img" />
          </div>
       
        </div>

      </div>
      <div className="hms-video-wrapper">
  <h2>🎥 Watch MocDoc HMS in Action</h2>
  <video
    className="hms-video"
    src="/mocdoc-hms-demo.webm"
    autoPlay
    muted
    loop
    playsInline
  ></video>
</div>
{/* 🌟 Features Section */}
<section className="hms-features">
  <h2 className="features-heading">
    <span>Hospital Management Software</span> for Healthcare Facilities
  </h2>

  <div className="features-grid">
    <div className="feature-card">
      <div className="feature-icon bg-light-orange">
        <img src="/icons/interface.png" alt="Interface Icon" />
      </div>
      <h3>Intuitive Interface</h3>
      <p>
        User-friendly and accessible, designed for seamless adoption by
        all staff members.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon bg-light-yellow">
        <img src="/icons/mobile.png" alt="Mobile Icon" />
      </div>
      <h3>Mobile Accessibility</h3>
      <p>
        Manage operations and patient interactions from anywhere,
        anytime, on any device.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon bg-light-purple">
        <img src="/icons/scale.png" alt="Scalable Icon" />
      </div>
      <h3>Scalable Solution</h3>
      <p>
        Scale according to your needs, supporting hospitals of all sizes
        and complexities.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon bg-light-orange">
        <img src="/icons/support.png" alt="Support Icon" />
      </div>
      <h3>Dedicated Support</h3>
      <p>
        Our team supports you at every stage, helping you achieve success.
      </p>
    </div>
  </div>
</section>
<section className="features-section">
      <h2 className="features-title">
        Cloud-Based Hospital Management Software for{" "}
        <span>Efficient Operations</span>
      </h2>

      <div className="features-wrapper">
        {/* Left List */}
        <div className="features-list">
          <div className="feature-item">
            <span className="icon">📁</span> Simplify workflow
          </div>

          <div className="feature-item active">
            <span className="icon">#</span>
            <div>
              <h3>Comprehensive Patient Lifecycle Management</h3>
              <p>
                Quickly retrieve real-time information and manage appointment
                bookings, billings, diagnoses, and treatment plans — all within
                one integrated platform.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">⚙️</span> Powerful Operational Features
          </div>

          <div className="feature-item">
            <span className="icon">🌀</span> Effortless Compliance Management
          </div>
        </div>

        {/* Right Image */}
        <div className="features-image">
          <img src="/img/hms-main.png" alt="HMS UI" className="main-img" />
          <img src="/img/hms-popup.png" alt="HMS Popup" className="popup-img" />
        </div>
      </div>
    </section>

    </div>
  );
}

export default Hms;
