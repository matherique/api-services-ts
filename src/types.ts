import { Request } from "express";

import Usuario from "./entity/usuario";

export interface RequestWithType<T> extends Request{
  body: T;
}

export interface RequestWithUser extends Request{
  user: Partial<Usuario>;
}

export interface Token {
  token: string;
  expiresIn: number;
}

export interface TokenData extends Usuario {
  iat: number;
  exp: number; 
}
