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
import { Grid } from "@mui/material";
import bkImage from "assets/images/donate/background.png"
import TFTTypography from "components/TFTTypography";
import { Link } from "react-router-dom";
import TFTNavigateButton from "components/TFTButton/TFTNavigateButton";
import { DonateContainer } from "./Styled";

export default function Donate() {
  return (
    <DonateContainer bkImage= {bkImage}>
      <Grid container direction="column">
        <TFTTypography variant="h1" fontFamiliy="Helvetica" fontSize="32px" lineHeight="2">
          Want to support TFT?
        </TFTTypography>
        <TFTTypography variant="body2" fontSize="20px" width="300px" mb={1}>
          {"The Fans Together is working hard to bring sports fans and pro clubs closer. Our donation info is below."}
        </TFTTypography>
        <TFTNavigateButton 
          component={Link}
          to="/donate"
          name="Donate Here"/>
      </Grid>
    </DonateContainer>
  )
}
