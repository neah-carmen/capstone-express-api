'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoodLabel = sequelize.define('FoodLabel', {
    edibleId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER
  }, {});
  FoodLabel.associate = function(models) {
    // associations can be defined here
  };
  return FoodLabel;
};