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
import PropTypes from "prop-types";
import { ReactComponent as IconNavUp } from "assets/images/symbol/navigate-up.svg";
import TFTTypography from "components/TFTTypography";
import TFTBox from "components/TFTBox";
import { Container, Grid } from "@mui/material";
import MuiLink from "@mui/material/Link";
// import TFTPageFace from "components/TFTPageFace";
import TFTButton from "components/TFTButton";
import DefNavBar from "pages/components/DefNavBar";
// import TFTNavbar from "components/TFTNavBar";
import TFTSubTitle from "components/TFTSubTitle";

// import LogoBrand from "assets/images/logo-mini.png";

// const routes = [
//   {
//     name: "All News",
//     route: "/news",
//   }
// ];

// function Nav() {
//   return (
//     <TFTNavbar
//       brand={{ image: LogoBrand, height: "48px" }}
//       routes={routes}
//       relative
//     />
//   )
// }

export const NewsPart = ({ title, text, picture }) => {
  return (
    <TFTBox pl={2}>
      {title && title !== "" && <TFTSubTitle title={title}/>}
      <TFTTypography variant="body2" fontSize="20px" lineHeight="2" textAlign="left">
        {text}
      </TFTTypography>
      {picture && picture !== "" &&
        <Grid container justifyContent="center">
          <TFTBox
            component="img"
            src={picture}
            width="80%"
            my={3}
          />
        </Grid>
      }
    </TFTBox>
  )
};

export function News({ mainImg, title, description, news }) {
  console.log(mainImg)
  return (
    <>
      <DefNavBar />
      <Container 
        sx={{ 
          overflow: "hidden", 
          background:`url(${mainImg})`,
          backgroundPosition: "right top",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      >
        <TFTTypography pt={20} variant="h1" 
          fontSize={{
            xs: "32px",
            md: "48px"
          }}
        >
          {title}
        </TFTTypography>
        <TFTTypography pt={2} variant="body2">
          {description}
        </TFTTypography>
        {/* {
          mainImg
          ? <TFTPageFace image={mainImg} title={title} description={description}/>
          : <TFTTypography pt={15} variant="h1" align="center">
              {title}
            </TFTTypography>
        } */}
        {
          news.map((part, i) => (
            <NewsPart key={`news-part-${i}`}
              title={part.title}
              text={part.text}
              picture={part.picture} />
          ))
        }
        <Grid container justifyContent="end">
          <TFTButton
            variant="outlined"
            href="#"
            startIcon={<IconNavUp width="20px" height="20px" fill="#ffffff" />}
            sx={{
              padding: "0px 10px",
              margin: "1rem",
              borderColor: "#5e8b9b",
              borderWidth: "2px",
              textTransform: "none",
              borderRadius: "5px",
            }}
          >
            Back to top
          </TFTButton>
        </Grid>
      </Container>
    </>
  )
}

export function NewsLinkItem({ link, text }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={{ color: "#7ba8e7", wordBreak: "break-all" }}>
      {text}
    </a>
  )
}

export function ImgLinkButton({ image, title, link, ...rest }) {
  return (
    <Grid container direction="column" spacing={2} {...rest}>
      <Grid item container justifyContent="center">
        <TFTBox
          component="img"
          src={image}
          width="50%"
        />
      </Grid>
      <Grid item m={"auto"}>
        <TFTButton
          variant="outlined"
          component={MuiLink}
          href={link}
          sx={{ borderRadius: "20px" }}
        >
          {title}
        </TFTButton>
      </Grid>
    </Grid>
  )
}

ImgLinkButton.defaultProps = {
  image: "",
  title: "",
  link: ""
}

ImgLinkButton.propTypes = {
  image: PropTypes.string,
  title: "",
  link: ""
}

NewsLinkItem.defaultProps = {
  link: "",
  text: ""
}

NewsLinkItem.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
}

NewsPart.defaultProps = {
  title: "",
  text: "",
  picture: ""
}

NewsPart.propTypes = {
  title: PropTypes.string,
  text: PropTypes.any,
  picture: PropTypes.string
}

News.defaultProps = {
  mainImg: "",
  title: "",
  description: "",
  news: [],
}

News.propTypes = {
  mainImg: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  news: PropTypes.array,
}