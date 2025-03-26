import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Ihssane Bammad</span>, a second-year engineering student at <span className="purple">Centrale Casablanca</span>.
            <br />
            <br />Before joining Centrale Casablanca, I completed my studies at  <span className="purple">programming</span>, and <span className="purple">telecommunications</span>. Currently, I’m focusing on <span className="purple">Data Science</span> and <span className="purple">Artificial Intelligence</span>, areas that deeply fascinate me. Through my academic journey, I am constantly expanding my knowledge in <span className="purple">machine learning</span>, <span className="purple">AI</span>, and <span className="purple">predictive analytics</span>—fields that are shaping the future of technology and business.
            <br />
            <br />What excites me the most about <span className="purple">AI</span> and <span className="purple">Data Science</span> is their transformative potential. By extracting valuable insights from data, we can innovate solutions for real-world challenges, optimize processes, and automate decision-making. This drives my curiosity and motivates me to continue exploring and developing my skills in these fields.
            <br />
            <br />This portfolio showcases my passion for technology, my academic growth, and the journey I’m on to harness the power of <span className="purple">AI</span> and <span className="purple">Data Science</span> in meaningful ways. Feel free to explore my work, and don't hesitate to reach out if you’d like to learn more about my journey or the projects I’ve been involved in.
          </p>

          <p style={{ color: "rgb(96, 136, 224)" }}>
            "The future belongs to those who believe in the beauty of their dreams."
          </p>
          <footer className="blockquote-footer">Eleanor Roosevelt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
