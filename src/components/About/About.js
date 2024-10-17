import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import PNG_LAPTOP from "../../Assets/PNG_LAPTOP.png";
import Toolstack from "./Toolstack";
import { TRANSLATIONS_ABOUT } from "helpers/enums.types";
import { useLanguageView } from "context/Context";

function About() {
  const { language } = useLanguageView();
  const t = TRANSLATIONS_ABOUT[language];

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
              {t.knowWhoIAm}
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={PNG_LAPTOP} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">{t.skillSet}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t.tools}</strong>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
