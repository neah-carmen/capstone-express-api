import database from "../src/models";

class FoodLabelService {
  static async indexFoodLabel() {
    try {
      return await database.FoodLabel.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async createFoodLabel(newFoodLabel) {
    try {
      return await database.FoodLabel.create(newFoodLabel);
    } catch (error) {
      throw error;
    }
  }

  static async showFoodLabel(id) {
    try {
      const theFoodLabel = await database.FoodLabel.findOne({
        where: { id: Number(id) }
      });

      return theFoodLabel;
    } catch (error) {
      throw error;
    }
  }

  static async updateFoodLabel(id, updateFoodLabel) {
    try {
      const foodLabelToUpdate = await database.FoodLabel.findOne({
        where: { id: Number(id) }
      });

      if (foodLabelToUpdate) {
        await database.FoodLabel.update(updateFoodLabel, {
          where: { id: Number(id) }
        });

        return updateFoodLabel;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async destroyFoodLabel(id) {
    try {
      const foodLabelToDelete = await database.FoodLabel.findOne({
        where: { id: Number(id) }
      });

      if (foodLabelToDelete) {
        const deletedFoodLabel = await database.FoodLabel.destroy({
          where: { id: Number(id) }
        });
        return deletedFoodLabel;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default FoodLabelService;
