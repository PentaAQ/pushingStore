export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-10">
      <div className="w-full pt-12 md:pt-16 pb-2">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-10">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold">MINIMALIST</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creando espacios excepcionales a través del diseño minimalista y
              la elegancia atemporal.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Comprar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Todos los productos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Nuevos ingresos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Ofertas
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Políticas
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Ayuda</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Envíos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Devoluciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Minimalist Store. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
