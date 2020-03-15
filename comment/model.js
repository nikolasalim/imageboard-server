const Sequelize = require("sequelize");
const db = require("../db");

const Comment = db.define("comment", {
  comment: {
    type: Sequelize.TEXT
  },
  userWhoCommented: {
    type: Sequelize.STRING
  }
});

module.exports = Comment;
