import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, Users, Lightbulb, HeartHandshake } from "lucide-react";
import "./career.css";

function Careers() {
  return (
    <section className="careers-section">
      {/* 🧭 Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/" className="home-link">
          Home
        </Link>
        <span className="separator">›</span>
        <span className="active">Careers</span>
      </div>

      {/* 🩺 Header */}
      <div className="careers-header">
        <div className="careers-text">
          <h1>
            Difference in <span className="highlight">Healthcare</span>
          </h1>
          <p>
            At MocDoc, we are more than just a startup—we are a passionate,
            innovative team dedicated to revolutionizing healthcare. We take
            pride in our work, value diverse perspectives, and are committed to
            delivering exceptional solutions to our customers.
          </p>
          <Link to="#" className="join-btn">
            Join Our Team
          </Link>
        </div>

        <div className="careers-image">
          <img src="/career-team.png" alt="Career Team" />
        </div>
      </div>

      {/* 🚀 Our Values */}
      <div className="career-values">
        <div className="value-card">
          <Briefcase className="value-icon" />
          <h3>Growth Opportunities</h3>
          <p>
            We provide continuous learning and growth paths for all team
            members.
          </p>
        </div>
        <div className="value-card">
          <Users className="value-icon" />
          <h3>Collaborative Culture</h3>
          <p>
            Teamwork and transparency are at the heart of everything we do.
          </p>
        </div>
        <div className="value-card">
          <Lightbulb className="value-icon" />
          <h3>Innovation</h3>
          <p>
            We encourage creative problem-solving and new ideas to drive
            healthcare transformation.
          </p>
        </div>
        <div className="value-card">
          <HeartHandshake className="value-icon" />
          <h3>Work-Life Balance</h3>
          <p>
            We care about your well-being and support a balanced, fulfilling
            lifestyle.
          </p>
        </div>
      </div>

      {/* 🌟 New Section — Professional Development */}
      <div className="development-section">
        <h2 className="development-title">
          How MocDoc Supports Your <span className="highlight">Professional Development</span>
        </h2>
        <p className="development-text">
          At MocDoc, we are committed to fostering an environment where you can
          thrive both personally and professionally.<br/> Here's what we offer to
          support your success and well-being.
        </p>
      </div>
      {/* 💼 Join Our Team Section */}
<section className="join-team-section">
  <div className="join-team-left">
    <h2>Join Our Team</h2>
    <h3>Fuel Your Passion, Drive Change</h3>
    <ul>
      <li>Go the extra mile.</li>
      <li>Enjoy what they do.</li>
      <li>Are eager to learn continuously.</li>
      <li>Want to make a difference every day.</li>
      <li>Believe that big things have small beginnings.</li>
    </ul>
    <a href="#apply" className="join-btn">Apply Now</a>
  </div>

  <div className="join-team-right">
    <img src="/teams-career.png" alt="Join Our Team" />
  </div>
</section>
{/* 🧑‍💼 Current Openings Section */}
<section className="openings-section">
  <h2 className="openings-title">Current Openings</h2>
  <p className="openings-subtitle">
    Explore our latest job opportunities and find the perfect role for you
  </p>

  {/* 💼 Business Development Executive */}
  <div className="job-row">
    <div className="job-info">
      <h3>Business Development Executive</h3>
      <p className="job-type">Full Time</p>
      <p className="job-desc">
        We're seeking candidates with 0–4 years of experience for this role, and fluency in Hindi is mandatory.
        The role involves mastering our products, securing new clients, maintaining existing relationships,
        suggesting upgrades, and negotiating deals to drive revenue. Staying updated with market trends and
        continuously enhancing your skills are key to success.
      </p>
      <div className="job-footer">
        <span className="job-location">📍 Chennai</span>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  </div>

  {/* 💻 Implementation Engineer */}
  <div className="job-row">
    <div className="job-info">
      <h3>Implementation Engineer</h3>
      <p className="job-type">Full Time</p>
      <p className="job-desc">
        We're seeking candidates with 0–2 years of experience for this role, and fluency in Hindi is mandatory.
        The role involves implementing software, providing customer training, and adapting to user needs.
        You'll prioritize tasks to meet deadlines, review processes for compliance, and work to improve service quality.
      </p>
      <div className="job-footer">
        <span className="job-location">📍 Chennai</span>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  </div>
</section>


    </section>
    
  );
}

export default Careers;
