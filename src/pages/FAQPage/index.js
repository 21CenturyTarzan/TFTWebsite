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
import React from "react";

// @mui material components
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// TFT components
import TFTBox from "components/TFTBox";
import TFTTypography from "components/TFTTypography";
import TFTSearchBox from "components/TFTButton/TFTSearchBox";

// pages
import DefNavBar from "pages/components/DefNavBar";
import TemplatePage from "pages/Templates";

// asset
import imageFAQ from "assets/images/faq.png";
import breakpoints from "assets/theme/base/breakpoints";

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;

export default function FAQPage() {
  const Title = styled(TFTTypography)({
    padding: "8px",
    fontSize: "40px",
    [MD]: {
      fontSize: "48px",
    },
    [LG]: {
      fontSize: "60px",
    },
    fontWeight: "bold",
    lineHeight: 1.3,
  });

  const Question = styled(TFTTypography)({
    padding: "32px 4px 32px 4px",
    fontSize: "32px",
    [MD]: {
      fontSize: "42px",
    },
    [LG]: {
      fontSize: "52px",
    },
    fontWeight: "bold",
    lineHeight: 1.2,
  });

  const Answer = styled(TFTTypography)({
    padding: "0px",
    paddingBottom: "16px",
    fontSize: "14px",
    [MD]: {
      fontSize: "18px",
    },
    [LG]: {
      fontSize: "20px",
    },
    fontWeight: "normal",
    lineHeight: 1.2,
    // whiteSpace: "pre-wrap",
  });

  return (
    <>
      <DefNavBar />
      <Container>
        <TemplatePage
          top="0"
          height="fit-content"
          banner={{
            background: `linear-gradient(360deg,rgba(0,26,47,0.4),rgba(0,26,47,0.6) 70%), url(${imageFAQ})`,
            backgroundPosition: "center top!important",
            height: {
              xs: "196px",
              sm: `${sm / 2}px`,
              md: `${md / 2}px`,
              lg: `${lg / 2}px`,
              xl: `${xl / 2}px`,
              xxl: `${xxl / 2}px`,
            },
            bottomSmooth: true,
          }}
        >
          <Grid container
            // height="100%"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            textAlign="left"
          >
            <Grid item xs={11}>
              <TFTBox width="100%" height="25vh">
              </TFTBox>
              <Title>
                FAQ
              </Title>
              <TFTSearchBox pb={1} />
              {FAQContents.map((item, index) => (
                <>
                  <Question key={`faq-question-${index}`}>
                    {item.question}
                  </Question>
                  <Answer key={`faq-answer-${index}`}>
                    {item.answer}
                  </Answer>
                </>
              ))}
            </Grid>
          </Grid>
        </TemplatePage>
      </Container>
    </>
  );
}

const FAQContents = [
  {
    question: "Who are The Fans Together? What are you doing?",
    answer: "The Fans Together is a DAO (see below) using Web3 technology and the IOTA Tangle to bring sports fans\
             together and give them the power to have a real say in sports clubs, instead of being left out of the decision making."
  },
  {
    question: "What is a DAO?",
    answer: `A Decentralised Autonomous Community is a group of individuals that, through Web3 technology, come together to collectively make decisions.`,
  },
  {
    question: "Why now?",
    answer: `We found that now was the time through a confluence of developments in technology and in sports.\
             We were energised by the mobilisation of fans against the unjust European Super League proposals.\
             The IOTA Foundations pace of progress, to mature its technology, has continued and we feel that IOTA\
             is developed enough to provide what we need for this project.`,
  },
  {
    question: "Why Crypto?",
    answer: `Simply, it allows for decentralised operability, is transparent and immutable, and in the context of\
            our ownership and voting model, allows token holders to participate in managing the DAOs direction and\
            acquisition strategy. The subsequent management of sporting clubs through the Tangle provides the project\
            significant credibility and trust, while also allowing for a wide range of participation and selectability\
            of interest areas for the participant. The Tangle enables rapid scaling, access speed, and visibility \
            across all aspects of operations.`
  },
  {
    question: "Why IOTA?",
    answer: `The fact that with IOTA the transactions are feeless and frictionless is a significant advantage over\
             operating our DAO on any other cryptocurrency. Another draw is that the IOTA Tangle functions in a much\
             less energy intensive way meaning that we can have the functionality of a digital ledger, without the \
             costs to the environment and sustainability that other cryptocurrencies such as Ethereum impose.`,
  },
  {
    question: "Will I get a physical version of my NFT?",
    answer: `Currently only the #DAOPIONEER is available as a piece of physical apparel.`
  },
  {
    question: "Will you buy my club?",
    answer: `We can’t promise it, as each purchase decision will be proposed, debated and approved by the\
             membership of the DAO, but we can encourage you to get involved and make your voice heard.`
  },
];