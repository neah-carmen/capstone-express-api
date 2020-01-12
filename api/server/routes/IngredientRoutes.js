import { Router } from "express";
import IngredientController from "../controllers/IngredientController";

const router = Router();

router.get("/", IngredientController.indexIngredient);
router.post("/", IngredientController.createIngredient);
router.get("/:id", IngredientController.showIngredient);
router.patch("/:id", IngredientController.updateIngredient);
router.delete("/:id", IngredientController.destroyIngredient);

export default router;
