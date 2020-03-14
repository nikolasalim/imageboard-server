const { Router } = require("express");
const Image = require("./model");
const auth = require("../auth/middleware");

const router = new Router();

router.get("/image", (req, res, next) => {
  Image.findAll({ order: [["updatedAt", "DESC"]] })
    .then(images => res.json(images))
    .catch(next);
});

router.get("/image/:userId", (req, res, next) => {
  Image.findAll({
    where: { userId: req.params.userId },
    order: [["updatedAt", "DESC"]]
  })
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

// router.delete("/image/:imageId", (req, res, next) => {
//   Image.destroy({ where: { id: req.params.imageId } })
//     .then(number => {
//       !number
//         ? res.status(404).send("Image not found. Please, try again.")
//         : res.send({ number });
//     })
//     .catch(next);
// });

router.delete("/image/:imageId", async (request, response, next) => {
  try {
    const { imageId } = request.params;

    const image = await Image.findByPk(imageId);
    // response.send(image);
    response.send(image.dataValues);
    await image.destroy(request.body);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// res.json(user);

// https://www.youtube.com/watch?v=9xJLcTxlEIs

// add a route that gets the images from specific users
