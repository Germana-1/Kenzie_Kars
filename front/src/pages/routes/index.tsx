import { Route, Routes } from "react-router-dom";

import { HomePage } from "../HomePage";
import { RegisterPage } from "../RegisterPage";
import { ProductPage } from "../ProductPage";
import { ProfileViewPage } from "../ProfileViewPage";
import { LoginPage } from "../LoginPage";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<ProductPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfileViewPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
