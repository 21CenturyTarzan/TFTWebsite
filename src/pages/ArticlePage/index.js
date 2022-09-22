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

import { Container } from "@mui/material";
import React from "react";
import ArticleList from "./sections/ArticleList";
import MainFace from "./sections/MainFace";
import DefNavBar from "pages/components/DefNavBar";

export default function ArticlePage() {
  return (
    <>
      <DefNavBar />
      <Container>
        <MainFace />
        <ArticleList />
      </Container>
    </>
  )
}