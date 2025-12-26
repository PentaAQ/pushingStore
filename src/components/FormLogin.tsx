import { Icon } from "@iconify/react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

export const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-md space-y-8 border border-slate-200 p-6 rounded-xl shadow-md">
      <div className="text-center">
        <h1 className="text-3xl font-medium text-gray-900 mb-2">
          Iniciar Sesión
        </h1>
        <p className="text-gray-600">
          Ingresa tus credenciales para acceder al panel de administración
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-black outline-none focus:border-transparent transition duration-200 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="tucorreo@ejemplo.com"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo inválido",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message?.toString()}
              </p>
            )}
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div
              className="absolute right-2 top-11 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Icon
                  icon="weui:eyes-on-outlined"
                  width="24"
                  height="24"
                  className="cursor-pointer"
                />
              ) : (
                <Icon
                  icon="weui:eyes-off-outlined"
                  width="24"
                  height="24"
                  className="cursor-pointer"
                />
              )}
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-black outline-none focus:border-transparent transition duration-200 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="••••••••"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Mínimo 6 caracteres",
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message?.toString()}
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none cursor-pointer focus:ring-black transition duration-200"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};
