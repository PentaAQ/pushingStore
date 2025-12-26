import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Layout } from "../layout/Layout";
import { DashBoardPage } from "../pages/DashBoardPage";
import { ProductsPage } from "../pages/ProductsPage";
import { UserPage } from "../pages/UserPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/producto/:id" element={<ProductDetailPage />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<DashBoardPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="users" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
