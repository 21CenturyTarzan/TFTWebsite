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
import { News } from "../components";

const news = [
  {
    text: <>The impetus behind this project was the European Super League (ESL) proposals. If these
      proposals had been allowed to go through then Europe’s top Football clubs would have formed a
      cartel, destroying the competitive nature of the game. The uproar from fans was immense and
      together through concerted protest the proposals were derailed within 72 hours, it was this
      demonstration of the power of the fans that inspired the direction of our project.<br /><br />
      Our original solution was narrow: we intended to provide a platform to enable fan ownership of
      football clubs, primarily in the UK. This would, in our view, allow football fans to prevent the out
      of touch decisions made by distant ownership that led to the European Super League proposals
      even being considered in the first place. We still think the ESL is an ongoing threat to football
      and the President of AC Milan, Florentino Perez, still insists it the ESL will go forward, citing
      “binding contracts”.<br /><br />
      However, as we developed and debated the concept and had conversations with many
      interested sports fans, we began to see the same situation everywhere we looked. Distant,
      often oligarchical, owners making decisions that disappointed and damaged the relationship
      between fans and sport’s clubs. So, we broadened the concept to include these disaffected
      fans, in other sports and countries as well.<br /><br />
      The Fans Together is dedicated to bringing sports fans together from across the globe to
      protect their sports clubs by giving them the power to buy and run their clubs, taking power
      away from distant oligarchs and corporate interests and strengthening the voice of the fans
      through participation. Using a form of Blockchain technology and our own governance structure,
      fans will have a real say in the operations of their sports clubs.<br/>
      That governance structure is a Decentralised Autonomous Organisation (or DAO), 
      where members (those who own $TFT tokens) can debate, contribute and ultimately decide, 
      through votes and polls, the direction of their sports’ club. This DAO will run on IOTA’s Tangle, 
      a blockchain-like technology that has significant advantages over previous iterations of this 
      technology, not least in its energy efficiency.
    </>
  }
];

export default function NewsAboutTFT() {
  return (
    <News
      mainImg={require("assets/images/news/about/background.png")}
      title="About The Fans Together:"
      news={news}
    />
  )
}
