import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UserServicePost from "./LoginService";
import { useNavigate } from "react-router-dom";



const LoginPage = () => {
  const navigate = useNavigate();
    const handleSubmit = async (values: any) => {
        console.log("im here.");
    
        try {
          console.log(values);
    
          const { email, password } = values;
         
    
          await UserServicePost().Login({
            email: email,
            password: password,
          }).then(response => {
            localStorage.setItem("accessToken", response.accessToken);
            navigate("/publisher", {replace: true});
          });
          
    
          
        } catch (error) {
          console.error("Form submission failed:", error);
        }
      };

       
    return(
  <div>
    <h1>Any place in your app!</h1>

    <Formik
      initialValues={{ email: "", password: "" }}
      enableReinitialize
      validate={(values) => {
        const errors: { email?: string } = {};

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <label htmlFor="email">E-Mail:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting || !isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
  )

  

};

export function formatAccessToken(response: any): string {
    const accessToken = response.accessToken;
    const formattedToken = `Bearer ${accessToken}`;
    return formattedToken;
  }

export default LoginPage;
