import React from "react";
import DropDown from "../DropDown/DropDown";
import TextArea from "../TextArea/TextArea";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./form-settings.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const projectCategory = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

function FormSettings() {
  // const [selected, setSelected] = useState(projectCategory[0]);

  const formik = useFormik({
    initialValues: {
      name: "",
      url: "",
      description: "",
      category: projectCategory[0],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be 3 character or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      url: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Required"),
      description: Yup.string()
        .max(300, "must be 300 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form-settings" noValidate>
      <div className="u-margin-bottom-small">
        <BreadCrumb />
      </div>
      <div className="u-margin-bottom-large">
        <h1 className="heading-primary">Project Details</h1>
      </div>
      <div className="form-settings__group">
        <FormInput
          label="Name"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="form-settings__group">
        <FormInput
          label="URL"
          id="url"
          name="url"
          value={formik.values.url}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.url && formik.errors.url ? (
          <div>{formik.errors.url}</div>
        ) : null}
      </div>
      <div className="form-settings__group">
        <TextArea
          label="Description"
          id="description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.description && formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}
      </div>
      <div className="form-settings__group">
        <DropDown
          options={projectCategory}
          label="Project Category"
          selected={formik.values.category}
          onSelectedChange={(value) => formik.setFieldValue("category", value)}
        />
      </div>
      <div className="u-margin-top-medium">
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
}

export default FormSettings;
