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
import ReactDOM from "react-dom";

// redux
import { Provider } from "react-redux";

// router
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import App from "./App";

// theme
import "assets/css/fonts.css";

// report
import reportWebVitals from "./reportWebVitals";
import { WalletProvider } from "configs/context/wallet";
import { GlobalProvider } from "configs/context/global";
import { ContractProvider } from "configs/context/contract";
import { NftProvider } from "configs/context/nft";


ReactDOM.render(
  <GlobalProvider>
    <WalletProvider>
      <ContractProvider>
        <NftProvider>
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        </NftProvider>
      </ContractProvider>
    </WalletProvider>
  </GlobalProvider>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
