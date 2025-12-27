import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { LayoutAdmin } from "../layout/LayoutAdmin";
import { DashBoardPage } from "../pages/DashBoardPage";
import { ProductsPage } from "../pages/ProductsPage";
import { UserPage } from "../pages/UserPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { LayoutHome } from "../layout/LayoutHome";
export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<HomePage />} />
          <Route path="/producto/:id" element={<ProductDetailPage />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<DashBoardPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="users" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
