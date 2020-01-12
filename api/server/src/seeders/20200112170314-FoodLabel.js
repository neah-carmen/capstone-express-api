"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "FoodLabels",
      [
        {
          edible_id: 2,
          ingredient_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edible_id: 2,
          ingredient_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edible_id: 2,
          ingredient_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edible_id: 2,
          ingredient_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edible_id: 2,
          ingredient_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edible_id: 2,
          ingredient_id: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edible_id: 2,
          ingredient_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edible_id: 2,
          ingredient_id: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edible_id: 2,
          ingredient_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          edible_id: 2,
          ingredient_id: 13,
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
