// src/components/BookDemo.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./book.css";

function BookDemo() {
  const badgeImages = [
    "/rank-one.png",
    "/rank-two.png",
    "/rank-three.png",
    "/rank-four.png",
    "/rank-six.png",
    "/rank-seven.png",
  ];

  const whyChooseData = [
    {
      icon: "/efficiency-icon.png",
      title: "Efficiency",
      desc: "Streamline operations and improve patient care.",
    },
    {
      icon: "/innovation-icon.png",
      title: "Innovation",
      desc: "Stay ahead with cutting-edge technology.",
    },
    {
      icon: "/userfriendly-icon.png",
      title: "User-Friendly Interface",
      desc: "Easy to navigate, reducing training time for staff.",
    },
    {
      icon: "/integration-icon.png",
      title: "Comprehensive Integration",
      desc: "Seamlessly connects with existing systems for a unified experience.",
    },
    {
      icon: "/scalability-icon.png",
      title: "Scalability",
      desc: "Grows with your practice, from small clinics to large hospitals.",
    },
    {
      icon: "/security-icon.png",
      title: "Data Security",
      desc: "Ensures patient information is protected with top-notch security measures.",
    },
  ];

  return (
    <div className="book-demo-root">
      {/* Header/Navbar */}
      <header className="navbar">
        <nav className="nav-links">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/book-demo" className="nav-item btn-demo">
            Book a Demo
          </Link>
        </nav>
      </header>

      {/* Hero Banner */}
      <div className="hero-banner">
        Schedule Your <span className="accent">Free Demo</span> for Hospital & Lab Management Today!
      </div>

      {/* Main Container */}
      <div className="book-demo-container">
        {/* Left Content */}
        <div className="left">
          <h2 className="eyebrow">
            Streamline Your <span className="accent">Healthcare<br />Operations</span> with our Innovative Solutions
          </h2>
          <p className="lead">
            Discover how MocDoc's comprehensive healthcare management solutions can transform your practice. Our intuitive software offers a seamless experience for hospitals, labs, clinics, and pharmacies.
          </p>

          {/* Six Image Badges */}
          <div className="badges-grid">
            {badgeImages.map((src, i) => (
              <div className="badge" key={i}>
                <div className="badge-inner">
                  <img src={src} alt={`Rank ${i + 1}`} className="badge-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="right">
          <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
            <div className="two-col">
              <label>
                Name*
                <input type="text" placeholder="Dr Adam John" required />
              </label>

              <label>
                Mobile Number*
                <div className="mobile-row">
                  <select defaultValue="IN">
                    <option value="IN">IN</option>
                    <option value="US">US</option>
                  </select>
                  <input type="tel" placeholder="+91" required />
                </div>
              </label>
            </div>

            <div className="two-col">
              <label>
                Country*
                <select>
                  <option>Please Select</option>
                </select>
              </label>

              <label>
                City*
                <input type="text" placeholder="Chennai" />
              </label>
            </div>

            <label>
              Business Name*
              <input type="text" placeholder="Adam John Hospital" />
            </label>

            <div className="two-col">
              <label>
                Email*
                <input type="email" placeholder="abc123@gmail.com" />
              </label>

              <label>
                Website URL (If available)
                <input type="url" placeholder="www.johnhospitals.com" />
              </label>
            </div>

            <div className="two-col">
              <label>
                Business Type*
                <select>
                  <option>Hospital / Laboratory / Polyclinic</option>
                </select>
              </label>

              <label>
                Remarks
                <textarea placeholder="Tell us about your requirement in detail" />
              </label>
            </div>

            <p className="disclaimer">
              MocDoc requires your contact information to provide you with information about our healthcare products and services.
            </p>

            <button className="cta">Request for Free Demo</button>
            <a className="small-link" href="#">Create your own free forms</a>
          </form>
        </div>
      </div>

      {/* Bottom Experience Section */}
      <div className="experience-section">
        <h2 className="experience-title">
          What You'll Experience in Our <span className="accent">Live Demo</span>
        </h2>

        <div className="experience-cards">
          <div className="card">
            <div className="card-icon">
              <img src="/walkthrough-icon.png" alt="Personalized Walkthrough" />
            </div>
            <h3>Personalized Walkthrough</h3>
            <p>Tailored demo sessions to meet your specific needs.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <img src="/liveqa-icon.png" alt="Live Q&A" />
            </div>
            <h3>Live Q&A</h3>
            <p>Get real-time answers to your queries directly from our experts.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <img src="/feature-icon.png" alt="Feature Highlights" />
            </div>
            <h3>Feature Highlights</h3>
            <p>Explore key features and functionalities that set MocDoc apart.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <img src="/support-icon.png" alt="Support" />
            </div>
            <h3>Support</h3>
            <p>360-degree support for all your healthcare management needs.</p>
          </div>
        </div>
      </div>

      {/* 🌟 Why Choose MocDoc Section */}
      <section className="why-choose-section">
        <h2>
          Why Choose <span className="accent">MocDoc</span>?
        </h2>

        <div className="why-choose-content">
          {/* Left features */}
          <div className="features-left">
            {whyChooseData.slice(0, 3).map((item, i) => (
              <div className="feature" key={i}>
                <img src={item.icon} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="laptop-center">
            <img src="/whychoose-laptop.png" alt="MocDoc Laptop" />
          </div>

          {/* Right features */}
          <div className="features-right">
            {whyChooseData.slice(3, 6).map((item, i) => (
              <div className="feature" key={i}>
                <img src={item.icon} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧾 Brochure Section */}
      <section className="brochure-section">
        <div className="brochure-left">
          <h2>Download our Brochure</h2>
          <p>
            Discover the full range of MocDoc’s innovative healthcare solutions. Our
            detailed brochures provide comprehensive information about our products
            and services.
          </p>
          <p>
            Contact us for a demo to streamline operations, improve patient care,
            and support ABDM goals.
          </p>
          <button className="download-btn">Download Brochure</button>
        </div>

        <div className="brochure-right">
          <img src="/banner.png" alt="Doctors" />
        </div>
      </section>
    </div>
  );
}

export default BookDemo;
