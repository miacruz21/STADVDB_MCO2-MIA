const { Sequelize, DataTypes } = require("sequelize");
const sql = require("./db.js");

// Initialize Sequelize
const sequelize = new Sequelize(sql.config.database, sql.config.user, sql.config.password, {
  host: sql.config.host,
  dialect: 'mysql',
});

// Define the GameInfo model
const GameInfo = sequelize.define("dim_gameinfo", {
  AppID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.TEXT,
  },
  Release_date: {
    type: DataTypes.DATE,
  },
  Required_age: {
    type: DataTypes.INTEGER,
  },
  Price: {
    type: DataTypes.FLOAT,
  },
  Estimated_owners_min: {
    type: DataTypes.INTEGER,
  },
  Estimated_owners_max: {
    type: DataTypes.INTEGER,
  },
  DLC_count: {
    type: DataTypes.INTEGER,
  },
  Achievements: {
    type: DataTypes.INTEGER,
  },
  About_the_game: {
    type: DataTypes.TEXT,
  },
  Notes: {
    type: DataTypes.TEXT,
  },
  Reviews: {
    type: DataTypes.TEXT,
  },
  Metacritic_score: {
    type: DataTypes.STRING(100),
  },
  Metacritic_url: {
    type: DataTypes.STRING(1000),
  },
  Positive_reviews: {
    type: DataTypes.INTEGER,
  },
  Negative_reviews: {
    type: DataTypes.INTEGER,
  },
});

// Sync the model with the database
GameInfo.sync();

module.exports = GameInfo;