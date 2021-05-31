import React from "react";
import FormCreateIssue from "../FormCreateIssue/FormCreateIssue";
import Modal from "../Modal/Modal";
function CreateIssue() {
  return (
    <div className="page-form-create-issue">
      <Modal>
        <FormCreateIssue />
      </Modal>
    </div>
  );
}

export default CreateIssue;
