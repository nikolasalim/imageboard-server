const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const { toJWT, toData } = require("../../auth/jwt");

const router = new Router();

router.post("/user", (req, res, next) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };

  User.create(user)
    .then(user => {
      // res.json(user);
      console.log("user is", user);
      console.log("user id is", user.id);

      res.send({
        jwt: toJWT({ userId: user.id })
      });
    })
    .catch(next);
});

module.exports = router;
