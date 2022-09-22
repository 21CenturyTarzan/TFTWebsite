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

// prop-types is a library for typechecking of props
import React from "react";
import TFTBox from "components/TFTBox";
import { BlogTypography, SkewBox } from "./Styled";
// import TFTBlogCard from "components/Cards/TFTBlogCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import TFTButton from "components/TFTButton";
import ArticleList from "pages/ArticlePage/sections/ArticleList";

const BlogTitle = () => {
  return (
    <SkewBox pl={1} width={{ xs: "80%", sm: "40%" }}>
      <BlogTypography
        variant="h4"
        py={1}
        fontSize="30px"
        textTransform="uppercase"
        sx={{ letterSpacing: "8px" }}
      >
        News
      </BlogTypography>
    </SkewBox>
  )
}

export default function Blogs() {
  return (<Container>
    <TFTBox mb={2}>
      <BlogTitle />
      <ArticleList />
      {/* <Grid container>
        {
          articles.map((e, i) => (
            <Grid
              item key={i} lg={3} md={6} xs={6} p={1}
            >
              <TFTBlogCard
                image={e.image}
                title={e.title}
                description={e.description}
                action={{
                  type: "internal",
                  route: "#",
                  color: "primary",
                  label: ""
                }}
                sx={{ lineSpaceing: "5px" }}
              /></Grid>)
          )
        }
      </Grid> */}
      <Grid container justifyContent="right">
        <TFTButton
          variable="outlined"
          color="warning"
          component={Link}
          to="/news"
          fontSize="15px"
          sx={{ float: "right", borderRadius: "4px", marginBottom: "4rem" }}
        >
          More
        </TFTButton>
      </Grid>
    </TFTBox>
  </Container>
  )
}

// const articles = [
//   {
//     image: require("assets/images/article-1.png"),
//     title: "Coming Soon",
//     description: "...",
//   },
//   {
//     image: require("assets/images/article-2.png"),
//     title: "Coming Soon",
//     description: "...",
//   },
//   {
//     image: require("assets/images/article-3.png"),
//     title: "Coming Soon",
//     description: "...",
//   },
//   {
//     image: require("assets/images/article-4.png"),
//     title: "Coming Soon",
//     description: "...",
//   },
//   {
//     image: require("assets/images/article-5.png"),
//     title: "Coming Soon",
//     description: "...",
//   },
//   {
//     image: require("assets/images/article-6.png"),
//     title: "Coming Soon",
//     description: "...",
//   },
//   {
//     image: require("assets/images/article-7.png"),
//     title: "Coming Soon",
//     description: "...",
//   },
//   {
//     image: require("assets/images/article-8.png"),
//     title: "Coming soon",
//     description: "...",
//   }
// ]