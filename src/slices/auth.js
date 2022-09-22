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

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Success, Error } from "./messages";

import AuthService from "service/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, wallet, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(username, email, wallet, password);
      // thunkAPI.dispatch(response.data.message);
      thunkAPI.dispatch(Success(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(Error(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.loginUser(username, password);
      thunkAPI.dispatch(Success("User login sucessfully!"));
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(Error(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const loginEmail = createAsyncThunk(
  "auth/loginEmail",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.loginEmail(email, password);
      thunkAPI.dispatch(Success("User login sucessfully!"));
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(Error(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
  // dispatch(Info("User log off sucessfully!"));
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state/*, action*/) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state/*, action*/) => {
      state.isLoggedIn = false;
    },
    [loginUser.fulfilled]: (state/*, action*/) => {
      state.isLoggedIn = true;
      state.user = null;
    },
    [loginUser.rejected]: (state/*, action*/) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [loginEmail.fulfilled]: (state/*, action*/) => {
      state.isLoggedIn = true;
      state.user = null;
    },
    [loginEmail.rejected]: (state/*, action*/) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state/*, action*/) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
