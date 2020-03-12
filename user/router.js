const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const { toJWT, toData } = require("../auth/jwt");
const auth = require("../auth/middleware");

const router = new Router();

router.post("/user", (req, res, next) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };

  User.create(user)
    .then(user => {
      // res.json(user);
      res.send({
        jwt: toJWT({ userId: user.id })
      });
    })
    .catch(next);
});

router.get("/user", (req, res, next) => {
  User.findAll()
    .then(user => res.json(user))
    .catch(next);
});

router.get("/user/:userId", (req, res, next) => {
  User.findByPk(req.params.userId)
    .then(user => res.json(user))
    .catch(next);
});

module.exports = router;
