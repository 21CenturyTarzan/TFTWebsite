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

import TFTTypography from "components/TFTTypography";
import React from "react";
import { News, NewsLinkItem } from "../components";

const news = [
  {
    text: <TFTTypography
      variant="body2"
      fontSize="24px"
      fontWeight="bold"
      fontStyle="italic"
      align="center"
      lineHeight={2}
    >
      TFT agrees exclusivity period with Greece Super League 2
      F.C. Episkopi to conclude deal to buy shares in the club
    </TFTTypography>
  },
  {
    text: <>The Fans Together a DAO (Decentralised Autonomous Organisation) that brings
      ownership and management of professional sports teams to fans is excited to
      announce a new partnership with F.C. Episkopi of the Greece Super League 2.
      <br /><br />
      The deal will see sponsorship of the team by the fan organisation TFT and an
      immediate period of exclusivity to conclude a deal for an equity stake in the club - the
      first of its kind in the world.
      <br /><br />
      This world first is a ground breaking moment that sees people from across the world
      come together using the feeless and environmentally friendly Iota blockchain and
      web 3 technology to organise and bring fans closer to pro sports teams.<br /></>
  },
  {
    text: <>
      <TFTTypography
        variant="body2"
        fontSize="20px"
        fontWeight="bold"
        lineHeight={2}
        sx={{ display: "inline" }}
      >
        Charlie Whyborne, The Fans Together, Core Team in London &nbsp;
      </TFTTypography>
      <TFTTypography
        variant="body2"
        fontSize="20px"
        fontStyle="italic"
        lineHeight={2}
        sx={{ display: "inline" }}
      >
        says “This deal
        represents a new way for fans to engage with pro sports teams. By harnessing web
        3 technology and the desire of fans to be closer to clubs The Fans Together is the
        first DAO in the world to progress from the idea of fan ownership to reality.”<br />
      </TFTTypography>
    </>
  },
  {
    text: <>
      <TFTTypography
        variant="body2"
        fontSize="20px"
        fontWeight="bold"
        lineHeight={2}
        sx={{ display: "inline" }}
      >
        Simon Wentworth, The Fans Together, Core Team in Crete &nbsp;
      </TFTTypography>
      <TFTTypography
        variant="body2"
        fontSize="20px"
        fontStyle="italic"
        lineHeight={2}
        sx={{ display: "inline" }}
      >
        says ‘We are proud
        to be working with such a well run club as F.C. Episkopi. We looked at over 20
        teams to be the first partner for TFT and none had the platform for success that
        Episkopi offers. Amazing facilities, great management team and amazing community
        spirit. We are positive our partnership will flourish and together we can push the
        team towards Super League 1.”<br />
      </TFTTypography>
    </>
  },
  {
    text: <>
      The Fans Together was an idea conceived 4 years ago to bring sports fans closer to
      football and other sports teams through collective ownership. Technology has caught
      up with the project and the last year has been spent preparing for launch by the core
      team in London. The innovative Iota blockchain that is owned and run by a German
      foundation provides The Fans Together with the platform for feeless and frictionless
      interactions between the fans and the clubs.<br />
    </>
  },
  {
    text: <>
      <TFTTypography
        variant="body2"
        fontSize="20px"
        fontWeight="bold"
        lineHeight={2}
        sx={{ display: "inline" }}
      >
        Simon &nbsp;
      </TFTTypography>
      <TFTTypography
        variant="body2"
        fontSize="20px"
        fontStyle="italic"
        lineHeight={2}
        sx={{ display: "inline" }}
      >
        goes on to say “Iota is a different way of using blockchain technology. The
        principles it uses of a DAG remove all the problems of huge energy use we see with
        Bitcoin and Ethereum. Crucially it is also feeless which means our app can provide a
        fast and free way to have votes in our community to take decisions and to interact
        with our partner clubs. We will vote on all the diverse aspects of club management,
        letting the community influence day to day operations. We work according to the
        principles of the TFT CHARTER to protect those clubs, develop youth and forge
        closer community links. Of course we plan to help clubs push on to the next level on
        and off the pitch with the support of our diverse community.”<br />
      </TFTTypography>
    </>
  },
  {
    text: <>
      The Fans Together was introduced to F.C. Episkopi by UK Football agent Ryan
      Badu who is now based in Crete. He is also Head of Sports for London based Web 3
      consulting agency Soga World. Soga World help Sports and Entertainment
      Companies/talent/brands with long term and short term strategy into the Web 3
      space.<br />
    </>
  },
  {
    text: <>
      <TFTTypography
        variant="body2"
        fontSize="20px"
        fontWeight="bold"
        lineHeight={2}
        sx={{ display: "inline" }}
      >
        Ryan &nbsp;
      </TFTTypography>
      <TFTTypography
        variant="body2"
        fontSize="20px"
        fontStyle="italic"
        lineHeight={2}
        sx={{ display: "inline" }}
      >
        says “When I first heard about TFT I knew this was the future for fan lead
        initiatives and club partnerships. Soga World’s web 3 expertise gave us an
        advantage in understanding the DAO and it’s goals. We searched for a club that fit
        the profile the TFT core team were looking for and F.C. Episkopi is the perfect
        partner. A well run club that will benefit from the attention The Fans Together will
        bring. WATCH THIS SPACE, THIS IS HUGE!<br />
      </TFTTypography>
    </>
  },
  {
    title: "For more information please contact",
    text: <>
      Simon Wentworth<br />
      Core Team<br />
      The Fans Together<br />
      Tel: + 44 7922 394 225<br />
      Email: <NewsLinkItem link="team@thefanstogether.io" text="team@thefanstogether.io" /><br />
      Twitter: @thefanstogether<br /><br />
    </>
  },
  {
    text: <>
      Ryan Badu<br />
      Head of Sports<br />
      Soga World<br />
      Tel: +44 7766 105415<br />
      Email: ryan@soga.world<br />
    </>
  },
  {
    title: "About The Fans Together:",
    text: <>
      The Fans Together is a fan lead initiative that leverages Web 3 technology and the
      IOTA blockchain to bring fans and clubs closer together through fan ownership and
      participation in running Pro sports teams. The project is truly global and growing fast
      with members from all over the world coming together for the shared purpose of
      keeping sport in the hands of the fans.<br />
    </>
  },
  {
    title: "About F.C. Episkopi:",
    text: <>
      In 1962 the club was founded in the Cretan village of Episkopi by the villagers. Home
      to the Vardinogiannis family and well-known Cretan musician Kaklis – Manias. The
      club started its journey playing in local leagues. In 2009 former lion hearted player
      Mr Nikolidakis and club servant of 2 decades got involved with the administration of
      the club. This successful partnership meant F.C. Episkopi first reached the Greece
      Super League 2 in 2013. A few years later in 2018 a big focus was made to rejoin
      the National League leading to promotion again in 2021 to SL2 where they have
      consolidated their place for 2022/2023 with the best defensive record in the league.<br />
    </>
  }
];

export default function NewsDaoBuyFt() {
  return (
    <News
      //  mainImg={require("assets/images/news/governance/background.png")}
      title="The Fans Together is the first ever DAO to buy into a Football team in the world"
      news={news}
    />
  )
}
