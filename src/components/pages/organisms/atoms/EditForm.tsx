import React from "react";
import { Field, Form, Formik } from "formik";
import { TextField, Button } from "@mui/material";
import { PublisherServicePut } from "../../PublisherService";

const EditForm = ({ selectedCardIndex } : any) => {
  const handleSubmit = async (values: any) => {
    console.log("im here.")
        try {
            console.log(values);
          const { publisherName, corporationDate } = values;
        
          await PublisherServicePut().getPublisher(selectedCardIndex, {
            publisher_name: publisherName,
            incorporation_date: corporationDate
          });
    
          console.log("Form submitted successfully!");
        } catch (error) {
          console.error("Form submission failed:", error);
        }
  };

  const validateDate = (value: string) => {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    if (!value.match(dateFormat)) {
      return "Invalid date format. Please use the format YYYY-MM-DD.";
    }
    return undefined;
  };

  return (
    <Formik
      initialValues={{ publisherName: "", corporationDate: "" }}
      onSubmit = {handleSubmit}
      validate={(values) => ({
        corporationDate: validateDate(values.corporationDate)
      })}
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
        <Button type="submit" variant="contained" style={{ marginBottom: "1rem" }}>
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default EditForm;

