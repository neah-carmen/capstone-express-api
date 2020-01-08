const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const db = require("./app/config/db.config.js");

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
  initial();
});

require("./app/routes/edible.routes.js")(app);

// Create a Server
var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
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
