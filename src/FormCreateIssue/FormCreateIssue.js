import React from "react";
import DropDown from "../DropDown/DropDown";
import TextArea from "../TextArea/TextArea";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./form-create-issue.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { issueType, Priority, Reporter, Assignees } from "../DummyData";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useHistory } from "react-router";
import { useLocalStorageState } from "../hooks/useLocalStorage";

function FormCreateIssue() {
  // eslint-disable-next-line no-unused-vars
  const [card, setCard] = useLocalStorageState("Cards");

  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "Backlog",
      issueType: issueType[0],
      priority: Priority[0],
      reporter: Reporter[0],
      assignees: Assignees[0],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be 3 character or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      description: Yup.string()
        .max(300, "must be 300 characters or less")
        .required("Required"),
    }),

    onSubmit: ({ category, description, priority, assignees, issueType }) => {
      const new_issue = {
        id: uuidv4(),
        category: category,
        text: description,
        issueIcon: issueType.icon,
        issueIconColor: priority.color,
        issueIconDirection: priority.icon,
        AssigneeImage: assignees.src,
      };

      const [backLog, ...rest] = card;

      backLog.issues = [...backLog.issues, new_issue];

      setCard([backLog, ...rest]);

      history.push("/");
    },
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="form-create-issue"
        noValidate
      >
        <div className="u-margin-bottom-small">
          <BreadCrumb Tab="Create Issue" />
        </div>
        <div className="u-margin-bottom-large">
          <h1 className="heading-primary">Create Issue</h1>
        </div>
        <div className="form-create-issue__group">
          <DropDown
            options={issueType}
            label="Issue Type"
            selected={formik.values.issueType}
            onSelectedChange={(value) =>
              formik.setFieldValue("issueType", value)
            }
          />
        </div>
        <div className="form-create-issue__group">
          <FormInput
            label="Name"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="form-create-issue__error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-create-issue__group">
          <TextArea
            label="Description"
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="form-create-issue__error">
              {formik.errors.description}
            </div>
          ) : null}
        </div>
        <div className="form-create-issue__group">
          <DropDown
            options={Reporter}
            label="Reporter"
            selected={formik.values.reporter}
            src={Reporter.src}
            onSelectedChange={(value) =>
              formik.setFieldValue("reporter", value)
            }
          />
        </div>
        <div className="form-create-issue__group">
          <DropDown
            options={Assignees}
            label="Assignees"
            selected={formik.values.assignees}
            src={Assignees.src}
            onSelectedChange={(value) =>
              formik.setFieldValue("assignees", value)
            }
          />
        </div>
        <div className="form-create-issue__group">
          <DropDown
            options={Priority}
            label="Priority"
            selected={formik.values.priority}
            onSelectedChange={(value) =>
              formik.setFieldValue("priority", value)
            }
          />
        </div>
        <div className="u-margin-top-medium">
          <div className="u-flex-end">
            <div className="u-margin-right-small">
              <Button type="submit" modifier="filled-blue">
                Create Issue
              </Button>
            </div>
            <Button type="button" handleOnClick={() => history.push("/")}>
              {" "}
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
export default FormCreateIssue;
