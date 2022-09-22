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
import PropTypes, {any} from "prop-types";
import { InputAdornment } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import TFTInput from "components/TFTInput";

const IconTextField = ({ iconStart, iconEnd, InputProps, sx, ...props }) => {
  return (
    <TFTInput
      {...props}
      InputProps={{
        classes: {
          input: {
            padding: "0"
          }
        },
        style: {
          color: "white"
        },
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null,
      }}
      sx={{
        width: {
          xs: "50%",
          md: "30%",
        },
        backgroundColor: "#0d314680",
        border: "solid 2px #0d3146",
        borderRadius: "30px",
        padding: "0",
        marginBottom: "2rem",
        ...sx
      }}
    />
  );
};

export default function TFTSearchBox({sx, ...rest}) {
  return (
    <IconTextField
      iconStart={<SearchRounded sx={{ fill: "white", width: "30px", height: "30px" }} />}
      sx = {{...sx}}
      {...rest}
    />
  )
}

TFTSearchBox.defaultProps = {
  sx: {}
}

TFTSearchBox.propTypes = {
  sx: PropTypes.object
}

IconTextField.defaultProps = {
  sx: {},
  iconStart: any,
  iconEnd : any,
  InputProps : any,
}

IconTextField.propTypes = {
  iconStart: PropTypes.any,
  iconEnd : PropTypes.any,
  InputProps : PropTypes.any,
  sx: PropTypes.object
}