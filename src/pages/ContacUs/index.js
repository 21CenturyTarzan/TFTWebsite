/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by DavidSparker
 * 
 **************************************************************
 */

import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Error, Success } from "slices/messages";
import * as yup from "yup";
import emailjs from "emailjs-com";

// templates
import CoverLayout from "pages/Templates/CoverLayout";
import InputForm from "pages/Templates/InputForm";
import TFTTypography from "components/TFTTypography";

import TFTInput from "components/TFTInput";
import TFTSocialGroup from "components/TFTSocialGroup";
import { Grid } from "@mui/material";

const borderColor = "#1a4a66";

export default function ContactUs() {
  const dispatch = useDispatch();
  const ContactScheme = yup.object({
    email: yup
      .string()
      .email("This is not a valid email.")
      .required("Email address is required"),
  });

  const formik = useFormik({
    initialValues: {
      from_name: "",
      email: "",
      subject: "",
      message: ""
    },
    validationSchema: ContactScheme,
    onSubmit: async values => {
      console.log("[DAVID] contact :: values = ", values);
      emailjs.send(
      "service_41jbv1b", 
      "template_nml622s", 
      { 
        to_name:"TFT", 
        from_name: values.from_name, 
        subject: values.subject, 
        message: values.message,
        reply_to: values.email
      }, 
      "fuXXAg6uuD-jbcGBe")
        .then((result) => {
          console.log("[DAVID] Success to send email. ", result.text);
          dispatch(Success("Success to send message to team."))
        }, (error) => {
          console.log("[DAVID] Failed to send email... ", error.text);
          dispatch(Error(`Failed to send message to team.${error.text}`))
        })
    },
  });

  const ContactFormData = [
    {
      type: "from_name",
      name: "from_name",
      caption: "Name:",
      placeholder: "Enter your name",
    },
    {
      type: "email",
      name: "email",
      caption: "Email:",
      placeholder: "Enter your Email Address",
    },
    {
      type: "subject",
      name: "subject",
      caption: "Subject:",
    },
  ];
  const buttons = [
    {
      type: "submit",
      caption: "Send",
      onClick: () => { },
    },
  ];

  return (
    <CoverLayout image={require("assets/images/contactus.png")}>
      <InputForm
        title="Contact"
        items={ContactFormData}
        formik={formik}
        buttons={buttons}
      >
        <Grid container xs={11} direction="column" pl={1}>
          <TFTTypography variant="body2" mb={1}>
            Message:
          </TFTTypography>
          <TFTInput
            type="message"
            name="message"
            multiline
            value={formik.values.message}
            onChange={formik.handleChange}
            rows={5}
            InputProps={{
              style: {
                color: "white",
                fontSize: "0.875rem",
              },
            }}
            sx={{
              border: "solid 2px #0d3146",
              borderRadius: "20px",
              padding: "0",
              '& textarea::-webkit-scrollbar': {
                width: "16px",
                cursor: "pointer"
              },
              '& textarea::-webkit-scrollbar-track': {
                border: `1px solid ${borderColor}`,
                borderRadius: "4px",
                cursor: "pointer"
              },
              '& textarea::-webkit-scrollbar-thumb': {
                border: `solid 3px ${borderColor}`,
                borderRadius: "8px",
                cursor: "pointer"
              }
            }}
          />
        </Grid>
        <TFTSocialGroup />
      </InputForm>
    </CoverLayout>
  );
}
