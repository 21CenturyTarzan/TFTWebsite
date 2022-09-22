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
import { Container, Grid } from "@mui/material";
import TFTTypography from "components/TFTTypography";
import TFTInput from "components/TFTInput";
import TFTButton from "components/TFTButton";
import { Link } from "react-router-dom";
import TFTSocialGroup from "components/TFTSocialGroup";

export default function SubscribeTFT() {
  return (<Container sx={{ marginTop: "2rem" }}>
    <Grid container>
      <Grid item xs={12} sm={8}>
        <TFTTypography variant="body2">
          Subscribe to TFT
        </TFTTypography>
        <Grid container my={2}>
          <TFTInput
            placeholder="enter your email address"
            inputProps={{
              style: {
                color: "white",
                padding: "5px",
                fontFamily:"Helvetica",
              }
            }}
            sx = {{
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white"
              }
            }}
          />
          <TFTButton variant="outlined">Subscribe</TFTButton>
        </Grid>
        <TFTTypography variant="body2">
          Subscribe to keep frequently updated to TFT and more!
        </TFTTypography>
        <TFTTypography variant="body2">
          Sign up now!
        </TFTTypography>
        <TFTTypography variant="body2" mt={2}>
          For our privacy policy please click here.
          {/* <TFTTypography variant="body2" component={Link} to="/" color="success">
            here.
          </TFTTypography> */}
        </TFTTypography>
      </Grid>
      <Grid item xs={12} sm={4} mt={{xs:3}}>
        <Grid item container sx = {{alignItems:"center"}}>
          <TFTSocialGroup />
        </Grid>
        <Grid item container my={3} sx={{ alignItems: "end" }}>
          <Grid container direction="column" width="fit-content">
            <TFTTypography variant="body2" component={Link} to="/">
              To contact us
            </TFTTypography>
            <TFTTypography mt={1} variant="body2" component={Link} to="/">
              Help
            </TFTTypography>
            <TFTTypography mt={1} variant="body2" component={Link} to="/">
              News
            </TFTTypography>
            <TFTTypography mt={1} variant="body2" component={Link} to="/">
              {`FAQ's`}
            </TFTTypography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>)
}