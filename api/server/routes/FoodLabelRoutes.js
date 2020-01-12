import { Router } from "express";
import FoodLabelController from "../controllers/FoodLabelController";

const router = Router();

router.get("/", FoodLabelController.indexFoodLabel);
router.post("/", FoodLabelController.createFoodLabel);
router.get("/:id", FoodLabelController.showFoodLabel);
router.patch("/:id", FoodLabelController.updateFoodLabel);
router.delete("/:id", FoodLabelController.destroyFoodLabel);

export default router;
