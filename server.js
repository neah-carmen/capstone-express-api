const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Parse requests data
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup a basic get request method
app.get("", (req, res) =>
  res.status(200).send({
    message: "Hello world!"
  })
);

app.listen(port, () => {});
