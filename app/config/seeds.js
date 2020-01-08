const db = require("./db.config.js");

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
  initial();
});

function initial() {
  let edibles = [
    {
      name: "Top Ramen Soy Flavor",
      upc: "038678561125",
      user_id: 2,
      is_vegetarian: "yes",
      is_vegan: "yes"
    },
    {
      name: "Sour Patch Kids",
      upc: "038678561126",
      user_id: 2,
      is_vegetarian: "yes",
      is_vegan: "yes"
    },
    {
      name: "Sour Punch Straws",
      upc: "038678561127",
      user_id: 2,
      is_vegetarian: "yes",
      is_vegan: "yes"
    },
    {
      name: "Trolli Gummi Worms",
      upc: "038678561128",
      user_id: 2,
      is_vegetarian: "yes",
      is_vegan: "yes"
    }
  ];

  // Init data -> save to PostgreSQL
  const Edible = db.edibles;
  for (let i = 0; i < edibles.length; i++) {
    Edible.create(edibles[i]);
  }
}
