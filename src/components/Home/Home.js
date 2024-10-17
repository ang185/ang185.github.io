import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useLanguageView } from "context/Context";
import { NAVBAR_TEXT, TRANSLATIONS_HOME } from "helpers/enums.types";

function Home() {
  const { language } = useLanguageView();
  const t = TRANSLATIONS_HOME[language];
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            {t.hiThere}{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            {t.iAm}
            <strong className="main-name">{NAVBAR_TEXT.NAME}</strong>
          </h1>

          <div style={{ padding: 20, textAlign: "center" }}>
            <Type />
          </div>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
