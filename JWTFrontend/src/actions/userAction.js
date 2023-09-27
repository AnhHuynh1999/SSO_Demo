import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../sevices/authService";
import userService from "../sevices/userService";

const login = createAsyncThunk(
  "user/login",
  async (data, { dispatch, fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await authService.login(data);
      localStorage.setItem("token", res.DT.access_token);
      return fulfillWithValue(res.DT);
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk("user/logout", async () => {
  localStorage.removeItem("token");
  await authService.logout();
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
