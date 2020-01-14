import { Router } from "express";
import SessionController from "../controllers/SessionController";

const router = Router();

router.post("/", SessionController.createSession);

export default router;
