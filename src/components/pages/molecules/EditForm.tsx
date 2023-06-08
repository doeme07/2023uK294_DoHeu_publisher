import React from "react";
import { Field, Form, Formik } from "formik";
import Button from "../atoms/Button";
import TextField from "../atoms/TextField";
import { PublisherServicePut } from "../../service/PublisherService";

const EditForm = ({ selectedCardIndex } : any) => {
  const handleSubmit = async (values : any) => {
    try {
      const { publisherName, corporationDate } = values;
      await PublisherServicePut()
        .getPublisher(selectedCardIndex, {
          publisher_name: publisherName,
          incorporation_date: corporationDate,
        });
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  const validateDate = (value : any) => {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

    if (!value.match(dateFormat)) {
      return "Invalid date format. Please use the format YYYY-MM-DD.";
    }

    return "";
  };

  return (
    <Formik
      initialValues={{ publisherName: "", corporationDate: "" }}
      onSubmit={handleSubmit}
      validate={(values) => {
        const errors : any = {};

        const errorMessageDate = validateDate(values.corporationDate);

        if (errorMessageDate !== "") {
          errors.corporationDate = errorMessageDate;
        }

        return errors;
      }}
    >
      <Form>
        <div style={{ marginBottom: "1rem" }}>
          <Field name="publisherName" label="Publisher Name" as={TextField} />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <Field
            name="corporationDate"
            label="Corporation Date"
            as={TextField}
            validate={validateDate}
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          style={{ marginBottom: "1rem" }}
        >
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default EditForm;
