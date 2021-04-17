import { NextFunction, Request, Response } from "express";
import { HttpException } from "../lib/error";

function error(error: HttpException, req: Request, res: Response, next: NextFunction): void {
  const status = error.status || 500;
  const message = error.message || "something went wrong";
  res.status(status).send({ status, message });
  next();
}

export default error;
