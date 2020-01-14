"use strict";
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync();
var password = "pasword";
password = bcrypt.hashSync(password, salt);

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
