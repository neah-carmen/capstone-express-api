"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "FoodLabels",
      [
        {
          edibleId: 2,
          ingredientId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edibleId: 2,
          ingredientId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edibleId: 2,
          ingredientId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edibleId: 2,
          ingredientId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edibleId: 2,
          ingredientId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edibleId: 2,
          ingredientId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edibleId: 2,
          ingredientId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edibleId: 2,
          ingredientId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edibleId: 2,
          ingredientId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edibleId: 2,
          ingredientId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("FoodLabels", null, {});
  }
};
