import database from "../src/models";

class UserService {
  static async createUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  // static async showUser(id) {
  //   try {
  //     const theUser = await database.User.findOne({
  //       where: { id: Number(id) },
  //       attributes: ["username", "email"]
  //     });

  //     return theUser;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // static async updateUser(id, updateUser) {
  //   try {
  //     const UserToUpdate = await database.User.findOne({
  //       where: { id: Number(id) }
  //     });

  //     if (UserToUpdate) {
  //       await database.User.update(updateUser, {
  //         where: { id: Number(id) }
  //       });

  //       return updateUser;
  //     }
  //     return null;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

export default UserService;
