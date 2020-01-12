import EdibleService from "../services/EdibleService";
import Util from "../utilities/Utils";

const util = new Util();

class EdibleController {
  static async indexEdible(req, res) {
    try {
      const allEdibles = await EdibleService.indexEdible();
      if (allEdibles.length > 0) {
        util.setSuccess(200, "Edibles retrieved", allEdibles);
      } else {
        util.setSuccess(200, "No edibles found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async createEdible(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, "Please provide complete details");
      return util.send(res);
    }
    const newEdible = req.body;
    try {
      const createdEdible = await EdibleService.createEdible(newEdible);
      util.setSuccess(201, "Edible Added!", createdEdible);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async showEdible(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }

    try {
      const theEdible = await EdibleService.showEdible(id);

      if (!theEdible) {
        util.setError(404, `Cannot find edible with the id ${id}`);
      } else {
        util.setSuccess(200, "Found Edible", theEdible);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async updateEdible(req, res) {
    const alteredEdible = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }
    try {
      const updateEdible = await EdibleService.updateEdible(id, alteredEdible);
      if (!updateEdible) {
        util.setError(404, `Cannot find edible with the id: ${id}`);
      } else {
        util.setSuccess(200, "Edible updated", updateEdible);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async destroyEdible(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a numeric value");
      return util.send(res);
    }

    try {
      const edibleToDelete = await EdibleService.destroyEdible(id);

      if (edibleToDelete) {
        util.setSuccess(200, "Edible deleted");
      } else {
        util.setError(404, `Edible with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default EdibleController;
