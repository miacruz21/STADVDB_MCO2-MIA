module.exports = app => {
  const games = require("../controllers/game.controller.js");

  var router = require("express").Router();

  // Create a new Game
  router.post("/", games.create);

  // Retrieve all games
  router.get("/", games.findAll);

  // Retrieve a single Game with AppID
  router.get("/:AppID", games.findOne);

  // Update a Game with AppID
  router.put("/:AppID", games.update);

  // Delete a Game with AppID
  router.delete("/:AppID", games.delete);

  // Delete all games
  router.delete("/", games.deleteAll);

  app.use('/api/games', router);
};