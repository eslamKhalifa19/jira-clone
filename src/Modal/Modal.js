import React, { Fragment, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

import { createPortal } from "react-dom";
import BackDrop from "../BackDrop/BackDrop";
import "./modal.scss";
import { Redirect } from "react-router";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const [showModal, setShowModal] = useState(true);
  const ref = useRef();

  useOnClickOutside(ref, () => setShowModal());

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
      {showModal ? (
        <Fragment>
          <BackDrop />
          <div className="modal">
            <div className="modal__wrap">
              <div className="modal__container" ref={ref}>
                {children}
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Redirect to="/" />
      )}
    </Fragment>,

    elRef.current
  );
};

export default Modal;
