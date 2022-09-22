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
import Container from "@mui/material/Container";
import bkImage from "assets/images/upcomingmint.png";
import { Grid } from "@mui/material";
import TFTTypography from "components/TFTTypography";
import PropTypes from "prop-types";
import TFTBox from "components/TFTBox";
import TFTButton from "components/TFTButton";
import { NavigateNext } from "@mui/icons-material";

const TitleText = ({ text }) => (
  <TFTTypography
    sx = {{
      fontSize : {
        xs: "1em",
        sm: "2em"
      }
    }}
    lineHeight={1.5}
  >
    {text}
  </TFTTypography>)

export default function UpcomingMints() {
  return (<Container>
    <Grid
      container
      sx={{ 
        background: `url(${bkImage})`, 
        backgroundSize: "contain", 
        backgroundPosition: "center",
        backgroundRepeat: "no",
        maxWidth:"1000px", 
        height: {
          xs:"120px",
          sm:"250px",
        },
        margin: "auto"
      }}
    >
      <Grid item
        xs={6}
        style={{ borderRight: "solid white 2px" }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <TFTBox width="fit-content" py={2} style={{ margin: "auto" }}>
          <TitleText text="UP AND" />
          <TitleText text="COMING" />
          <TitleText text="MINTS" />
        </TFTBox>
      </Grid>
      <Grid item xs={6} container direction="column">
        <Grid
          item
          container
          justifyContent="right"
          alignItems="end"
          sx = {{
            height : {
              xs : "60%",
              sm : "70%"
            }
          }}
        >
          <TFTTypography variant="body2" width="60%" mb={3} mr={3} 
            sx = {{
              display : {
              xs: "none",
              sm: "flex"
            }
          }}>
            Click here to have a look at our history of mints and all the new things coming up.
          </TFTTypography>
        </Grid>
        <Grid item container justifyContent="right" alignItems="end" sx={{height:{xs:"40%", sm:"30%"}}}>
          <Grid container sx={{width:"fit-content"}}>
            <TFTButton variant="outlined">
              View All
            </TFTButton>
            <TFTButton variant="outlined" sx={{padding:"0", minWidth:"0"}}>
              <NavigateNext sx = {{width:"40px", height:"40px"}}/>
            </TFTButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>)
}

TitleText.propTypes = {
  text: PropTypes.string.isRequired,
}
