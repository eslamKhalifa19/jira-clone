import React from "react";
import BackDrop from "../BackDrop/BackDrop";
import FormSettings from "../FormSettings/FormSettings";
import "./modal.scss";

function Modal() {
  return (
    <div>
      <BackDrop />
      <div className="modal">
        <div className="modal__wrap">
          <div className="modal__container">
            <FormSettings />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
