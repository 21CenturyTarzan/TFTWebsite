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
import { useDispatch, useSelector } from "react-redux";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";

import { close, handle_obsolete } from "slices/messages";
import store from "store";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TFTMessages() {
  const messages = useSelector(state => state.messages);
  const dispatch = useDispatch();
  // Returns a function that can closes a message
  const handleClose = function (message) {
    return function () {
      dispatch(close(message));
    };
  };

  // useEffect(()=>{
    console.log("TFTMessages", messages);
  // }, [messages]);

  return (
    <div>
      <div>
        {messages.items.map((message, index) => {
          return (
            <Snackbar
              open={message.open}
              key={index}
              autoHideDuration={6000}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}>
              <Alert
                severity={message.severity}
                onClose={handleClose(message)}
              >
                {/* <AlertTitle>{message.title}</AlertTitle> */}
                {message.text}
              </Alert>
            </Snackbar>
          )
        })}
      </div>
    </div>
  );
}

window.setInterval(() => {
  store.dispatch(handle_obsolete());
}, 60000);
