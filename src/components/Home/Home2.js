import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import picture from "../../Assets/picture.jpg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";
import { TRANSLATIONS_HOME2 } from "helpers/enums.types";
import { useLanguageView } from "context/Context";

function Home2() {
  const { language } = useLanguageView();
  const t = TRANSLATIONS_HOME2[language];
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>{t.intro}</h1>
            <p className="home-about-body">
              {t.aboutBody}
              <br />
              <br />
              {t.iKnow}
              <i>
                <b style={{ color: "#3321d5" }}> {t.python}</b>
              </i>
              <br />
              <br />
              {t.but} &nbsp;
              <i>
                <b style={{ color: "#3321d5" }}>{t.interested}</b>
              </i>
              <br />
              <br />
              {t.comeAlone}
              <br />
              <br />
              {t.frameworks}
              <i>
                <b style={{ color: "#3321d5" }}> {t.libraries}</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={picture}
                className="img-fluid avatar-image"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t.findMeOn}</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/angely-lopez/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
