import { TableProducts } from "../components/TableProducts";

export const ProductsPage = () => {
  return (
    <main className="w-full max-h-screen space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Productos</h1>
          <p className="text-neutral-900/60">
            Gestiona el inventario de tu tienda
          </p>
        </div>
        <button className="bg-black px-2 py-1 flex items-center justify-center gap-1 text-white rounded">
          + Nuevo Producto
        </button>
      </header>
      <TableProducts />
    </main>
  );
};
