import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";
import InputTextField from "../Input/inputTextField";
import SelectTextField from "../Input/selectTextField";
// import { login } from "../../redux/login/actions";

function LoginTab() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      loginType: undefined,
      isPersistent: true,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="pt-5 w-50">
      <form
        onSubmit={formik.handleSubmit}
        // className="d-flex flex-column justify-content-center align-items-center w-100"
      >
        <InputTextField
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
          label="Account"
        />
        <InputTextField
          type="password"
          name="password"
          label="Password"
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <SelectTextField
          name="loginType"
          label="Login Type"
          helperText={
            formik.touched.loginType && formik.errors.loginType
              ? formik.errors.loginType
              : null
          }
          onChange={formik.handleChange}
          value={formik.values.loginType}
          data={[
            { value: 1, name: "Login with account" },
            { value: 2, name: "Login as guest" },
          ]}
        />
        <Button
          type="submit"
          variant="contained"
          className="w-100 mx-auto normal-case"
          aria-label="LOG IN"
          style={{
            backgroundColor: "#2FAAFC",
            color: "#FFF",
            borderColor: "#2FAAFC",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Sign In
        </Button>
        <div
          className="d-flex align-items-center justify-content-between w-100 pt-3"
          style={{ fontSize: 16 }}
        >
          <Link href="/forgot-password">Forgot Password</Link>
          <Link href="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginTab;
