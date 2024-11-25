import React from "react";
import { useAppSelector } from "../redux/store";

interface Props {
  className?: string;
}

const UserPage: React.FC<Props> = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <h1>User Page</h1>
      {user && <p>Email: {user.email}</p>}
    </div>
  );
};

export default UserPage;
