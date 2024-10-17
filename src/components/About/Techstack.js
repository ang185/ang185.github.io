import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";

import {
  SiPostgresql,
  SiOpenai,
  SiTypescript,
  SiWebflow,
  SiMicrosoftsqlserver,
} from "react-icons/si";
const technologies = [
  { icon: DiPython, name: "Python", percentage: 95 },
  { icon: DiJavascript1, name: "JavaScript", percentage: 80 },
  { icon: SiTypescript, name: "TypeScript", percentage: 75 },
  { icon: DiNodejs, name: "Node.js", percentage: 80 },
  { icon: SiOpenai, name: "OpenAI", percentage: 80 },
  { icon: DiReact, name: "React", percentage: 60 },
  { icon: DiMongodb, name: "MongoDB", percentage: 80 },
  { icon: SiPostgresql, name: "PostgreSQL", percentage: 90 },
  { icon: SiWebflow, name: "Webflow", percentage: 70 },
  { icon: SiMicrosoftsqlserver, name: "MS SQL Server", percentage: 90 },
];

function Techstack() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleInteraction = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((tech, index) => (
        <Col key={tech.name} xs={4} md={2} className="tech-icons-container">
          <div
            className="tech-icons"
            onMouseEnter={() => handleInteraction(index)}
            onMouseLeave={() => handleInteraction(null)}
            onClick={() => handleInteraction(index)}
          >
            <tech.icon />
            {activeIndex === index && (
              <div className="skill-bar-container">
                <div
                  className="skill-bar"
                  style={{ width: `${tech.percentage}%` }}
                >
                  <span className="skill-percentage">{tech.percentage}%</span>
                </div>
              </div>
            )}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
