import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import VideoDialog from "./VideoDialog";
import Particle from "../Particle";
import talentStart from "../../Assets/Projects/talentStart.png";
import dashboardTest from "../../Assets/Projects/dashboardTest.png";
import eldirectorio from "../../Assets/Projects/eldirectorio.png";
import socialBee from "../../Assets/Projects/socialBee.png";
import haloTenant from "../../Assets/Projects/haloTenant.png";
import instagramBot from "../../Assets/Projects/instagramBot.png";
import { TRANSLATIONS_PROJECT } from "helpers/enums.types";
import { useLanguageView } from "context/Context";

function Projects() {
  const { language } = useLanguageView();
  const t = TRANSLATIONS_PROJECT[language];
  const [openDialog, setOpenDialog] = useState(false);
  const [video, setVideo] = useState("");

  return (
    <Container fluid className="project-section">
      {openDialog && (
        <VideoDialog
          video={video}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
      )}
      <Particle />
      <Container>
        <h1 className="project-heading">{t.recent}</h1>
        <p style={{ color: "#3321d5" }}>{t.here}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eldirectorio}
              isBlog={false}
              title="El Directorio"
              description={t.elDirectorio}
              setOpenDialog={setOpenDialog}
              setVideo={setVideo}
              demoLink="https://drive.google.com/file/d/1ekCuPgykUJQkkfLzIHdg2mN7KZNWEAjX/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={haloTenant}
              isBlog={false}
              title="Halo Tenant"
              description={t.haloTenant}
              setOpenDialog={setOpenDialog}
              setVideo={setVideo}
              demoLink="https://drive.google.com/file/d/1rogF0zepMnR6gZah97ikp_x-2NSM6ERt/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboardTest}
              isBlog={false}
              title="Dashboard Demo"
              description={t.dashboardDemo}
              setOpenDialog={setOpenDialog}
              setVideo={setVideo}
              demoLink="https://drive.google.com/file/d/1euogfHn2fDGpRwBOusl9IA5pXM01Pcw4/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talentStart}
              isBlog={false}
              title="Talent Star"
              description={t.talentStar}
              setOpenDialog={setOpenDialog}
              setVideo={setVideo}
              demoLink="https://drive.google.com/file/d/156bVh6TgEaxVjsAYHysceQlKLohBEQar/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialBee}
              isBlog={false}
              title="Social Scrap AI"
              description={t.socialScrapAi}
              setOpenDialog={setOpenDialog}
              setVideo={setVideo}
              demoLink="https://drive.google.com/file/d/1GFor7n3qqbHyUPMMPpteXtMITu-Eovlf/view?usp=drive_link"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagramBot}
              isBlog={false}
              title="Instagram Ai Bot"
              description={t.instagramAiBot}
              setOpenDialog={setOpenDialog}
              setVideo={setVideo}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
