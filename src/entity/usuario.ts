import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  BeforeInsert,
} from "typeorm";
import bycrypt from "bcrypt";

import EnderecoModel from "./endereco";

@Entity({ name: "usuario" })
export default class UsuarioModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 128 })
  nome: string;

  @Column({ type: "datetime" })
  nascimento: string;

  @Column("varchar", { length: 128 })
  email: string;

  @Column("varchar", { length: 16 })
  usuario: string;

  @Column("varchar", { length: 128 })
  senha: string;

  @Column({ type: "tinyint", width: 2 })
  status: number;

  @Column("float", { nullable: true })
  classificacao?: number;

  @Column("varchar", { length: 128, nullable: true })
  foto_perfil?: string;

  @CreateDateColumn()
  data_cadastro: string;

  @Column({ type: "tinyint", width: 2 })
  meio_de_login: number;

  @Column("varchar", { length: 128, nullable: true })
  foto_confirmacao?: string;

  @Column("varchar", { length: 128, nullable: true })
  foto_documento?: string;

  @Column("varchar", { length: 128, nullable: true })
  comprovante_residencia?: string;

  @Column("tinytext", { nullable: true })
  forma_pagamento?: number;

  @Column({ type: "tinyint", width: 2 })
  tipo_usuario: number;

  @OneToMany(
    () => EnderecoModel,
    (endereco) => endereco.usuarioConnection,
    { nullable: true }
  )

  @JoinColumn({ name: "endereco_id" })
  enderecoConnection: Promise<EnderecoModel>;

  @BeforeInsert()
  async encryptPassword(): Promise<void> {
    this.senha = await bycrypt.hash(this.senha, 8);
  }

}
