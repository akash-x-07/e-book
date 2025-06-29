import React from "react";
import "./DownloadCTA.css";

function DownloadCTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-heading">Ready to Transform Your Life?</h2>
        <p className="cta-subheading">
          Download your free Gen Z Mindset eBook now and start your journey toward clarity and success!
        </p>
        <a href="/GenZMindset.pdf" download className="cta-button">📘 Download Now</a>
      </div>
    </section>
  );
}

export default DownloadCTA;
