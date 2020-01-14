import UserService from "../services/UserService";
import Util from "../utilities/Utils";

const util = new Util();

class UserController {
  static async createUser(req, res) {
    if (!req.body.username || !req.body.email || !req.body.password) {
      util.setError(400, "Please provide complete details");
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await UserService.createUser(newUser);
      util.setSuccess(201, "User Added!", createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  // static async updateUser(req, res) {
  //   const alteredUser = req.body;
  //   const { id } = req.params;
  //   if (!Number(id)) {
  //     util.setError(400, "Please input a valid numeric value");
  //     return util.send(res);
  //   }
  //   try {
  //     const updateUser = await UserService.updateUser(id, alteredUser);
  //     if (!updateUser) {
  //       util.setError(404, `Cannot find user with the id: ${id}`);
  //     } else {
  //       util.setSuccess(200, "User updated", updateUser);
  //     }
  //     return util.send(res);
  //   } catch (error) {
  //     util.setError(404, error);
  //     return util.send(res);
  //   }
  // }
}

export default UserController;
