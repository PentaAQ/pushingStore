import { Icon } from "@iconify/react";
import { Products } from "../data/Products";
import { Link } from "react-router-dom";
import { CartDropdown } from "./CartDropdown";
import { useAppStore } from "../store/useAppStore";

type Links = {
  name: string;
};

export const Header = () => {
  const links: Links[] = [
    {
      name: "Productos",
    },
    {
      name: "Colecciones",
    },
    {
      name: "Sobre Nosotros",
    },
  ];
  const { stateCart, setStateCart } = useAppStore();
  const productos = Products;

  return (
    <header className="border-b border-gray-200 h-15 fixed w-full bg-white z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center py-3 px-5">
        <div className="flex gap-5 items-center w-full">
          <Link to="/" className="font-serif text-xl font-bold uppercase">
            Minimalist
          </Link>
          <label
            htmlFor="btnHamburger"
            className="lg:hidden order-2 cursor-pointer"
          >
            <Icon icon="ci:hamburger-md" width="20" height="20" />
          </label>
          <input type="checkbox" id="btnHamburger" className="peer hidden" />
          <nav className="lg:flex lg:static absolute top-15 right-0 w-full lg:w-auto max-lg:shadow-sm bg-white lg:bg-transparent max-h-0 lg:max-h-none overflow-hidden peer-checked:max-h-60 transition-all duration-500 ease-in-out">
            <ul className="flex gap-5 max-lg:flex-col max-lg:p-5">
              {links.map((link, key) => (
                <li
                  key={key}
                  className="cursor-pointer hover:text-gray-600 transition-colors"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </nav>
          <div
            className="ml-auto cursor-pointer relative"
            onClick={setStateCart}
          >
            <Icon icon="famicons:cart-outline" width="25" height="25" />
            <span className="absolute h-4 w-4 p-1 rounded-full -top-1 -right-1 bg-black flex items-center justify-center text-white text-xs">
              {productos.length}
            </span>
          </div>
        </div>
      </div>
      {stateCart && <CartDropdown />}
    </header>
  );
};
