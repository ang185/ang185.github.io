import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards({
  setVideo,
  setOpenDialog,
  imgPath,
  title,
  description,
  demoLink,
}) {
  const handleOpenDialog = () => {
    setVideo(demoLink);
    setOpenDialog(true);
  };
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        {demoLink && (
          <Button onClick={handleOpenDialog} style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp;
            {"Video"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
