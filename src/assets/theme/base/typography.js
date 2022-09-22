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

/**
 * The base typography styles for the TFT-WebKit.
 * You can add new typography style using this file.
 * You can customized the typography styles for the entire TFT-WebKit using thie file.
 */

// TFT-WebKit Base Styles
import colors from "assets/theme/base/colors";

// TFT-WebKit Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

import breakpoints from "assets/theme/base/breakpoints";

const {
  values: { md, lg },
} = breakpoints;

// const SM = `@media (min-width: ${sm}px)`;
const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;
// const XL = `@media (min-width: ${xl}px)`;
// const XXL = `@media (min-width: ${xxl}px)`;

const { white } = colors;

const baseProperties = {
  fontFamily: '"Helvetica", "DIN Condensed", "Arial", sans-serif',
  fontFamily2: '"Helvetica", "DIN Condensed", sans-serif',
  fontFamily3: '"Helvetica"',
  fontFamilyHelvetica: '"Helvetica"',
  fontWeightLighter: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(12),
  fontSizeXS: pxToRem(14),
  fontSizeSM: pxToRem(16),
  fontSizeMD: pxToRem(18),
  fontSizeLG: pxToRem(20),
  fontSizeXL: pxToRem(24),
  fontSize2XL: pxToRem(30),
  fontSize3XL: pxToRem(40),

};

const baseHeadingProperties = {
  color: white.main,
  fontWeight: baseProperties.fontWeightBold,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: white.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2,
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLighter: baseProperties.fontWeightLighter,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,
  // fontStyle: "italic",

  h1: {
    fontFamily: baseProperties.fontFamilyHelvetica,
    fontStyle: "bold",
    fontSize: pxToRem(48),
    lineHeight: 1.25,
    ...baseHeadingProperties,
  },

  h2: {
    fontFamily: baseProperties.fontFamily2,
    fontSize: pxToRem(36),
    [MD]: {
      fontSize: pxToRem(60),
    },
    [LG]: {
      fontSize: pxToRem(72),
    },
    lineHeight: 1.3,
    ...baseHeadingProperties,
  },

  h3: {
    fontFamily: baseProperties.fontFamily2,
    fontSize: pxToRem(24),
    [MD]: {
      fontSize: pxToRem(36),
    },
    [LG]: {
      fontSize: pxToRem(48),
    },
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h4: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(24),
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h5: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(20),
    // fontStyle: "italic",
    fontWeight: "300",
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h6: {
    fontFamily: baseProperties.fontFamily,
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    ...baseHeadingProperties,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.625,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  body2: {
    fontFamily: baseProperties.fontFamilyHelvetica,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightLighter,
    lineHeight: 1.2,
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.5,
    textTransform: "captialize",
    letterSpacing: "0px",
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.25,
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
  },

  d1: {
    fontSize: pxToRem(80),
    ...baseDisplayProperties,
  },

  d2: {
    fontSize: pxToRem(72),
    ...baseDisplayProperties,
  },

  d3: {
    fontSize: pxToRem(64),
    ...baseDisplayProperties,
  },

  d4: {
    fontSize: pxToRem(56),
    ...baseDisplayProperties,
  },

  d5: {
    fontSize: pxToRem(48),
    ...baseDisplayProperties,
  },

  d6: {
    fontSize: pxToRem(40),
    ...baseDisplayProperties,
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    "2xl": baseProperties.fontSize2XL,
    "3xl": baseProperties.fontSize3XL,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;
