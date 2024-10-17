import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { TRANSLATIONS_ABOUT_CARD } from "helpers/enums.types";
import { useLanguageView } from "context/Context";

function AboutCard() {
  const { language } = useLanguageView();
  const t = TRANSLATIONS_ABOUT_CARD[language];
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <b style={{ color: "#3321d5" }}>{t.hi}</b>
            {t.from}
            <br />
            {t.live}
            <br />
            <span style={{ color: "#3321d5" }}>{t.study}</span>
            <br />
            <br />
            {t.hobbies}
          </p>
          <ul>
            <li className="about-activity">
              <span style={{ color: "#3321d5" }}>
                <ImPointRight /> {t.videoGames}
              </span>
            </li>
            <li className="about-activity">
              <ImPointRight /> {t.read}
            </li>
            <li className="about-activity">
              <span style={{ color: "#3321d5" }}>
                <ImPointRight /> {t.mma}
              </span>
            </li>
            <li className="about-activity">
              <ImPointRight /> {t.travel}
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
