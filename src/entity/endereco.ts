import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from "typeorm";
import Usuario from "./usuario";

@Entity({ name: "endereco" })
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 128 })
  logradouro: string;

  @Column("varchar", { length: 8 })
  number: number;

  @Column("varchar", { length: 128 })
  complemento: string;

  @Column("varchar", { length: 16 })
  cep: string;

  @Column("varchar", { length: 64 })
  cidade: string;

  @Column("varchar", { length: 8 })
  uf: string;

  @Column({ type: "tinyint", width: 3 })
  pais: string;

  @OneToMany(
    () => Usuario,
    (usuario) => usuario.enderecoConnection,
    { primary: true }
  )

  @JoinColumn({ name: "usuario_id" })
  usuarioConnection: Promise<Usuario>;
}
