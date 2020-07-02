import { getConnectionOptions, createConnection, Connection } from "typeorm";

export const createTypeormConnection = async (): Promise<Connection> => {
  const conOptions = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection({ ...conOptions, name: "default"});
}
