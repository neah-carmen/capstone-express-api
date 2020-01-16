import LabelImageService from "../services/LabelImageService";
import Util from "../utilities/Utils";

const util = new Util();

class LabelImageController {
  static async indexLabelImage(req, res) {
    try {
      const allLabelImages = await LabelImageService.indexLabelImage();
      if (allLabelImages.length > 0) {
        util.setSuccess(200, "Label Images retrieved", allLabelImages);
      } else {
        util.setSuccess(200, "No label images found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async createLabelImage(req, res) {
    if (!req.body.url || !req.body.edibleId) {
      util.setError(400, "Please provide complete details");
      return util.send(res);
    }
    const newLabelImage = req.body;
    try {
      const createdLabelImage = await LabelImageService.createLabelImage(
        newLabelImage
      );
      util.setSuccess(201, "Label Image Added!", createdLabelImage);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async showLabelImage(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }

    try {
      const theLabelImage = await LabelImageService.showLabelImage(id);

      if (!theLabelImage) {
        util.setError(404, `Cannot find label image with the id ${id}`);
      } else {
        util.setSuccess(200, "Found label image", theLabelImage);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async updateLabelImage(req, res) {
    const alteredLabelImage = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }
    try {
      const updateLabelImage = await LabelImageService.updateLabelImage(
        id,
        alteredLabelImage
      );
      if (!updateLabelImage) {
        util.setError(404, `Cannot find image with the id: ${id}`);
      } else {
        util.setSuccess(200, "Label Image updated", updateLabelImage);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async destroyLabelImage(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a numeric value");
      return util.send(res);
    }

    try {
      const labelImageToDelete = await LabelImageService.destroyLabelImage(id);

      if (labelImageToDelete) {
        util.setSuccess(200, "Image Label deleted");
      } else {
        util.setError(404, `Image Label with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default LabelImageController;
