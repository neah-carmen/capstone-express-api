import { Router } from "express";
import EdibleController from "../controllers/EdibleController";

const router = Router();

router.get("/", EdibleController.indexEdible);
router.post("/", EdibleController.createEdible);
router.get("/:id", EdibleController.showEdible);
router.patch("/:id", EdibleController.updateEdible);
router.delete("/:id", EdibleController.destroyEdible);

export default router;
