module.exports = (sequelize, Sequelize) => {
  const Edible = sequelize.define("edible", {
    name: {
      type: Sequelize.STRING
    },
    upc: {
      type: Sequelize.STRING
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    is_vegetarian: {
      type: Sequelize.STRING
    },
    is_vegan: {
      type: Sequelize.STRING
    }
  });

  return Edible;
};
