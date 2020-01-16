import database from "../src/models";
const Edible = require("../src/models").Edible;

class LabelImageService {
  static async indexLabelImage() {
    try {
      return await database.LabelImage.findAll({
        attributes: ["id", "url", "edibleId"],
        include: [
          {
            model: Edible,
            attributes: ["id", "name"]
          }
        ]
      });
    } catch (error) {
      throw error;
    }
  }

  static async createLabelImage(newLabelImage) {
    try {
      return await database.LabelImage.create(newLabelImage);
    } catch (error) {
      throw error;
    }
  }

  static async showLabelImage(id) {
    try {
      const theLabelImage = await database.LabelImage.findOne({
        where: { id: Number(id) },
        attributes: ["id", "url", "edibleId"],
        include: [
          {
            model: Edible,
            attributes: ["id", "name"]
          }
        ]
      });

      return theLabelImage;
    } catch (error) {
      throw error;
    }
  }

  static async updateLabelImage(id, updateLabelImage) {
    try {
      const labelImageToUpdate = await database.LabelImage.findOne({
        where: { id: Number(id) }
      });

      if (labelImageToUpdate) {
        await database.LabelImage.update(updateLabelImage, {
          where: { id: Number(id) }
        });

        return updateLabelImage;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async destroyLabelImage(id) {
    try {
      const labelImageToDelete = await database.LabelImage.findOne({
        where: { id: Number(id) }
      });

      if (labelImageToDelete) {
        const deletedLabelImage = await database.LabelImage.destroy({
          where: { id: Number(id) }
        });
        return deletedLabelImage;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default LabelImageService;
