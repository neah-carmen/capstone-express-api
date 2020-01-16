import { Router } from "express";
import LabelImageController from "../controllers/LabelImageController";

const router = Router();

router.get("/", LabelImageController.indexLabelImage);
router.post("/", LabelImageController.createLabelImage);
router.get("/:id", LabelImageController.showLabelImage);
router.patch("/:id", LabelImageController.updateLabelImage);
router.delete("/:id", LabelImageController.destroyLabelImage);

export default router;
