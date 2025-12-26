import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

type LinksSidebar = {
  name: string;
  path: string;
  icon: string;
};

export const Sidebar = () => {
  const links: LinksSidebar[] = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: "mingcute:chart-vertical-line",
    },
    {
      name: "Productos",
      path: "/admin/products",
      icon: "cuida:package-outline",
    },
    {
      name: "Usuarios",
      path: "/admin/users",
      icon: "tabler:users",
    },
  ];
  return (
    <section className="w-full h-screen border-r border-slate-300 flex flex-col bg-white transition-all duration-300 overflow-hidden">
      <header className="flex flex-col gap-2 p-3 md:p-4 border-b border-slate-300">
        <h1 className="font-serif flex items-center justify-center md:justify-start gap-2 md:gap-3 uppercase font-semibold text-base md:text-lg lg:text-xl">
          <Icon
            icon="icon-park-outline:mall-bag"
            className="shrink-0 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
          />
          <span className="hidden md:inline text-sm md:text-base lg:text-lg">
            minimalist
          </span>
        </h1>
        <p className="text-xs md:text-sm text-slate-500 text-center md:text-left hidden md:block">
          Panel de Administración
        </p>
      </header>

      <main className="flex-1 overflow-y-auto py-3 md:py-4 px-1 md:px-2">
        <nav className="flex flex-col items-center md:items-stretch gap-1.5 md:gap-2">
          {links.map((link, key) => (
            <NavLink
              key={key}
              to={link.path}
              end={link.path === "/admin"}
              className={({ isActive }) =>
                `flex items-center justify-center md:justify-start gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-gray-100 text-black"
                    : "text-gray-500 hover:bg-gray-50 hover:text-black"
                }`
              }
              title={link.name}
            >
              <Icon
                icon={link.icon}
                className="shrink-0 w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6"
              />
              <span className="text-xs md:text-sm lg:text-base font-medium hidden md:inline whitespace-nowrap">
                {link.name}
              </span>
            </NavLink>
          ))}
        </nav>
      </main>

      <footer className="border-t border-slate-200 p-3 md:p-4">
        <button
          className="flex items-center justify-center md:justify-start gap-2 md:gap-3 w-full text-gray-600 hover:text-black transition-colors p-2 md:p-2.5 rounded-lg hover:bg-gray-50"
          onClick={() => {
            console.log("Logout clicked");
          }}
          title="Cerrar Sesión"
        >
          <Icon
            icon="mdi:logout"
            className="shrink-0 w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6"
          />
          <span className="text-xs md:text-sm lg:text-base font-medium hidden md:inline whitespace-nowrap">
            Cerrar Sesión
          </span>
        </button>
      </footer>
    </section>
  );
};
