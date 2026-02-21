import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = {
  credits: number;
};

type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    updateCredits: (state, action: PayloadAction<number>) => {
      if (state.user) state.user.credits = action.payload;
    },
  },
});

export const {
  setUser,
  setLoading,
  setError,
  logout,
  updateCredits
} = authSlice.actions;

export default authSlice.reducer;