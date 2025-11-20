import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

function Blogs() {
  return (
    <div className="aasandha-wrapper">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <span>Blogs</span>
      </div>

      {/* BLOG SECTION */}
      <section className="blog-section">
        <div className="blog-grid">

          {/* Left Big Card */}
          <div className="blog-card big">
            <img src="11zon.png" alt="GST 2.0" />
            <div className="blog-title">
              GST 2.0 in India: Simplify Compliance with MocDoc Automation
            </div>
          </div>

          {/* Right Top Small Card */}
          <div className="blog-card small">
            <img src="choose.png" alt="Q3 Updates" />
            <div className="blog-title">
              MocDoc Q3 2025 Product Updates | HIMS, LIMS, EMR & MIS Enhancements
            </div>
          </div>

          {/* Right Bottom Small Card */}
          <div className="blog-card small">
            <img src="ck.png" alt="NABH Software" />
            <div className="blog-title">
              Why NABH-Accredited Hospital Software Matters in 2025
            </div>
          </div>

        </div>
      </section>

      {/* HERO SECTION */}
      <section className="aasandha-hero">

        {/* Left Content */}
        <div className="hero-left">
          <h1>
            <span className="highlight-orange">Aasandha</span>{" "}
            Integrated Hospital <br />
            Management System in Maldives
          </h1>

          <p className="hero-description">
            MocDoc’s Hospital Management System (HMS) is now fully integrated with
            <strong> Aasandha</strong>, the Maldives' national health insurance scheme.
            Whether you’re managing a facility in Malé, Addu City, or across the atolls,
            our HMS simplifies claims processing, enhances compliance, and improves patient
            experience through secure digital healthcare delivery.
          </p>

          <div className="hero-highlights">
            <span>Trusted by <strong>1500+ Institutions</strong></span>
            <span>HIPAA Compliant</span>
            <span>Cloud-Based</span>
            <span>Multilingual</span>
            <span>Scalable for Public & Private Sectors</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-right">
          <img src="/asandha.png" className="doctor-main" alt="Doctor" />
        </div>

      </section>

      {/* INFO SECTION */}
      <div className="aasandha-info-section">
        <div className="info-left">
          <img src="/asandha.png" alt="Aasandha" className="info-image" />
        </div>

        <div className="info-right">
          <h2>
            What is <span className="orange-text">Aasandha?</span>
          </h2>

          <p>
            Aasandha is the Maldives' national health insurance scheme, designed to ensure 
            universal healthcare access for all Maldivian citizens. Managed by the National 
            Social Protection Agency (NSPA), Aasandha covers treatments at both public and 
            private healthcare providers, with digital systems in place to streamline 
            reimbursements and care coordination.
          </p>
        </div>
      </div>

      {/* HMS SECTION */}
      <div className="aasandha-hms-section">
        <div className="hms-left">
          <h2>Why Hospitals in the Maldives Need Aasandha-Integrated HMS</h2>

          <p>
            As digital healthcare becomes essential across the globe, the Maldives is moving rapidly
            toward a data-driven healthcare ecosystem. In 2025, hospitals and clinics are expected
            to align with Aasandha’s digital standards to ensure:
          </p>

          <ul>
            <li>✔ Accurate insurance billing and faster reimbursements.</li>
            <li>✔ Transparent patient services.</li>
            <li>✔ Real-time policy validation and tracking.</li>
          </ul>

          <p>
            With MocDoc HMS, healthcare providers in Malé and across the islands can automate these
            critical processes and focus more on delivering quality care.
          </p>
        </div>

        <div className="hms-right">
          <img src="/asandha.png" alt="Aasandha HMS Integration" className="hms-image" />
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <section className="aasandha-benefits">
        <h2 className="section-title">
          Key Benefits of MocDoc’s Aasandha Integrated HMS Software
        </h2>

        <div className="benefit-box">
          <h3>Real-Time Eligibility & Coverage Verification</h3>
          <p>
            Avoid delays and denials. MocDoc instantly verifies patient eligibility under
            <b> Aasandha</b> before treatment, ensuring a smooth and hassle-free admission
            process.
          </p>
        </div>

        <div className="benefit-box">
          <h3>Paperless Claims & Approvals</h3>
          <p>
            No more paperwork. All insurance claims are submitted digitally to Aasandha
            through MocDoc HMS, reducing human errors and speeding up claim approvals.
          </p>
        </div>

        <div className="benefit-box">
          <h3>Automated Billing & Reconciliation</h3>
          <p>
            MocDoc’s billing engine auto-generates Aasandha-compliant invoices and tracks
            reimbursements in real time — minimizing financial discrepancies and ensuring
            complete transparency.
          </p>
        </div>

        <div className="benefit-box">
          <h3>Smart Patient Records & Continuity of Care</h3>
          <p>
            All patient visits, diagnostics, prescriptions, and treatments are stored in a
            secure EMR integrated with national systems that enables seamless continuity
            of care across locations.
          </p>
        </div>

        <div className="benefit-box">
          <h3>Multi-Branch Support Across Islands</h3>
          <p>
            Centralized control, uniform workflows, and unified reporting — ideal for 
            hospital and clinic networks across the Maldives.
          </p>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="mocdoc-products">

        <h2 className="section-main-title">
          AI-Powered Healthcare IT Solutions for Improving Patient Care
        </h2>

        <div className="product-grid">

          {/* Hospital */}
          <div className="product-box">
            <h3>For Hospital</h3>
            <p className="sub-heading">Trusted Hospital Management Software in the Maldives</p>
            <p>All-in-one hospital management covering billing, care & compliance.</p>

            <ul>
              <li>EMR</li>
              <li>OP/IP Billing</li>
              <li>Doctor & Nurse Apps</li>
              <li>ADT</li>
              <li>Ambulatory</li>
            </ul>

            <span className="product-tag">MocDoc HMS</span>
          </div>

          {/* Clinic */}
          <div className="product-box">
            <h3>For Clinics</h3>
            <p className="sub-heading">
              Paperless Clinic Management Software for Maldivian Practices
            </p>
            <p>
              Cloud-based clinic software for digitizing records, appointments & billing.
            </p>

            <ul>
              <li>Patient EMR</li>
              <li>Prescriptions</li>
              <li>Appointments</li>
              <li>Reports</li>
              <li>Queue Management</li>
            </ul>

            <span className="product-tag">MocDoc CMS</span>
          </div>

          {/* Laboratory */}
          <div className="product-box">
            <h3>For Laboratory</h3>
            <p className="sub-heading">Aasandha-Ready LIMS for Diagnostic Labs</p>
            <p>Cloud-based LIMS with Aasandha integration for seamless operations.</p>

            <ul>
              <li>LIMS</li>
              <li>Barcode</li>
              <li>Sample Management</li>
              <li>Integration</li>
              <li>Reporting</li>
            </ul>

            <span className="product-tag">MocDoc LIMS</span>
          </div>

          {/* Pharmacy */}
          <div className="product-box">
            <h3>For Pharmacy</h3>
            <p className="sub-heading">
              Smartest Pharmacy Inventory and Billing Software
            </p>
            <p>Automated inventory, billing & prescription tracking.</p>

            <ul>
              <li>Retail Billing</li>
              <li>Stock Tracking</li>
              <li>Expiry Alerts</li>
              <li>Mobile Orders</li>
            </ul>

            <span className="product-tag">MocDoc PMS</span>
          </div>

        </div>
      </section>

      {/* REVIEWS */}
      <section className="aasandha-reviews">
        <h2 className="reviews-title">What Maldives Healthcare Providers Say</h2>
        <p className="reviews-subtitle">
          Many of our 1500+ customers use our products to achieve digital transformation.
        </p>

        <div className="reviews-flex">

          {/* Ratings */}
          <div className="rating-row-column">

            <div className="rating-box">
              <h3>G2 Rating</h3>
              <p className="rating-score">⭐ 4.8</p>
              <span className="rating-details">(400+ reviews)</span>
            </div>

            <div className="rating-box">
              <h3>TechJockey Rating</h3>
              <p className="rating-score">⭐ 4.8</p>
              <span className="rating-details">(187+ reviews)</span>
            </div>

            <div className="rating-box">
              <h3>SoftwareSuggest Rating</h3>
              <p className="rating-score">⭐ 4.8</p>
              <span className="rating-details">(250+ reviews)</span>
            </div>

          </div>

          {/* Review */}
          <div className="review-box side-review">
            <p className="review-text">
              “We selected MocDoc after evaluating 15+ HIS systems. Absolutely no regrets.
              The most impressive part is the quick and prompt support.”
            </p>

            <div className="review-author">
              <h4>Dr. Nagaraj Tenkasi</h4>
              <span>Doctor</span>
            </div>
          </div>

        </div>
      </section>

      {/* GLOBAL TRUST */}
      <section className="aasandha-global-trust">
        <h2 className="global-title">Trusted by Global Healthcare Institutions</h2>

        <p className="global-description">
          MocDoc powers healthcare groups in India, Maldives, Middle East, Southeast Asia,
          and Africa with scalable and secure digital health systems.
        </p>

        <button className="demo-button">Book a Demo</button>
      </section>

      {/* SECURE SECTION */}
      <section className="secure-hms-section">
        <h2 className="secure-title">
          Secure, Scalable, and Reliable HMS Software in Maldives
        </h2>

        <div className="secure-grid">

          <div className="secure-box">
            <h3>Secure Cloud Hosting</h3>
            <p className="secure-sub">
              Cloud HMS uses encryption & daily backups for data protection
            </p>
            <p>AES-256 encryption with daily backups ensures data safety.</p>
          </div>

          <div className="secure-box">
            <h3>Scalable Design</h3>
            <p className="secure-sub">
              Suitable for hospitals from 10 beds to 300+ beds
            </p>
            <p>Designed for clinics and large hospitals.</p>
          </div>

          <div className="secure-box">
            <h3>Continuous Support</h3>
            <p className="secure-sub">
              24/7 onboarding, training & technical assistance
            </p>
            <p>Round-the-clock expert support.</p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="aasandha-faq-section">
        <h2 className="faq-title">
          Frequently Asked Questions About Aasandha MocDoc Integration
        </h2>

        <div className="faq-container">

          <div className="faq-item">
            <button className="faq-question">
              What does it mean for MocDoc to be Aasandha-integrated?
              <span className="faq-icon">+</span>
            </button>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              How does Aasandha integration improve hospital operations?
              <span className="faq-icon">+</span>
            </button>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              Is MocDoc suitable for smaller clinics or private practices?
              <span className="faq-icon">+</span>
            </button>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              What healthcare modules are available in MocDoc HMS?
              <span className="faq-icon">+</span>
            </button>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              Does MocDoc support multi-location hospitals?
              <span className="faq-icon">+</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Blogs;
