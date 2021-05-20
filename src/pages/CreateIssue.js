import React, { useRef, useState } from "react";
import { Redirect } from "react-router";
import FormCreateIssue from "../FormCreateIssue/FormCreateIssue";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import Modal from "../Modal/Modal";
function CreateIssue() {
  const [showModal, setShowModal] = useState(true);
  const ref = useRef();

  useOnClickOutside(ref, () => setShowModal(false));

  return (
    <div className="page-form-create-issue" ref={ref}>
      {showModal ? (
        <Modal>
          <FormCreateIssue />
        </Modal>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}

export default CreateIssue;
