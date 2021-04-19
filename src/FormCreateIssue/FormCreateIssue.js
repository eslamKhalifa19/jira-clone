import React from "react";
import DropDown from "../DropDown/DropDown";
import TextArea from "../TextArea/TextArea";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./form-create-issue.scss";

function FormCreateIssue() {
  return (
    <form action="#" className="form-create-issue">
      <div className="u-margin-bottom-large">
        <h1 className="heading-primary">Create Issue</h1>
      </div>
      <div className="form-create-issue__group">
        <FormInput label="Name" value="singularity 1.0" />
      </div>
      <div className="form-create-issue__group">
        <FormInput
          label="URL"
          value="https://www.atlassian.com/software/jira"
        />
      </div>
      <div className="form-create-issue__group">
        <TextArea />
      </div>
      <div className="form-create-issue__group">
        <DropDown />
      </div>
      <div className="u-margin-top-medium">
        <Button>Save Changes</Button>
      </div>
    </form>
  );
}

export default FormCreateIssue;
