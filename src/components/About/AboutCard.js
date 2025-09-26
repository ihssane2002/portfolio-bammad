import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hi, I am <span className="purple">Ihssane Bammad</span>, a final-year engineering student at <span className="purple">Centrale Nantes</span>.
  <br />
  <br />Before joining <span className="purple">Centrale Nantes</span> I studied at <span className="purple">Centrale Casablanca</span>, where I built strong foundations in <span className="purple">programming</span> . Throughout this journey, I have always been passionate about <span className="purple">Artificial Intelligence</span>, <span className="purple">Machine Learning</span>, and <span className="purple">Data Science</span>.
  <br />
  <br />Currently, I’m focusing on deepening my knowledge in <span className="purple">Data Science and Artificial Intelligence</span>, <span className="purple">AI</span>, and <span className="purple">predictive analytics</span>—fields that are shaping the future of technology and business.
  <br />
  <br />What excites me the most about <span className="purple">AI</span> and <span className="purple">Data Science</span> is their transformative potential. By extracting valuable insights from data, we can design innovative solutions for real-world challenges, optimize processes, and automate decision-making. This curiosity drives me to keep exploring and developing my skills in these fields.
  <br />
  <br />This portfolio reflects my passion for technology, my academic journey across <span className="purple">Centrale Casablanca</span> and <span className="purple">Centrale Nantes</span>, and my ambition to harness the power of <span className="purple">AI</span> and <span className="purple">Data Science</span> in meaningful ways. Feel free to explore my work, and don't hesitate to reach out if you’d like to learn more about my journey or the projects I’ve been involved in.
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
