import { TableUsers } from "../components/TableUsers";

export const UserPage = () => {
  return (
    <main className="w-full max-h-screen space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Usuarios</h1>
          <p className="text-neutral-900/60">
            Administra los usuarios de tu tienda
          </p>
        </div>
        <button className="bg-black px-2 py-1 flex items-center justify-center gap-1 text-white rounded">
          + Nuevo usuario
        </button>
      </header>
      <TableUsers />
    </main>
  );
};
