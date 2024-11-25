const mapFirebaseError = (error: string) => {
  switch (error) {
    case 'Firebase: Error (auth/email-already-in-use).':
      return 'Email has been registered already';
    default:
      return error;
  }
};

export default mapFirebaseError;