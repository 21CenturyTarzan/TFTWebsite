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
import Grid from "@mui/material/Grid";
import TFTArticleClard from "components/Cards/TFTArticleCard";

export default function ArticleList() {
  return (
    <Grid container justifyContent="center">
      {
        articles.map((e, i) => (
          <Grid
            item key={i} xl={3} md={3} xs={6} p={1}
          >
            <TFTArticleClard
              photo={e.image}
              name={e.title}
              height= {{
                xs: "150px",
                md: "200px"
              }}
              description={e.description}
              to={e.route}
              sx={{ lineSpaceing: "5px" }}
            /></Grid>)
        )
      }
    </Grid>
  )
}

const articles = [
  {
    image: require("assets/images/article/article-1.png"),
    title: "#TESTNETFC",
    description: "In the beautiful Greek island of Create on its Northern coast ...",
    route: "/news/testnetfc",
  },
  {
    image: require("assets/images/article/article-2.png"),
    title: "How to get Involved – Discord",
    description: "Discord is an online communication service ...",
    route: "/news/discord",
  },
  {
    image: require("assets/images/article/article-3.png"),
    title: "How to get Involved - Soonaverse",
    description: "The Soonaverse is a platform for communities...",
    route: "/news/soonaverse",
  },
  // {
  //   image: require("assets/images/article/article-4.png"),
  //   title: "About The Fans Together",
  //   description: "The impetus behind this project was the European Super League...",
  //   route: "/news/about",
  // },
  {
    image: require("assets/images/article/article-9.jpg"),
    title: "#DAOPIONEER",
    description: "We here at The Fans Together, since our inception have been...",
    route: "/news/daopioneer",
  },
  {
    image: require("assets/images/article/article-5.png"),
    title: "TFT Governance and Structure - the DAO",
    description: "The purpose of this article is to explain how TFT...",
    route: "/news/governance",
  },
  {
    image: require("assets/images/article/article-6.png"),
    title: "NFTs with Utility",
    description: "The Fans Together has released a range of NFTs...",
    route: "/news/nfts-util",
  },
  {
    image: require("assets/images/article/article-7.png"),
    title: "Show Racism the Red Card",
    description: "As of the 14th March, we have affiliated with Show Racism...",
    route: "/news/racism",
  },
  {
    image: require("assets/images/article/article-8.jpg"),
    title: "Press Release",
    description: "TFT agrees exclusivity period with Greece Super League 2...",
    route: "/news/daobuyft",
  },
]