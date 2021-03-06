"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    "Ingredient",
    {
      name: DataTypes.STRING,
      isVegetarian: DataTypes.STRING,
      isVegan: DataTypes.STRING
    },
    {}
  );
  Ingredient.associate = function(models) {
    Ingredient.belongsToMany(models.Edible, {
      through: "FoodLabel",
      foreignKey: "ingredientId",
      otherKey: "edibleId"
    });
  };
  return Ingredient;
};
