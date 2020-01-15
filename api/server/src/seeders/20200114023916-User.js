"use strict";
const bcrypt = require("bcryptjs");

let password = bcrypt.hashSync("password", bcrypt.genSaltSync());

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          email: "admin@email.com",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "test",
          email: "test@email.com",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "demo",
          email: "demo@email.com",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
