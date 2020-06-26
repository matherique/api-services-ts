import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  return res.send({ menssage: "Ola mundo" });
});

export default router;
