import React from "react";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

const NotFoundPage: React.FC<Props> = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-lt-background-main dark:bg-dt-background-main">
      <div className="text-8xl font-bold text-elements-main relative">
        404
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center bg-transparent rounded-full shadow-md">
            <span className="text-2xl text-gray-400">✖</span>
          </div>
        </div>
      </div>
      <p className="mt-8 text-lg text-lt-text-main dark:text-dt-text-main">
        Sorry! The page you’re looking for cannot be found.
      </p>
      <Link
        to="/"
        className="mt-4 text-accent-color hover:text-active-accent-color underline"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
