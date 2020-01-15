import { Router } from "express";
import UserController from "../controllers/UserController";
import SessionController from "../controllers/SessionController";

const router = Router();

router.post("/signup", UserController.createUser);
router.post("/login", SessionController.createSession);

export default router;
