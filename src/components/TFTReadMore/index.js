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

import React, { useState } from "react";
import PropTypes from "prop-types";

import { Grid } from "@mui/material";
import { RDMTextBox, RDMButton } from "./Styled";

export default function TFTReadMore({ text, limitation, img }) {
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <Grid
      container
      direction="column"
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <RDMTextBox
        py={3}
        variant="body2"
        blur={isReadMore}
        img={img}
      >
        {isReadMore ? text.slice(0, limitation) + "..." : text}
      </RDMTextBox>
      <RDMButton
        variant="outlined"
        onClick={toggleReadMore}
      >
        {isReadMore ? "Read More" : "Show less"}
      </RDMButton>
    </Grid>
  )
}

TFTReadMore.defaultProps = {
  text: "",
  img: undefined,
  limitation: 500
}

TFTReadMore.propTypes = {
  text: PropTypes.string,
  limitation: PropTypes.number,
  img: PropTypes.any,
}