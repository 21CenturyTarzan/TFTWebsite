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
import React from "react";

// react-router components
// import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// mui components
import Grid from "@mui/material/Grid";

// Kit components
import TFTBox from "components/TFTBox";
import TFTButton from "components/TFTButton";
import TFTTypograpy from "components/TFTTypography";
import TFTInput from "components/TFTInput";

function InputForm({ title, items, formik, buttons, children, ...rest }) {
  return (
    <form onSubmit={formik.handleSubmit} {...rest}>
      <TFTTypograpy variant="h3" mb={2}>
        {title}
      </TFTTypograpy>
      <TFTBox
        borderRadius="xxl"
        coloredShadow="success"
        bgColor="rgba(0, 32, 59, 0.6)"
        border="2px solid #29455C"
        pt={4} pb={3}
      >
        <Grid container spacing={1} justifyContent="center" textAlign="left" pt={2}>
          {items.map((item, index) => (
            <>
              <Grid item xs={11} mb={1} key={`caption-${title}-${index}`}>
                <TFTTypograpy variant="body2">
                  {item.caption}
                </TFTTypograpy>
              </Grid>
              <Grid item xs={11} mb={3} key={`input-${title}-${index}`}>
                <TFTInput
                  type={item.type}
                  name={item.name}
                  id={item.name}
                  placeholder={item.placeholder}
                  fullWidth
                  required
                  InputProps={{
                    style: {
                      color: "white",
                      fontSize: "0.875rem",
                    },
                  }}
                  sx={{
                    backgroundColor: "rgba(0, 26, 47, 0.6)",
                    border: "solid 2px #0d3146",
                    borderRadius: "30px",
                    padding: "0",
                  }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values[item.name]}
                  error={formik.touched[item.name] && Boolean(formik.errors[item.name])}
                  helperText={formik.touched[item.name] && Boolean(formik.errors[item.name])}
                />
              </Grid>
            </>
          ))}
          {children}
        </Grid>
      </TFTBox>

      <Grid container spacing={1} mt={2} justifyContent="space-evenly" alignItems="center">
        {buttons.map((button, index) => (
          <Grid item key={`button-${title}-${index}`}>
            {
              button.type === "submit"
                ? <TFTButton
                  color="warning" size="large"
                  sx={{
                    borderRadius: "8px",
                    fontSize: "16px",
                  }}
                  type="submit"
                  // disabled={!formik.dirty || !formik.isValid}
                >
                  {button.caption}
                </TFTButton>
                : <TFTButton
                  color="warning" size="large"
                  sx={{
                    borderRadius: "8px",
                    fontSize: "16px",
                  }}
                  onClick={button.onClick}
                >
                  {button.caption}
                </TFTButton>
            }
          </Grid>
        ))}
      </Grid>
    </form>
  );
}

// Setting default props for the InputForm
InputForm.defaultProps = {
  title: "",
};

// Typechecking props for the InputForm
InputForm.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
  buttons: PropTypes.array.isRequired,
  formik: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputForm;
