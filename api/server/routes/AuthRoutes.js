import { Router } from "express";
import AuthController from "../controllers/AuthController";

const router = Router();

router.post("/signup", AuthController.createUser);
router.post("/login", AuthController.createSession);

export default router;
