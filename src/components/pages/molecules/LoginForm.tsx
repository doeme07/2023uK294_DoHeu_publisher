import InputField from "../atoms/TextField";

const LoginForm = ({ errors, touched } : any) => {
    return (
      <>
        <InputField
          type="email"
          name="email"
          label="Email"
          fullWidth
          variant="outlined"
          error={touched.email && errors.email ? true : false}
          helperText={touched.email && errors.email && <div>{errors.email}</div>}
        />
        <InputField
          type="password"
          name="password"
          label="Password"
          fullWidth
          variant="outlined"
          error={touched.password && errors.password ? true : false}
          helperText={
            touched.password && errors.password && <div>{errors.password}</div>
          }
        />
      </>
    );
  };
  
  export default LoginForm;

