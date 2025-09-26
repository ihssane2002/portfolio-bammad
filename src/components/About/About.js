import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/Centrale.png";
import logo from "../../Assets/lo nan.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img d-flex flex-column align-items-center"
          >
            <img
              src={logo}
              alt="Centrale Nantes"
              className="img-fluid"
              style={{ maxHeight: "120px", objectFit: "contain" }}
            />
            <img
              src={laptopImg}
              alt="Centrale Casablanca"
              className="img-fluid mb-3"
              style={{ maxHeight: "120px", objectFit: "contain" }}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
         <strong className="purple">Expertise </strong> I Possess
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
