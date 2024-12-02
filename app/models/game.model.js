const sql = require("./db.js");

// constructor
const Game = function(game) {
  this.AppID = game.AppID;
  this.Name = game.Name;
  this.Release_date = game.Release_date;
  this.Required_age = game.Required_age;
  this.Price = game.Price;
  this.Estimated_owners_min = game.Estimated_owners_min;
  this.Estimated_owners_max = game.Estimated_owners_max;
  this.DLC_count = game.DLC_count;
  this.Achievements = game.Achievements;
  this.About_the_game = game.About_the_game;
  this.Notes = game.Notes;
  this.Reviews = game.Reviews;
  this.Metacritic_score = game.Metacritic_score;
  this.Metacritic_url = game.Metacritic_url;
  this.Positive_reviews = game.Positive_reviews;
  this.Negative_reviews = game.Negative_reviews;
};

// Create a new game
Game.create = (newGame, result) => {
  sql.query("INSERT INTO dim_gameinfo SET ?", newGame, (err, res) => {
    if (err) {
      console.error("Error creating game: ", err);
      result(err, null);
      return;
    }
    console.log("Created Game: ", { AppID: res.insertId, ...newGame });
    result(null, { AppID: res.insertId, ...newGame });
  });
};

// Retrieve all games
Game.findAll = (result) => {
  sql.query("SELECT * FROM dim_gameinfo", (err, res) => {
    if (err) {
      console.error("Error retrieving games: ", err);
      result(null, err);
      return;
    }
    console.log("Games: ", res);
    result(null, res);
  });
};

// Find a game by ID
Game.findById = (AppID, result) => {
  sql.query("SELECT * FROM dim_gameinfo WHERE AppID = ?", [AppID], (err, res) => {
    if (err) {
      console.error("Error finding game: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Found game: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

// Update a game by ID
Game.updateById = (AppID, game, result) => {
  sql.query(
    "UPDATE dim_gameinfo SET Name = ?, Release_date = ?, Required_age = ?, Price = ?, Estimated_owners_min = ?, Estimated_owners_max = ?, DLC_count = ?, Achievements = ?, About_the_game = ?, Notes = ?, Reviews = ?, Metacritic_score = ?, Metacritic_url = ?, Positive_reviews = ?, Negative_reviews = ? WHERE AppID = ?",
    [game.Name, game.Release_date, game.Required_age, game.Price, game.Estimated_owners_min, game.Estimated_owners_max, game.DLC_count, game.Achievements, game.About_the_game, game.Notes, game.Reviews, game.Metacritic_score, game.Metacritic_url, game.Positive_reviews, game.Negative_reviews, AppID],
    (err, res) => {
      if (err) {
        console.error("Error updating game: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("Updated game: ", { AppID: AppID, ...game });
      result(null, { AppID: AppID, ...game });
    }
  );
};

// Remove a game by ID
Game.remove = (AppID, result) => {
  sql.query("DELETE FROM dim_gameinfo WHERE AppID = ?", AppID, (err, res) => {
    if (err) {
      console.error("Error deleting game: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("Deleted game with AppID: ", AppID);
    result(null, res);
  });
};

// Remove all games
Game.removeAll = (result) => {
  sql.query("DELETE FROM dim_gameinfo", (err, res) => {
    if (err) {
      console.error("Error deleting all games: ", err);
      result(null, err);
      return;
    }
    console.log(`Deleted ${res.affectedRows} games`);
    result(null, res);
  });
};

module.exports = Game;