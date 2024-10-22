import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

interface Props {
  className?: string;
}

const PublicLayout: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PublicLayout;
