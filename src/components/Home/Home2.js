import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/P2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I am passionate about <span className="blue">data science</span> and <span className="blue">artificial intelligence</span>. My journey began with a strong foundation in <span className="blue">mathematics</span> and <span className="blue">engineering sciences</span>.
  <br />
  <br />I pursued my studies at the Faculty of Sciences and Techniques, where I honed my skills in <span className="blue">programming</span> and <span className="blue">algorithmic rigor</span>. My training in <span className="blue">statistics</span> and <span className="blue">probabilities</span> further strengthened my analytical abilities.
  <br />
  <br />This passion and my academic excellence allowed me to join École Centrale Casablanca, renowned for its academic excellence and international network. Here, I am deepening my knowledge in <span className="blue">data science</span>, <span className="blue">machine learning</span>, and <span className="blue">artificial intelligence</span>.
</p>
          </Col>
          <Col md={4} className="myAvtar d-flex align-items-center justify-content-center">
  <Tilt>
    <div style={{
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      overflow: "hidden",
      backgroundColor: "#003366",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)"
    }}>
      <img
        src={myImg}
        alt="avatar"
        className="img-fluid"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  </Tilt>
</Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ihssane2002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ihssane-bammad-706276271/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ihssaneayam/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ihssane.bammad@centrale-casablanca.ma"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;