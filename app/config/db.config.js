module.exports = {
  HOST: "ccscloud.dlsu.edu.ph",
  USER: "user",
  PASSWORD: "password",
  DB: "MASTERNODE",
  dialect: "mysql",
  pool: {
    max: 5, 
    min: 0,
    acquire: 30000,
    idle: 10000
},
};