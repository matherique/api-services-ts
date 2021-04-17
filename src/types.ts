import { Request } from "express";

import UsuarioModel from "./entity/usuario";

export interface RequestWithType<T> extends Request{
  body: T;
}

export interface RequestWithUser extends Request{
  user: Partial<UsuarioModel>;
}

export interface Token {
  token: string;
  expiresIn: number;
}

export interface TokenData extends UsuarioModel {
  iat: number;
  exp: number; 
}

export type Usuario = {
  id?: number;
  nome: string;
  nascimento: string;
  email: string;
  usuario: string;
  senha: string;
  status: number;
  classificacao?: number;
  foto_perfil?: string;
  data_cadastro: string;
  meio_de_login: number;
  foto_confirmacao?: string;
  foto_documento?: string;
  comprovante_residencia?: string;
  forma_pagamento?: number;
  tipo_usuario: number;
}


export type Endereco = {
  id?: number;
  logradouro: string;
  number: number;
  complemento: string;
  cep: string;
  cidade: string;
  uf: string;
  pais: string;
  usuario_id: number;
}
