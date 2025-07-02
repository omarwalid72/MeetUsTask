// src/redux/slices/userSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserInfo {
  id: number;
  name: string;
  email: string;
  organization_id: number;
  shop_id: number;
  roles: string[];
  status: string;
  referral: string;
  is_influencer: boolean;
}

interface UserState {
  userInfo: UserInfo | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as { auth: { token: string | null } };
    const token = state.auth.token;

    try {
      const response = await axios.get(
        "https://api-yeshtery.dev.meetusvr.com/v1/user/info",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      return response.data;

    } catch (error: unknown) {
        let errorMessage = "Failed to fetch user info";
        if (axios.isAxiosError(error) && error.response?.data?.message) {
            errorMessage = error.response.data.message;
        }
        return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      });
  },
});

export default userSlice.reducer;
