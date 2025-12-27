import { useParams } from "react-router-dom";
import { Products } from "../data/Products";
import { Icon } from "@iconify/react";
import { useState } from "react";

type Pay = {
  name: string;
  icon: string;
};

export const ProductDetailPage = () => {
  const { id } = useParams();
  const productos = Products;
  const productoDetalle = productos.find(
    (producto) => producto.id === Number(id)
  );
  const pays: Pay[] = [
    { name: "visa", icon: "logos:visa" },
    { name: "mastercard", icon: "logos:mastercard" },
    { name: "mercadoPago", icon: "simple-icons:mercadopago" },
    { name: "pypal", icon: "logos:paypal" },
    { name: "americanExpress", icon: "fontisto:american-express" },
  ];
  const [amount, setAmount] = useState<number>(1);

  return (
    <section className="grid lg:grid-cols-2 w-full lg:max-w-6xl px-10 gap-5">
      <div className="">
        <img
          src={productoDetalle?.image}
          alt={productoDetalle?.name}
          className="w-full h-60 md:h-96 lg:h-full  object-cover rounded-2xl"
        />
      </div>
      <section className="flex flex-col gap-3 lg:p-5">
        <div className="flex flex-col gap-2 lg:flex-1">
          <p className="text-xl font-semibold lg:text-2xl">{productoDetalle?.name}</p>
          <p className="bg-slate-200 px-2 py-1 rounded w-fit font-medium">
            {productoDetalle?.category}
          </p>
          <p className="text-sm lg:flex-1">{productoDetalle?.description}</p>
          <p className="text-xl font-sepibold">
            S/. {productoDetalle?.price.toFixed(3)}
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center justify-between border border-black rounded-full overflow-hidden w-1/3">
            <span
              className="text-neutral-800 text-lg px-3 py-1 select-none"
              onClick={() => setAmount(amount - 1)}
            >
              -
            </span>
            <span className="px-2 text-sm flex-1 text-center">{amount}</span>
            <span
              className="text-neutral-800 text-lg px-3 py-1 select-none"
              onClick={() => setAmount(amount + 1)}
            >
              +
            </span>
          </div>
          <button className="text-black border border-black px-5 py-2 rounded-full hover:text-neutral-700 transition-all duration-200 cursor-pointer flex gap-2 text-xs items-center justify-center w-2/3 group hover:border-slate-800">
            <Icon
              icon="hugeicons:shopping-basket-add-01"
              width="24"
              height="24"
              className="group-hover:text-neutral-600"
            />
            <span>Agregar al carrito</span>
          </button>
        </div>
        <button className="bg-black text-white px-5 py-3 rounded-full hover:bg-neutral-800 transition-all duration-200 cursor-pointer flex gap-2 text-xs items-center justify-center w-full group hover:border-slate-800 uppercase">
          Comprar Ahora
        </button>
        <div className="flex gap-2 mx-auto">
          {pays.map((pay) => (
            <div key={pay.name}>
              <Icon icon={pay.icon} width="45" height="24" />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
