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

// @mui material components
// import Icon from "@mui/material/Icon";

// Pages
import React from "react";
// import LandingPage from "pages/LandingPage";
import AboutPage from "pages/AboutPage";
import WhitePaper from "pages/WhitePaper";

const routes = [
  {
    name: "About",
    route: "/about",
    component: <AboutPage />,
    // default: true,
  },

  {
    name: "News",
    route: "/news",
    // component: <LandingPage />,
  },

  {
    name: "NFT",
    route: "/nfts"
    // href: "#ShopNFT",
  },

  {
    name: "Contact",
    route: "/contact",
    // component: <LandingPage />,
  },

  {
    name: "Whitepaper",
    route: "/white-paper",
    component: <WhitePaper />,
  },

  // {
  //   name: "Log In",
  //   route: "/signin",
  //   // component: <LandingPage />,
  // },
];

export default routes;
