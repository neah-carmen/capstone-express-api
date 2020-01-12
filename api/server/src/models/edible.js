'use strict';
module.exports = (sequelize, DataTypes) => {
  const Edible = sequelize.define('Edible', {
    name: DataTypes.STRING,
    upc: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    isVegetarian: DataTypes.STRING,
    isVegan: DataTypes.STRING
  }, {});
  Edible.associate = function(models) {
    // associations can be defined here
  };
  return Edible;
};