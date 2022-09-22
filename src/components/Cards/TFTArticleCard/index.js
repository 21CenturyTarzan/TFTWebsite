/**
 **************************************************************
 * The Fans Together WebKit - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI (https://t.me/Telecrypto20)
 * 
 **************************************************************
 */

import React from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";

import TFTTypography from "components/TFTTypography";
import TFTBox from "components/TFTBox";
import AnonymousPhoto from "assets/images/person.png";
import { Link } from "react-router-dom";


export default function TFTArticleClard({ photo, name, description, height, to, ...rest }) {
  return (
    <Card
      component={Link}
      to={to}
      sx={{
        alignItems: "center",
        maxWidth: {
          xs: "100%",
          // md: "100%"
        },
        height: "100%",
        overflow: "hidden",
        ...rest
      }}>
      <TFTBox
        component="img"
        src={photo}
        height={height}
      />
      <TFTTypography
        p={1}
        variant="h4"
        fontSize={{
          xs: "14px",
          md: "20px",
        }}
        lineHeight="normal"
        color="dark"
        align="center"
      >
        {name}
      </TFTTypography>
      <TFTTypography
        variant="body2"
        color="dark"
        mb={1} px={1}
        fontSize={{
          xs: "12px",
          md: "16px",
        }}
        sx={{
          lineBreak: {
            xs: "anywhere",
            md: "normal"
          }
        }}
      >
        {description}
      </TFTTypography>
    </Card>
  )
}

TFTArticleClard.defaultProps = {
  name: "",
  description: "",
  height: "150px",
  photo: AnonymousPhoto,
  to: "#",
}

TFTArticleClard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.string,
  to: PropTypes.string
}
