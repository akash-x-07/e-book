import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Aarav",
      feedback: "This eBook totally changed my mindset. Loved the practical hacks!",
    },
    {
      name: "Diya",
      feedback: "Finally something that speaks Gen Z language. So helpful!",
    },
    {
      name: "Kabir",
      feedback: "Loved the affirmations and AI tools. Very relatable.",
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Readers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testi, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{testi.feedback}"</p>
            <p className="testimonial-name">- {testi.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
