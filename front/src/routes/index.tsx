import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<ProductPage />} />
      </Routes>
    </>
  );
};
