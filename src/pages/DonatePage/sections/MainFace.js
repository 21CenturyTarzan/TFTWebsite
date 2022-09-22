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
import {Grid} from "@mui/material"
import TFTTypography from "components/TFTTypography";

export default function MainFace() {
  return (
    <Grid
      container
      width="100%"
      height= {{
        xs: "400px",
        sm: "500px",
        lg: "700px"
      }}
      direction="column"
      justifyContent="center"
      pl={2}
      sx={{
        background:`linear-gradient(270deg, rgba(0,26,47,.4), rgba(0,26,47,.4) 80%), url(${require("assets/images/donate/background.png")})`,
        backgroundSize:"cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <TFTTypography variant="h1">
        Donate
      </TFTTypography>
      <TFTTypography 
        mr={1}
        variant="body2" 
        fontSize="20px"
        letterSpacing = "1px"
        width={{
          xs: "fit-content",
          sm: "350px" 
        }}
        textAlign="justify"
      >
        {"The Fans Together is working hard to bring sports fans and pro clubs closer. Our donation info is below."}
      </TFTTypography>
    </Grid>
  )
}