import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import React, { useState } from "react";
import { Button } from "@mui/material";
import { PublisherServicePost } from "./PublisherService";
import { Field, Form, Formik } from "formik";
import AppBar from "./organisms/AppBar";

const AddPage = () => {
  const [isAdded, setIsAdded] = useState<boolean | null>(null);

  const handleSubmit = async (values: any) => {
    try {
      const { publisherName, corporationDate } = values;

      PublisherServicePost().postPublisher({
        publisher_name: publisherName,
        incorporation_date: corporationDate
      }).then(response => {
        setIsAdded(true);
        console.log(response);
      });
      
    } catch (error) {
      console.error("Form submission failed:", error);
      setIsAdded(false);
    }
  };

  const validateDate = (value: string) => {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

    if (!value.match(dateFormat)) {
      return "Invalid date format. Please use the format YYYY-MM-DD.";
    }

    return "";
  };

  return (
    <>
      <AppBar />
      <Box
        display="flex"
        justifyContent="center"
        marginTop="2rem"
      >
        <Container maxWidth="md">
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" align="center" style={{ marginBottom: "2rem" }}>
                ADD A CARD
              </Typography>
              <Formik
                initialValues={{ publisherName: "", corporationDate: "" }}
                onSubmit={handleSubmit}
                validate={(values) => {
                  const errors: { corporationDate?: string } = {};

                  const errorMessageDate: string = validateDate(values.corporationDate);

                  if (errorMessageDate !== "") {
                    errors.corporationDate = errorMessageDate;
                  }

                  return errors;
                }}
              >
                <Form>
                  <div style={{ marginBottom: "1rem" }}>
                    <Field name="publisherName" label="Publisher Name" as={TextField} fullWidth />
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <Field
                      name="corporationDate"
                      label="Corporation Date"
                      as={TextField}
                      fullWidth
                      validate={validateDate}
                    />
                  </div>

                  {isAdded === true ? (
                    <Alert severity="success" style={{ margin: "1rem" }}>
                      Card successfully added!
                    </Alert>
                  ) : isAdded === false ? (
                    <Alert severity="error" style={{ margin: "1rem" }}>
                      Adding of Card failed!
                    </Alert>
                  ) : (
                    <></>
                  )}

                  <Button type="submit" variant="contained" fullWidth size="large">
                    Submit
                  </Button>
                </Form>
              </Formik>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AddPage;
