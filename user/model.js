const Sequelize = require("sequelize");
const db = require("../db");
const Image = require("../image/model");

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

module.exports = User;

// Establish relationships

// child belongs to parent
// adds a familyId field to the species table
// Species.belongsTo(Family); // both are classses

// parent has many children
// enables inclusion when finding
// adds species array property when finding
// Family.hasMany(Species); // both are classes
