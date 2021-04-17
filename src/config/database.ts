import { getConnectionOptions, createConnection, Connection } from "typeorm";

export const createTypeormConnection = async (): Promise<Connection> => {
  const conOptions = await getConnectionOptions();
  return createConnection({ ...conOptions, name: "default"});
}
