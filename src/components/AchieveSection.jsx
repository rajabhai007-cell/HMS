// src/components/AchieveSection.jsx
import React from "react";
import "./AchieveSection.css"; // Create this CSS file

const AchieveSection = () => {
  return (
    <section className="achieve-section">
      {/* Section Heading */}
      <h2>Achieve more with us</h2>
      <p>
        Most advanced, Intuitive and Cost-effective solution to <br />
        keep your business humming
      </p>

      {/* Features Container */}
      <div className="features-container">
        {/* Divider */}
        <div className="divider-line"></div>
        <div className="divider-dot"></div>

        {/* Feature Row 1 */}
        <section className="feature-row">
          {/* Text */}
          <div className="feature-text">
            <img
              src="elevate-icon.png"
              alt="icon"
              className="feature-icon"
            />
            <h3>
              Elevate Patient <br /> Experience
            </h3>
            <ul>
              <li>Enhance Accessibility with an Online Presence.</li>
              <li>Streamline Queue Management for Minimal Wait Times.</li>
              <li>Facilitate Follow-ups with Reminders and Notifications.</li>
              <li>Enable Multi-Channel Communication: Email, SMS, and WhatsApp.</li>
              <li>Continuously Improve through Feedback.</li>
            </ul>
          </div>
          {/* Image */}
          <div className="feature-img-box">
            <img
              src="elevate.png"
              alt="Doctor"
              className="feature-image"
            />
          </div>
        </section>


{/* Feature Row 2: Text Left, Image Right */}
<section className="feature-row even-row">
  <div className="feature-text">
    <img src="enhance-icon.png" alt="icon" className="feature-icon" />
    <h3>
      Enhance Operational <br /> Efficiency
    </h3>
    <ul>
      <li>Automate and Streamline Processes.</li>
      <li>Expedite Decision-Making.</li>
      <li>Utilize Data Insights for Ongoing Process Improvement.</li>
      <li>Foster Communication through Various Channels: Email, SMS, and WhatsApp.</li>
      <li>Optimize Care Quality through Workflow Management.</li>
    </ul>
  </div>

  <div className="feature-img-box">
    <img src="enhance.png" alt="Revenue Chart" className="feature-image" />
  </div>
</section>



     
        {/* Feature Row 3 */}
        <section className="feature-row">
          {/* Text */}
          <div className="feature-text">
            <img
              src="lottie-icon.png"
              alt="icon"
              className="feature-icon"
            />
            <h3>
              Boost <br /> Revenue
            </h3>
            <ul>
              <li>Implement Effective Pricing Strategies.</li>
              <li>Diversify Payment Options.</li>
              <li>Ensure Smooth Insurance and B2B Settlements.</li>
              <li>Minimize Revenue Loss.</li>
              <li>Prevent Pilferage.</li>
            </ul>
          </div>
          {/* Image */}
          <div className="feature-img-box">
            <img
              src="boot.png"
              alt="Revenue Chart"
              className="feature-image"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default AchieveSection;
