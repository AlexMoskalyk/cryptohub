import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  User,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase/config.ts";
import { FirebaseError } from "firebase/app";

interface ExtendedUser extends User {
  accessToken?: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthUser {
  uid: string;
  email: string | null;
}

export const signUp = createAsyncThunk<
  void,
  SignInCredentials,
  {
    rejectValue: FirebaseError;
  }
>("auth/signUp", async ({ email, password }, thunkAPI) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Send verification email
    await sendEmailVerification(user);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return thunkAPI.rejectWithValue(firebaseError);
  }
});

export const signIn = createAsyncThunk<
  AuthUser,
  SignInCredentials,
  {
    rejectValue: FirebaseError;
  }
>("auth/signIn", async ({ email, password }: SignInCredentials, thunkAPI) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user as ExtendedUser;

    if (!user.emailVerified) {
      // If email is not verified, reject the login
      const error = new FirebaseError(
        "auth/email-not-verified",
        "Please verify your email address before logging in."
      );
      return thunkAPI.rejectWithValue(error);
    }

    return {
      uid: user.uid,
      email: user.email,
      token: user.accessToken,
      emailVerified: user.emailVerified,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return thunkAPI.rejectWithValue(firebaseError);
  }
});

export const logOut = createAsyncThunk<
  void,
  void,
  {
    rejectValue: FirebaseError;
  }
>("auth/logOut", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return thunkAPI.rejectWithValue(firebaseError);
  }
});

export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    throw firebaseError;
  }
};
