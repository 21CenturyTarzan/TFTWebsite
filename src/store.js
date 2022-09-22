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

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "slices/auth";
import messagesReducer from "slices/messages";

const reducer = {
  auth: authReducer,
  messages: messagesReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
