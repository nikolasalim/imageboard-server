const { Router } = require("express");
const Image = require("./model");
const auth = require("../auth/middleware");

const router = new Router();

router.get("/image", (req, res, next) => {
  Image.findAll({ order: [["updatedAt", "DESC"]] })
    .then(images => res.json(images))
    .catch(next);
});

router.post("/image", auth, (req, res, next) => {
  const img = {
    url: req.body.url,
    title: req.body.title,
    userId: req.user.dataValues.id
  };
  Image.create(img)
    .then(i => res.json(i))
    .catch(next);
});

router.put("/image/:imageId", (req, res, next) => {
  Image.findByPk(req.params.imageId)
    .then(image => image.update(req.body))
    .then(image => res.json(image));
});

module.exports = router;

// res.json(user);

// https://www.youtube.com/watch?v=9xJLcTxlEIs
// https://www.youtube.com/watch?v=9xJLcTxlEIs
// https://www.youtube.com/watch?v=9xJLcTxlEIs

//   Image.create(req.body)
//     .then(image => res.json(image))
//     .catch(next);
