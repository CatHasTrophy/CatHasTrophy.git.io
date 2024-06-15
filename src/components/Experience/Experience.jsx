import React from "react";
import { Container, Stack, Row, Col} from "react-bootstrap";
import "./Experience.css";
import "./Timeline.css";
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";

const experiences = [
  {
    role: "Business Analyst Intern",
    company: "Outlook Publishing (India) Pvt. Ltd.",
    img: "out_logo.jpg",
    date: "05/2024",
    endDate: "",
    skills: ["Data Analysis","Research","SQL","Excel","Data Visualization"],
    description: [
      "Data analyst intern skilled in data analysis, visualization, and statistical modeling.",
      " Proficient in tools such as Excel, SQL, and Python, with a passion for deriving insights from complex datasets.",
      " Collaborative team player eager to contribute to data-driven decision-making and business strategies."
    ],
  },
  {
    role: "Content Writing Intern",
    company: "CollegeTips.in",
    img: "Coll_logo.jpeg",
    date: "07/2021",
    endDate: "08/2021",
    skills: ["Script Writing","Research","Team Work","Story-Telling"],
    description: [
      "Content writing intern skilled in creating engaging, SEO-friendly content across various platforms.",
      " Proficient in research, copywriting, and editing, with a passion for storytelling and brand voice consistency. ",
      " Collaborative team player eager to contribute to impactful content strategies and digital marketing initiatives."
    ],
  }
];

const TimelineItem = ({ isPresent }) => (
  <div className="timeline-item">
    <div className={`timeline-dot ${isPresent ? "filled" : ""}`}></div>
    <div className="timeline-content"></div>
  </div>
);


function Experience() {
  return (
    <Container id="experience">
      <h1 id="subtitle">Experience</h1>
      <Stack gap={3} id="stack">
        {experiences.map((experience, index) => (
          <Row key={index}>
            <Col xs={2} id="timeline">
              <TimelineItem isPresent={experience.endDate === "Present"} />
            </Col>
            <Col>
              <div className="Card">
                <div className="Top">
                  <img src={`./${experience.img}`} alt={experience.role} />
                  <div className="Body">
                    <div className="Role">{experience.role}</div>
                    <div className="Company">{experience.company}</div>
                    <div className="Date">{experience.date}</div>
                  </div>
                </div>
                <div className="Description">
                  <span>
                  {experience?.description && (
                    <ul className="DescriptionList">
                      {experience.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  )}
                  </span>
                  {experience?.skills && (
                    <>
                      <br />
                      <div className="Skills">
                        <b>Skills:</b>
                        <div className="ItemWrapper">
  {experience?.skills?.map((skill, index) => (
    <div key={index} className="Skill">
      <FontAwesomeIcon icon={faCircleDot} className="Icon" /> {skill}
    </div>
  ))}
</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Stack>
    </Container>
  );
}

export default Experience;
