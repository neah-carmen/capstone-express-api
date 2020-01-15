"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "LabelImages",
      [
        {
          url:
            "https://res.cloudinary.com/neah-dev/image/upload/v1579130196/actualize/capstone/label/q0ong6nchwvzk5k25vfh.png",
          edibleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url:
            "https://res.cloudinary.com/neah-dev/image/upload/v1579129698/actualize/capstone/label/qnxlnsrs1kjuxh4td1nx.jpg",
          edibleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url:
            "https://res.cloudinary.com/neah-dev/image/upload/v1579130196/actualize/capstone/label/qb21qrmcn4bylzl4gtqb.jpg",
          edibleId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("LabelImages", null, {});
  }
};
