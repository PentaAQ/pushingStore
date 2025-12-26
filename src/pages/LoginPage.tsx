import { Icon } from "@iconify/react";
import { FormLogin } from "../components/FormLogin";
import { Link } from "react-router-dom";

const LOGINIMAGE = 'Hero.png'
export const LoginPage = () => {
  return (
    <main className="w-full h-screen grid grid-cols-2 items-center justify-center">
      <section className=" flex items-center justify-center flex-col gap-6">
        <div>
          <h1 className="uppercase font-serif text-3xl text-center">
            Minimalist
          </h1>
          <p className="text-gray-500 text-center">Panel de Admnistración</p>
        </div>
        <FormLogin />
        <Link to="/" className="flex items-center gap-1 text-slate-500">
          <Icon icon="ic:outline-arrow-back" width="20" height="20" />
          <span>Volver a la Tienda</span>
        </Link>
      </section>
      <section className="h-screen">
        <img src={LOGINIMAGE} alt="Image Login" className="w-full h-full object-cover"/>
      </section>
    </main>
  );
};
