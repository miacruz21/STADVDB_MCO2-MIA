// module.exports = (sequelize, Sequelize) => {
//     const GameInfo = sequelize.define("dim_gameinfo", {
//       AppID: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       Name: {
//         type: Sequelize.TEXT,
//       },
//       Release_date: {
//         type: Sequelize.DATE,
//       },
//       Required_age: {
//         type: Sequelize.INTEGER,
//       },
//       Price: {
//         type: Sequelize.FLOAT,
//       },
//       Estimated_owners_min: {
//         type: Sequelize.INTEGER,
//       },
//       Estimated_owners_max: {
//         type: Sequelize.INTEGER,
//       },
//       DLC_count: {
//         type: Sequelize.INTEGER,
//       },
//       Achievements: {
//         type: Sequelize.INTEGER,
//       },
//       About_the_game: {
//         type: Sequelize.TEXT,
//       },
//       Notes: {
//         type: Sequelize.TEXT,
//       },
//       Reviews: {
//         type: Sequelize.TEXT,
//       },
//       Metacritic_score: {
//         type: Sequelize.STRING(100),
//       },
//       Metacritic_url: {
//         type: Sequelize.STRING(1000),
//       },
//       Positive_reviews: {
//         type: Sequelize.INTEGER,
//       },
//       Negative_reviews: {
//         type: Sequelize.INTEGER,
//       },
//     });
  
//     return GameInfo;
//   };


const sql = require("./db.js");

// constructor
const Game = function(game) {
  this.title = game.title;
  this.description = game.description;
  this.published = game.published;
};

Game.create = (newGame, result) => {
  sql.query("INSERT INTO games SET ?", newGame, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Game: ", { id: res.insertId, ...newgame });
    result(null, { id: res.insertId, ...newgame });
  });
};

Game.findById = (id, result) => {
  sql.query(`SELECT * FROM games WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found game: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found game with the id
    result({ kind: "not_found" }, null);
  });
};

Game.getAll = (title, result) => {
  let query = "SELECT * FROM games";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("games: ", res);
    result(null, res);
  });
};

Game.getAllPublished = result => {
  sql.query("SELECT * FROM games WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("games: ", res);
    result(null, res);
  });
};

Game.updateById = (id, game, result) => {
  sql.query(
    "UPDATE games SET title = ?, description = ?, published = ? WHERE id = ?",
    [game.title, game.description, game.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found game with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated game: ", { id: id, ...game });
      result(null, { id: id, ...game });
    }
  );
};

Game.remove = (id, result) => {
  sql.query("DELETE FROM games WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found game with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted game with id: ", id);
    result(null, res);
  });
};

Game.removeAll = result => {
  sql.query("DELETE FROM games", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} games`);
    result(null, res);
  });
};

module.exports = Game;

