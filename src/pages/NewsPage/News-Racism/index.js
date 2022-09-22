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
      As of the 14th March, we have affiliated with Show Racism the Red Card (SRtRC), the UK’s leading
      anti-racism educational charity. We sought out this affiliation to reflect the ethos embedded in this
      project from the beginning displayed in The Fans Together Charter.
      <br /><br />
      - “Community Ethos – We believe sports clubs should understand they are part of a broader community
      and should contribute through community initiatives in charitable work and inclusivity.”
      - “Equality - To ensure equality for all in terms of gender, race, sexuality and socio-economic status.”<br /></>,
    picture: require("assets/images/news/racism/part-1.png"),
  },
  {
    text:
      <>
        In the 1990s, Shaka Hislop, Goalkeeper at Newcastle United was confronted by racial abuse from
        a group of young people at a petrol station. When one of these young people recognised him;
        they came up to him to ask for an autograph. This incident showed Hislop the power of professional
        players to influence young people. In 1996, thanks in part to a donation from the goalkeeper, Show
        Racism the Red Card was formed.
        <br /><br />
        SRtRC aims to fight racism by, in their own words, “Producing educational resources”, “Developing
        activities to encourage people, including young people, to challenge racism” and “In parts of the UK,
        challenging racism in the game of football and other sports”.
      </>,
    picture: require("assets/images/news/racism/part-2.png")
  },
  {
    text: <>
      Since its founding, SRtRC has been leveraging the social capital of professional football players
      and clubs to educate, focusing particularly on providing workshops to young people in schools
      and adults in workplaces. In 2019, SRtRC delivered anti-racism education to 49,000 young people
      and 4,296 adults along with running a competition with 27,000 young adult participants. Though they
      struggled, as well all did, through the pandemic in 2020 they reached a commendable 12,852 young
      people and 3,886 adults through education and a competition with 25,000 competitors.
      <br /><br />
      We at The Fans Together Core Team see many opportunities for productive collaboration.
      This might include, for example: online work, fund-raising events or education and training workshops
      all on regional and national levels. We also see great value in an ongoing dialogue with SRtRC, to shape
      TFT’s approach to confronting discrimination in the sports space.
      <br /><br />
      Of course, this is only the Core Team’s conception of how our affiliation will work and in reality, it will
      be up to the members of DAO to propose, participate, shape and approve of how we move forward.
      If you want to get involved in our affiliation with SRtRC you are welcome at our Discord partnerships
      channel to start conversations, or join the Soonaverse to vote on any proposals.
      Join our Discord here: <NewsLinkItem link="https://discord.gg/jHFCY2aGsv" text="discord.gg/jHFCY2aGsv" />
    </>
  }
];

export default function NewsRacism() {
  return (
    <News
      mainImg={require("assets/images/news/racism/background.png")}
      title="Show Racism the Red Card"
      news={news}
    />
  )
}
