import React from "react";
import { Modal } from "react-bootstrap";

const CustomModalDialog = React.forwardRef(({ children, ...props }, ref) => {
  const modalDialogStyle = {
    width: "75%",
    maxWidth: "75%",
    margin: "100px auto",
  };

  return (
    <div ref={ref} {...props} style={modalDialogStyle}>
      {children}
    </div>
  );
});

export default function VideoDialog({ video, openDialog, setOpenDialog }) {
  const handleClose = () => setOpenDialog(false);

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const getVideoElement = () => {
    const fileId = video.match(/[-\w]{25,}/);
    return (
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        width="100%"
        height="480"
        allow="autoplay"
      ></iframe>
    );
  };

  return (
    <Modal
      show={openDialog}
      onHide={handleClose}
      style={modalStyle}
      dialogAs={CustomModalDialog}
    >
      <Modal.Header closeButton style={{ background: "white" }}>
        <Modal.Title>Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>{getVideoElement()}</Modal.Body>
    </Modal>
  );
}
