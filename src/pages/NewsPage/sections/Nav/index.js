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
import TFTNavbar from "components/TFTNavBar";
import LogoGrand from "assets/images/logo-mini.png";

const routes = [
  {
    name: "All News",
    route: "/news",
  }
];

export default function Nav() {
  return (
    <TFTNavbar
      brand={{ image: LogoGrand, height: "48px" }}
      routes={routes}
      relative
    />
  )
}