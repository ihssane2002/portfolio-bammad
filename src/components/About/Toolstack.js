import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGooglecolab,
  SiVisualstudiocode,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiAnaconda,
  SiJupyter,
  SiFirebase,
  SiTrello,
  SiNgrok, // Ajouté Ngrok
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello /> {/* Ajouté Trello */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNgrok /> {/* Ajouté Ngrok */}
      </Col>
    </Row>
  );
}

export default Toolstack;
