import { getRepository } from "typeorm";
import { Request, Response } from "express";

import Usuario from "../entity/usuario";

class UsuarioController {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await getRepository(Usuario).find();
    return res.json(users);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    return res.status(200).json(data);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const usuario = await getRepository(Usuario).findOne({ id: +id });

    if (!usuario) return res.status(404).json();

    return res.status(200).json(usuario);
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { affected } = await getRepository(Usuario).delete({ id: +id });

    return res.status(204).json({ deleted: affected === 1 });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body;

    const usuario = await getRepository(Usuario).findOne(id);
    if (!usuario) return res.status(201).json({ message: "user dont found" });

    getRepository(Usuario).merge(usuario, data);

    const result = getRepository(Usuario).save(usuario);
    return res.status(200).json(result);
  }
}

export default new UsuarioController();
