const express = require("express");
const app = express();
const Image = require("./model");

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}!`));
