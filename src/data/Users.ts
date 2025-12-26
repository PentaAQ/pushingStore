type Users = {
  name: string;
  email: string;
  role: Roles;
  status: boolean;
  dateRegister: string;
};

type Roles = "Cliente" | "Administrador";

export const Users: Users[] = [
  {
    name: "Maria Gonzalez",
    email: "maria@gmail.com",
    role: "Administrador",
    status: true,
    dateRegister: "2022-01-01",
  },
  {
    name: "Pepe Martinez",
    email: "pepe@gmail.com",
    role: "Cliente",
    status: false,
    dateRegister: "2022-01-01",
  },
  {
    name: "Raul Medina",
    email: "raul@gmail.com",
    role: "Cliente",
    status: false,
    dateRegister: "2022-01-01",
  },
  { 
    name: "Cristiano Ronaldo",
    email: "cristiano@gmail.com",
    role: "Administrador",
    status: true,
    dateRegister: "2022-01-01",
  },
  {
    name: "Lionel Messi",
    email: "messi@gmail.com",
    role: "Cliente",
    status: true,
    dateRegister: "2022-01-01",
  },
];
