import { Route, Routes } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateLayout from "./layouts/PrivateLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/user" element={<PrivateLayout />}>
          <Route index element={<UserPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
