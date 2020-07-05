import { Request, NextFunction, Response } from "express";

export default function logger(req: Request, res: Response, next: NextFunction): void {
  console.log(`[${req.method}] - ${req.path}: ${JSON.stringify(req.body)}`);
  next();
}
