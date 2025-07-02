import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface userInfo {
  id: number; 
  name: string;
  email: string;
  isEmployee: boolean;
}

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  user: userInfo | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  refreshToken: localStorage.getItem('refresh'),
  user: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : null,
  loading: false,
  error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(' https://api-yeshtery.dev.meetusvr.com/v1/yeshtery/token', {
        email,
        password,
        isEmployee: true,
      });

      const { token, refresh, userInfo } = response.data;

      // Save to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('refresh', refresh);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      return { token, refresh, user: userInfo };
    } catch (error: unknown) {
      let errorMessage = 'Login failed';
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
      localStorage.removeItem('userInfo');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refresh;
        state.user = action.payload.user;

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
