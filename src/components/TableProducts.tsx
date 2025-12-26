import { Icon } from "@iconify/react";
import { Products } from "../data/Products";
import { useState } from "react";
export const TableProducts = () => {
  // Datos de Productos
  const productos = Products;
  // Estado para el buscador que cambia segunel input
  const [buscador, setBuscador] = useState("");
  // Buscador por nombre o categoria
  const productosFilter = productos.filter(
    (producto) =>
      producto.name.toLowerCase().includes(buscador.toLowerCase()) ||
      producto.category.toLowerCase().includes(buscador.toLowerCase())
  );

  return (
    <main className="shadow border border-neutral-300 rounded-xl p-5">
      <section className="relative">
        <input
          type="text"
          className="border border-gray-200 shadow rounded w-full py-2 pl-9 font-light outline-none focus:shadow-neutral-200 focus:shadow-md transition-all duration-300"
          placeholder="Buscar por nombre o categoría..."
          value={buscador}
          onChange={(e) => setBuscador(e.target.value)}
        />
        <span className="absolute left-2 top-1/4">
          <Icon
            icon="ic:outline-search"
            width="24"
            height="24"
            className="text-slate-400"
          />
        </span>
      </section>
      <section className="px-2 py-4">
        <table className="w-full">
          <thead className="text-left [&>th]:font-semibold">
            <tr>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th className="text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productosFilter.map((producto, key) => (
              <tr key={key} className="border-t border-slate-200 [&>td]:py-3">
                <td>
                  <h3>{producto.name}</h3>
                  <p className="text-sm text-neutral-500 font-medium">
                    {producto.description}
                  </p>
                </td>
                <td>
                  <span className="bg-neutral-200 px-2 py-1 rounded text-sm">
                    {producto.category}
                  </span>
                </td>
                <td>$ {producto.price.toFixed(3)}</td>
                <td>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded text-white ${
                      producto.stock >= 20 ? "bg-black" : "bg-red-700"
                    }`}
                  >
                    {producto.stock}
                  </span>
                </td>
                <td className="flex gap-4 justify-end">
                  <span className="cursor-pointer hover:bg-neutral-200 p-2 rounded">
                    <Icon icon="bx:pencil" width="24" height="24" />
                  </span>
                  <span className="cursor-pointer hover:bg-neutral-200 p-2 rounded">
                    <Icon icon="gg:trash" width="24" height="24" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};
