import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import authService from "../sevices/authService";
import userService from "../sevices/userService";

const login = createAsyncThunk("user/login", async (data) => {
  const res = await authService.login(data);
  localStorage.setItem("token", res.DT.access_token);
  return res.DT;
});

const logout = createAction("user/logout", () => {
  localStorage.removeItem("token");
  return {};
});

const getInfoUser = createAsyncThunk("user/info", async () => {
  const res = await userService.getInfoUser();
  return res.DT;
});

const register = createAsyncThunk("user/register", async () => {
  const res = await authService.register();
  return res;
});

const userAction = {
  login,
  logout,
  register,
  getInfoUser,
};

export default userAction;
