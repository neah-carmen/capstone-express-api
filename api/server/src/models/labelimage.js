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
    // associations can be defined here
  };
  return LabelImage;
};
