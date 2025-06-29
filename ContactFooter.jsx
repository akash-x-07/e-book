import React from "react";
import "./ContactFooter.css";

function ContactFooter() {
  return (
    <footer className="footer">
      <div className="contact-section">
        <h3>Get in Touch</h3>
        <p>If you have any queries, suggestions, or feedback, feel free to reach out.</p>
        <a href="mailto:contact@genzmindset.com" className="contact-email">📩 contact@genzmindset.com</a>
      </div>

      <div className="footer-bottom">
        <p>DEVA MEDIA</p>
      </div>
    </footer>
  );
}

export default ContactFooter;
