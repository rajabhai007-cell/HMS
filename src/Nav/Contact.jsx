import React from "react";
import { Link } from "react-router-dom";
import "./cont.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* 🧭 Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-home">
          Home
        </Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">Contact Us</span>
      </div>

      {/* 🏥 Main Contact Section */}
      <div className="contact-hero">
        <h1 className="contact-title">
          Best Healthcare Management Software for{" "}
          <span>Hospitals & Labs</span>
        </h1>

        <p className="contact-subtext">
          Contact us for personalized assistance on our products and services.
          Our team is ready to provide the guidance you need to enhance your
          healthcare management experience with MocDoc. Reach out today.
        </p>
      </div>
      <section className="ease-section">
      <h2>
        How We Make <span>Things Easier</span> for You
      </h2>

      <div className="ease-cards">
        <div className="ease-card">
          <div className="ease-icon">💡</div>
          <h3>Product Demos & Inquiries</h3>
          <p>
            Discover how our solutions can elevate your practice with a
            customized demo tailored to your workflow and current challenges.
          </p>
        </div>

        <div className="ease-card">
          <div className="ease-icon">🤝</div>
          <h3>Partnerships</h3>
          <p>
            Interested in collaborating with MocDoc? Let’s discuss how we can
            work together to innovate healthcare.
          </p>
        </div>

        <div className="ease-card">
          <div className="ease-icon">💬</div>
          <h3>General Inquiries</h3>
          <p>
            Have a general question or feedback? We’re always open to hearing
            from you.
          </p>
        </div>
      </div>
    </section>
     <section className="book-demo-section">
      <h2>
        Connect with a Solution Expert for a{" "}
        <span className="highlight">Free Personalized Demo</span>
      </h2>

      <form className="demo-form">
        <div className="form-row">
          <div className="form-group">
            <label>Name*</label>
            <input type="text" placeholder="Dr Adam John" required />
          </div>
          <div className="form-group">
            <label>Mobile Number*</label>
            <div className="phone-input">
              <select>
                <option>India (+91)</option>
                <option>US (+1)</option>
                <option>UK (+44)</option>
              </select>
              <input type="tel" placeholder="+91 9876543210" required />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country*</label>
            <select required>
              <option>Please Select</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>
          <div className="form-group">
            <label>City*</label>
            <input type="text" placeholder="Chennai" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Business Name*</label>
            <input type="text" placeholder="Adam John Hospital" required />
          </div>
          <div className="form-group">
            <label>Email*</label>
            <input type="email" placeholder="abc123@gmail.com" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Business Type*</label>
            <select required>
              <option>Hospital / Laboratory / PolyClinic</option>
              <option>Clinic</option>
              <option>Diagnostic Center</option>
            </select>
          </div>
          <div className="form-group">
            <label>Website URL (If available)</label>
            <input type="url" placeholder="www.johnhospitals.com" />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Remarks</label>
          <textarea
            placeholder="Tell us about your requirement in detail (No. of Beds, Users, etc.)"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn-primary">
          Request for Free Demo
        </button>
      </form>
    </section>
          {/* 📍 Contact Location Section */}
      <section className="location-section">
        <h2 className="section-heading">Contact Us</h2>

        <div className="location-container">

          {/* Left Side - Addresses */}
          <div className="location-details">

            <div className="location-block">
              <h3>India (HQ)</h3>
              <p>
                #17, 3rd Cross Street, Swamy Square,<br />
                Vijayanagar, Velachery, Chennai – 600 042.
              </p>

              <p className="contact-item">📞 +91 93609 52112</p>
              <p className="contact-item">✉️ sales@mocdoc.net</p>
            </div>

            <div className="location-block">
              <h3>US</h3>
              <p>
                345 Poplar Ave, Devon, PA<br />
                19333 United States
              </p>

              <p className="contact-item">📞 +1 252 365 3994</p>
              <p className="contact-item">✉️ sales@mocdoc.net</p>
            </div>

            {/* 🌐 Social Icons */}
            <div className="social-connect">
              <h4>Connect with Us:</h4>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-x-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="location-map">
            <iframe
              title="mocdoc-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7136363123526!2d80.212253!3d12.927608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6291b9a0c5%3A0x8e5bd29cbd8590b5!2sMocDoc!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <section class="assist-section">
  <div class="assist-content">
    <h2>Need Immediate Assistance?</h2>
    <p>For urgent matters, please call our support line at 
      <a href="tel:+918189881898">+91 81898 81898</a>.
    </p>
  </div>

  <button class="assist-btn">Request a Demo</button>
</section>


    {/* ⭐ NEW Feedback Section */}
      <section className="feedback-section">
        <h2>Feedback and Suggestions</h2>
        <p>
          We value your feedback! Please share your thoughts, suggestions, or
          experiences with MocDoc on the following platforms:
        </p>

        <div className="feedback-logos">
          <a href="#" target="_blank" className="logo-card">
            <img src="/logo-tech-jockey.png" alt="G2 Crowd" />
          </a>

          <a href="#" target="_blank" className="logo-card">
            <img src="/crowd-feedback.png" alt="Crozdesk" />
          </a>

          <a href="#" target="_blank" className="logo-card">
            <img src="/crozdesk-feedback.png" alt="Software Suggest" />
          </a>

          <a href="#" target="_blank" className="logo-card">
            <img src="/software-suggest.png" alt="Techjockey" />
          </a>
        </div>
      </section>
      
    </div>
  );
}

export default Contact;
