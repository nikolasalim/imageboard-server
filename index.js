const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const imageRouter = require("./image/router");

app.use(imageRouter);

app.listen(port, () => console.log(`Listening on port ${port}!`));
