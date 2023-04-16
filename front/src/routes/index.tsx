import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { AnnounceDetailPage } from "../pages/ProductPage";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<AnnounceDetailPage />} />
      </Routes>
    </>
  );
};
