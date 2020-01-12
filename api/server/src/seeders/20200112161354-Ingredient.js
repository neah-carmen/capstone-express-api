"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Ingredients",
      [
        {
          name: "High Fructose Corn Syrup",
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Turbinado Sugar",
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Modified Corn Starch",
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sugar",
          isVegetarian: "yes",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Invert Sugar",
          isVegetarian: "yes",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Corn Syurp",
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tartaric Acid",
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Citric Acid",
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Natural and Artificial Favors",
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yellow 6",
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Red 40",
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yellow 5",
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Blue 1",
          isVegetarian: "yes",
          isVegan: "yes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Albumen",
          isVegetarian: "yes",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bone Char",
          isVegetarian: "no",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Butter Fat",
          isVegetarian: "yes",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Casein",
          isVegetarian: "yes",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sodium Caseinate",
          isVegetarian: "yes",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lactose",
          isVegetarian: "yes",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Whey Powder",
          isVegetarian: "yes",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Caseinate",
          isVegetarian: "yes",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gelatin",
          isVegetarian: "no",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lard",
          isVegetarian: "no",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "L-cysteine",
          isVegetarian: "no",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Monoglyceride",
          isVegetarian: "no",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Diglyceride",
          isVegetarian: "no",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Shellac",
          isVegetarian: "no",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vitamin D3",
          isVegetarian: "no",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cochineal",
          isVegetarian: "no",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Carmine",
          isVegetarian: "no",
          isVegan: "no",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Honey",
          isVegetarian: "yes",
          isVegan: "no",
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
