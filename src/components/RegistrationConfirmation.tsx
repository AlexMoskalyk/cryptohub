import React from "react";
import { useNavigate } from "react-router-dom";

interface RegistrationConfirmationProps {
  email: string;
}

const RegistrationConfirmation: React.FC<RegistrationConfirmationProps> = ({
  email,
}) => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className=" flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold dark:text-dt-text-main">
            Registration Successful!
          </h2>
          <div className="mt-2 text-center text-md dark:text-dt-text-main">
            <p className="font-medium">A confirmation email has been sent to</p>
            <p className="font-bold text-accent-color">{email}</p>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <p className="text-md  text-center dark:text-dt-text-main">
              Please check your inbox and confirm your email address to complete
              the registration process.
            </p>
          </div>
          <div>
            <button
              onClick={handleGoToLogin}
              className="flex justify-self-center text-sm text-center  underline underline-offset-1 focus:text-accent-color hover:text-accent-color dark:text-dt-text-main dark:focus:text-accent-color dark:hover:text-accent-color"
            >
              Go to Login Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;
