module.exports = app => {
  const games = require("../controllers/game.controller.js");

  var router = require("express").Router();

  // Create a new GameInfo
  router.post("/", games.create);

  // Retrieve all GameInfo
  router.get("/", games.findAll);

  // Retrieve all published GameInfo
  router.get("/published", games.findAllPublished);

  // Retrieve a single GameInfo with id
  router.get("/:id", games.findOne);

  // Update a GameInfo with id
  router.put("/:id", games.update);

  // Delete a GameInfo with id
  router.delete("/:id", games.delete);

  // Delete all GameInfo
  router.delete("/", games.deleteAll);

  app.use('/api/games', router);
};