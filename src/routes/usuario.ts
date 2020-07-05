import { Router } from "express";
import UsuarioController from "../controller/UsuarioController";

const router = Router();

router.get("/", UsuarioController.index);
router.get("/:id", UsuarioController.show);
router.post("/", UsuarioController.store);
router.put("/:id", UsuarioController.update);
router.delete("/:id", UsuarioController.destroy);

export default router;
