import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UserServicePost from "./LoginService"; 
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";

const LoginPage = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (values: any, { setSubmitting, setErrors } : any) => {
    try {
      const { email, password } = values;

      await UserServicePost().Login({
        email: email,
        password: password,
      }).then((response) => {
        localStorage.setItem("accessToken", response.accessToken);
        navigate("/publisher", { replace: true });
      });
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmitting(false);
      setErrors({ password: "Invalid email or password" });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="xs">
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          enableReinitialize
          validate={(values) => {
            const errors: { email?: string; password?: string } = {};

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, touched }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    type="email"
                    name="email"
                    as={TextField}
                    label="Email"
                    fullWidth
                    variant="outlined"
                    error={
                      touched.email && !isValid && !isSubmitting ? true : false
                    }
                    helperText={<ErrorMessage name="email" component="div" />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    type="password"
                    name="password"
                    as={TextField}
                    label="Password"
                    fullWidth
                    variant="outlined"
                    error={
                      touched.password && !isValid && !isSubmitting
                        ? true
                        : false
                    }
                    helperText={
                      <ErrorMessage name="password" component="div" />
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isSubmitting || !isValid}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export function formatAccessToken(response: any): string {
  const accessToken = response.accessToken;
  const formattedToken = `Bearer ${accessToken}`;
  return formattedToken;
}

export default LoginPage;
