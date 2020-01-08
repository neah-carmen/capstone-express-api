const db = require("../config/db.config.js");
const Edible = db.edibles;

exports.index = function(req, res) {
  console.log("--->Index: \n" + JSON.stringify(edibles, null, 4));
  res.end("All Edibles: \n" + JSON.stringify(edibles, null, 4));
};

exports.create = function(req, res) {
  var newEdible = req.body;
  edibles["edible" + newEdible.id] = newEdible;
  console.log("--->After Post, edibles:\n" + JSON.stringify(edibles, null, 4));
  res.end("Edible created: \n" + JSON.stringify(newEdible, null, 4));
};

exports.show = function(req, res) {
  var edible = edibles["edible" + req.params.id];
  console.log("--->Find edible: \n" + JSON.stringify(edible, null, 4));
  res.end("Find an Edible:\n" + JSON.stringify(edible, null, 4));
};

exports.update = function(req, res) {
  var id = parseInt(req.params.id);
  var updatedEdible = req.body;
  if (edibles["edible" + id] != null) {
    // update data
    edibles["edible" + id] = updatedEdible;

    console.log(
      "--->Edible updated successfully, edibles: \n" +
        JSON.stringify(edibles, null, 4)
    );

    // return
    res.end(
      "Edible updated successfully! \n" + JSON.stringify(updatedEdible, null, 4)
    );
  } else {
    res.end(
      "Edible doesn't exist:\n:" + JSON.stringify(updatedEdible, null, 4)
    );
  }
};

exports.destroy = function(req, res) {
  var deleteEdible = edibles["edible" + req.params.id];
  delete edibles["edible" + req.params.id];
  console.log(
    "--->After deletion, edible list:\n" + JSON.stringify(edibles, null, 4)
  );
  res.end("Deleted edible: \n" + JSON.stringify(deleteEdible, null, 4));
};
