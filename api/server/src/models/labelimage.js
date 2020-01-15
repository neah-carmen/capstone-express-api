"use strict";
module.exports = (sequelize, DataTypes) => {
  const LabelImage = sequelize.define(
    "LabelImage",
    {
      url: DataTypes.STRING,
      edibleId: DataTypes.INTEGER
    },
    {}
  );
  LabelImage.associate = function(models) {
    LabelImage.hasMany(models.Edible);
  };
  return LabelImage;
};
