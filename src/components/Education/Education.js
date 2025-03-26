import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdSchool } from "react-icons/io";

function Education() {
  return (
    <VerticalTimeline>
      {/* Centrale Casablanca - General Engineering (Focus on Data Science & AI) */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        date="2023 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdSchool />}
      >
        <h3 className="vertical-timeline-element-title">Centrale Casablanca | General Engineering (Focus on Data Science & AI)</h3>
        <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
        <p>
          Pursuing a degree in General Engineering, with a focus on Data Science and Artificial Intelligence.
          <br /><strong>Included courses</strong> : Probability, Statistics, Coding Week, Object-Oriented Programming and Modeling, Introduction to AI, Decision Support Systems.
        </p>
      </VerticalTimelineElement>

      {/* FST Beni Mellal - License in Electronic Engineering & Telecommunications */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        date="2020 - 2023"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdSchool />}
      >
        <h3 className="vertical-timeline-element-title">FST Beni Mellal | License in Electronic Engineering & Telecommunications</h3>
        <h4 className="vertical-timeline-element-subtitle">Beni Mellal, Morocco</h4>
        <p>
          Bachelor's degree with a focus on Electronic Engineering and Telecommunications.
          <br /><strong>Included courses</strong> : Industrial Computing, Telecommunications, Signal Processing, Programming.
        </p>
      </VerticalTimelineElement>

      {/* FST Beni Mellal - Diploma in Scientific and Technical Studies */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        date="2020 - 2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdSchool />}
      >
        <h3 className="vertical-timeline-element-title">FST Beni Mellal | Diploma in Scientific and Technical Studies</h3>
        <h4 className="vertical-timeline-element-subtitle">Beni Mellal, Morocco</h4>
        <p>
          Completed a scientific and technical studies diploma, focusing on foundational programming and statistical methods.
          <br /><strong>Included courses</strong> : Computing, Algorithms and Programming, Descriptive Statistics, Probability.
        </p>
      </VerticalTimelineElement>

      {/* High School Diploma - Mathematics B */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        date="2019 - 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdSchool />}
      >
        <h3 className="vertical-timeline-element-title">Baccalaureate in Mathematics B</h3>
        <h4 className="vertical-timeline-element-subtitle">Ouarzazate, Morocco</h4>
        <p>
          High School diploma with a focus on Mathematics (Mathematics B) from Lycée Technique Ibn Al Haitham.
          <br /><strong>Grade</strong> : Graduated with Honors (Très Bien).
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Education;
