import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const LayoutHome = () => {
  return (
    <>
      <Header />
      <main className="w-full max-w-7xl mx-auto flex items-center justify-center min-h-dvh flex-col pt-16">
        <Outlet />
      </main>
    </>
  );
};
