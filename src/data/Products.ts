type Products = {
  id: number
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
};
export const Products: Products[] = [
  {
    id: 1,
    category: "Mobiliaria",
    name: "Silla Moderna Escandinava",
    description: "Diseño ergonómico con líneas limpias y acabado premium",
    price: 45.9,
    image: "/Hero.png",
    stock: 24,
  },
  {
    id: 2,
    category: "Iluminación",
    name: "Mesa de Centro Minimalista",
    description: "Diseño ergonómico con líneas limpias y acabado premium",
    price: 35.90,
    image: "/SillaProduct.png",
    stock: 36,
  },
  {
    id: 3,
    category: "Decoración",
    name: "Lámpara Colgante Geométrica",
    description: "Diseño ergonómico con líneas limpias y acabado premium",
    price: 9.2,
    image: "/SillaProduct.png",
    stock: 8,
  },
  {
    id: 4,
    category: "Mobiliaria",
    name: "Espejo de Pared Circular",
    description: "Diseño ergonómico con líneas limpias y acabado premium",
    price: 25.2,
    image: "/SillaProduct.png",
    stock: 14,
  },
];
