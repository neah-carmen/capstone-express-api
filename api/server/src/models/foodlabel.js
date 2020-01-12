"use strict";
module.exports = (sequelize, DataTypes) => {
  const FoodLabel = sequelize.define(
    "FoodLabel",
    {
      edibleId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER
    },
    {}
  );
  FoodLabel.associate = function(models) {
    FoodLabel.belongsTo(models.Edible, {
      foreignKey: "edibleId",
      targetKey: "id"
    });
    // FoodLabel.belongsTo(models.Ingredient, {
    //   foreignKey: "ingredientId"
    // });
  };
  return FoodLabel;
};
