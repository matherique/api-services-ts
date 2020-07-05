import { Router } from "express";

import sessionRouter from "./session";
import usuarioRouter from "./usuario";

const router = Router();

router.use("/", sessionRouter);
router.use("/usuario", usuarioRouter);

export default router;
