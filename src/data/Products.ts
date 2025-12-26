type Products = {
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
};
export const Products: Products[] = [
  {
    category: "Mobiliaria",
    name: "Silla Moderna Escandinava",
    description: "Diseño ergonómico con líneas limpias y acabado premium",
    price: 45.9,
    image: "/SillaProduct.png",
    stock: 24,
  },
  {
    category: "Iluminación",
    name: "Mesa de Centro Minimalista",
    description: "Diseño ergonómico con líneas limpias y acabado premium",
    price: 35.1,
    image: "/SillaProduct.png",
    stock: 56,
  },
  {
    category: "Decoración",
    name: "Lámpara Colgante Geométrica",
    description: "Diseño ergonómico con líneas limpias y acabado premium",
    price: 9.2,
    image: "/SillaProduct.png",
    stock: 8,
  },
  {
    category: "Mobiliaria",
    name: "Espejo de Pared Circular",
    description: "Diseño ergonómico con líneas limpias y acabado premium",
    price: 25.2,
    image: "/SillaProduct.png",
    stock: 14,
  },
];
