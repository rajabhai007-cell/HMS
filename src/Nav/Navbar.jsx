import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [integrationOpen, setIntegrationOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [customerOpen, setCustomerOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // Toggle functions
  const toggleProduct = () => setProductOpen(!productOpen);
  const toggleResources = () => setResourcesOpen(!resourcesOpen);
  const toggleIntegration = () => setIntegrationOpen(!integrationOpen);
  const toggleCompany = () => setCompanyOpen(!companyOpen);
  const toggleCustomer = () => setCustomerOpen(!customerOpen);
  const toggleLogin = () => setLoginOpen(!loginOpen);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo-section">
        <span className="brand-name">MocDoc</span>
      </div>

      {/* Hamburger for mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* Product Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setProductOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setProductOpen(false)}
        >
          <button className="btn-dropdown" onClick={toggleProduct}>
            Products ▼
          </button>
          {productOpen && (
            <div className="dropdown-content">
             
    <Link to="/hms" className="dropdown-item">
      Hospital Management Software
    </Link>
              <Link to="/lms" className="dropdown-item">
              Laboratory Management Software
    </Link>
              <button>Pharmacy Management Software</button>
              <button>Clinic/Polyclinic Management Software</button>
              <button>Environmental Laboratory Management Software</button>
              <button>ART Management Software</button>
              <button>Ophthalmology Management Software</button>
              <button>Dental Management Software</button>
            </div>
          )}
        </div>

        {/* Resources Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setResourcesOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setResourcesOpen(false)}
        >
          <button className="btn-dropdown" onClick={toggleResources}>
            Resources ▼
          </button>
          {resourcesOpen && (
            <div className="dropdown-content">
               <Link to="/blogs" className="dropdown-item">
              Blogs
    </Link>
     <Link to="/case" className="dropdown-item">
              Case Studies
    </Link>
               <Link to="/doc" className="dropdown-item">
              Documentation
    </Link>
            
            </div>
          )}
        </div>

        {/* Integration Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setIntegrationOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setIntegrationOpen(false)}
        >
          <button className="btn-dropdown" onClick={toggleIntegration}>
            Integration ▼
          </button>
          {integrationOpen && (
            <div className="dropdown-content">
               <Link to="/aasandha" className="dropdown-item">
              Aasandha
    </Link>
               <Link to="/abdm" className="dropdown-item">
              ABDM
    </Link>
              <Link to="/cdss" className="dropdown-item">
              CDSS
    </Link>
    <Link to="/external" className="dropdown-item">
              External Integration
    </Link>
     <Link to="/machine" className="dropdown-item">
              Machine Integration
    </Link>
              <Link to="/nphies" className="dropdown-item">
              NPHIES Integration
    </Link>
              
              
            </div>
          )}
        </div>

        {/* Company Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setCompanyOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setCompanyOpen(false)}
        >
          <button className="btn-dropdown" onClick={toggleCompany}>
            Company ▼
          </button>
          {companyOpen && (
            <div className="dropdown-content">
               <Link to="/about" className="dropdown-item">
              About Us
    </Link>
               <Link to="/careers" className="dropdown-item">
              Careers
    </Link>
     <Link to="/contact" className="dropdown-item">
              Contacts
    </Link>
    <Link to="/partner" className="dropdown-item">
              Partner With Us
    </Link>
            
            </div>
          )}
        </div>

        {/* Customer Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setCustomerOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setCustomerOpen(false)}
        >
          <button className="btn-dropdown" onClick={toggleCustomer}>
            Customer ▼
          </button>
          {customerOpen && (
            <div className="dropdown-content">
               <Link to="/well" className="dropdown-item">
              Well of Love
    </Link>
              
               <Link to="/success" className="dropdown-item">
              Success Stories
    </Link>
               <Link to="/referral" className="dropdown-item">
              Referral Program
    </Link>
            </div>
          )}
        </div>

        {/* Demo Button */}
       <Link to="/book-demo">
  <button className="btn-demo">Book a Demo</button>
</Link>

        {/* Login Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setLoginOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setLoginOpen(false)}
        >
          <button className="btn-dropdown" onClick={toggleLogin}>
            Login ▼
          </button>
          {loginOpen && (
            <div className="dropdown-content">
              {/* ✅ React Router Links (no page reload) */}
              <Link to="/user-login" className="dropdown-item">
                <FaSignInAlt className="icon" /> User Login
              </Link>
              <Link to="/patient-login" className="dropdown-item">
                <FaUser className="icon" /> Patient Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
