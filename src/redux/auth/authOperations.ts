// src/redux/auth/authOperations.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from '../../firebase/config.ts';

interface SignInCredentials {
  email: string;
  password: string;
}

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, password }: SignInCredentials, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return {
        uid: user.uid,
        email: user.email
      };
   // eslint-disable-next-line @typescript-eslint/no-explicit-any     
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }:SignInCredentials, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
      return {
        uid: user.uid,
        email: user.email
      };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await signOut(auth);
      return {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});