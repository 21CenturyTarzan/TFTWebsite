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
import { News, NewsLinkItem } from "../components";

const news = [
  {
    text: <>
      We here at The Fans Together, since our inception have been working closely with the IOTA
      Foundation through their touchpoint program and through members of the Foundation.
      So when the DAO Pioneer Grant for a share of $100,000 was announced, the Core Team was excited
      for what it signalled and that it confirmed what we already knew; that there is serious interest in
      the potential of Decentralised Autonomous Organisations in the IOTA community and society as
      a whole.
      <br /><br />
      We made our application, elaborating on the enormous potential we see in The Fans Together. We
      made sure to highlight TFTs potential for facilitating and bringing mass adoption to IOTA. We were in
      a tough pool of applicants and we were impressed with ideas and concepts our fellow applicants
      made, but were vindicated by IOTA’s announcement that we were one of the three DAO’s chosen
      by the jury to receive the grant.
      <br /><br />
      This success meant a lot to the Team and to the project as a whole, the IOTA Foundation’s
      recognition brought sincere interest to our project and promised to aid in our development through
      the consultation workshops from the experienced ‘Bankless Consulting DAO’. The grant of $20,000,
      is being put to good use in the development of our DAO and given us the power to build this
      website and push our tech development further to reach our goals.
    </>,
    picture: require("assets/images/news/daopioneer/part-1.png")
  },
  {
    text: <>
      To celebrate, along with a few drinks, we decided to launch an NFT: the #DAOPIONEER to mark
      this special milestone and raise funds for the DAO. The #DAOPIONEER gives $TFT 10,000 at our
      Initial Coin Offering and like our other NFTs: bonuses of 40% at six months and 100% at twelve
      months. However, unlike our other NFTs and as a first for the #TFTNFT collection it comes with
      a physical copy of the hat for the owner.
      <br /><br />
      At the time of release, there are still #DAOPIONEER’s for sale, so if you haven’t yet, you can go
      pick one up on Soonverse or OpenSea! <NewsLinkItem link="https://thefanstogether.io/nfts" text="https://thefanstogether.io/nfts"/>
      <br /><br />
    </>
  }
];

export default function NewsDaoPioneer() {
  return (
    <News
      mainImg={require("assets/images/news/daopioneer/background.png")}
      title= "#DAOPIONEER"
      news={news}
    />
  )
}
