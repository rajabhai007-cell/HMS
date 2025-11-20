import React, { useState, useEffect } from "react";
import "./WhatsApp.css";

const WhatsApp = () => {
  // Scroll to Top Button Visibility
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  // WhatsApp Button Link
  const phoneNumber = "911234567890"; // change number
  const message = "Hello! I want to chat.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Scroll To Top Button */}
      {visible && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <img src="/scroll-arrow.png" alt="Scroll To Top" />
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <a className="whatsapp-btn" href={url} target="_blank" rel="noopener noreferrer">
        <img src="/whatsapp.jpg" alt="WhatsApp" />
      </a>
    </>
  );
};

export default WhatsApp;
