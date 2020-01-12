import FoodLabelService from "../services/FoodLabelService";
import Util from "../utilities/Utils";

const util = new Util();

class FoodLabelController {
  static async indexFoodLabel(req, res) {
    try {
      const allFoodLabels = await FoodLabelService.indexFoodLabel();
      if (allFoodLabels.length > 0) {
        util.setSuccess(
          200,
          "Join table for Ingredients retrieved",
          allFoodLabels
        );
      } else {
        util.setSuccess(200, "No join table found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async createFoodLabel(req, res) {
    if (!req.body.edibleId || !req.body.ingredientId) {
      util.setError(400, "Please provide complete details");
      return util.send(res);
    }
    const newFoodLabel = req.body;
    try {
      const createdFoodLabel = await FoodLabelService.createFoodLabel(
        newFoodLabel
      );
      util.setSuccess(201, "Ingredient association added!", createdFoodLabel);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async showFoodLabel(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }

    try {
      const theFoodLabel = await FoodLabelService.showFoodLabel(id);

      if (!theFoodLabel) {
        util.setError(
          404,
          `Cannot find ingredient association with the id ${id}`
        );
      } else {
        util.setSuccess(200, "Found Ingredient association", theFoodLabel);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async updateFoodLabel(req, res) {
    const alteredFoodLabel = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }
    try {
      const updateFoodLabel = await FoodLabelService.updateFoodLabel(
        id,
        alteredFoodLabel
      );
      if (!updateFoodLabel) {
        util.setError(
          404,
          `Cannot find ingredient association with the id: ${id}`
        );
      } else {
        util.setSuccess(200, "Ingredient association updated", updateFoodLabel);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async destroyFoodLabel(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a numeric value");
      return util.send(res);
    }

    try {
      const foodLabelToDelete = await FoodLabelService.destroyFoodLabel(id);

      if (foodLabelToDelete) {
        util.setSuccess(200, "Ingredient association deleted");
      } else {
        util.setError(
          404,
          `Ingredient association with the id ${id} cannot be found`
        );
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default FoodLabelController;
