const HEROVIDEO = "/HeroVideo.mp4";
export const Hero = () => {
  return (
    <section className="px-10 w-full max-w-7xl lg:mx-auto h-screen overflow-hidden flex items-center justify-center">
      <div className="w-full h-9/12 relative">
        <div className="text-slate-200 bg-transparent relative z-10 h-full lg:w-1/2 flex items-center justify-center flex-col mx-auto space-y-8 px-3">
          <h1 className="font-serif lg:text-5xl text-3xl font-bold text-center">
            Diseño excepcional para espacios minimalistas
          </h1>
          <p className="text-center">
            Descubre nuestra colección cuidadosamente seleccionada de productos
            que combinan funcionalidad y elegancia atemporal.
          </p>
          <div className="gap-5 flex max-lg:flex-col">
            <button className="bg-black rounded-lg py-2 px-5">Explorar coleccion</button>
            <button className="bg-white text-black rounded-lg py-2 px-5">Nuestra historia</button>
          </div>
        </div>
        <video
          src={HEROVIDEO}
          className="w-full h-full object-cover rounded-2xl absolute top-0 bottom-0 z-0"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </section>
  );
};
