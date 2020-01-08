const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

require("./app/routes/edible.routes.js")(app);

// Create a Server
var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});

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
