import React from "react";
import { Link } from "react-router-dom";

import {
  Clock,
  Globe,
  Building2,
  User,
  FileText,
  RefreshCw,
  Users,
} from "lucide-react";
import "./about.css";

function About() {
  return (
    <section className="about-section">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/" className="home-link">
          Home
        </Link>
        <span className="separator">›</span>
        <span className="active">About Us</span>
      </div>

      {/* Heading */}
      <div className="about-text">
        <h1>
          Best Healthcare Management <br />
          Solutions For Hospitals & <br /> Laboratories
        </h1>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        <div className="stat-card">
          <Clock className="stat-icon" />
          <p>
            <strong>12+</strong> Years
          </p>
        </div>

        <div className="stat-card">
          <Globe className="stat-icon" />
          <p>
            <strong>10+</strong> Countries
          </p>
        </div>

        <div className="stat-card">
          <Building2 className="stat-icon" />
          <p>
            <strong>50+</strong> Cities
          </p>
        </div>

        <div className="stat-card">
          <User className="stat-icon" />
          <p>
            <strong>30K+</strong> Doctors
          </p>
        </div>

        <div className="stat-card">
          <FileText className="stat-icon" />
          <p>
            <strong>25M+</strong> Patient Records
          </p>
        </div>

        <div className="stat-card">
          <RefreshCw className="stat-icon" />
          <p>
            <strong>99.9%</strong> Uptime
          </p>
        </div>

        <div className="stat-card">
          <Users className="stat-icon" />
          <p>
            <strong>1500+</strong> Customers
          </p>
        </div>
      </div>

      {/* About Intro Section */}
      <div className="about-intro">
        <div className="about-left">
          <span className="since-badge">Since 2012</span>
          <h2>Innovative Healthcare IT Solutions Provider</h2>
          <p>
            MocDoc is a leading provider of healthcare management solutions based
            in Chennai, India. We began in 2012 as an online portal to help
            doctors connect with patients through technology.
          </p>
          <p>
            What started as a simple idea has since grown into a comprehensive
            healthcare management suite, transforming the operations of clinics,
            hospitals, diagnostic centers, and pharmacies.
          </p>
          <p>
            Over the years, MocDoc has evolved beyond its initial scope. Our
            relentless commitment to innovation and excellence has enabled us to
            expand our offerings to meet the diverse needs of the healthcare
            industry. Today, MocDoc provides an all-encompassing platform that
            integrates practice management, patient records, finance tools, and
            more—streamlining operations and enhancing patient care.
          </p>
        </div>

        <div className="about-right">
          <img src="/our.png" alt="Healthcare IT Illustration" />
        </div>
      </div>

      {/* Vision Section */}
      <div className="about-vision">
        <div className="vision-left">
          <img src="/our-vision.png" alt="Healthcare Vision" />
        </div>

        <div className="vision-right">
          <span className="vision-badge">Transforming Healthcare</span>
          <h2>Complete Healthcare & Hospital Management Solutions</h2>
          <p>
            Our vision is to revolutionize healthcare management by providing a
            seamless, integrated, and user-friendly platform that empowers
            healthcare providers to deliver exceptional patient care. We aspire
            to be the leading healthcare management solution globally, known for
            our innovation, reliability, and commitment to improving healthcare
            delivery.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="mission-section">
        <h4 className="mission-subtitle">Driving Excellence</h4>
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-intro">
          Our mission is to continuously innovate and enhance our platform to

        </p>

        {[
          {
            num: 1,
            title: "Empower Healthcare Providers",
            desc: "Equip clinics, hospitals, diagnostic centers, and pharmacies with advanced tools to manage their operations efficiently and provide top-notch patient care.",
          },
          {
            num: 2,
            title: "Improve Patient Experiences",
            desc: "Enhance patient satisfaction by simplifying processes and ensuring timely, accurate medical services.",
          },
          {
            num: 3,
            title: "Ensure Quality and Compliance",
            desc: "Maintain the highest standards of quality and compliance in all our offerings, ensuring the safety and security of patient data.",
          },
          {
            num: 4,
            title: "Drive Efficiency",
            desc: "Streamline administrative and clinical processes to reduce costs and improve operational efficiency for healthcare providers.",
          },
          {
            num: 5,
            title: "Foster Innovation",
            desc: "Continuously innovate and integrate new technologies to stay ahead in the healthcare industry.",
          },
        ].map((item) => (
          <div className="mission-item" key={item.num}>
            <div className="mission-number">{item.num}</div>
            <div className="mission-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Healthcare Section */}
    {/* 🏥 Healthcare Section */}
<section className="healthcare-section">
  <h2>Our Healthcare Solutions</h2>
  <p>
    Empowering hospitals, labs, and clinics with innovative digital tools that
    streamline operations and improve patient care.
  </p>

  <div className="healthcare-grid">
    <div className="healthcare-box">
      <h3>Hospital Management</h3>
      <p>
        End-to-end hospital administration with patient, doctor, and billing
        modules integrated in one system.
      </p>
    </div>

    <div className="healthcare-box">
      <h3>Laboratory Automation</h3>
      <p>
        Smart lab tracking and reporting tools for faster, more accurate test
        management.
      </p>
    </div>

    <div className="healthcare-box">
      <h3>Telemedicine</h3>
      <p>
        Virtual consultations with secure video sessions and digital prescriptions.
      </p>
    </div>

    <div className="healthcare-box">
      <h3>Pharmacy Integration</h3>
      <p>
        Real-time medicine availability, stock tracking, and online pharmacy
        ordering support.
      </p>
    </div>
  </div>
</section>


      {/* Brochure Section */}
      <div className="brochure-section">
        <div className="brochure-left">
          <h2>Download Our Brochure</h2>
          <p>
            
                                Join us in our mission to revolutionize healthcare management. Contact our team today to explore the MocDoc suite and experience a new era of healthcare efficiency and patient safety.
                            
          </p>
          <p>
            Contact us for a demo to streamline operations, improve patient care,
            and support ABDM goals.
          </p>
          <Link to="/book-demo" className="dropdown-item">
                       Book Demo
             </Link>
        </div>
        <div className="brochure-right">
          <img src="/banner.png" alt="Doctors" />
        </div>
      </div>
    </section>
  );
}

export default About;
