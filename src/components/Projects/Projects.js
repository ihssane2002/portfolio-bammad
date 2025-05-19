import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import one from "../../Assets/Projects/one.png";
import lbd from "../../Assets/Projects/lbd.png";
import inno from "../../Assets/Projects/inno.jpeg";
import scien from "../../Assets/Projects/scien.jpeg";
import stocka from "../../Assets/Projects/stocka.jpeg";
import svrp from "../../Assets/Projects/svrp.jpeg";
import predi from "../../Assets/Projects/predi.jpeg";
import pca from "../../Assets/Projects/pca .png";
import histo from "../../Assets/Projects/histo.png";
import gest from "../../Assets/Projects/gest .png";
import customer from "../../Assets/Projects/Customer-Churn.png";
import comp from "../../Assets/Projects/compu.png";
import emot from "../../Assets/Projects/emot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          In this section you'll find some of the projects I've worked on recently.

        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
                
        < Col md={4} className="project-card">
            <ProjectCard
              imgPath={one}
              isBlog={false}
              title="Incident Recognition "
              description="In this project  I developed an AI-powered web application for managing low voltage incidents by automating image-based incident detection and classification. Leveraging advanced models like CLIP for image classification and CNN for incident detection, the system streamlines the reporting process and enhances electrical network maintenance through real-time monitoring and historical analysis."  
              ghLink="https://github.com/ihssane2002/Projet_onee"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comp}
              isBlog={false}
              title="Computer vision project"
              description="Developed a YOLOv8-based computer vision model to detect human presence in hazardous zones and evaluate workspace organization using the 5S methodology. Trained a custom object detection model on industrial data (11 annotated classes) and achieved high performance (Precision: 92%, Recall: 88%, mAP@0.5: 93%). Designed an automated pipeline to flag safety non-compliances and compute 5S scores from images. Implemented the full solution in Python using Google Colab." 
              ghLink="https://github.com/ihssane2002/computer-vision-project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emot}
              isBlog={false}
              title="Sentiment classification project"
              description="I developed a sentiment classification application using a fine-tuned RoBERTa-base model. I trained the model on a dataset of Amazon product reviews to classify text into positive, negative, or neutral sentiments. The training process was conducted in Google Colab using Hugging Face’s Transformers library, and the model achieved a precision of 96.02%. After training, I deployed the model through an interactive interface built with Streamlit and hosted it on Hugging Face Spaces. Users can input any sentence and instantly receive the predicted sentiment. The full training notebook is available on my GitHub, and the app is live for real-time testing." 
              ghLink="https://github.com/ihssane2002/sentiment-classification-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lbd}
              isBlog={false}
              title="LearnScape_lbs"
              description="In this project  I developed  LearnScape ,is an interactive platform designed to boost student engagement in the classroom by providing quiz-based learning, peer interaction via a forum, and performance tracking through rankings. It leverages Firebase for real-time data management, enhancing the student experience with immediate feedback and community-driven support."
            
              ghLink="https://github.com/ihssane2002/projet-learnscape"
              /> 
          </Col>
              

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inno}
              isBlog={false}
              title="Innovation_IDSUD Energies"
             description=" In this project  I developed  on predictive maintenance model for IDSUD Energies' Nheolight hybrid system, comprising solar panels, wind turbines, batteries, and LEDs. Using advanced machine learning techniques with Isolation Forest for anomaly detection and XGBoost for failure prediction, the system anticipates component failures, enhancing reliability and reducing maintenance costs."
              ghLink="https://github.com/ihssane2002/Projet-innovation-"
              />
          </Col>
                <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customer}
              isBlog={false}
              title="Customer Churn Prediction"
              description="In this project, I focused on analyzing customer behavior in the telecom sector to anticipate churn using supervised machine learning models. I worked with a dataset that included both demographic and service-related data, aiming to identify customers at high risk of leaving and to suggest data-driven strategies for improving retention.
       I trained and compared several models, including Logistic Regression, Random Forest, SVM, and Decision Tree. Logistic Regression delivered the best results in terms of overall performance, especially for identifying customers who were likely to stay. I also used feature importance analysis to understand the key factors influencing churn, such as the use of fiber optic internet, high monthly charges, and electronic check payments." 
              ghLink="https://github.com/ihssane2002/Customer-Churn-Analysis-and-Prediction-"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={histo}
              isBlog={false}
              title="Nomac supervisor"
              description="In this project, I developed a dashboard for Nomac to supervise the meteorological conditions of the Noor 1 station, ensuring the protection of the cylindroparabolic sensors. The platform enables real-time monitoring of meteorological data, provides interactive visualizations for data analysis, and generates alerts in case of critical conditions, ensuring timely interventions." 
              ghLink="https://github.com/ihssane2002/nomac-supervisor"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scien}
              isBlog={false}
              title="Scientific_project"
             description="In this project I developed  a Graph Neural Network (GNN) model for analyzing the properties of ternary alloys. By representing atomic structures as graphs, the model learns spatial relationships between atoms to predict material properties with high precision while reducing computational costs compared to traditional simulations."
              ghLink="https://github.com/ihssane2002/Projet_scientifique"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stocka}
              isBlog={false}
              title="stochastic_project"
              description="This project investigates stochastic optimization applied to linear regression with noisy data. Various algorithms such as SGD, Mini-batch Gradient Descent, RMSprop, and Adam are implemented to minimize the Mean Squared Error (MSE) while analyzing their convergence and robustness against noise."
              ghLink="https://github.com/ihssane2002/optimisation-stockastqiue"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={svrp}
              isBlog={false}
              title="SD-VRP Project"
              description="The SD-VRP (Split Delivery Vehicle Routing Problem) extends the classic vehicle routing problem by allowing a customer to be served by multiple vehicles. The goal is to minimize the total route cost, satisfy all customer demands, and respect vehicle capacity. It is applicable to urban deliveries, food logistics, and fleet management." 
              ghLink="https://github.com/ihssane2002/Optimisation-combinatoire"
              />
          </Col>
            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={predi}
              isBlog={false}
              title="Supervised classification algorithms"
              description="In This project I applied a supervised classification algorithms to a colon cancer gene expression dataset from Kaggle, aiming to classify samples into 'normal' and 'cancer' categories. It involves data preparation, exploratory analysis, model training (Logistic Regression, SVM, k-NN, Decision Tree, Random Forest), performance evaluation, and feature interpretation, identifying key genes like SLC7A5, RNF43, and UGP2. The Logistic Regression, SVM, and k-NN models achieved 100% accuracy, validating the robustness of the predictions."
              ghLink="https://github.com/ihssane2002/Projet-AI_prediction"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pca}
              isBlog={false}
              title="PCA_Project"
              description="In this project applied a Principal Component Analysis (PCA) on decathlon athletes' performances during the 2004 Olympic Games and the Décastar 2004 event. The goal is to reduce data dimensionality while preserving variance to identify athlete profiles and visualize event correlations. The first five principal components explain 81.56% of the total variance, revealing highly performing athletes, versatile competitors, and those with improvement potential. Significant correlations were detected between certain events, like sprint and long jump." 
              ghLink="https://github.com/ihssane2002/Projet-AI_ACP"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gest}
              isBlog={false}
              title="Eco Waste Application"
              description="Eco Waste Application is a web platform we developed to manage and track waste collection while promoting eco-friendly practices. The application allows users to monitor their recycling habits, locate nearby recycling points, and receive reminders to sort and recycle waste. Through gamification, it motivates users to adopt sustainable behaviors, making the recycling process easier, more engaging, and impactful. This project aims to provide a smooth and personalized user experience, empowering everyone to contribute to environmental preservation while having fun and learning along the way" 
              ghLink="https://github.com/ihssane2002/Eco-Waste-Application"
              />
          </Col>
          
          
          
        </Row>
      </Container>
    </Container>
  );
}



export default Projects;