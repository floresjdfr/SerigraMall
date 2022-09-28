import React, { createContext, useContext, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import { GlobalContext } from "../../contexts/GlobalContext";

function CustomToast() {
  const { showToast, setShowToast, toastHeader, toastBody } = useContext(GlobalContext);

  const toggleShow = () => setShowToast(!showToast);

  return (
    <ToastContainer className="m-3" position="bottom-end">
      <Toast show={showToast} onClose={toggleShow}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{toastHeader}</strong>
          <small></small>
        </Toast.Header>
        <Toast.Body>{toastBody}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default CustomToast;
