/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI
 * Coded by DavidSparker
 * 
 **************************************************************
 */

import React from "react";

import TFTReadMore from "components/TFTReadMore"

// @mui material components
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TFTTypography from "components/TFTTypography";
import TFTBox from "components/TFTBox";

import quoteImg from "assets/images/about/quote.png";
import bannerImg from "assets/images/about/banner.png";
import titleEffect from "assets/images/about/title-effect.png";
import introEffect from "assets/images/about/intro-effect.png";

const HeaderBG = styled(TFTBox)({
  position: "relative",
  width: "100%",
  backgroundSize: "100%!important",
  backgroundPosition: "center top",
  background: `url(${bannerImg})`,
  backgroundRepeat: "no-repeat",
  "&:after": {
    content: '""',
    position: "absolute",
    right: "0",
    width: "10%",
    height: "100%",
    background: "linear-gradient(90deg,transparent,rgba(0,26,47,1) 80%)",
  },
});

export default function AboutUs() {
  return (
    <>
      <HeaderBG
        height={{ xs: "300px", sm: "400px", md: "500px", lg: "600px", xl: "700px", xxl: "800px" }}
      >
        <TFTBox
          position="absolute"
          bottom="5%"
          left="0"
          width="100%"
          height="fit-content"
        >
          <TFTTypography
            variant="h1"
            height="auto"
            fontSize={{
              xs: "24px", sm: "32px", md: "40px", lg: "50px", xl: "60px", xxl: "72px",
            }}
          >
            About
          </TFTTypography>
          <TFTTypography
            pl={3}
            variant="h1"
            textAlign="center"
            fontSize={{
              xs: "24px", sm: "32px", md: "40px", lg: "50px", xl: "60px", xxl: "72px",
            }}
          >
            THE FANS TOGETHER
          </TFTTypography>
        </TFTBox>
      </HeaderBG>
      <Grid
        container
        direction="column"
        sx={{
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <TFTBox
          component="img"
          src={quoteImg}
          width={{
            xs: "20px", sm: "24px", md: "32px", lg: "36px", xl: "40px", xxl: "48px"
          }}
          mr={"30%"}
        />
      </Grid>
      <TFTBox
        height="fit-content"
        mb={5}
        textAlign="center"
        display="flex"
        position="relative"
        justifyContent="center"
        alignItems="center"
      // sx={{ display: "flex", position: "relative", justifyContent: "center", alignItems: "center" }}
      >
        <TFTBox
          component="img"
          width="100%"
          height="100%"
          src={titleEffect}
          zIndex="1"
        />
        <TFTTypography
          variant="h1"
          textAlign="center"
          position="absolute"
          fontSize={{
            xs: "24px", sm: "32px", md: "40px", lg: "50px", xl: "60px", xxl: "72px",
          }}
        >
          COMMUNITY
        </TFTTypography>
      </TFTBox>
      <TFTReadMore
        text={aboutText}
        img={`url(${introEffect})`}
      />
    </>
  )
}


const aboutText = `The Fans Together is a DAO (Decentralised Autonomous Organisation) dedicated \
                  to bringing sports fans together from across the globe to give them power and \
                  say in professional sports clubs.

                  To achieve this goal, we The Fans Together are utilising the Tangle, a Distributed\
                  Ledger Technology (DLT) created by the IOTA Foundation to create a fast, free and \
                  frictionless way for Fans to engage with their sports clubs. Through our governance\
                  structure, fans will have a real say in their club’s operations.
                  
                  Anyone who owns at least one of The Fans Together’s $TFT tokens will be able to debate,\
                  contribute and ultimately decide, through votes and polls the direction of their \
                  sports clubs. Votes within the DAO are proposed by the TFT team and then token \
                  holders will be able to participate, deciding the outcome.

                  We have opted to use IOTA’s Tangle because of its many advantages, its fast, feeless, \
                  and energy efficient. These features are what make The Fans Together possible.`;
