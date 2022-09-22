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
import { Grid } from "@mui/material";
import TFTTypography from "components/TFTTypography";
import TFTBox from "components/TFTBox";
import { ImgLinkButton, News } from "../components";
import { NewsLinkItem } from "../components";
import TFTSubTitle from "components/TFTSubTitle";
import imgSoonaverse from "assets/images/soonaverse.svg";
import imgOpenSea from "assets/images/opensea.svg";
const news = [
  {
    title: "Who is the club?",
    text: <>
      In the beautiful Greek island of Create on its Northern coast nestles the ancient settlement the Minoans called Rethymno. It is here that The Fans Together arrived one month ago to progress negotiations to acquire equity in the local Greek Super League 2 club FC Episkopi.
      <br /><br />
      Having been warmly welcomed by the club President, two Vice Presidents and staff, the core team spent 10 days getting a feel for the club and community. As part of this we visited two away matches and a home game to understand what makes the club tick.
    </>
  },
  {
    text:
      <Grid container>
        <TFTBox
          component="img"
          src={`${require("assets/images/news/testnetfc/part-1.jpg")}`}
          width={{
            xs:"100%",
            md:"50%"
          }}
          height={{
            xs: "300px",
            md: "auto"
          }}
          sx={{color:"white"}}
        />
        <TFTTypography 
          variant="body2" 
          fontSize="20px" 
          lineHeight="2"
          width= {{
            xs:"100%",
            md:"50%"
          }}
          pl={{
            xs:0,
            md:2
          }}
        >
          On the field the club was promoted last season for their second visit to the Super League Greece 2. The league is split into Northern and Southern divisions with the division winners playing off and the winner going up automatically and the loser playing off against the 2nd bottom team in Greece Super League 1. 4 teams are relegated each year from each of the Super League 2 divisions so it is competitive!
        </TFTTypography>
      </Grid>,
  },
  {
    text: "In the last week the club has secured its position with enough points to avoid relegation and now is looking forward to planning for the next season whilst pushing in the last games to finish as high as they can in the league.",
    picture: require("assets/images/news/testnetfc/part-2.jpg"),
  },
  {
    text: "This club is precisely what The Fans Together target. It is well run, has great facilities (two stadiums one grass one 3g and two grass training fields and other infrastructure across the area) and is a solid candidate for promotion. We feel by increasing the eyeballs on the club and its revenues as a by product that this will enable an approach next season to take the league by storm and stake a claim to the upper level of Greek football.",
    picture: require("assets/images/news/testnetfc/part-3.jpg"),
  },
  {
    text: <>The club suffered hugely during the pandemic and has, like all clubs had an ebbing cashflow as sponsorship payments filter through inconsistently. The club has done well to stay in business as times have been tough with no crowds for long periods and uncertainty around when matches could and couldn’t be played impacting at all levels from youth and up.<br/><br/>
      The first team playing roster is almost all contracted to the end of this season only and is a young squad. There is a U19 team (looked some tasty prospects when we were at training and matches) and a u16 team with a great group of local lads coming through. There will be a lot more info about them as we progress and @TFT_Charlie is due to head out on Monday to get interviews and be up close and personal with the players and coaches to introduce them to the community. This will all be on the website when it launches on Monday and uploads will happen daily with new articles and video and photos.</>,
  },
  {
    title: "The Deal",
    text: <>A financial investment totalling 200,000 Euros is proposed to be made to the club and is structured as 30,000 sponsorship for this season to be the shirt sleeve sponsor, 70,000 Euros equity investment and a further 100,000 Euro sponsorship deal for next season.<br/><br/>
      In exchange TFT will have an immediate 20% equity in the club and options at an agreed rate to buy further equity as time progresses if the community wants to. (Rates and timetable to be released if this deal is approved by the DAO as this aspect is still under NDA).<br/><br/>
      To date the 30,000 Euro sponsorship has been paid and has granted this period of exclusivity to have the transaction ratified by the DAO vote. This will be an historic acquisition as the worlds first DAO to buy and own equity in a pro sports team. If ratified we will go and sign the deal at this Wednesdays home match and there will be a press conference.<br/></>
  },
  {
    title: "Finances:",
    text: "The DAO is fortunate to have VC backing to enable it to move ahead even if the treasury is not in a position to support the acquisition and this seed investment allows us to say to you that of course we want to raise more money but the vote you make now will be enacted and the DAO will own the equity as described as soon as legals are concluded. The seed investment is being compensated with $TFT tokens at ICO just like with our NFT buyers. Thank you everyone who has supported us so far and if anybody would like to jump on too there is the opensea marketplace and our #SOONAVERSE collection too which you can buy with #IOTA. The whitepaper found on our discord gives our full tokenomics breakdown for anybody not sure on these details."
  },
  {
    text: <Grid container my={2}>
      <ImgLinkButton xs={6} image={imgSoonaverse} title="Soonaverse" link="https://soonaverse.com/space/0x3e161347e69f572e422d4cef556631532cc973d9/collections"/>
      <ImgLinkButton xs={6} image={imgOpenSea} title="Opensea" link="https://opensea.io/collection/thefanstogether"/>
    </Grid>,
  },
  {
    title: "Legal Structure:",
    text: "We have talked big about legal structures and there is an article which covers this in depth which will be available on Monday. I will precis here though for the purpose of this vote. Each teams equity we own is housed in a local jurisdiction entity. In this case a Greek S.A. company. Behind this the structure being implemented for the ICO (subject to Jersey FCA authorisation) is to have a Jersey Foundation as the ultimate owner of the clubs. Therefore each club is ringfenced and protected from any potential DAO wide issues and also is able to be run as local custom and needs dictate. Of course we don’t take profit from our sports clubs, all of those funds are reinvested to bring better success.",
  },
  {
    title: "The Future",
    text: <>Also remember this is the beginning of The Fans Together, the talking is over. This is the project we will use (alongside a basketball club -!!! Did you say basketball club? Oh yes I did, but that’s next weeks vote!) to perfect the app and the scope of interactions with the clubs the DAO buys.<br/><br/>
      Our goal remains to acquire a Premier League Football team and this ‘proof of concept’ is hugely important as well as defining us as the first in in the world in the space to move. We also are unique in the other projects announced in the space that not only are we globally first but we also are a place for all sports fans to come together and combine our passion and talents to support diverse sports and teams. There are of course other projects lined up and the community will find there is a huge pipeline of votes coming up.</>,
    // picture: require("assets/images/news/testnetfc/part-4.png"),
  },
  {
    text: 
    <Grid container direction="column" sx={{
      background: `url(${require("assets/images/news/testnetfc/part-4.png")})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right top",
    }}>
      <TFTSubTitle title="The Vote" mt={2} mb={1}/>
      <TFTTypography variant="body2" fontSize="20px" lineHeight="2">
        It is Yes or No time. Do we want to buy 20% of FC Episkopi and get this party started?
        Check out our proposal <NewsLinkItem link="https://soonaverse.com/proposal/0x52f5eef2a8ae4f4d3db4f68392dfa830f0cc3795/overview" text="here." />
      </TFTTypography>
      <TFTSubTitle title="Conclusion" mt={2} mb={1} />
      <TFTTypography variant="body2" fontSize="20px" lineHeight="2">
        In the words of our Twitter team – Let’s Go! This is a ready deal that has been worked on for a long time, DD has concluded with the club being positioned as the best of the options we looked at. We looked by the way at over 12 options shortlisted by our football agents and advisors. The location is stunning, the team has great foundations and good prospects. The Fans Together can literally take them to another league by bringing fans to the club as either active or passive supporters. Some of you will grow to love the club and follow each and every game and all the news as it comes out, others might prefer basketball or rugby or motor racing and just be content to support FC Episkopi from afar. Either way there is a place for you at The Fans Together as we build this community.
      </TFTTypography>
    </Grid>
  },
];

export default function NewsTestnetFC() {
  return (
    <News
      mainImg={require("assets/images/news/testnetfc/face.png")}
      title="#TESTNETFC"
      news={news}
    />
  )
}
