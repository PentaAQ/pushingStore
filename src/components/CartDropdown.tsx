import { useAppStore } from "../store/useAppStore";

export const CartDropdown = () => {
  const { setStateCart } = useAppStore();
  return (
    <div className="w-full h-screen top-0 right-0">
      <div
        className="inset-0 bg-black/50 fixed z-20"
        onClick={setStateCart}
      ></div>
      <div className="bg-white h-screen w-72 md:w-92 lg:w-96 z-30 fixed top-0 right-0 p-5 flex flex-col">
        <div className="flex justify-between w-full">
          <h2 className="text-2xl">Carrito de compras</h2>
          <button onClick={setStateCart}>X</button>
        </div>
        <div className="flex flex-col flex-1 gap-5"></div>
        <div className="flex flex-col gap-4 border-t border-neutral-200 pt-5">
          <h2 className="flex justify-between">
            Total estimado <span>S/. 0.00 PEN</span>
          </h2>
          <p className="text-xs text-neutral-500">
            Los impuestos y los gastos de envío se calculan en la página de
            pago.
          </p>
          <button className="bg-black text-white px-5 py-3 rounded-full hover:bg-neutral-800 transition-all duration-200 cursor-pointer flex gap-2 text-xs items-center justify-center w-full group hover:border-slate-800 uppercase">
            Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};
