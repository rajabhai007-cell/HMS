import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./success.css";

const Success = () => {
  // 💡 Testimonial Cards Data
  const cards = [
    {
      id: 1,
      logo: "/images/hospital1.png",
      quote:
        "MocDoc transformed how we manage our patient flow and billing efficiency.",
      stars: 5,
      name: "Dr. Priya Sharma",
      hospital: "Sunshine Multispeciality Hospital",
      title: "Streamlined Operations",
      desc: "With MocDoc’s EMR and appointment system, we reduced patient waiting time by 40%.",
      tag: "Efficiency Boost",
    },
    {
      id: 2,
      logo: "/images/hospital2.png",
      quote:
        "The best healthcare management software we’ve ever implemented — easy and reliable!",
      stars: 5,
      name: "Dr. Arvind Menon",
      hospital: "WellCare Clinics",
      title: "Reliable & Scalable",
      desc: "The cloud platform ensures data safety and seamless scalability for multiple branches.",
      tag: "Digital Transformation",
    },
    {
      id: 3,
      logo: "/images/hospital3.png",
      quote:
        "Our staff productivity and patient satisfaction increased drastically!",
      stars: 5,
      name: "Dr. Sneha Rao",
      hospital: "CityCare Hospital",
      title: "Improved Patient Experience",
      desc: "Centralized data management and easy access improved overall hospital operations.",
      tag: "Patient Focused",
    },
  ];

  return (
    <section className="success-section">
      {/* 🧭 Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/" className="home-link">Home</Link>
        <span className="arrow">›</span>
        <span>Success Stories</span>
      </div>

      {/* 🌟 Content */}
      <div className="success-content">
        <span className="tag">Customer Stories</span>
        <h1>
          Trusted by <span className="highlight">1500+ Happy Customers</span>
          <br /> Across the Globe!
        </h1>
        <p>
          We know words alone aren’t enough — see what our real customers have to
          say about MocDoc’s impact in healthcare transformation.
        </p>

        {/* ⭐ Rating Logos */}
        <div className="rating-logos">
          <div className="logo-card">
            <img src="/images/google.png" alt="Google" />
            <div className="logo-text">
              <h4>⭐ 4.8</h4>
              <p>Google Reviews</p>
            </div>
          </div>

          <div className="logo-card">
            <img src="/images/software-suggest.png" alt="Software Suggest" />
            <div className="logo-text">
              <h4>🏆 Best Value</h4>
              <p>SoftwareSuggest 2024</p>
            </div>
          </div>

          <div className="logo-card">
            <img src="/images/g2.png" alt="G2 Performer" />
            <div className="logo-text">
              <h4>🌟 High Performer</h4>
              <p>G2 Summer 2024</p>
            </div>
          </div>

          <div className="logo-card">
            <img src="/images/techjockey.png" alt="Techjockey" />
            <div className="logo-text">
              <h4>⭐ 4.8</h4>
              <p>Techjockey Rating</p>
            </div>
          </div>

          <div className="logo-card">
            <img src="/images/capterra.png" alt="Capterra" />
            <div className="logo-text">
              <h4>⭐ 4.8</h4>
              <p>Capterra Reviews</p>
            </div>
          </div>
        </div>

        <button className="explore-btn">Explore Success Stories →</button>
      </div>

      {/* 🏷️ Category Header */}
      <div className="success-header">
        <ul>
          <li className="active">Featured</li>
          <li>HMS</li>
          <li>LIMS</li>
          <li>CMS</li>
        </ul>
      </div>

      {/* 🌟 Healthcare Leaders Section */}
      <section className="leaders-section">
        <h2>Healthcare Leaders Share Their MocDoc Experience!</h2>

        <div className="leader-cards">
          {cards.map((card) => (
            <div className="leader-card" key={card.id}>
              <div className="card-top">
                <img
                  src={card.logo}
                  alt="hospital-logo"
                  className="hospital-logo"
                />
                <p className="quote">“{card.quote}”</p>
                <p className="stars">{"★".repeat(card.stars)}</p>
                <p className="author">-{card.name}</p>
                <p className="hospital">{card.hospital}</p>
              </div>

              <div className="card-bottom">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="tag">{card.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏥 Hospital Management System */}
      <section className="leaders-section">
        <h2>Hospital Management System</h2>
        <p>
          MocDoc HMS streamlines hospital operations, enhances patient care, and
          ensures seamless coordination across departments with a fully integrated,
          cloud-based solution.
        </p>

        <div className="leader-cards">
          {cards.map((card) => (
            <div className="leader-card" key={card.id}>
              <div className="card-top">
                <img
                  src={card.logo}
                  alt="hospital-logo"
                  className="hospital-logo"
                />
                <p className="quote">“{card.quote}”</p>
                <p className="stars">{"★".repeat(card.stars)}</p>
                <p className="author">-{card.name}</p>
                <p className="hospital">{card.hospital}</p>
              </div>

              <div className="card-bottom">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="tag">{card.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔬 Laboratory Management System */}
      <section className="leaders-section">
        <h2>Laboratory & Information Management System</h2>
        <p>
          MocDoc LIMS simplifies laboratory workflows, automates report
          management, and ensures compliance, delivering efficiency and accuracy in
          diagnostic operations.
        </p>

        <div className="leader-cards">
          {cards.map((card) => (
            <div className="leader-card" key={card.id}>
              <div className="card-top">
                <img
                  src={card.logo}
                  alt="hospital-logo"
                  className="hospital-logo"
                />
                <p className="quote">“{card.quote}”</p>
                <p className="stars">{"★".repeat(card.stars)}</p>
                <p className="author">-{card.name}</p>
                <p className="hospital">{card.hospital}</p>
              </div>

              <div className="card-bottom">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="tag">{card.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏥 Clinical Management System */}
      <section className="leaders-section">
        <h2>Clinical Management System</h2>
        <p>
          MocDoc CMS optimizes clinic management, enabling effortless appointment
          scheduling, patient record handling, and billing for a smoother, more
          efficient practice.
        </p>

        <div className="leader-cards">
          {cards.map((card) => (
            <div className="leader-card" key={card.id}>
              <div className="card-top">
                <img
                  src={card.logo}
                  alt="hospital-logo"
                  className="hospital-logo"
                />
                <p className="quote">“{card.quote}”</p>
                <p className="stars">{"★".repeat(card.stars)}</p>
                <p className="author">-{card.name}</p>
                <p className="hospital">{card.hospital}</p>
              </div>

              <div className="card-bottom">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="tag">{card.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Healthcare Business?</h2>
          <p>
            See how others have benefited from MocDoc. Get in touch with our sales
            team today!
          </p>
          <button className="cta-btn">Book a Demo!</button>
        </div>
      </section>
    </section>
  );
};

export default Success;
