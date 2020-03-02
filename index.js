const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const imageRouter = require("./image/router");
const cors = require("cors");
const bodyParser = require("body-parser");

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(imageRouter);

app.listen(port, () => console.log(`Listening on port ${port}!`));
