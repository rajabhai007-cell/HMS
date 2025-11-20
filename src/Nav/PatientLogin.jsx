import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Patient.css";

const PatientLogin = () => {
  const [usePassword, setUsePassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Feature Panel */}
        <div className="login-features">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Book Video Consultation</li>
            <li>Book Doctor Appointment</li>
            <li>View Medical Records</li>
            <li>Add Family Members</li>
            <li>And much more...</li>
          </ul>
        </div>

        {/* Right Login Form */}
        <div className="login-form">
          <h2>Patient Login</h2>
          <p>Enter your mobile number and OTP or password to securely access your account.</p>

          <form>
            {usePassword ? (
              <>
                {/* Mobile + Password Inputs */}
                <input type="text" placeholder="Mobile No" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </>
            ) : (
              <>
                {/* Mobile + Send OTP */}
                <div className="mobile-input">
                  <select>
                    <option value="+91">+91 IN</option>
                    <option value="+1">+1 US</option>
                  </select>
                  <input type="text" placeholder="Mobile No" />
                </div>
                <button type="submit">Send OTP</button>
              </>
            )}
          </form>

          {/* Toggle Button */}
          <div className="or-separator">or</div>
          <button 
            type="button"
            className="password-login"
            onClick={() => setUsePassword(!usePassword)}
          >
            {usePassword ? "Login with OTP" : "Login with Password"}
          </button>

          {/* Signup Link */}
          <p className="register-text">
            Don’t have an account yet?{" "}
            <Link to="/signup" className="register-link">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
