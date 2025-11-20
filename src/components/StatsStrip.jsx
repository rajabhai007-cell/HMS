// StatsStrip.jsx
import React from "react";
import "./Starts.css"; // optional styling file

const StatsStrip = () => {
  return (
    <div className="stats-container">
      <div className="stat-box">
        <img src="/improvement.png" alt="Improved Patient Experience" className="stat-icon" />
        <div>
          <h2>78%</h2>
          <p>Improved Patient Experience</p>
        </div>
      </div>

      <div className="stat-box">
        <img src="/timer-orange.png" alt="Increase operational efficiency" className="stat-icon" />
        <div>
          <h2>4x</h2>
          <p>Increase In Operation Efficiency</p>
        </div>
      </div>

      <div className="stat-box">
        <img src="/money-loading.png" alt="Increase in revenue" className="stat-icon" />
        <div>
          <h2>6x</h2>
          <p>Increase In Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;
