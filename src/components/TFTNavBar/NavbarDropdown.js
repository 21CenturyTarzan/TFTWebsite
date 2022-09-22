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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
// import Icon from "@mui/material/Icon";

// TFTBox and TFTTypography
import TFTBox from "components/TFTBox";
import TFTTypography from "components/TFTTypography";

export default function TFTNavbarDropdown({
  name,
  // icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  // collapse,
  ...rest
}) {
  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <>
      <TFTBox
        {...rest}
        mx={1}
        py={1}
        px={{ md: "2px", lg: "8px" }}
        display="flex"
        alignItems="baseline"
        color={light ? "white" : "dark"}
        opacity={light ? 1 : 0.6}
        sx={{ cursor: "pointer", userSelect: "none" }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        {/* <TFTTypography
          variant="body2"
          lineHeight={1}
          color="inherit"
          sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
        >
          {icon}
        </TFTTypography> */}

        <TFTTypography
          variant="button"
          fontWeight="regular"
          // fontStyle="italic"
          fontSize="20px"
          textTransform="captalize"
          color={light ? "white" : "dark"}
          letterSpacing="0"
          sx={{ fontWeight: "100%", ml: 0, mr: 0.25 }}
        >
          {name}
        </TFTTypography>

        {/* <TFTTypography variant="body2" color={light ? "white" : "dark"} ml="auto">
          <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
            {collapse && "keyboard_arrow_down"}
          </Icon>
        </TFTTypography> */}
      </TFTBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of TFTNavbarDropdown
TFTNavbarDropdown.defaultProps = {
  children: false,
  collapseStatus: false,
  light: false,
  href: "",
  route: "",
};

// Typechecking props for the TFTNavbarDropdown
TFTNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  // icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  // collapse: PropTypes.bool.isRequired,
};
