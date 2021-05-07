import React from "react";
import BackDrop from "../BackDrop/BackDrop";
import "./modal.scss";

function Modal() {
  return (
    <div>
      <BackDrop />
      <div className="modal">
        <div className="modal__container">Lorem Ipsum</div>
      </div>
    </div>
  );
}

export default Modal;
