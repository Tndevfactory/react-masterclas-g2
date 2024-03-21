import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  user: {},
  connected: false,
};
export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      let url = `/auth/register`;
      const res = await http.post(url, data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    infoUser: (state, action) => {
      console.log(state.user);
    },
  },
});

export const { infoUser } = authSlice.actions;
export default authSlice.reducer;
