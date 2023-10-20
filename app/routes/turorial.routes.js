module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  app.use("/api/tutorials", router);
};
