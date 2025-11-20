import React, { useState } from "react";
import { Link } from "react-router-dom"; 

import "./sing.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    countryCode: "+91 IN",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    otpType: "SMS",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <div>
      <div className="header">
        <span>👤</span>
        <span>Sign Up</span>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>

          <div className="row">
            <label>Mobile No * :</label>
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option>+91 IN</option>
            </select>

            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <label>Email Id :</label>
            <input
              type="email"
              name="email"
              placeholder="(optional)"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label>Password * :</label>
            <input
              type="password"
              name="password"
              placeholder="xxxxxx"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <p className="note">
            Minimum 8 characters containing at least 1 alphabet and 1 digit. Space not allowed.
          </p>

          <div className="row">
            <label>Confirm Password *:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="xxxxxx"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

            <p className="login-text">
         Already a member?{" "}
        <Link to="/patient-login" className="login-link">
         Click here
         </Link>{" "}
         to login
        </p>


          <div className="otp-row">Select OTP Type :</div>
          <div className="otp-options">
            <label>
              <input
                type="radio"
                name="otpType"
                value="SMS"
                checked={formData.otpType === "SMS"}
                onChange={handleChange}
              /> SMS
            </label>

            <label>
              <input
                type="radio"
                name="otpType"
                value="Email"
                checked={formData.otpType === "Email"}
                onChange={handleChange}
              /> Email
            </label>

            <label>
              <input
                type="radio"
                name="otpType"
                value="WhatsApp"
                checked={formData.otpType === "WhatsApp"}
                onChange={handleChange}
              /> WhatsApp
            </label>
          </div>

          <button className="btn" type="submit">
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;
