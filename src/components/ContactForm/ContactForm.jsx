import { nanoid } from "nanoid";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import s from "./ContactForm.module.css";

export const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (values, options) => {
    handleAddContact(values);
    // console.log(values);
    options.resetForm();
  };
  const initialValues = { name: "", number: "", id: nanoid() };
  const validation = yup.object().shape({
    name: yup
      .string()
      .required("Required field")
      .min(3, "Too short")
      .max(50, "Too long")
      .trim(),
    number: yup
      .string()
      .required("Required field")
      .min(3, "Too short")
      .max(50, "Too long"),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validation}
    >
      <Form className={s.form}>
        <label className={s.label} name="name">
          Name
          <Field name="name" placeholder="Enter name here..." />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>
        <label className={s.label} name="number">
          Number
          <Field label="number" name="number" placeholder="123-45-67" />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
