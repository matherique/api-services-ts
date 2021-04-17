import { getRepository } from "typeorm";
import { Response, Request } from "express";
import bycrypt from "bcrypt";

import UsuarioModel from "../entity/usuario";
import { generateToken, createCookie} from "../utils/token";
import { RequestWithType } from "../types";

class SessionController {
  async login(req: RequestWithType<Partial<UsuarioModel>>, res: Response): Promise<Response> {
    const { email, senha } = req.body;

    const usuario = await getRepository(UsuarioModel).findOne({ email });
    if (!usuario) return res.status(404).json({ message: "user not found" });

    const isValidPassword = await bycrypt.compare(senha, usuario.senha);
    
    if (!isValidPassword) 
      return res.status(404).json({ message: "invalid password" });
      
    const token = await generateToken({ ...usuario }, process.env.SECRET!);
    res.setHeader('Set-Cookie', [createCookie(token)])

    return res.status(200).json(usuario);
  }

  async logoff(req: Request, res: Response): Promise<Response> {
    res.setHeader('Set-Cookie', ['Authorization=;Max-age=0']);
    return res.status(200).json({});
  }

  async registration(req: RequestWithType<Partial<UsuarioModel>>, res: Response): Promise<Response> {
    const data = req.body;

    try {
      const results = await getRepository(UsuarioModel).save(data);
      return res.status(200).json(results);
    } catch (error) {
      return res.status(400).json({ message: "something did wrong" });
    }
  }
}

export default new SessionController();
