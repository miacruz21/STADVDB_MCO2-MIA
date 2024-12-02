module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define("dim_gameinfo", {
    AppID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: Sequelize.STRING,
    },
    Release_date: {
      type: Sequelize.DATE,
    },
    Required_age: {
      type: Sequelize.INTEGER,
    },
    Price: {
      type: Sequelize.FLOAT,
    },
    Estimated_owners_min: {
      type: Sequelize.INTEGER,
    },
    Estimated_owners_max: {
      type: Sequelize.INTEGER,
    },
    DLC_count: {
      type: Sequelize.INTEGER,
    },
    Achievements: {
      type: Sequelize.INTEGER,
    },
    About_the_game: {
      type: Sequelize.STRING,
    },
    Notes: {
      type: Sequelize.STRING,
    },
    Reviews: {
      type: Sequelize.STRING,
    },
    Metacritic_score: {
      type: Sequelize.STRING(100),
    },
    Metacritic_url: {
      type: Sequelize.STRING(1000),
    },
    Positive_reviews: {
      type: Sequelize.INTEGER,
    },
    Negative_reviews: {
      type: Sequelize.INTEGER,
    },
  });

  return Game;
};
