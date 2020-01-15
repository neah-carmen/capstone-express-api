import database from "../src/models";

class AuthService {
  static async createUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

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

export default AuthService;
