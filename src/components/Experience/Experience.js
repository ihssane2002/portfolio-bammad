import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdBriefcase } from "react-icons/io";

function Experience() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="March 2025 - August 2025"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Internship at ANP</h3>
        <p>
        Designed and implemented a complete Retrieval-Augmented Generation (RAG) pipeline to develop an intelligent and personalized chatbot for the Digital Transformation Department. The system automatically extracts and structures information from large and complex technical reports, enabling efficient retrieval and comparison across multiple documents. By integrating semantic search, embeddings, reranking, and advanced language models, the chatbot delivers accurate and contextual answers while generating structured summaries. Deployed with a secure web interface featuring authentication, traceability of sources, history management, and dynamic updates, this solution enhances decision-making, accelerates analysis workflows, and supports the digital innovation strategy of the ANP.
        </p>
      </VerticalTimelineElement>
    
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="February 2025 - April 2025"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Collaboration Project with Coca cola and Tecpap</h3>
        <p>
         Developed a computer vision solution in collaboration with Tecpap  and  Coca-Cola  Company to enhance industrial safety and workplace organization under the 5S methodology. The model, based on YOLOv8, detects human presence in hazardous zones and automatically computes a 5S compliance score from workplace images by identifying disorder, obstacles, or missing protective equipment. Trained on an annotated dataset covering 11 classes, the system achieved strong performance (Precision: 0.92). This project demonstrates the application of deep learning in real-world industrial environments, supporting proactive safety monitoring and continuous improvement initiatives.        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="October 2024 - January 2025"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Project Collaboration with IDSUD Energie</h3>
        <p>
        Designed and developed a predictive maintenance model for IDSUD Energies' Nheolight hybrid system, which integrates solar panels, wind turbines, batteries, and LEDs. Leveraged advanced machine learning techniques, using Isolation Forest to detect anomalies and XGBoost to predict potential failures. This model enables early identification of system malfunctions, enhancing the reliability of the energy infrastructure and optimizing maintenance operations, ultimately reducing costs and ensuring continuous performance.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="July 2024 - August 2024"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Internship at ONEE</h3>
        <p>
        Developed an AI-powered predictive model to analyze and anticipate Low Voltage (LV) incidents at ASP Ouarzazate. The system automates image-based incident detection and classification, utilizing advanced models like CLIP for image classification and CNN for incident detection. This solution optimizes network maintenance by enabling real-time monitoring, streamlining incident reporting, and providing insights through historical data analysis, ultimately enhancing the reliability and efficiency of the electrical network.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="April 2023 - June 2023"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Internship at NOMAC</h3>
        <p>
        Developed and supervised a meteorological data monitoring dashboard for the NOOR 1 power plant in Ouarzazate, designed to ensure the protection of cylindroparabolic sensors. The platform enables real-time weather condition monitoring, offers interactive visualizations for historical data analysis, and generates alerts in case of critical conditions, ensuring timely interventions and optimizing system performance.
        </p>
      </VerticalTimelineElement>

    </VerticalTimeline>
  );
}

export default Experience;
