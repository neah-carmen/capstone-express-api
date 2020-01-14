import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.post("/", UserController.createUser);
// router.get("/:id", UserController.showUser);
// router.patch("/:id", UserController.updateUser);

export default router;
