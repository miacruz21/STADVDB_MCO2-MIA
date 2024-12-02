const Game = require("../models/game.model.js");

// Create and Save a new Game
exports.create = (req, res) => {
  if (!req.body.Name) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  const game = {
    AppID: req.body.AppID,
    Name: req.body.Name,
    Release_date: req.body.Release_date,
    Required_age: req.body.Required_age,
    Price: req.body.Price,
    Estimated_owners_min: req.body.Estimated_owners_min,
    Estimated_owners_max: req.body.Estimated_owners_max,
    DLC_count: req.body.DLC_count,
    Achievements: req.body.Achievements,
    About_the_game: req.body.About_the_game,
    Notes: req.body.Notes,
    Reviews: req.body.Reviews,
    Metacritic_score: req.body.Metacritic_score,
    Metacritic_url: req.body.Metacritic_url,
    Positive_reviews: req.body.Positive_reviews,
    Negative_reviews: req.body.Negative_reviews,
  };

  Game.create(game, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "Some error occurred while creating the Game." });
    } else {
      res.send(data);
    }
  });
};

// Retrieve all Games
exports.findAll = (req, res) => {
  Game.findAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "Some error occurred while retrieving games." });
    } else {
      res.send(data);
    }
  });
};

// Find a single Game with an AppID
exports.findOne = (req, res) => {
  Game.findById(req.params.AppID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `Not found Game with AppID ${req.params.AppID}.` });
      } else {
        res.status(500).send({ message: "Error retrieving Game with AppID " + req.params.AppID });
      }
    } else {
      res.send(data);
    }
  });
};

// Update a Game identified by the AppID in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty!" });
  }

  Game.updateById(req.params.AppID, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `Not found Game with AppID ${req.params.AppID}.` });
      } else {
        res.status(500).send({ message: "Error updating Game with AppID " + req.params.AppID });
      }
    } else {
      res.send(data);
    }
  });
};

// Delete a Game with the specified AppID in the request
exports.delete = (req, res) => {
  Game.remove(req.params.AppID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `Not found Game with AppID ${req.params.AppID}.` });
      } else {
        res.status(500).send({ message: "Could not delete Game with AppID " + req.params.AppID });
      }
    } else {
      res.send({ message: `Game was deleted successfully!` });
    }
  });
};

// Delete all Games
exports.deleteAll = (req, res) => {
  Game.removeAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "Some error occurred while removing all games." });
    } else {
      res.send({ message: `All Games were deleted successfully!` });
    }
  });
};