const Sequelize = require("sequelize");
const db = require("../db");
const Image = require("../image/model");
const Comment = require("../comment/model");

const User = db.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "users"
  }
);

Image.belongsTo(User);
User.hasMany(Image);

Image.hasMany(Comment);
Comment.belongsTo(Image);

User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = User;
