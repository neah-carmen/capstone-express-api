"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Edibles",
      [
        {
          name: "Top Ramen Soy Flavor",
          upc: "038678561125",
          userId: 3,
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sour Patch Kids",
          upc: "038678561126",
          userId: 3,
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sour Punch Straws",
          upc: "038678561127",
          userId: 3,
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Trolli Gummi Worms",
          upc: "038678561128",
          userId: 3,
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Edibles", null, {});
  }
};
