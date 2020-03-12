const Sequelize = require("sequelize");
const db = require("../db");
// const User = require("../user/model");

const Image = db.define("image", {
  url: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  }
});

module.exports = Image;
