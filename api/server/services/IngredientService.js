import database from "../src/models";

class IngredientService {
  static async indexIngredient() {
    try {
      return await database.Ingredient.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async createIngredient(newIngredient) {
    try {
      return await database.Ingredient.create(newIngredient);
    } catch (error) {
      throw error;
    }
  }

  static async showIngredient(id) {
    try {
      const theIngredient = await database.Ingredient.findOne({
        where: { id: Number(id) }
      });

      return theIngredient;
    } catch (error) {
      throw error;
    }
  }

  static async updateIngredient(id, updateIngredient) {
    try {
      const IngredientToUpdate = await database.Ingredient.findOne({
        where: { id: Number(id) }
      });

      if (IngredientToUpdate) {
        await database.Ingredient.update(updateIngredient, {
          where: { id: Number(id) }
        });

        return updateIngredient;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async destroyIngredient(id) {
    try {
      const IngredientToDelete = await database.Ingredient.findOne({
        where: { id: Number(id) }
      });

      if (IngredientToDelete) {
        const deletedIngredient = await database.Ingredient.destroy({
          where: { id: Number(id) }
        });
        return deletedIngredient;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default IngredientService;
