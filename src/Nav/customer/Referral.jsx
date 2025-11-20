
import React from "react";
import { Link } from "react-router-dom";
import "./referral.css";

const Referral = () => {
  return (
    <section className="referral-section">
      {/* 🧭 Breadcrumb Navigation */}
      <div className="breadcrumb">
        <Link to="/" className="home-link">
          Home
        </Link>
        <span className="arrow">›</span>
        <span>Referral Program</span>
      </div>

      {/* 🌟 Referral Content */}
      <div className="referral-content">
        <div className="text-content">
          <span className="tag">Referral Program</span>
          <h1>
            Your <span className="highlight">Network</span> Benefits Everyone!
          </h1>
          <h2>Join Our Referral Program & Earn Exclusive Rewards</h2>
          <p>
            At <strong>MocDoc</strong>, we believe in the power of recommendations and
            the trust within our community. To express our appreciation for your
            referrals, we’re thrilled to introduce a distinctive incentive program.
          </p>
          <p>
            Your support not only helps us grow but also ensures we continue delivering
            exceptional healthcare solutions. Join us in making a difference, one referral
            at a time.
          </p>

          <div className="cta-buttons">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src="/store.png" alt="Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="/play-store.png" alt="App Store" />
            </a>
          </div>
        </div>

        {/* 🌐 Illustration / Image */}
        <div className="image-content">
          <img src="/.png" alt="Referral Program" />
        </div>
      </div>

      {/* 🎁 CTA Section */}
      <section className="referral-cta">
        <div className="cta-content">
          <h2>Start Referring, Start Earning!</h2>
          <p>
            Share MocDoc’s Hospital Information Management System and get rewarded
            every time your referral joins the family.
          </p>
          <button className="cta-btn">Join Now →</button>
        </div>
      </section>
       <section className="referral-form-section">
      {/* Header */}
      <div className="referral-header">
        <h1>Referral Form</h1>
        <p>How does our Referral Program work?</p>
      </div>

      {/* Steps Section */}
      <div className="referral-steps">
        {/* Step 1 */}
        <div className="step-card">
          <div className="step-number">01</div>
          <h3>Recommend & Earn</h3>
          <p>
            Simply refer MocDoc to your peers and colleagues. If your referral becomes a valued client, 
            we'll reward you with either a complimentary one-month extension to your subscription 
            or up to <span className="highlight">30% of the deal value</span> in cash.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png"
            alt="Recommend"
            className="step-icon"
          />
        </div>

        {/* Curve between steps */}
        <div className="curve"></div>

        {/* Step 2 */}
        <div className="step-card">
          <div className="step-number">02</div>
          <h3>Easy Tracking</h3>
          <p>
            Monitor the status of your referrals through your MocDoc account. 
            You'll be notified once your referral signs up and becomes a client.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
            alt="Tracking"
            className="step-icon"
          />
        </div>

        {/* Curve between steps */}
        <div className="curve"></div>

        {/* Step 3 */}
        <div className="step-card">
          <div className="step-number">03</div>
          <h3>Seamless Redemption</h3>
          <p>
            Enjoy the benefits effortlessly as the credited extensions 
            automatically extend your subscription duration.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
            alt="Redemption"
            className="step-icon"
          />
        </div>
      </div>
    </section>
    </section>
  );
};

export default Referral;
