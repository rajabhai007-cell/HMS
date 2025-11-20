import React from "react";
import { Link } from "react-router-dom";
import "./Lms.css";

function Lms() {
  return (
    <>
      {/* 🧭 Header Section */}
      <header className="lms-header">
        <div className="container">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <span className="separator">/</span>
          <button className="nav-btn active">LMS</button>
        </div>
      </header>

      {/* 🧩 Main LIMS Section */}
      <section className="lms-section">
        {/* Left: Text Section */}
        <div className="lms-left">
          <h1 className="lms-title">
            Best LIMS Software <br /> for{" "}
            <span className="highlight">Hospitals</span> &{" "}
            <span className="highlight">Clinical Labs</span> Management
          </h1>

          <p className="lms-description">
            Your Go-To Solution for Boosting Operational Efficiency and Easing
            Lab Workflows, Backed by Extensive User Trust.
          </p>

          <div className="lms-buttons">
            <Link to="/book-demo" className="btn-primary">
              Book a Demo
            </Link>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="lms-right">
          <img
            src="/lab.png"
            alt="Hospital LIMS"
            className="lms-image"
          />
        </div>
      </section>
      <div className="video-wrapper">
      <video
        className="lims-video"
        src="/mocdoc-hms-demo.webm"  // 🎬 Place your video file in the public folder
        controls
        autoPlay
        muted
        loop
      ></video>
    </div>
    {/* 🧠 Features Section */}
<section className="lims-features">
  <h2 className="features-title">
    Advanced <span className="highlight">Clinic</span> &{" "}
    <span className="highlight">Hospital</span> Laboratory Management Software
  </h2>

  <div className="features-grid">
    <div className="feature-card">
      <div className="feature-icon">
        <img src="/unrivaled.png" alt="Unmatched Scale" />
      </div>
      <h3>Unmatched Scale</h3>
      <p>
        Seamlessly handle millions of samples with robust architecture and
        proven expertise in lab workflows.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">
        <img src="/unmatched.png" alt="Unrivaled Efficiency" />
      </div>
      <h3>Unrivaled Efficiency</h3>
      <p>
        Automate tasks, streamline workflows, and save time for what matters
        most — research and analysis.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">
        <img src="/unwavering.png" alt="Unwavering Accuracy" />
      </div>
      <h3>Unwavering Accuracy</h3>
      <p>
        Ensure data integrity and reliable results with advanced validation
        features and stringent compliance tools.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">
        <img src="/unrivaled.png" alt="Unbreakable Trust" />
      </div>
      <h3>Unbreakable Trust</h3>
      <p>
        Join the global network of labs trusting MocDoc Laboratory Solutions for
        critical sample management.
      </p>
    </div>
  </div>
</section>
 {/* ⚙️ Key Features Section */}
      <section className="key-features">
        <h2>
          Key Features of MocDoc Laboratory Information Management System (LIMS)
        </h2>
        <p className="key-desc">
          MocDoc LIMS offers a suite of advanced features designed to streamline
          laboratory operations, enhance efficiency, and maintain compliance
          with regulatory standards.
        </p>

        <div className="key-grid">
          <div className="key-card">
            <span className="icon">🧪</span>
            <h3>Sample Management</h3>
            <p>
              Simplifies sample collection, processing, and storage with
              real-time tracking and automated workflows ensuring full
              traceability.
            </p>
          </div>

          <div className="key-card">
            <span className="icon">📍</span>
            <h3>Multi-Location Management</h3>
            <p>
              Centralize and standardize operations across multiple branches,
              ensuring consistent performance and efficient coordination.
            </p>
          </div>

          <div className="key-card">
            <span className="icon">⚙️</span>
            <h3>Machine Integration</h3>
            <p>
              Integrates seamlessly with laboratory instruments to automate data
              transfer, reduce errors, and streamline operations.
            </p>
          </div>

          <div className="key-card">
            <span className="icon">📊</span>
            <h3>Result Management</h3>
            <p>
              Automates result management with real-time tracking, analytics,
              and structured approval workflows.
            </p>
          </div>

          <div className="key-card">
            <span className="icon">🚚</span>
            <h3>Dispatch Management</h3>
            <p>
              Streamlines report delivery with multiple channels and ensures
              transparent communication.
            </p>
          </div>

          <div className="key-card">
            <span className="icon">📜</span>
            <h3>Compliance & Regulations</h3>
            <p>
              Ensures compliance with HIPAA, NABL, and CAP standards with secure
              audit trails and access controls.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

export default Lms;
