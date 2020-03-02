const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const User = require("../image/user/model");
const router = new Router();
const bcrypt = require("bcrypt");
const auth = require("./middleware");

router.post("/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res
      .status(400)
      .send({
        message: "Please supply a valid email and password"
      })
      .catch(next);
  } else {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(entity => {
        if (!entity) {
          res.status(400).send({
            message: "User with that email does not exist"
          });
        } else if (bcrypt.compareSync(req.body.password, entity.password)) {
          console.log(
            "req.body.password is",
            req.body.password,
            "entity password is",
            entity.password
          );
          res.send({
            jwt: toJWT({ userId: entity.id })
          });
        } else {
          res.status(400).send({
            message: "Password was incorrect"
          });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({
          message: "Something went wrong"
        });
      });
  }
});

router.get("/secret-endpoint", auth, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`
  });
});

module.exports = router;