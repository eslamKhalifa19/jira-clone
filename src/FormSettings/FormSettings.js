import React from "react";
import DropDown from "../DropDown/DropDown";
import TextArea from "../TextArea/TextArea";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./form-settings.scss";

function FormSettings() {
  return (
    <form action="#" className="form-settings">
      <div className="u-margin-bottom-small">
        <BreadCrumb />
      </div>
      <div className="u-margin-bottom-large">
        <h1 className="heading-primary">Project Details</h1>
      </div>
      <div className="form-settings__group">
        <FormInput label="Name" value="singularity 1.0" />
      </div>
      <div className="form-settings__group">
        <FormInput
          label="URL"
          value="https://www.atlassian.com/software/jira"
        />
      </div>
      <div className="form-settings__group">
        <TextArea />
      </div>
      <div className="form-settings__group">
        <DropDown />
      </div>
      <div className="u-margin-top-medium">
        <Button>Save Changes</Button>
      </div>
    </form>
  );
}

export default FormSettings;
