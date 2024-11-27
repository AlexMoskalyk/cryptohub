import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp, logOut } from './authOperations';
import { FirebaseError } from "firebase/app";

interface AuthState {
  user: null | { email: string; uid: string };
  status: 'idle' | 'loading' | 'success' | 'error';
  error: null | FirebaseError;
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = 'success';
        state.error = null;
        state.user = action.payload as { email: string; uid: string; };
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload as FirebaseError;
      })
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = 'success';
        state.error = null;
        state.user = action.payload as { email: string; uid: string; };
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload as FirebaseError;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = null;
        state.error = null;
        state.status = 'success';
      });
  },
});

export const authReducer = authSlice.reducer;