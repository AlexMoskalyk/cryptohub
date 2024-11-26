import { FirebaseError } from "firebase/app";
const mapFirebaseError = (error: FirebaseError ): string => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "Email has been registered already";
    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Invalid email or password";
    case "auth/user-disabled":
      return "This account has been disabled";
    case "auth/too-many-requests":
      return "Too many unsuccessful login attempts. Please try again later";
    case "auth/network-request-failed":
      return "Network error. Please check your internet connection";
    default:
      return error.message || "An unexpected error occurred";
  }
};

export default mapFirebaseError;