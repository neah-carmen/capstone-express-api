"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Ingredients",
      [
        {
          name: "High Fructose Corn Syrup",
          isVegetarian: true,
          isVegan: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Turbinado Sugar",
          isVegetarian: true,
          isVegan: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Modified Corn Starch",
          isVegetarian: true,
          isVegan: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sugar",
          isVegetarian: true,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Invert Sugar",
          isVegetarian: true,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Corn Syurp",
          isVegetarian: true,
          isVegan: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tartaric Acid",
          isVegetarian: true,
          isVegan: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Citric Acid",
          isVegetarian: true,
          isVegan: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Natural and Artificial Favors",
          isVegetarian: true,
          isVegan: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yellow 6",
          isVegetarian: true,
          isVegan: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Red 40",
          isVegetarian: true,
          isVegan: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yellow 5",
          isVegetarian: true,
          isVegan: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Blue 1",
          isVegetarian: true,
          isVegan: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Albumen",
          isVegetarian: true,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bone Char",
          isVegetarian: false,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Butter Fat",
          isVegetarian: true,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Casein",
          isVegetarian: true,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sodium Caseinate",
          isVegetarian: true,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lactose",
          isVegetarian: true,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Whey Powder",
          isVegetarian: true,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Caseinate",
          isVegetarian: true,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gelatin",
          isVegetarian: false,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lard",
          isVegetarian: false,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "L-cysteine",
          isVegetarian: false,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Monoglyceride",
          isVegetarian: false,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Diglyceride",
          isVegetarian: false,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Shellac",
          isVegetarian: false,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vitamin D3",
          isVegetarian: false,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cochineal",
          isVegetarian: false,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Carmine",
          isVegetarian: false,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Honey",
          isVegetarian: true,
          isVegan: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Ingredients", null, {});
  }
};
