import IngredientService from "../services/IngredientService";
import Util from "../utilities/Utils";

const util = new Util();

class IngredientController {
  static async indexIngredient(req, res) {
    try {
      const allIngredients = await IngredientService.indexIngredient();
      if (allIngredients.length > 0) {
        util.setSuccess(200, "Ingredients retrieved", allIngredients);
      } else {
        util.setSuccess(200, "No ingredients found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async createIngredient(req, res) {
    if (!req.body.name) {
      util.setError(400, "Please provide complete details");
      return util.send(res);
    }
    const newIngredient = req.body;
    try {
      const createdIngredient = await IngredientService.createIngredient(
        newIngredient
      );
      util.setSuccess(201, "Ingredient Added!", createdIngredient);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async showIngredient(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }

    try {
      const theIngredient = await IngredientService.showIngredient(id);

      if (!theIngredient) {
        util.setError(404, `Cannot find ingredient with the id ${id}`);
      } else {
        util.setSuccess(200, "Found Ingredient", theIngredient);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async updateIngredient(req, res) {
    const alteredIngredient = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }
    try {
      const updateIngredient = await IngredientService.updateIngredient(
        id,
        alteredIngredient
      );
      if (!updateIngredient) {
        util.setError(404, `Cannot find ingredient with the id: ${id}`);
      } else {
        util.setSuccess(200, "Ingredient updated", updateIngredient);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async destroyIngredient(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a numeric value");
      return util.send(res);
    }

    try {
      const ingredientToDelete = await IngredientService.destroyIngredient(id);

      if (ingredientToDelete) {
        util.setSuccess(200, "Ingredient deleted");
      } else {
        util.setError(404, `Ingredient with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default IngredientController;
