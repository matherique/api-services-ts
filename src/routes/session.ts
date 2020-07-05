import { Router } from "express";

import SessionController from "../controller/SessionController";

const router = Router();

router.post("/login", SessionController.login);
router.post("/cadastrar", SessionController.registration);
router.post("/logoff", SessionController.logoff);

export default router;
