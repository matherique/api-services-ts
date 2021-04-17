import { getRepository } from "typeorm";
import { Request, Response } from "express";

import UsuarioModel from "../entity/usuario";

class UsuarioController {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await getRepository(UsuarioModel).find();
    return res.json(users);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const novoUsuario = getRepository(UsuarioModel).create(data);

    try {
      const results = await getRepository(UsuarioModel).save(novoUsuario);
      return res.status(200).json(results);
    } catch (error) {
      return res.status(422).json({ message: "something did wrong" });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const usuario = await getRepository(UsuarioModel).findOne({ id: +id });

    if (!usuario) return res.status(404).json();

    return res.status(200).json(usuario);
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { affected } = await getRepository(UsuarioModel).delete({ id: +id });

    return res.status(204).json({ deleted: affected === 1 });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body;

    const usuario = await getRepository(UsuarioModel).findOne(id);
    if (!usuario) return res.status(201).json({ message: "user dont found" });

    getRepository(UsuarioModel).merge(usuario, data);

    const result = getRepository(UsuarioModel).save(usuario);
    return res.status(200).json(result);
  }
}

export default new UsuarioController();
