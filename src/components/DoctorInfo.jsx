// src/components/DoctorInfo.jsx
import React from "react";
import "./DoctorInfo.css"; // Create this CSS file for styling

const DoctorInfo = () => {
  return (
    <section className="testimonial-section">
      {/* Header: Image + Doctor Info */}
      <div className="testimonial-header">
        <div className="header-left">
          <img
            src="/testimonial.png"
            alt="Doctor"
            className="doctor-image"
          />
        </div>

        <div className="header-right">
          <h3 className="hospital-name">Omkar Hospital</h3>
          <p className="reviewer-name">Rajendraprasad B.</p>
          <p className="reviewer-role">Senior Marketing Manager</p>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="testimonial-content">
        <span className="quote start">❝</span>
        <p>
          Mocdoc is one of the best software in hospital management and it is very
          easy to use. Regular updates from Mocdoc help us stay up to date with
          hospital operations.
        </p>
        <span className="quote end">❞</span>
      </div>
     <div className="link">
      {/* Read More Link */}
      <a href="#" className="read-more">Read More →</a>
      </div>
    </section>
  );
};

export default DoctorInfo;
