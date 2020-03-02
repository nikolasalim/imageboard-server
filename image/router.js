const { Router } = require("express");
const Image = require("./model");

const router = new Router();

router.get("/image", (req, res, next) => {
  Image.findAll()
    .then(images => res.json(images))
    .catch(next);
});

// router.post("/event", (req, res, next) => {
//   Event.create(req.body)
//     .then(result => res.json(result))
//     .catch(next);
// });

// router.get("/event/:id", (req, res, next) =>
//   Event.findByPk(req.params.id)
//     .then(event => res.send(event))
//     .catch(next)
// );

// router.put("/event/:id", (req, res, next) =>
//   Event.findByPk(req.params.id)
//     .then(event => event.update(req.body))
//     .then(event => res.send(event))
//     .catch(next)
// );

// router.delete("/event/:id", (req, res, next) =>
//   Event.destroy({ where: { id: req.params.id } })
//     .then(number => res.send({ number }))
//     .catch(next)
// );

module.exports = router;
