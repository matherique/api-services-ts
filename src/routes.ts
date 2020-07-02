import { Router } from "express";
import UsuarioController from "./controller/UsuarioController";

const router = Router();

// usuario
router.get("/usuario", UsuarioController.index);
router.get("/usuario/:id", UsuarioController.show);
router.post("/usuario", UsuarioController.store);
router.put("/usuario/:id", UsuarioController.update);
router.delete("/usuario/:id", UsuarioController.destroy);

export default router;
