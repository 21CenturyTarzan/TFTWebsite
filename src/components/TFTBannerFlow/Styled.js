/**
 **************************************************************
 * The Fans Together WebKit - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI (https://t.me/Telecrypto20)
 * 
 **************************************************************
 */

import FiberManualRecord from "@mui/icons-material/FiberManualRecord";
import { IconButton, styled } from "@mui/material";

export const StyledRoot = styled("div")({
    position: "relative",
    overflow: "hidden",
    height: "100%",
});

export const StyledItem = styled("div")({
    position: "absolute",
    height: "100%",
    width: "100%",
});

export const StyledItemWrapper = styled("div")({
    position: "relative",
    width: "100%",
    height: "100%",
});

export const StyledIndicators = styled("div")({
    position: "absolute",
    bottom: "30px",
    width: "95%",
    right: "4%",
    textAlign: "right",
    zIndex: 1,
});

export const StyledFiberManualRecordIcon = styled(FiberManualRecord)({
    fontSize: "15px",
});

export const StyledIndicatorIconButton = styled(
    IconButton,
    { shouldForwardProp: (propName) => !propName.startsWith("$") }
)(({ $active }) => ({
    cursor: "pointer",
    transition: "200ms",
    padding: 0,
    color: "#ffffff",
    opacity: $active ? 0.4 : 0.1,
    "&:hover": {
        opacity: $active ? 0.6 : 0.5,
    },
    "&:active": {
        color: $active ? 0.6 : 0.5,
    }
}));

export const StyledIconButton = styled(
    IconButton,
    { shouldForwardProp: (propName) => !propName.startsWith("$") }
)(({ $alwaysVisible }) => ({
    margin: "0 10px",
    position: "relative",
    backgroundColor: "#494949",
    top: "calc(50% - 20px) !important",
    color: "white",
    fontSize: "30px",
    transition: "200ms",
    cursor: "pointer",
    opacity: $alwaysVisible ? "1" : "0",
    "&:hover": {
        opacity: "0.6 !important",
    },
}));

export const StyledButtonWrapper = styled(
    "div",
    { shouldForwardProp: (propName) => !propName.startsWith("$") }
)(({ $next, $prev, $fullHeightHover }) => ({
    position: "absolute",
    height: "100px",
    backgroundColor: "transparent",
    zIndex: 1,
    top: "calc(50% - 70px)",
    "&:hover": {
        "& button": {
            backgroundColor: "black",
            filter: "brightness(120%)",
            opacity: "0.4"
        }
    },
    ...($fullHeightHover ? {
        height: "100%", // This is 100% - indicator height - indicator margin
        top: "0"
    } : undefined),
    ...($next ? { right: 0 } : undefined),
    ...($prev ? { left: 0 } : undefined),
}));
