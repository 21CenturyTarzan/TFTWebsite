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

import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const register = (username, email, wallet, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    wallet,
    password,
  });
};

const loginUser = (username, password) => {
  return axios.post(API_URL + "signin", {
    username,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const loginEmail = (email, password) => {
  return axios.post(API_URL + "signin", {
    email,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  loginUser,
  loginEmail,
  logout,
};

export default authService;
