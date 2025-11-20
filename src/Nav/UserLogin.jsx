import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./User.css"; // create this CSS file

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side Feature List */}
        <div className="login-features">
          <h2>Customer Login</h2>
          <ul>
            <li>Anytime, Anywhere, Any Device</li>
            <li>Go Paperless</li>
            <li>Secure Backup</li>
            <li>Multi Location Support</li>
            <li>Quick Insight On Key Performance</li>
          </ul>
        </div>

        {/* Right Side Sign-in Form */}
        <div className="login-form">
          <h2>Sign In</h2>
          <form>
            <input type="text" placeholder="Email or User Id" required />
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <p className="forgot-password">
            <Link to="/Forpass" className="forgot-link">Forgot Password?</Link>
          </p>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
