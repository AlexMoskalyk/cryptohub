const mapFirebaseError = (error: string) => {
  switch (error) {
    case "Firebase: Error (auth/email-already-in-use).":
      return "Email has been registered already";
    
    case "Firebase: Error (auth/invalid-credential).":
      return "Invalid credential";
    default:
      return error;
  }
};

export default mapFirebaseError;