type CardsDash = {
  name: string;
  icon: string;
  amount: string;
  description: string;
  status: boolean;
  value: string;
};

export const cardStatisticsData: CardsDash[] = [
  {
    name: "Ingresos Totales",
    icon: "mynaui:dollar",
    amount: "$124,500",
    description: "Últimos 30 dias",
    status: true,
    value: "12,5%",
  },
  {
    name: "Productos",
    icon: "cuida:package-outline",
    amount: "248",
    description: "En inventario",
    status: true,
    value: "4",
  },
  {
    name: "Órdenes",
    icon: "famicons:cart-outline",
    amount: "89",
    description: "Este mes",
    status: true,
    value: "18%",
  },
  {
    name: "Usuarios",
    icon: "tabler:users",
    amount: "1,429",
    description: "Registrados",
    status: false,
    value: "8,2%",
  },
];
