// src/redux/auth/authOperations.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from '../../firebase/config.ts';
import { FirebaseError } from 'firebase/app';

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
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return thunkAPI.rejectWithValue(firebaseError );
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
    } catch (error) {
     const firebaseError = error as FirebaseError;
      return thunkAPI.rejectWithValue( firebaseError );
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await signOut(auth);
      return {};
  } catch (error) {
   const firebaseError = error as FirebaseError;
      return thunkAPI.rejectWithValue( firebaseError )
  }
});