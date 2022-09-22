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
     text: <>
     The Fans Together has released a range of NFTs to fundraise but the value of these NFTs, the reason 
     you should buy them, is because of their utility in our DAO.
     <br/><br/>
     Our NFTs correspond with a value of $TFT Tokens that will be released at our Initial Coin Offering. 
     For example, the DAO Pioneer NFT, celebrating TFT’s successful application to the IOTA Foundation’s 
     DAO Pioneer Grant, is equal to $TFT 10,000. If the NFT is then held, then there are additional bonuses 
     to a total value of 100% of the original. From when they are purchased: at six months a bonus equal 
     to 40% of will be released, then at twelve months a bonus equal to 60% will be released. 
     <br/><br/>
     $TFT Tokens can be seen as your stake in the DAO and the whole will be minted at launch when 
     smart contracts (either through IOTA or Shimmer) are developed and available to support us. 
     A detailed breakdown of our Tokenomics is in our White Paper and we recommend you read for more 
     detail.
     <br/><br/>
     These $TFT Tokens, derived from ownership of NFTs, will allow their owners to be part of The Fans 
     Together DAO, to truly decide, with other members, on the governance of both the broader 
     ecosystem and the individual sports clubs within it. It will also give you the opportunity to find 
     communities of like-minded individuals to enjoy and contribute to, however your skills and passions 
     permit you, the activities of the DAO. 
     <br/><br/>
     Solely in the case of the DAO Pioneer NFT, there will also a physical piece of apparel; a baseball 
     cap designed by TFT and delivered to owners within three months of purchase.
     <br/><br/>
     So, If you haven’t yet, come get one of our NFTs and join The Fans Together!
     <br/><br/>
     </>
   }
 ];
 
 export default function NewsNFTsUtility() {
   return (
     <News
       mainImg={require("assets/images/news/nft-utility/background.png")}
       title="NFTs with Utility"
       news={news}
     />
   )
 }
 