import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import "./well.css";

const Well = () => {
  return (
    <div className="wall-section">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/" className="home-link">Home</Link> 
        <span className="arrow">›</span> 
        <span>Wall of Love</span>
      </div>

      {/* Wall Header */}
      <div className="wall-header">
        <div className="wall-text">
          <h1>Wall of Love</h1>
          <p>See What Our Happy Customers Across the Globe Are Saying!</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="review-section">
        <h2>
          Real <span className="highlight">Stories</span>, Real <span className="highlight">Results</span>
        </h2>

        <div className="review-icons">
          <div><i className="fa-solid fa-layer-group"></i> All Reviews</div>
          <div><i className="fa-solid fa-globe"></i> Techjocky</div>
          <div><i className="fa-solid fa-comments"></i> Software Advice</div>
          <div><i className="fa-solid fa-star"></i> SoftwareSuggest</div>
          <div><i className="fa-solid fa-users"></i> G2 Crowd</div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="reviews-left">
          <h2>All Reviews Ratings</h2>
          <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐ (56)</div>

          <div className="review-card">
            <div className="review-header">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="user" />
              <h3>Prasad Hospitals</h3>
            </div>
            <p>
              We truly appreciate your efforts in spotting a gap in our insurance billing
              process. Your timely insight helped us take corrective action, streamline
              systems, and strengthen trust between our teams.
            </p>
            <a href="#">Read more about Review →</a>
          </div>

          <div className="review-card">
            <div className="review-header">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="user" />
              <h3>SureCare Health Center</h3>
            </div>
            <p>
              The training provided was excellent and easy to follow. After training,
              assistance with any queries ensured a smooth transition. MocDoc is simple,
              user-friendly, and flexible.
            </p>
            <a href="#">Read more about Review →</a>
          </div>

          <div className="review-card">
            <div className="review-header">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="user" />
              <h3>Ram Polyclinic</h3>
            </div>
            <p>
              MocDoc is a cloud-based healthcare software that is easy to work with. It
              ensures data accuracy and is user-friendly for hospital management.
            </p>
            <a href="#">Read more about Review →</a>
          </div>

          <div className="review-card">
            <div className="review-header">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="user" />
              <h3>Suraksha Speciality Hospital</h3>
            </div>
            <p>
              MocDoc HMS is easy to use and allows for quick staff training. It integrates
              all hospital modules, making patient registration seamless.
            </p>
            <a href="#">Read more about Review →</a>
          </div>
        </div>

        <div className="reviews-right">
          <div className="demo-card">
            <h3>Want to learn more?</h3>
            <p>Talk to Our Product Specialists</p>
            <button>Book a Demo</button>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="pagination-section">
        <div className="pagination">
          <button className="page-btn">Prev</button>
          <button className="page-number">1</button>
          <button className="page-number">2</button>
          <button className="page-number">3</button>
          <button className="page-number active">4</button>
          <button className="page-number">5</button>
          <button className="page-number">6</button>
          <button className="page-number">7</button>
          <button className="page-btn">Next</button>
        </div>
      </section>
    </div>
  );
};

export default Well;
