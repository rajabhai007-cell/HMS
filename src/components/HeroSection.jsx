import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          One Stop <br />
          Digital <span className="highlight">Healthcare</span> <br />
          Solutions for Clinics & Hospitals
        </h1>
        <p>
          Empowering Healthcare Stakeholders with Cutting Edge and Innovative
          Software Products.
        </p>
        <div className="hero-buttons">
          <Link to="/book-demo">
          <button className="btn-primary">Book a Demo</button>
          </Link>
           <Link to="/contact">
          <button className="btn-primary">Contact Us</button>
          </Link>
          
        </div>
      </div>

      <div className="hero-image">
        <img src="/doctor.png" alt="Doctor" />
      </div>
      
    </section>
  );
};

export default HeroSection;
