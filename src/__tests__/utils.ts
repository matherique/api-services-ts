import { Usuario } from "../types";

export function buildUser(overide?: Usuario): Usuario {
  const data = {
    nome: "Matheus Henrique dos Santos",
    nascimento: new Date("1994-11-18").toUTCString(),
    email: "matherique@gmail.com",
    senha: "123",
    status: 1,
    meio_de_login: 1,
    tipo_usuario: 1,
    ...overide,
  } as Usuario;
  return data;
}
