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
import { createSlice } from "@reduxjs/toolkit";

const MESSAGES_MAX_DISPLAY_DURATION = 60000;
let numOfMessages = 0;

// Adds a message to the store
const createMessage = function (state, severity, title, text) {
  let message = {
    id: numOfMessages++,
    severity,
    title,
    text,
    created: Date.now(),
    open: true,
  };
  state.items.push(message);
  state.items = state.items.slice(0);
};

const initialState = {
  items: [],
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    // Creates an Error message
    Error(state, action) {
      createMessage(state, "error", "Error", action.payload);
    },

    // Creates an information message
    Info(state, action) {
      createMessage(state, "info", "Information", action.payload);
    },

    // Creates an information message
    Success(state, action) {
      createMessage(state, "success", "Success", action.payload);
    },

    // Close a message
    close(state, action) {
      state.items = state.items.map(message => {
        return message.id == action.payload.id ? Object.assign({}, message, { open: false }) : message;
      });
    },

    // Finds and removes obsolete messages
    handle_obsolete(state) {
      let activeMessages = state.items.filter(message => {
        return Date.now() - message.created < MESSAGES_MAX_DISPLAY_DURATION;
      });

      if (state.items.length != activeMessages.length) {
        state.items = activeMessages;
      }
    },
  },
});

export const { Error, Info, Success, close, handle_obsolete } = messagesSlice.actions;
export default messagesSlice.reducer;
