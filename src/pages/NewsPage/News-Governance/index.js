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
    text: <>The purpose of this article is to explain how The Fans Together is structured and what the
      benefit of our approach is for the sports assets we buy into and for the DAO participants.<br />
      The first and most important thing to let you know is that there has been months of work preparing
      this structure using the best legal advice and tax advice available in the space. The brief given to
      these advisers was very straight forward: How can a DAO acquire and protect assets and how are
      participants then protected in their participation.<br />
      The goal was simple: solve the DAO dilemma!
    </>
  },
  {
    title: "The Assets",
    text: <>This might sound easy but jurisdictionally across the globe there are many different rules and laws to
      understand and to absorb in considering best practise and in obtaining the most robust structure for
      compliant operations.
      <br /><br />
      Remember that TFT is designed for fans to come together and to buy and run pro sports clubs. This
      is a worldwide plan and includes multiple diverse territories. The Fans Together Charter is also an
      important part of this process as enshrined in our DAO is the tenet entitled Structuring and means
      we must strive for best practise.</>
  },
  {
    title: "Structuring",
    text: <>
      We think it is essential to deliver responsible and viable financial performance for
      the long-term prosperity of sports clubs and to build structures to protect them’
      This means that we need to isolate and protect clubs as individual entities and to ringfence each
      from any other. This means that in the first instance and in all cases any team ownership will be held
      by a local jurisdiction company. Using the example of our intended Super League Greece 2 purchase,
      we have incorporated a local Greek S.A. company to handle the transaction and to be the ‘owner’ of
      the shareholding which in this instance is 20%. There is also a future option granted by the club to
      purchase more equity at a proscribed rate and in a given timeline. The local company owns this stock
      and this option. That ringfences the asset in its own corporate entity.
      <br /><br />
      In turn this jurisdictional entity is owned by a corporation in Jersey which funds the acquisition. The
      beneficiary of this corporation is a Jersey foundation which is run for the benefit of the DAO. This
      means the DAO assets are protected and as their value augments the value of the DAO augments.
    </>
  },
  {
    title: "The Token",
    text: <>
      On top of this process we also had to identify what a $TFT token is. The USA through the SEC
      (Securities and Exchange Commission) uses the Howey test to define whether a token is a security
      token or not. Our separation of asset revenue and profit means that the DAO itself does not benefit
      fiscally from participating in running the clubs, i.e. no direct revenue or profit is drawn down to the
      DAO from any club.
      <br /><br />
      Investopedia <NewsLinkItem link="https://www.investopedia.com/terms/h/howey-test.asp" text="https://www.investopedia.com/terms/h/howey-test.asp"/> has a pretty good article that
      explains the Howey test so we wont replicate in full detail but suffice to say these are the four
      criteria that must all be met:
      <br /><br />
      1. An investment of money<br />
      2. In a common enterprise<br />
      3. With the expectation of profit<br />
      4. To be derived from the efforts of others<br />
      <br />
      The key points for $TFT are numbers 3 and 4. Point 3 asks if we expect profit? Well clearly we are
      not taking any profit from the clubs so there is no dividend or profit expectation from that
      enterprise. Secondly in this context the DAO itself will also generate revenue as it sells advertising,
      derives commission for merch sales, takes on sponsors etc. Again though this revenue is not paid out
      to participants it is resolutely retained and utilised to acquire more sports assets or to fund the
      expansion of existing ones.
      <br /><br />
      Point 4 relates to the effort of others to form this ‘profit’ and is important to identify that although
      there will be pods within the DAO that perform functions such as purchase contract negotiations,
      sponsorship deals etc that the DAO has no expectation of making profit form these efforts, i.e.
      others working on different areas in the DAO that any DAO member can spend their efforts in any
      area of the DAO they wish to contribute to its success. That might be as a forum moderator, an NFT
      or content creator, a buyer of merchandise or a watcher of the TV channel and livestreams of
      matches. The collective makes the DAO successful not a management committee or the core team.
      Further The Fans Together members themselves solely increase the profits of the sports clubs
      through their increased activity and participation with them. So clearly under these guidelines the
      $TFT is not a security.
      <br /><br />
      That is not to say that there isn’t the possibility for large upside in the value of the token. Of course
      the more assets the DAO can acquire the more value for the token. The supply is minted with a
      hardcap at day one. Effectively as with any DAO the participants can hold or sell their tokens and
      those tokens will have current market value based on the value of the DAO which in this case will be
      informed by its assets and divisible by a fixed amount.
      <br /><br />
      With this in mind and the $TFT token classified as a leisure token we are able to structure our ICO.
      Again this has been selected to be held and managed in Jersey with full jurisdictional oversight, the
      legal team are preparing this and DD has commenced to bring the ICO to market. The Fans Together
      Corporation will hold the ICO and manage the funds on behalf of the Jersey foundation which will be
      the beneficiary of the corporation.
      <br /><br />
    </>
  },
  {
    title: "DAO Dilemma solved",
    text: <>
      Structuring in this way means the DAO dilemma truly is solved. A DAO with legally owned and
      protected assets and participants protected by financial oversight of a world leading jurisdiction.
      <br/><br/>
      This work is done as our foundation to protect clubs, protect you and to ensure our enshrined
      principles are set out from day one in perpetuity.
      <br/><br/>
      <NewsLinkItem link="https://t.co/ktzq9XsD6T" text="https://t.co/ktzq9XsD6T"/><br/>
      <NewsLinkItem link="www.thefanstogether.io" text="www.thefanstogether.io"/><br/>
      <NewsLinkItem link="www.twitter.com/thefanstogether" text="www.twitter.com/thefanstogether"/><br/>
    </>
  }
];

export default function NewsGovernance() {
  return (
    <News
      mainImg={require("assets/images/news/governance/background.png")}
      title="TFT Governance and Structure - the DAO"
      news={news}
    />
  )
}
