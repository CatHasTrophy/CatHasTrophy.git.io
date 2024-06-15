import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Skills.css";

const skillsData = [
  { image: "python.png", name: "Python" },
  { image: "mysql.png", name: "MySQL" },
  { image: "pandas.png", name: "Pandas" },
  { image: "numpy.png", name: "Numpy" },
  { image: "powerbi.png", name: "PowerBi" },
  { image: "matplot.png", name: "Matplotlib" },
  { image: "git.png", name: "Git" },
  { image: "github.png", name: "GitHub" },
  { image: "excel.jpeg", name: "Excel" }

];

function Skills() {
  return (
    <Container>
      <div id="skills">
        <h1 id="subtitle">Skills</h1>
        <Row xs={1} md={3} lg={4} className="g-4">
          {skillsData.map((skill, index) => (
            <Col key={index}>
              <Card className="skill-card">
                <Card.Body>
                  <img src={skill.image} alt={skill.name} className="skill-image" />
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Skills;
