const { Router } = require("express");
const Image = require("./model");
const auth = require("../../server/auth/middleware");

const router = new Router();

// keep working from here

// ({ limit: 10, order: [['updatedAt', 'DESC']]});

router.get("/image", (req, res, next) => {
  Image.findAll({ order: [["updatedAt", "DESC"]] })
    .then(images => res.json(images))
    .catch(next);
});

router.post("/image", auth, (req, res, next) => {
  Image.create(req.body)
    .then(image => res.json(image))
    .catch(next);
});

module.exports = router;
