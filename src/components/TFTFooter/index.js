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
 import { Grid } from "@mui/material";
 import { Link } from "react-router-dom";
 import TFTTypography from "components/TFTTypography";
 import TFTSocialGroup from "components/TFTSocialGroup";
//  import TFTInput from "components/TFTInput";
//  import TFTButton from "components/TFTButton";
 import { PropTypes } from "prop-types";
 
 const contactUrls = [
   {
     title: "Contact Us",
     url: "/contact",
   },
   {
     title: "Help",
     url: "/help",
   },
   {
     title: "FAQ",
     url: "/faq",
   },
   {
     title: "News",
     url: "/news",
   },
 ]
 
 const settingUrls = [
   {
     title: "Privacy Policy",
     url: "/privacy-policy",
   },
   {
     title: "Cookie Settings",
     url: "#",
   },
 ]
 
 export default function TFTFooter({background, ...rest}) {
   return (
     <Grid 
      container 
      sx={{ background: background, paddingTop:"1rem"}}
      {...rest}
    >
       <Grid
         xs={12}
         sm={7}
         spacing={2}
         item
         container
         direction="comlumn"
       >
         <Grid item>
           <TFTTypography variant="body2" fontSize="16px">
             The Fans Together © 2022
           </TFTTypography>
         </Grid>
         {/* <Grid item container>
           <TFTInput
             placeholder="Enter your email address"
             inputProps={{
               style: {
                 color: "white",
                 padding: "5px",
                 fontFamily: "Helvetica",
                 border: "none"
               }
             }}
             sx={{
               borderRadius: "10px 0 0 10px",
               border: "solid 2px #5e8b9b",
               borderRight: "none"
             }}
           />
           <TFTButton
             variant="outlined"
             sx={{
               fontFamily: "Helvetica",
               fontWeight: "normal",
               borderRadius: "0 10px 10px 0",
               border: "solid 2px #5e8b9b",
               padding: "0 5px 0 5px",
               background: "transparent"
             }}
           >
             Subscribe
           </TFTButton>
         </Grid> */}
         <Grid item container>
           <Grid
             xs={6}
             item
             container
             direction="column"
           >
             {
               contactUrls.map((c, i) => (
                 <TFTTypography
                   key={`contact-${i}`}
                   variant="body2"
                   component={Link}
                   to={c.url}
                   fontSize="16px"
                   mb={1}
                 >
                   {c.title}
                 </TFTTypography>
               ))
             }
           </Grid>
           <Grid
             xs={6}
             item
             container
             direction="column"
           >
             {
               settingUrls.map((c, i) => (
                 <TFTTypography
                   key={`contact-${i}`}
                   variant="body2"
                   component={Link}
                   to={c.url}
                   mb={1}
                   fontSize="16px"
                 >
                   {c.title}
                 </TFTTypography>
               ))
             }
           </Grid>
         </Grid>
       </Grid>
       <Grid 
         xs={12} sm={5} 
         mb={1}
         item container 
         alignItems={{
           xs: "center",
           sm: "baseline"
         }}
         justifyContent = {{
           xs: "center",
           sm: "right"
         }}
       >
         <TFTSocialGroup />
       </Grid>
     </Grid>
   )
 }

 TFTFooter.defaultProps = {
   background: "transparent"
 }

 TFTFooter.propTypes = {
   background: PropTypes.string
 }