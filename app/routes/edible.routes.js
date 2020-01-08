module.exports = function(app) {
  const edibles = require("../controllers/edible.controller.js");

  // Edible index
  app.get("/api/edibles", edibles.index);

  // Edible create
  app.post("/api/edibles", edibles.create);

  // Edible show
  app.get("/api/edibles/:id", edibles.show);

  // Edible update
  app.put("/api/edibles/:id", edibles.update);

  // Edible destroy
  app.delete("/api/edibles/:id", edibles.destroy);
};
