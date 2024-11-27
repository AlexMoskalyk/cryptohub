// src/layouts/PrivateLayout.tsx
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const PrivateLayout = () => {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateLayout;
