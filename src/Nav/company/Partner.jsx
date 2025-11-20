import React from "react";
import "./partner.css";

function Partner() {
  return (
    <>
      <section className="partner-section">
        {/* Left Side Text */}
        <div className="partner-text">
          <h5>Home / Partner With Us</h5>
          <h2>Partner with MocDoc</h2>
          <p>
            Join Us in Revolutionizing Healthcare <br />
            MocDoc is a leader in healthcare technology, providing cutting-edge
            solutions to hospitals, laboratories, and clinics around the world.
            As we expand our reach in the international market, we are seeking
            strategic partnerships with businesses and individuals who can connect
            us with healthcare institutions looking to modernize their operations.
          </p>
          <p>
            By partnering with MocDoc, you’ll have the opportunity to be part of
            a global movement to streamline healthcare operations, improve patient
            care, and drive digital transformation in healthcare facilities.
          </p>

         
          
        </div>
      </section>

      <section className="partner-why-section">
        <h2>Why Partner with MocDoc?</h2>

        <div className="partner-cards">
          {/* Proven Results */}
          <div className="partner-card">
            <h4>Proven Results</h4>
            <h5>Proven Track Record</h5>
            <p>
              With a presence in several countries, MocDoc has been trusted by
              hospitals, labs, and clinics for over a decade. Our solutions are
              designed to meet the needs of modern healthcare institutions, with
              a focus on efficiency, compliance, and patient-centric care.
            </p>
          </div>

          {/* Healthcare Innovations */}
          <div className="partner-card">
            <h4>Healthcare Innovations</h4>
            <h5>Innovative Healthcare Solutions</h5>
            <p>
              MocDoc offers a suite of comprehensive products, including Hospital
              Management Systems (HMS), Laboratory Information Systems (LIS), and
              Pharmacy Management Systems, tailored to meet the demands of any
              healthcare setting. Our cloud-based platforms ensure that healthcare
              providers can access data securely anytime, anywhere.
            </p>
          </div>

          {/* Growth Opportunities */}
          <div className="partner-card">
            <h4>Growth Opportunities</h4>
            <h5>Global Healthcare Focus</h5>
            <p>
              As we focus on expanding our footprint in global markets, we are
              looking to collaborate with partners who understand the unique needs
              of healthcare providers in these regions. With your local expertise
              and network, we can make a greater impact together.
            </p>
            <h5>Revenue and Growth Opportunities</h5>
            <p>
              Partnering with MocDoc offers a unique opportunity to be at the
              forefront of healthcare transformation, supporting innovation and
              enhanced patient care. By aligning with our trusted brand, you can
              drive significant growth for your business, creating value for both
              your clients and your organization.
            </p>
          </div>

          {/* How We Support */}
          <div className="partner-card">
            <h4>How We Support Our Partners</h4>
            <p>
              MocDoc provides continuous guidance, marketing support, technical
              training, and dedicated account management to ensure our partners
              succeed in their regions.
            </p>
          </div>
        </div>
      </section>
      <section className="partner-support-section">
  <h2>How We Support Our Partners</h2>

  <div className="support-cards">
    {/* Comprehensive Product Training */}
    <div className="support-card">
      <h4>Comprehensive Product Training</h4>
      <p>
        We provide detailed training and resources to help you understand our
        products, enabling you to confidently represent MocDoc to potential clients.
      </p>
    </div>

    {/* Marketing & Sales Support */}
    <div className="support-card">
      <h4>Marketing & Sales Support</h4>
      <p>
        Our team will support you with marketing materials, sales guidance, and
        promotional campaigns tailored to your market.
      </p>
    </div>

    {/* Dedicated Partnership Manager */}
    <div className="support-card">
      <h4>Dedicated Partnership Manager</h4>
      <p>
        You’ll have access to a dedicated manager who will assist you with client
        acquisition, technical support, and ongoing collaboration.
      </p>
    </div>
  </div>
</section>

    </>
  );
}

export default Partner;
