import React, { useState } from "react";
import "./for.css";

const Forpass = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    // Backend / API call add later
  };

  return (
    <div className="fp-wrapper">

      <h2 className="fp-title">Forgot Your Password?</h2>

      <div className="fp-container">
        <p className="fp-text">
          To reset your password, please follow these simple steps:
        </p>

        <div className="fp-steps">
          <p>1) Enter your email address.</p>
          <p>2) Check your inbox for the <b>'Password Reset Request'</b> email from us.</p>
          <p>3) Open the email and click on the <b>'Reset Password'</b> button.</p>
          <p>4) You will be prompted to enter your new password.</p>
          <p>5) Click <b>'Update'</b> to finalize the password reset process.</p>
        </div>

        <p className="fp-text">
          Once your password is updated,<br/>
          use the new credentials to sign in.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your registered email address (eg: example@you.com)"
            className="fp-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="fp-btn">
            Submit
          </button>
        </form>
      </div>

    </div>
  );
};

export default Forpass;
