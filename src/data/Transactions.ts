type TransactionStatus =
  | "completado"
  | "procesando"
  | "enviado"

type Transactions = {
  id: number;
  name: string;
  amount: number;
  status: TransactionStatus;
};

export const transactionsData: Transactions[] = [
  {
    id: 1,
    name: "María González",
    amount: 55.9,
    status: "completado",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    amount: 120.5,
    status: "procesando",
  },
  {
    id: 3,
    name: "Ana Martínez",
    amount: 89.99,
    status: "enviado",
  },
  {
    id: 4,
    name: "Luis Sánchez",
    amount: 210.0,
    status: "procesando",
  },
  {
    id: 5,
    name: "Laura Díaz",
    amount: 34.5,
    status: "enviado",
  }
];
