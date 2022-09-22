/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI
 * 
 **************************************************************
 */
import React, { useEffect, useCallback } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// redux components
import { useDispatch, useSelector } from "react-redux";

// @mui components
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// TFT-WebKit themes
import theme from "assets/theme";
import TFTFooter from "components/TFTFooter";

// TFT slices and events
import { logout } from "slices/auth";
import EventBus from "events/EventBus";

// Routes
import TFTMessages from "pages/components/TFTMessages";
import LandingPage from "pages/LandingPage";
import WhitePaper from "pages/WhitePaper";
import AboutPage from "pages/AboutPage";
import DonatePage from "pages/DonatePage";
import ArticlePage from "pages/ArticlePage";
import NewsDiscord from "pages/NewsPage/News-Discord";
import NewsSoonaverse from "pages/NewsPage/News-Soonaverse";
import LoginPage from "pages/Authentication/Login";
import SignupPage from "pages/Authentication/Signup";
import NFTPage from "pages/NFTPage";
import FAQPage from "pages/FAQPage";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage";
import HelpPage from "pages/HelpPage";
import NewsTestnetFC from "pages/NewsPage/News-TestnetFC";
import ContactUs from "pages/ContacUs";
import NewsAboutTFT from "pages/NewsPage/News-AboutTFT";
import NewsGovernance from "pages/NewsPage/News-Governance";
import NewsNFTsUtility from "pages/NewsPage/News-NFTUtility";
import NewsRacism from "pages/NewsPage/News-Racism";
import NewsDaoBuyFt from "pages/NewsPage/News-DaoBuyFt";
import NewsDaoPioneer from "pages/NewsPage/News-DaoPioneer";

export default function App() {
  const { pathname } = useLocation();
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    // if (currentUser) {

    // } else {

    // }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // const getRoutes = (allRoutes) =>
  //   allRoutes.map((route) => {
  //     if (route.collapse) {
  //       return getRoutes(route.collapse);
  //     }

  //     if (route.route) {
  //       return <Route exact path={route.route} element={route.component} key={route.key} />;
  //     }

  //     return null;
  //   });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TFTMessages />
      <Routes>
        {/* {getRoutes(routes)} */}
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/white-paper" element={<WhitePaper />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/news" element={<ArticlePage />} />
        <Route path="/news/testnetfc" element={<NewsTestnetFC />} />
        <Route path="/news/discord" element={<NewsDiscord />} />
        <Route path="/news/soonaverse" element={<NewsSoonaverse />} />
        <Route path="/news/about" element={<NewsAboutTFT />} />
        <Route path="/news/governance" element={<NewsGovernance />} />
        <Route path="/news/nfts-util" element={<NewsNFTsUtility />} />
        <Route path="/news/racism" element={<NewsRacism />} />
        <Route path="/news/daobuyft" element={<NewsDaoBuyFt />} />
        <Route path="/news/daopioneer" element={<NewsDaoPioneer />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/nfts" element={<NFTPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<Navigate to="/landing-page" />} />
      </Routes>
      <Container><TFTFooter background="linear-gradient(90deg, transparent, #132b3f, transparent)" /></Container>
    </ThemeProvider>
  );
}
