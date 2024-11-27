import React from "react";

import { useAppSelector, useAppDispatch } from "../redux/store";
import { logOut } from "../redux/auth/authOperations";

interface Props {
  className?: string;
}

const UserPage: React.FC<Props> = () => {
  const user = useAppSelector((state) => state.auth.user);

  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await dispatch(logOut());
  };

  return (
    <div>
      <h1>User Page</h1>
      {user && <p>Email: {user.email}</p>}

      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default UserPage;
