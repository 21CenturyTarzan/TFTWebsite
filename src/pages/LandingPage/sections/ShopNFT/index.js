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

import { Container } from "@mui/material";

// components
import Grid from "@mui/material/Grid";
import TFTTypography from "components/TFTTypography";

import NFTSlider from "./NFTSlider";

import { useNft } from "configs/context/nft";

export default function ShopNFT() {
  const nft = useNft();
  return (
    <Container id="ShopNFT">
      <Grid container
        justifyContent="center"
      >
        <Grid item xs={12}>
          <TFTTypography variant="h2" sx={{ textAlign: "center", letterSpacing: "0.3rem", }}>
            Our NFTs
          </TFTTypography>
        </Grid>
        <Grid item xs={12} position="relative" top={{xs: "16px", md: "24px", lg: "32px"}}>
          <NFTSlider items={nft.list} />
        </Grid>
      </Grid>
    </Container>
  )
}
