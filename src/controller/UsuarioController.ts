import { Request, Response } from "express";

class UsuarioController {
  async index(req: Request, res: Response) {
    return res.send({ message: "usuario caralho" });
  }

  async store(req: Request, res: Response) {
    const data = req.body;
    return res.send(data);
  }
}

export default new UsuarioController();
