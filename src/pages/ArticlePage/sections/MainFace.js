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
import { Grid } from "@mui/material"
import TFTTypography from "components/TFTTypography";
import TFTSearchBox from "components/TFTButton/TFTSearchBox";

export default function ArticlesMainFace() {
  return (
    <Grid
      container
      width="100%"
      height={{
        xs: "400px",
        sm: "500px",
        lg: "700px"
      }}
      direction="column"
      // justifyContent="center"
      pl={2}
      sx={{
        background: `radial-gradient(transparent, #001a2f96), url(${require("assets/images/article/background.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Grid container direction="column" height="60%" justifyContent="flex-end">
        <TFTTypography mb={4} variant="h1">
          News
        </TFTTypography>
      </Grid>
      <Grid container direction="column" height="40%">
        <TFTTypography
          mr={1}
          mb={2}
          variant="body2"
          fontSize="20px"
          letterSpacing="1px"
          width={{
            xs: "fit-content",
            sm: "350px"
          }}
          textAlign="justify"
        >
          {"Here you can keep up to date with everything happening with The Fans Together"}
        </TFTTypography>
        <TFTSearchBox />
      </Grid>
    </Grid>
  )
}
