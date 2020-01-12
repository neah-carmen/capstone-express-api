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
    Ingredient.hasMany(FoodLabel);
    Ingredient.hasMany(Edible, { through: "FoodLabel" });
  };
  return Ingredient;
};
