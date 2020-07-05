import { Request, NextFunction, Response } from "express";

export default function auth(req: Request, res: Response, next: NextFunction): void {
  next();
}
