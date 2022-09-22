/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI
 * 
 **************************************************************
 */

import React, {
  // useEffect
} from "react";

import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";

// templates
import CoverLayout from "pages/Templates/CoverLayout";
import InputForm from "pages/Templates/InputForm";
import TFTTypography from "components/TFTTypography";

// import { clearMessage } from "slices/messages";
import { loginUser, loginEmail } from "slices/auth";

export default function LoginPage(props) {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(clearMessage());
  // }, [dispatch]);

  const LoginValidationSchema = yup.object({
    uemail: yup
      .string("Enter your username or email address")
      .min(3, "Username should be of minimum 3 characters length")
      .required("Username or Email address is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      uemail: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: async values => {
      console.log("[DAVID] loging submit--test");
      const { uemail, password } = values;
      dispatch(uemail.indexOf("@") != -1
        ? loginEmail({ email: uemail, password })
        : loginUser({ username: uemail, password })
      )
        .unwrap()
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
        });
    },
  });

  if (isLoggedIn) {
    // return <Redirect to="/profile" />;
    console.log("Login successfully");
  }

  const LoginFormData = [
    {
      type: "uemail",
      name: "uemail",
      caption: "Username / email:",
      placeholder: "Username or Email Address",
    },
    {
      type: "password",
      name: "password",
      caption: "Password:",
      placeholder: "************",
    },
  ];
  const buttons = [
    {
      type: "submit",
      caption: "Login",
      onClick: () => { },
    },
    {
      type: "walletconnect",
      caption: "Login with wallet",
      onClick: () => { },
    },
  ];

  return (
    <CoverLayout>
      <InputForm
        title="Login"
        items={LoginFormData}
        formik={formik}
        buttons={buttons}
      >
        <TFTTypography
          variant="body2"
        >
          Don&apos;t have an account?{" "}
          <TFTTypography
            component={Link}
            to="/signup"
            variant="button"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Sign up
          </TFTTypography>
        </TFTTypography>
      </InputForm>
    </CoverLayout>
  );
}


LoginPage.propTypes = {
  history: PropTypes.any,
};