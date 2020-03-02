const Sequelize = require("sequelize");
const db = require("./image/db");

const Image = db.define(
  "image",
  {
    url: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    }
  },
  { timestamps: false }
);

module.exports = Image;
