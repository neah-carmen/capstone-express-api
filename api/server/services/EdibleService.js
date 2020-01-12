import database from "../src/models";

class EdibleService {
  static async indexEdible() {
    try {
      return await database.Edible.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async createEdible(newEdible) {
    try {
      return await database.Edible.create(newEdible);
    } catch (error) {
      throw error;
    }
  }

  static async showEdible(id) {
    try {
      const theEdible = await database.Edible.findOne({
        where: { id: Number(id) }
      });

      return theEdible;
    } catch (error) {
      throw error;
    }
  }

  static async updateEdible(id, updateEdible) {
    try {
      const EdibleToUpdate = await database.Edible.findOne({
        where: { id: Number(id) }
      });

      if (EdibleToUpdate) {
        await database.Edible.update(updateEdible, {
          where: { id: Number(id) }
        });

        return updateEdible;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async destroyEdible(id) {
    try {
      const EdibleToDelete = await database.Edible.findOne({
        where: { id: Number(id) }
      });

      if (EdibleToDelete) {
        const deletedEdible = await database.Edible.destroy({
          where: { id: Number(id) }
        });
        return deletedEdible;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default EdibleService;