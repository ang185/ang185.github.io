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
      <Modal.Body>
        <video width="100%" controls>
          <source src={video} type="video/mp4" />
          Not Supported
        </video>
      </Modal.Body>
    </Modal>
  );
}
