import { Icon } from "@iconify/react";
import { useState } from "react";
import { Users } from "../data/Users";

export const TableUsers = () => {
  const [buscador, setBuscador] = useState("");
  const usuarios = Users;
  const usuariosFilter = usuarios.filter(
    (usuario) =>
      usuario.name.toLowerCase().includes(buscador.toLowerCase()) ||
      usuario.email.toLowerCase().includes(buscador.toLowerCase())
  );
  return (
    <main className="shadow border border-neutral-300 rounded-xl p-5">
      <section className="relative">
        <input
          type="text"
          placeholder="Buscar por nombre o correo..."
          className="border border-gray-200 shadow rounded w-full py-2 pl-9 font-light outline-none focus:shadow-neutral-200 focus:shadow-md transition-all duration-300"
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
              <th>Usuario</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Fecha de Registro</th>
              <th className="text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFilter.map((usuario, key) => (
              <tr key={key} className="border-t border-slate-200 [&>td]:py-3">
                <td>
                  <h3>{usuario.name}</h3>
                  <p className="text-sm text-neutral-500 font-medium flex gap-1 items-center">
                    <Icon icon="carbon:email" width="15" height="15" />
                    {usuario.email}
                  </p>
                </td>
                <td>
                  <span
                    className={`${
                      usuario.role === "Administrador"
                        ? "bg-black text-white"
                        : "bg-neutral-200"
                    } px-2 py-1 rounded text-sm`}
                  >
                    {usuario.role}
                  </span>
                </td>
                <td>
                  <span
                    className={`${
                      usuario.status ? "bg-black" : " bg-red-800"
                    } text-white text-center px-2 py-1 rounded text-sm`}
                  >
                    {usuario.status ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td>{usuario.dateRegister}</td>
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
