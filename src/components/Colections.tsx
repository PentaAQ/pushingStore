import { Products } from "../data/Products";

export const Colections = () => {
  const productos = Products;
  return (
    <main className="px-10 w-full max-w-7xl lg:mx-auto min-h-screen overflow-hidden flex items-center justify-center flex-col gap-10">
      <div>
        <h1 className="text-4xl font-serif font-bold text-center">
          Nuestra Colección
        </h1>
        <p className="text-center">
          Productos seleccionados para tranasformar tu espacio
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5">
        {productos.map((producto, key) => (
          <div
            key={key}
            className="w-full h-96 border border-gray-200 rounded-md shadow flex flex-col overflow-hidden"
          >
            <img
              src={producto.image}
              alt={producto.name}
              className="w-full h-1/2 object-cover"
            />
            <div className="mt-5 p-4 flex flex-col h-1/2">
              <p className="uppercase text-neutral-400 text-sm tracking-wider ">
                {producto.category}
              </p>
              <p className="text-lg">{producto.name}</p>
              <p className="text-sm text-neutral-400">{producto.description}</p>
              <div className="flex justify-between mt-auto">
                <p className="text-xl font-semibold">
                  $ {producto.price.toFixed(3)}
                </p>
                <button className="bg-black text-white px-3 rounded-md flex items-center gap-2">
                  <span className="text-2xl font-medium">+</span>
                  <span>Agregar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
