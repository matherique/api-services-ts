import jwt from "jsonwebtoken";
import {EXPIRES_TOKEN_TIME} from "../constants";
import { Token, TokenData } from "../types";

export async function generateToken(data: Record<string,any>, secret: string): Promise<Token> {
  const token = jwt.sign(data, secret, {
    algorithm: "HS256",
    expiresIn: EXPIRES_TOKEN_TIME
  });

  return { token, expiresIn: EXPIRES_TOKEN_TIME };
}

export async function validateToken(tokenData: Token, secret: string): Promise<TokenData> {
  const { token } = tokenData;
  return new Promise((resolve, reject) => {
    try {
      const data = jwt.verify(token, secret) as TokenData;
      resolve(data);
    } catch (error) {
      reject("invalid token");
    }
  });
}

export function createCookie({ token, expiresIn }: Token): string {
  return `Authorization=${token}; HttpOnly; Max-Age=${expiresIn}`;
}
