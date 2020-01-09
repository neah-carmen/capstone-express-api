const db = require("../config/db.config.js");
const Edible = db.edibles;

// Edible index
exports.index = (req, res) => {
  Edible.findAll()
    .then(edibles => {
      // Send All Edibles to client
      res.json(
        edibles.sort(function(c1, c2) {
          return c1.id - c2.id;
        })
      );
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// Edible create
exports.create = (req, res) => {
  // Save to PostgreSQL database
  Edible.create({
    name: req.body.name,
    upc: req.body.upc,
    user_id: req.body.user_id,
    is_vegetarian: req.body.is_vegetarian,
    is_vegan: req.body.is_vegan
  })
    .then(edible => {
      // Send created edible to client
      res.json(edible);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// Edible show
exports.show = (req, res) => {
  Edible.findByPk(req.params.id)
    .then(edible => {
      res.json(edible);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// Update a Edible
exports.update = (req, res) => {
  const id = req.params.id;
  Edible.update(req.body, { where: { id: id } })
    .then(() => {
      res
        .status(200)
        .json({ mgs: "Updated Successfully -> Edible Id = " + id });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// Edible destroy
exports.destroy = (req, res) => {
  const id = req.params.id;
  Edible.destroy({
    where: { id: id }
  })
    .then(() => {
      res
        .status(200)
        .json({ msg: "Deleted Successfully -> Edible Id = " + id });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};
