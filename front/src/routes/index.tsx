import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProductPage } from "../pages/ProductPage";
import { ProfileViewPage } from "../pages/ProfileViewPage";

export const RoutesMain = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail" element={<ProductPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfileViewPage />} />
            </Routes>
        </>
    );
};
