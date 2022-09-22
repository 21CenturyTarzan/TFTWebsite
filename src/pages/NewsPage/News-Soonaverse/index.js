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

// import { NavigateNext } from "@mui/icons-material";
import React from "react";
import { News, NewsLinkItem } from "../components";

const news = [
  {
    title: "WHAT IS THE SOONAVERSE?",
    text: <>The Soonaverse <NewsLinkItem link="https://soonaverse.com/" text="(https://soonaverse.com/)"/> is a platform for communities, allowing the formation of, management of, and participation in DAOs. These DAOs are formed in a ‘space’ which shows everything which is happening with the DAO. This includes vote proposals, awards, NFT collections and is soon to include discussion areas for community members. The Soonaverse is built on the IOTA network providing the advantage of a feeless structure for all member interactions.</>,
  },
  {
    title: "HOW DO THE FANS TOGETHER USE SOONAVERSE?",
    text: "The Fans Together have our own space on the Soonaverse where community members can use all of the aforementioned functions of spaces. This is currently the official space for TFT DAO votes and our NFT collection sales.",
  },
  {
    title: "CONNECTING TO THE SOONAVERSE",
    text: "There are three main phases to connect your MetaMask wallet to the Soonaverse. These are installing MetaMask, connecting to the IOTA EVM network and authorising the use of MetaMask on the Soonaverse. We will go through each one with a step-by-step guide. If you have already set up your MetaMask wallet to connect to the TFT website then you will have completed the first two phases and can skip ahead to the Soonaverse section.",
  },
  {
    title: "INSTALLING METAMASK",
    text: <>Go to <NewsLinkItem link="https://metamask.io/download/" text="https://metamask.io/download/"/> and install MetaMask on your browser, we will be using Chrome but all installations are very similar. Click ‘Install MetaMask for Chrome’.</>,
    picture: require("assets/images/news/soonaverse/MM Download Page.PNG"),
  },
  {
    text: "A new tab will open in the Chrome web store where you will be able to add the extension to your browser. Click ’Add to Chrome’.",
    picture: require("assets/images/news/soonaverse/MM Add Chrome Extension.png"),
  },
  {
    text: "You may receive a pop-up requesting permissions. Click ’Add extension’.",
    picture: require("assets/images/news/soonaverse/MM Add Metamask.png"),
  },
  {
    text: "You will now have the MetaMask browser extension installed which can be located in the top right corner of your browser, identified by the fox logo. You may have to open your extensions to find it (the jigsaw piece logo).",
    picture: require("assets/images/news/soonaverse/MM Extensions Logos.PNG"),
  },
  {
    text: "By opening MetaMask (clicking the fox logo) you will be directed to this page. Click ‘Get Started’.",
    picture: require("assets/images/news/soonaverse/MM Get Started.PNG"),
  },
  {
    text: "The next page will provide you with two options to set up your wallet. If you have created a MetaMask wallet before then you may import it by using your Secret Recovery Phrase. We will be demonstrating how you can ‘Create a Wallet’.",
    picture: require("assets/images/news/soonaverse/MM Create Wallet.png"),
  },
  {
    text: "After you have chosen your data permission preferences and created a password you will be directed to this page with a video tutorial explaining the use of your Secret Recovery Phrase and how to keep it safe. This is a crucial aspect of crypto wallets and important to understand. After watching, click ‘Next’.",
    picture: require("assets/images/news/soonaverse/MM Secure Wallet Video.PNG"),
  },
  {
    text: "You will now be given your unique Secret Recovery Phrase. Make sure to record them in the advised methods ensuring the words are in the correct order. Press ‘Click here to reveal secret words’ and then ‘Next’ once you are done.",
    picture: require("assets/images/news/soonaverse/MM Secret Recovery Phrase.PNG"),
  },
  {
    text: "The next page is used to ensure your Secret Recovery Phrase was recorded correctly. You must click each word in the order you were previously given. Once finished, click ‘Confirm’. ",
    picture: require("assets/images/news/soonaverse/MM Secret Recovery Phrase Test.png"),
  },
  {
    text: "Upon successful completion you will be greeted with this page. If you are happy with your method of storage for your Secret Recovery Phrase then take one final read of these precautions before clicking ’All Done’.",
    picture: require("assets/images/news/soonaverse/MM SRP Congrats.PNG"),
  },
  {
    title: "CONNECTING TO THE IOTA EVM",
    text: "The default MetaMask connection is the ‘Ethereum Mainnet’ network but we want to connect to the IOTA EVM network. Click the drop-down arrow next to ‘Ethereum Mainnet’ and then ‘Add Network’ to start this process.",
    picture: require("assets/images/news/soonaverse/MM Add Network.png"),
  },
  {
    text: <>Fill out all of the prompts using the following information<br/>
        Network Name: IOTA EVM Testnet<br/>
        New RPC URL: <NewsLinkItem link="https://evm.wasp.sc.iota.org" text="https://evm.wasp.sc.iota.org" /><br/>
        Chain ID: 1074<br/>
        Currency Symbol: IOTA<br/>
        Block Explorer URL: <NewsLinkItem link="https://explorer.wasp.sc.iota.org" text="https://explorer.wasp.sc.iota.org"/><br/>
        Once completed, click ‘Save’:
      </>,
    picture: require("assets/images/news/soonaverse/MM IOTA EVM Info.PNG"),
  },
  {
    text: "Your MetaMask has now successfully connected to the IOTA EVM network. You can always easily switch between your connected networks using the drop-down arrow on the MetaMask homepage.",
    picture: require("assets/images/news/soonaverse/MM IOTA EVM Added.PNG"),
  },
  {
    title: "SETTING UP YOUR SOONAVERSE PROFILE",
    text: <>Now that you have a MetaMask wallet set up and connected to the IOTA EVM network you are ready to make a Soonaverse profile. Go to <NewsLinkItem link="https://soonaverse.com/" text="https://soonaverse.com/"/>
      and click the ‘Connect’ button in the top right corner of the page to connect your MetaMask account. A pop-up will appear asking you to ‘Connect to your MetaMask wallet’, click on that tab.</>,
    picture: require("assets/images/news/soonaverse/Soonaverse Homepage MM connect.PNG")
  },
  {
    text: "You will receive a MetaMask notification requesting permission to connect with the Soonaverse. Click ’Next’ and then click ’Connect’. You will then be requested to sign your permission, click ’Sign’.",
    picture: require("assets/images/news/soonaverse/MM Notification.png"),
  },
  {
    text: "You will now be signed in to Soonaverse with your MetaMask account. Currently, your display name will be your MetaMask address, you will want to change this and customise the rest of your profile. Click on your display name and then ‘My Profile’.",
    picture: require("assets/images/news/soonaverse/Soonaverse Homepage My Profile.PNG"),
  },
  {
    text: "This page is where you can monitor your activity, check which spaces you have joined and view any awards, badges or NFTs you have earned or purchased. To edit your profile, click the pencil icon adjacent to your username.",
    picture: require("assets/images/news/soonaverse/Soonaverse Profile Edits.PNG")
  },
  {
    text: <>his will open up a tab for your profile settings where you can customise your display name, 
      give a brief description of who you are, mint your unique avatar and add any other networking 
      information which you wish to share.</>,
    picture: require("assets/images/news/soonaverse/Soonaverse Profile Share.PNG")
  },
  {
    text: "Once you’re happy with your profile you’ll want to explore the different DAOs hosting spaces on the Soonaverse. You can find these through the ‘Discover’ page, represented by the rocket ship icon. Once there you can browse freely or use the search bar to find a specific space, we’ll be using the search bar to find ‘The Fans Together’.",
    picture: require("assets/images/news/soonaverse/Soonaverse discover.PNG"),
  },
  {
    text: "This is the page you will see when you open the TFT space. You can view collections, proposals, awards and existing members here. Click ‘Join Space’ and sign the MetaMask request to become a member and participate in all of these aspects.",
    picture: require("assets/images/news/soonaverse/TFT Space.PNG"),
  },
  {
    text: "With all of that completed you will now have a Soonaverse profile set up and are a member of The Fans Together DAO! Make sure you spend some time exploring the other features and spaces on the Soonaverse as there a lot of great communities and projects on there."
  }
];

export default function NewsSoonaverse() {
  return (
    <News 
      mainImg={require("assets/images/news/soonaverse/background.png")}
      title="How to get Involved - Soonaverse"
      news={news}
    />
  )
}
