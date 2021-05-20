import React, { Fragment, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import BackDrop from "../BackDrop/BackDrop";
import "./modal.scss";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(
    <Fragment>
      <BackDrop />
      <div className="modal">
        <div className="modal__wrap">
          <div className="modal__container">{children}</div>
        </div>
      </div>
    </Fragment>,
    elRef.current
  );
};

export default Modal;
