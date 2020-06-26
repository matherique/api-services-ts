import { Router } from "express";
import UsuarioController from "./controller/UsuarioController";

const router = Router();

router.get("/usuario", UsuarioController.index);
router.post("/usuario", UsuarioController.store);

export default router;
