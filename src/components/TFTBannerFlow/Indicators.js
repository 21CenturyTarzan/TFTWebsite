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

import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";

// @material-ui/core components
// import { StyledFiberManualRecordIcon, StyledIndicatorIconButton, StyledIndicators } from "./Styled";
import LinearProgress from "@mui/material/LinearProgress";

export default function TFTIndicators(props) {
  const { active, length, progress } = props;

  let indicators = [];
  for (let i = 0; i < length; i++) {
    indicators.push(
      <Grid item
        xs={length < 5 ? 2 : (11 / length)}>
        <LinearProgress
          variant="determinate"
          className={`indicator-progress${i}`}
          key={`indicator-progress${i}`}
          value={i == active ? progress + 10 : i < active ? 100: 0}
          // onClick={() => { props.press(i) }}
          width="100%"
        />
      </Grid>
    );
  }

  return (
    <Grid container justifyContent="center"
      className="banner-indicator"
      width={{ xs: "95%", md: "90%", lg: "80%", xl: "70%", xxl: "60%" }}
      sx={{
        position: "absolute",
        bottom: "30px",
        justifyContent: "space-between",
        left: 0,
        // textAlign: "right",
        zIndex: 1,
      }}>
      {indicators}
    </Grid>
  )
}

// export default function TFTIndicators(props) {
//   const IndicatorIcon = useMemo(() => props.IndicatorIcon !== undefined ? props.IndicatorIcon :
//     <StyledFiberManualRecordIcon />, [props.IndicatorIcon]);

//   const completeListIfRequired = useCallback((arrayOfIcons) => {
//     while (arrayOfIcons.length < props.length) {
//       let index = 0;
//       arrayOfIcons.push(arrayOfIcons[index]);
//       index += 1;
//     }
//   }, [props.length]);

//   const {
//     className: indicatorIconButtonClass,
//     style: indicatorIconButtonStyle,
//     ...indicatorIconButtonProps
//   } = props.indicatorIconButtonProps;

//   const {
//     className: activeIndicatorIconButtonClass,
//     style: activeIndicatorIconButtonStyle,
//     ...activeIndicatorIconButtonProps
//   } = props.activeIndicatorIconButtonProps;

//   let indicators = [];

//   for (let i = 0; i < props.length; i++) {
//     const className = i === props.active ?
//       `${indicatorIconButtonClass} ${activeIndicatorIconButtonClass}` :
//       `${indicatorIconButtonClass}`;

//     const style = i === props.active ?
//       Object.assign({}, indicatorIconButtonStyle, activeIndicatorIconButtonStyle) :
//       indicatorIconButtonStyle;

//     let restProps = i === props.active ?
//       Object.assign({}, indicatorIconButtonProps, activeIndicatorIconButtonProps) :
//       indicatorIconButtonProps;

//     if (restProps["aria-label"] === undefined)
//       restProps["aria-label"] = "carousel indicator";
//     const createIndicator = (IndicatorIcon) => {
//       return (
//         <StyledIndicatorIconButton
//           $active={i === props.active}
//           key={i}
//           className={className}
//           style={style}
//           onClick={() => { props.press(i) }}
//           {...restProps}
//           aria-label={`${restProps["aria-label"]} ${i + 1}`}
//         >
//           {IndicatorIcon}
//         </StyledIndicatorIconButton>
//       )
//     }

//     Array.isArray(IndicatorIcon)
//       ? indicators.push(createIndicator(IndicatorIcon[i])) && completeListIfRequired(IndicatorIcon)
//       : indicators.push(createIndicator(IndicatorIcon))
//   }

//   const {
//     className: indicatorContainerClass,
//     style: indicatorContainerStyle,
//     ...indicatorContainerProps
//   } = props.indicatorContainerProps;

//   return (
//     <StyledIndicators className={indicatorContainerClass} style={indicatorContainerStyle} {...indicatorContainerProps}>
//       {indicators}
//     </StyledIndicators>
//   )
// }

TFTIndicators.propTypes = {
  IndicatorIcon: PropTypes.any,
  length: PropTypes.number,
  active: PropTypes.number,
  press: PropTypes.func,
  indicatorContainerProps: PropTypes.any,
  indicatorIconButtonProps: PropTypes.any,
  activeIndicatorIconButtonProps: PropTypes.any,
  progress: PropTypes.number,
};
