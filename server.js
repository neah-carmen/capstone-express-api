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

db.sequelize.sync();

require("./app/routes/edible.routes.js")(app);

// Create a Server
var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
