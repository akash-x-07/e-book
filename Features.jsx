import React from "react";
import "./Features.css";

function Features() {
  const featuresList = [
    {
      title: "Instant eBook Download",
      desc: "Get access to your purchased eBooks immediately in PDF format.",
      icon: "📥",
    },
    {
      title: "Secure Payments",
      desc: "Pay safely with trusted payment gateways.",
      icon: "🔐",
    },
    {
      title: "Author Profiles",
      desc: "Know more about the authors behind the books.",
      icon: "🧑‍💻",
    },
    {
      title: "Verified Reviews",
      desc: "Read honest feedback from other readers.",
      icon: "⭐",
    },
  ];

  return (
    <div className="features-section">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="features-grid">
        {featuresList.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
