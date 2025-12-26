import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const Layout = () => {
  return (
    <main className="flex h-screen overflow-hidden">
      <section className="w-16 md:w-64 lg:w-72 transition-all duration-300">
        <Sidebar />
      </section>
      <section className="flex-1 overflow-auto p-5">
        <Outlet />
      </section>
    </main>
  );
};