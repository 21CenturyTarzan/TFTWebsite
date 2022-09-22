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
  // , { useState }

// react-router components
// import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
// import MuiLink from "@mui/material/Link";

import TFTBox from "components/TFTBox";
// import TFTTypography from "components/TFTTypography";

import TFTNavbarDropdown from "components/TFTNavBar/NavbarDropdown";

export default function TFTNavbarMobile({ routes, open }) {
  // const [collapse, setCollapse] = useState("");

  // const handleSetCollapse = (name) => (collapse === name ? setCollapse(false) : setCollapse(name));

  const renderNavbarItems = routes.map(
    ({ name, icon, href, route, collapse: navCollapse }) => (
      <TFTNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        // collapseStatus={name === collapse}
        // onClick={() => handleSetCollapse(name)}
        href={href}
        route={route}
        light
        collapse={Boolean(navCollapse)}
      >
        {/* <TFTBox sx={{ height: "15rem", maxHeight: "15rem", overflowY: "scroll" }}>
          {routeCollapses &&
            routeCollapses.map((item) => (
              <TFTBox key={item.name} px={2}>
                {item.collapse ? (
                  <>
                    <TFTTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                    >
                      {item.name}
                    </TFTTypography>
                    {item.collapse.map((el) => (
                      <TFTTypography
                        key={el.name}
                        component={el.route ? Link : MuiLink}
                        to={el.route ? el.route : ""}
                        href={el.href ? el.href : ""}
                        target={el.href ? "_blank" : ""}
                        rel={el.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                      >
                        {el.name}
                      </TFTTypography>
                    ))}
                  </>
                ) : (
                  <TFTBox
                    key={item.key}
                    display="block"
                    component={item.route ? Link : MuiLink}
                    to={item.route ? item.route : ""}
                    href={item.href ? item.href : ""}
                    target={item.href ? "_blank" : ""}
                    rel={item.href ? "noreferrer" : "noreferrer"}
                    sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",
                      py: 1,
                      px: 1.625,

                      "&:hover": {
                        backgroundColor: grey[200],
                        color: dark.main,

                        "& *": {
                          color: dark.main,
                        },
                      },
                    })}
                  >
                    <TFTTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      {item.name}
                    </TFTTypography>
                    <TFTTypography
                      display="block"
                      variant="button"
                      color="text"
                      fontWeight="regular"
                      sx={{ transition: "all 300ms linear" }}
                    >
                      {item.description}
                    </TFTTypography>
                  </TFTBox>
                )}
              </TFTBox>
            ))}
        </TFTBox> */}
      </TFTNavbarDropdown>
    )
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <TFTBox width="100%" my={2} ml={0} sx={{backdropFilter: "blur(4px)"}}>
        {renderNavbarItems}
      </TFTBox>
    </Collapse>
  );
}

// Typechecking props for the TFTNavbarMobile
TFTNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};
