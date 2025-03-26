import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";

// Import des images
import bigData from "../../Assets/Certification/big data .png";
import dataMethodo from "../../Assets/Certification/data-methodo.png";
import fondpr from "../../Assets/Certification/foundation project mana.png";
import gener from "../../Assets/Certification/GENEPRO.png";
import generai from "../../Assets/Certification/generAI.png";
import introAi from "../../Assets/Certification/intro-ai.png";
import firebase from "../../Assets/Certification/learnfirebase .png";
import cn from "../../Assets/Certification/cn.png";
import projectMana from "../../Assets/Certification/project mana.png";
import uml from "../../Assets/Certification/uml.png";
import progr from "../../Assets/Certification/progr.png";

function Certification() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the certifications I have obtained in different fields of study.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Client Needs and Software Requirements */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cn}
              isBlog={false}
              title="Client Needs and Software Requirements"
              description="Learned to create clear requirements to drive software development, visualize client needs with low-fidelity prototypes, and adapt to changing product requirements."
              courseraLink="https://coursera.org/verify/HMCG3G3RA3L2"
            />
          </Col>

          {/* Data Science Methodology */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataMethodo}
              isBlog={false}
              title="Data Science Methodology"
              description="Gained an understanding of data science processes, from problem definition to insights extraction, using data preparation and model selection techniques."
              courseraLink="https://coursera.org/verify/EVZGQAFU21EV"
            />
          </Col>

          {/* Generative AI: Introduction and Applications */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={generai}
              isBlog={false}
              title="Generative AI: Introduction and Applications"
              description="Explored the fundamentals of Generative AI, its applications, and real-world use cases in various industries."
              courseraLink="https://coursera.org/verify/XCHV7JXXDBPP"
            />
          </Col>

          {/* Generative AI: Prompt Engineering Basics */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gener}
              isBlog={false}
              title="Generative AI: Prompt Engineering Basics"
              description="Developed an understanding of how to craft effective prompts for AI models to enhance accuracy and efficiency."
              courseraLink="https://coursera.org/verify/5T5HVWMEN9QJ"
            />
          </Col>

          {/* Google Project Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectMana}
              isBlog={false}
              title="Google Project Management"
              description="Completed six courses covering project management, Agile methodologies, and risk assessment, preparing for real-world project management roles."
              courseraLink="https://coursera.org/verify/professional-cert/EC7L72ZTEQST"
            />
          </Col>

          {/* Introduction to Artificial Intelligence (AI) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={introAi}
              isBlog={false}
              title="Introduction to Artificial Intelligence (AI)"
              description="Gained foundational knowledge on AI principles, including machine learning, deep learning, and neural networks."
              courseraLink="https://coursera.org/verify/3NUSZEAACTNA"
            />
          </Col>

          {/* Learn Firebase */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firebase}
              isBlog={false}
              title="Learn Firebase"
              description="Learned how to use Firebase for backend development, authentication, real-time database management, and cloud functions."
              courseraLink="https://coursera.org/verify/EKZW4JKLDKEY"
            />
          </Col>

          {/* Software Engineering: Modeling Software Systems using UML */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uml}
              isBlog={false}
              title="Software Engineering: Modeling Software Systems using UML"
              description="Developed skills in software modeling using UML diagrams, including use case diagrams, class diagrams, and sequence diagrams."
              courseraLink="https://coursera.org/verify/AK3EY7F2RG8H"
            />
          </Col>

          {/* Programming Foundations with JavaScript, HTML and CSS */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={progr}
              isBlog={false}
              title="Programming Foundations with JavaScript, HTML and CSS"
              description="Acquired knowledge in JavaScript, HTML, and CSS to build dynamic web applications, enhancing interactivity and responsiveness."
              courseraLink="https://coursera.org/verify/ZFDGJKPL2TNY"
            />
          </Col>

          {/* Foundations of Project Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fondpr}
              isBlog={false}
              title="Foundations of Project Management"
              description="Gained insights into key project management concepts, including planning, execution, and monitoring processes."
              courseraLink="https://coursera.org/verify/FJQZHANCTQAC"
            />
          </Col>

          {/* Google Cloud Big Data and Machine Learning Fundamentals */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigData}
              isBlog={false}
              title="Google Cloud Big Data and Machine Learning Fundamentals"
              description="Learned how to use Google Cloud to process and analyze large datasets, leveraging machine learning models for data-driven insights."
              courseraLink="https://coursera.org/verify/X5Z28QAEAS0V"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certification;
