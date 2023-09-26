import { createSlice } from "@reduxjs/toolkit";
import userAction from "../actions/userAction";
const initialState = {
  token: "",
  isAuthenticated: false,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [userAction.login.fulfilled]: (state, action) => {
      state.token = action.payload.access_token;
      state.isAuthenticated = true;
      state.user = {
        email: action.payload.email,
        username: action.payload.username,
        groupWithRoles: action.payload.groupWithRoles,
      };
    },
    [userAction.logout]: (state) => {
      state.token = "";
      state.isAuthenticated = false;
      state.user = {};
    },
    [userAction.getInfoUser.fulfilled]: (state, action) => {
      state.token = action.payload.access_token;
      state.isAuthenticated = true;
      state.user = {
        email: action.payload.email,
        username: action.payload.username,
        groupWithRoles: action.payload.groupWithRoles,
      };
    },
    [userAction.register.fulfilled]: () => {
      return {};
    },
  },
});

const { reducer } = userSlice;
export default reducer;
