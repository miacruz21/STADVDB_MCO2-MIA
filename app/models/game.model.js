const { Sequelize, DataTypes } = require('sequelize'); // Adjust the path as necessary

// Initialize your Sequelize instance (make sure to configure it properly)
const sequelize = new Sequelize('MASTERNODE', 'user', 'password', {
    host: 'ccscloud.dlsu.edu.ph',
    username:'user',
    password: 'password',
    database: 'MASTERNODE',
    dialect: 'mysql'
});

module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define("MASTERNODE", {
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

  return Game;
};
