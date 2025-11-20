// src/components/Review.jsx
import React from "react";
import "./Review.css"; // Create this CSS file for styling

const Review = () => {
  return (
    <section className="client-review">
      {/* Section Heading */}
      <h2>Our Client says it Best !</h2>

      {/* Client Rating Badge */}
      <div className="client-rating">
        <img src="/stiker.png" alt="Rating Badge" />
      </div>
    </section>
  );
};

export default Review;
