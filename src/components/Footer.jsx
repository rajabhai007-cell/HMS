// src/components/Footer.jsx
import React from "react";
import "./Footer.css"; // Make sure to create this CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <span className="footer-logo">MocDoc</span>

          <h3>CONNECT WITH US</h3>
          <p>
            No. 17, 3rd Cross Street, Swamy Square,<br />
            Vijayanagar, Velachery, Chennai, India - 600042
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>

          {/* Store Buttons */}
          <div className="store-buttons">
            <img src="/store.png" alt="App Store" />
            <img src="/play-store.png" alt="Google Play" />
          </div>
        </div>

        {/* Footer Columns */}
        <div className="footer-links">
          <div>
            <h4>Products</h4>
            <p>MocDoc HMS</p>
            <p>MocDoc LIMS</p>
            <p>MocDoc DMS</p>
            <p>MocDoc PMS</p>
            <p>MocDoc ART</p>
          </div>

          <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>Partner with Us</p>
          </div>

          <div>
            <h4>Customers</h4>
            <p>Wall of Love</p>
            <p>Success Stories</p>
            <p>Referral Program</p>
          </div>

          <div>
            <h4>Resources</h4>
            <p>Blogs</p>
            <p>Brochures</p>
            <p>The Economic Times</p>
          </div>

          <div>
            <h4>Contact Us</h4>
            <p>📞 +91 9360952112</p>
            <p>📧 sales@mocdoc.net</p>
            <p>📧 contact@mocdoc.in</p>
            <p>📧 support@mocdoc.com</p>
          </div>
        </div>
      </div>

      {/* Footer Illustrations + Bottom Section */}
      <div className="footer-wrapper">
        <div className="footer-illustrations">
          <img src="/healthcare5.png" alt="" />
          <img src="/healthcare1.png" alt="" />
          <img src="/healthcare9.png" alt="" />
          <img src="/healthcare4.png" alt="" />
          <img src="/healthcare1.png" alt="" />
          <img src="/healthcare3.png" alt="" />
          <img src="/healthcare7.png" alt="" />
          <img src="/healthcare6.png" alt="" />
          <img src="/healthcare2.png" alt="" />
        </div>

        <div className="footer-bot">
          <div className="footer-countries">
            <span>Bahrain</span> 
            <span>Fiji</span> 
            <span>India</span> 
            <span>Malaysia</span> 
            <span>Maldives</span> 
            <span>Mauritius</span> 
            <span>Nigeria</span> 
            <span>Oman</span> 
            <span>Rwanda</span> 
            <span>South Africa</span> 
            <span>Sri Lanka</span> 
            <span>US</span>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-term">
            <a href="#">Privacy Policy</a> |
            <a href="#">Terms of Use</a> |
            <a href="#">Contact Us</a>
          </div>

          <div className="copy">
            Copyright © 2025 Yro Systems Private Limited. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
